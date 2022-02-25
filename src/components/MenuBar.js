import React from "react";
import { useAppContext } from "../context/AppContext";
import MenuBarCSS from "./MenuBar.module.css";
import CloseButton from "../images/icon-close.svg";
function MenuBar() {
  const { closeMenu } = useAppContext();
  return (
    <div className={MenuBarCSS.menubarcontainer}>
      <div className={MenuBarCSS.menucontainerinner}>
        <div className={MenuBarCSS.closebuttoncontainer}>
          <div className={MenuBarCSS.closebutton}>
            <img src={CloseButton} alt="" onClick={closeMenu} />
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
