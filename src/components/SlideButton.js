import React from "react";
import { useAppContext } from "../context/AppContext";
import SlideButtonNextCSS from "./SlideButton.module.css";
import NextIcon from "../images/icon-next.svg";
import PreviousIcon from "../images/icon-previous.svg";

function SlideButton() {
  const { nextImage, prevImage } = useAppContext();
  return (
    <div className={SlideButtonNextCSS.slidebutton}>
      <div
        className={SlideButtonNextCSS.slidebuttonprevious}
        onClick={() => prevImage()}
      >
        <img src={PreviousIcon} style={{ width: "10px" }} alt="" />
      </div>
      <div
        className={SlideButtonNextCSS.slidebuttonnext}
        onClick={() => {
          nextImage();
        }}
      >
        <img src={NextIcon} style={{ width: "10px" }} alt="" />
      </div>
    </div>
  );
}

export default SlideButton;
