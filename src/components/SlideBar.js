import React from "react";
import { useAppContext } from "../context/AppContext";
import CartModal from "./CartModal";
import SlideBarCSS from "./SlideBar.module.css";
import SlideButton from "./SlideButton";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

function SlideBar() {
  const { imageId } = useAppContext();
  let imageP;
  switch (imageId) {
    case 0:
      imageP = image1;
      break;
    case 1:
      imageP = image2;
      break;
    case 2:
      imageP = image3;
      break;
    case 3:
      imageP = image4;
      break;

    default:
      imageP = image1;
      break;
  }

  return (
    <div
      className={SlideBarCSS.slidebar}
      style={{ backgroundImage: `url(${imageP})` }}
    >
      <CartModal />
      <SlideButton />
    </div>
  );
}

export default SlideBar;
