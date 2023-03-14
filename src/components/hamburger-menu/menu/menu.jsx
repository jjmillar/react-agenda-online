import React from "react";
import ContactUs from "../../email-form/emailForm";
import "./menu.scss";

const Menu = ({ close }) => (
  <div className="menu">
    <a href="https://www.instagram.com/estetica_girardi/" target="_blank">
      <i className="fa-brands fa-instagram popico"></i> INSTAGRAM
    </a>
    <a href="https://wa.me/56962105309" target="_blank">
      <i className="fa-brands fa-whatsapp popico"></i> WHATSAPP
    </a>
    <a className="contactUs">
      <ContactUs /> CONTÁCTANOS
    </a>
  </div>
);

export default Menu;
