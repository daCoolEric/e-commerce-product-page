import React from "react";
import SlideButtonNextCSS from "./SlideButtonNext.module.css";
import NextIcon from "../images/icon-next.svg";
// import PreviousIcon from "../images/icon-previous.svg";

function SlideButtonNext() {
  return (
    <div className={SlideButtonNextCSS.slidebuttonnext}>
      <img src={NextIcon} style={{ width: "10px" }} alt="" />
    </div>
  );
}

export default SlideButtonNext;
