import PopupMenu from "../hamburger-menu/pop-up menu/popup";
import ContactUs from "../email-form/emailForm";

import classes from "./Navbar.module.scss";
import logo from "../../assets/common/logo.svg"

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <img
        className={classes.logo}
        src={logo}
        alt="logo estetica girardi"
      />
      <p className={classes.name}>
        Estética Girardi
      </p>
      <div className={classes.ico}>
        <a href="https://calendar.app.google/rH2CzU8HjWu8MjZS7" target="_blank">
          <i class="fa-regular fa-calendar-plus"></i>
        </a>
        <a href="https://www.instagram.com/girardiestetica/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/56962105309" target="_blank">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <ContactUs />
      </div>
      <div className={classes.dropDown}>
        <PopupMenu />
      </div>
    </nav>
  );
};

export default Navbar;
