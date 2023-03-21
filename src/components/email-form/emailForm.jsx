import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import "./emailForm.scss"

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fsfz0gf",
        "template_8j2xdld",
        form.current,
        "YaKIVseNOJuk-R3gh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Popup
      trigger={<a><i className="fa-regular fa-envelope"></i><div className="contactanos">CONTÁCTANOS</div></a>}
      closeOnDocumentClick
      closeOnEscape
      modal
    >
      <form ref={form} onSubmit={sendEmail}>
        <label>Tu nombre</label>
        <input type="text" name="user_name" />
        <label>Tu email</label>
        <input type="email" name="user_email" />
        <label>Tu teléfono</label>
        <input type="number" name="user_phone" />
        <label>Mensaje para la Estética</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" />
      </form>
    </Popup>
  );
}

export default ContactUs;
