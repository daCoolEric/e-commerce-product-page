import React from "react";
import MenuBar from "./MenuBar";
import MenuModalContainerCSS from "./MenuModalContainer.module.css";

function MenuModalContainer() {
  return (
    <div className={MenuModalContainerCSS.menumodalcontainer}>
      <MenuBar />
    </div>
  );
}

export default MenuModalContainer;
