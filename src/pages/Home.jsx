import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import TrustBar from "../components/trust-bar/TrustBar";
import Treatments from "../components/treatments/Treatments";
import HowItWorks from "../components/how-it-works/HowItWorks";
import CtaBand from "../components/cta-band/CtaBand";
import Cities from "../components/cities/Cities";
import InstagramCarousel from "../components/instagram/InstagramCarousel";
import Faq from "../components/faq/Faq";
import FinalCta from "../components/final-cta/FinalCta";
import Footer from "../components/footer/Footer";
import MobileCtaBar from "../components/mobile-cta-bar/MobileCtaBar";
import WhatsAppFab from "../components/whatsapp-fab/WhatsAppFab";

import useScrollReveal from "../hooks/useScrollReveal";
import useHeroPassed from "../hooks/useHeroPassed";

import "./home.scss";

/**
 * Landing page de una sola columna con scroll normal (se eliminó el
 * scroll-snap a pantalla completa). Compone todas las secciones de arriba
 * abajo y controla los dos elementos flotantes.
 */
const Home = () => {
  useScrollReveal();
  const [sentinelRef, heroPassed] = useHeroPassed();

  return (
    <div className="home">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        {/* Centinela: cuando sale del viewport se revelan los CTA flotantes */}
        <div ref={sentinelRef} className="home__sentinel" aria-hidden="true" />

        <TrustBar />
        <Treatments />
        <HowItWorks />
        <CtaBand />
        <Cities />
        <InstagramCarousel />
        <Faq />
        <FinalCta />
      </main>

      <Footer />

      <MobileCtaBar visible={heroPassed} />
      <WhatsAppFab visible={heroPassed} />
    </div>
  );
};

export default Home;
