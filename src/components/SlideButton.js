import React from "react";
import SlideButtonNextCSS from "./SlideButton.module.css";
import NextIcon from "../images/icon-next.svg";
import PreviousIcon from "../images/icon-previous.svg";

function SlideButton() {
  return (
    <div className={SlideButtonNextCSS.slidebutton}>
      <div className={SlideButtonNextCSS.slidebuttonprevious}>
        <img src={PreviousIcon} style={{ width: "10px" }} alt="" />
      </div>
      <div className={SlideButtonNextCSS.slidebuttonnext}>
        <img src={NextIcon} style={{ width: "10px" }} alt="" />
      </div>
    </div>
  );
}

export default SlideButton;
