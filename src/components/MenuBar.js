import React from "react";
import MenuBarCSS from "./MenuBar.module.css";
import CloseButton from "../images/icon-close.svg";
function MenuBar() {
  return (
    <div className={MenuBarCSS.menubarcontainer}>
      <div className={MenuBarCSS.menucontainer}>
        <div className={MenuBarCSS.closebuttoncontainer}>
          <div className={MenuBarCSS.closebutton}>
            <img src={CloseButton} alt="" />
          </div>
        </div>
        <div className={MenuBarCSS.menu}>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
