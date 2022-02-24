import React from "react";
import CartModal from "./CartModal";
import SlideBarCSS from "./SlideBar.module.css";
import SlideButton from "./SlideButton";

function SlideBar() {
  return (
    <div className={SlideBarCSS.slidebar}>
      <CartModal />
      <SlideButton />
    </div>
  );
}

export default SlideBar;
