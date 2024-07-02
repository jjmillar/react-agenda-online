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
    <ContactUs className="contactUs"/>
    {/**
    <a href="https://calendar.app.google/rH2CzU8HjWu8MjZS7" target="_blank" className="menu__agenda">
      <i class="fa-regular fa-calendar-plus"></i> AGENDA
    </a>
     */}
  </div>
);

export default Menu;
