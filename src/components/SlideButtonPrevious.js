import React from "react";
import SlideButtonPreviousCSS from "./SlideButtonPrevious.module.css";
import PreviousIcon from "../images/icon-previous.svg";

function SlideButtonPrevious() {
  return (
    <div className={SlideButtonPreviousCSS.slidebuttonprevious}>
      <img src={PreviousIcon} style={{ width: "10px" }} alt="" />
    </div>
  );
}

export default SlideButtonPrevious;
