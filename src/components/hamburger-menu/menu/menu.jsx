import React from "react";
//import "./menu.scss"

const Menu = ({ close }) => (
  <div className="menu">
    <ul>
      <li onTouchStart={close}>Home</li>
      <li onTouchStart={close}>Getting Started</li>
      <li onTouchStart={close}>Component API</li>
      <li onTouchStart={close}>Use Case - Tooltip</li>
      <li onTouchStart={close}>Use Case - Modal</li>
      <li onTouchStart={close}>Use Case - Menu</li>
      <li onTouchStart={close}>Contributing</li>
    </ul>
  </div>
);

export default Menu;
