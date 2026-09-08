/**
 * Función serverless — últimas publicaciones públicas de @girardiclinica.
 *
 * Por qué el servidor y no el navegador: Instagram no envía cabeceras CORS y
 * responde con muro de login a las peticiones sin sesión, así que un `fetch`
 * desde el cliente siempre falla. Esta función hace el scraping del lado del
 * servidor cuando la página lo pide y devuelve JSON ya listo para el carrusel.
 *
 * Las miniaturas se devuelven como `data:` URI (base64) para evitar el bloqueo
 * por "referrer" del CDN de Instagram al incrustar las imágenes desde otro
 * dominio.
 *
 * La respuesta se cachea en el CDN de Netlify (`s-maxage`) unos minutos para no
 * gatillar el rate-limit de Instagram: las "últimas publicaciones" se refrescan
 * como mucho cada ~15 min, no en cada visita.
 *
 * Endpoint: /.netlify/functions/instagram
 * Si Instagram bloquea la IP del servidor, responde `{ ok: false, posts: [] }`
 * y el componente usa la lista de reserva de src/config/instagramPosts.js.
 */

const USERNAME = "girardiclinica";
const COUNT = 5;
const IG_APP_ID = "936619743392459"; // app-id público del web de Instagram
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

export default async () => {
  try {
    const posts = await fetchLatestPosts();
    // Éxito: cachear 15 min en el CDN, revalidar en segundo plano hasta 24 h.
    return json({ ok: true, count: posts.length, posts }, 200, 900);
  } catch (err) {
    // Fallo (bloqueo / rate-limit): cachear sólo 60 s para reintentar pronto.
    return json({ ok: false, error: String(err?.message || err), posts: [] }, 200, 60);
  }
};

// Instagram limita mucho estas rutas; se prueban varios hosts antes de rendirse.
const PROFILE_HOSTS = ["https://www.instagram.com", "https://i.instagram.com"];

async function fetchLatestPosts() {
  let data = null;
  let lastStatus = 0;

  for (const host of PROFILE_HOSTS) {
    const url = `${host}/api/v1/users/web_profile_info/?username=${USERNAME}`;
    const res = await fetch(url, {
      headers: {
        "x-ig-app-id": IG_APP_ID,
        "user-agent": UA,
        accept: "*/*",
        "accept-language": "es-CL,es;q=0.9",
        "x-requested-with": "XMLHttpRequest",
        referer: `https://www.instagram.com/${USERNAME}/`,
      },
    });
    lastStatus = res.status;
    if (res.ok) {
      data = await res.json().catch(() => null);
      if (data?.data?.user) break;
      data = null;
    }
  }

  if (!data) throw new Error(`Instagram no devolvió datos (último estado ${lastStatus})`);

  const user = data.data.user;
  const edges = user?.edge_owner_to_timeline_media?.edges ?? [];
  if (!edges.length) throw new Error("La respuesta de Instagram no trae publicaciones");

  const nodes = edges
    .map((e) => e.node)
    .filter(Boolean)
    .sort((a, b) => (b.taken_at_timestamp || 0) - (a.taken_at_timestamp || 0))
    .slice(0, COUNT);

  return Promise.all(nodes.map(toPost));
}

async function toPost(node) {
  const shortcode = node.shortcode || node.code;
  const caption = node.edge_media_to_caption?.edges?.[0]?.node?.text || "";
  const line = firstLine(caption, 140);
  const thumb = node.thumbnail_src || node.display_url;

  return {
    id: node.id || shortcode,
    permalink: `https://www.instagram.com/p/${shortcode}/`,
    image: await toDataUri(thumb),
    alt: line || "Publicación de Estética Girardi en Instagram",
    caption: line,
    isVideo: Boolean(node.is_video),
    timestamp: node.taken_at_timestamp || null,
  };
}

async function toDataUri(imageUrl) {
  const res = await fetch(imageUrl, { headers: { "user-agent": UA } });
  if (!res.ok) throw new Error(`La miniatura respondió ${res.status}`);
  const type = res.headers.get("content-type") || "image/jpeg";
  const b64 = Buffer.from(await res.arrayBuffer()).toString("base64");
  return `data:${type};base64,${b64}`;
}

function firstLine(text, max) {
  const line = String(text || "").split("\n")[0].trim();
  return line.length > max ? `${line.slice(0, max - 1)}…` : line;
}

function json(body, status, sMaxAge) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": `public, max-age=0, s-maxage=${sMaxAge}, stale-while-revalidate=86400`,
    },
  });
}
