import React from "react";
import Popup from "reactjs-popup";
import Hamburger from "../hamburger-ico/hamburger.jsx";
import Menu from "../menu/menu.jsx";

import "reactjs-popup/dist/index.css";
import "./popup.scss"

const PopupMenu = () => (
  <Popup 
  trigger={open => <Hamburger open={open}/>}
  position="bottom left"
  closeOnDocumentClick
  tooltip
  >
    <Menu/>
  </Popup>
);

export default PopupMenu;
