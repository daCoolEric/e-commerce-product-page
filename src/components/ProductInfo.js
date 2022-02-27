import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductInfoCSS from "./ProductInfo.module.css";
import CartIcon from "../images/icon-cart-white.svg";
import DiscardIcon from "../images/icon-minus.svg";
import AddIcon from "../images/icon-plus.svg";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import ImageProduct1 from "../images/image-product-1-thumbnail.jpg";
import ImageProduct2 from "../images/image-product-2-thumbnail.jpg";
import ImageProduct3 from "../images/image-product-3-thumbnail.jpg";
import ImageProduct4 from "../images/image-product-4-thumbnail.jpg";

function ProductInfo() {
  const {
    count,
    increaseCount,
    decreaseCount,
    addToCart,
    imageId,
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  } = useAppContext();

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
    <div className={ProductInfoCSS.productinfo}>
      <div className={ProductInfoCSS.productdisplay}>
        <div className={ProductInfoCSS.productdisplayinner}>
          <div className={ProductInfoCSS.productdisplayinnermain}>
            <img src={imageP} style={{ width: "446px" }} alt="" />
          </div>
          <div className={ProductInfoCSS.productdisplayinnerviews}>
            <div onClick={() => firstImage()}>
              <img src={ImageProduct1} style={{ width: "90px" }} alt="" />
            </div>
            <div onClick={() => secondImage()}>
              <img src={ImageProduct2} style={{ width: "90px" }} alt="" />
            </div>
            <div onClick={() => thirdImage()}>
              <img src={ImageProduct3} style={{ width: "90px" }} alt="" />
            </div>
            <div onClick={() => fourthImage()}>
              <img src={ImageProduct4} style={{ width: "90px" }} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={ProductInfoCSS.infosection}>
        <div className={ProductInfoCSS.infosectioninner}>
          <div className={ProductInfoCSS.shopname}>
            <h1>PEGGY'S SHOP</h1>
          </div>
          <div className={ProductInfoCSS.productname}>
            Autumn Limited Edition Sneakers
          </div>
          <div className={ProductInfoCSS.productdescription}>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they will withstand
              everything the weather can offer.
            </p>
          </div>
          <div className={ProductInfoCSS.productprice}>
            <div className={ProductInfoCSS.newprice}>
              <h2>$125.00</h2>
              <div className={ProductInfoCSS.discount}>
                <p>50%</p>
              </div>
            </div>
            <div className={ProductInfoCSS.oldpricecontainer}>
              <div className={ProductInfoCSS.oldprice}>
                <p>$250.00</p>

                <hr className={ProductInfoCSS.line} />
              </div>
            </div>
          </div>
          <div className={ProductInfoCSS.countercontainer}>
            <div className={ProductInfoCSS.productnumber}>
              <div className={ProductInfoCSS.discard} onClick={decreaseCount}>
                <img src={DiscardIcon} alt="" />
              </div>
              <div className={ProductInfoCSS.display}>
                <h1>{count}</h1>
              </div>
              <div className={ProductInfoCSS.add} onClick={increaseCount}>
                <img src={AddIcon} alt="" />
              </div>
            </div>
            <div className={ProductInfoCSS.productcart} onClick={addToCart}>
              <div className={ProductInfoCSS.productcartinner}>
                <img
                  src={CartIcon}
                  style={{ width: "25px", height: "25px" }}
                  alt=""
                />

                <p>Add to cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
