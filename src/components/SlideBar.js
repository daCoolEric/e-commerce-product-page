import React from "react";
import CartModal from "./CartModal";
import SlideBarCSS from "./SlideBar.module.css";
import SlideButtonNext from "./SlideButtonNext";
import SlideButtonPrevious from "./SlideButtonPrevious";

function SlideBar() {
  return (
    <div className={SlideBarCSS.slidebar}>
      <CartModal />
      <SlideButtonNext />
      <SlideButtonPrevious />
    </div>
  );
}

export default SlideBar;
