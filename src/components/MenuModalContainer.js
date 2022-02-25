import React from "react";
import { useAppContext } from "../context/AppContext";
import MenuBar from "./MenuBar";
import MenuModalContainerCSS from "./MenuModalContainer.module.css";

function MenuModalContainer() {
  const { visibility } = useAppContext();
  return (
    <div
      className={MenuModalContainerCSS.menumodalcontainer}
      style={{ visibility }}
    >
      <MenuBar />
    </div>
  );
}

export default MenuModalContainer;
