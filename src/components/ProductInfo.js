import React from "react";
import ProductInfoCSS from "./ProductInfo.module.css";
import CartIcon from "../images/icon-cart-white.svg";
import DiscardIcon from "../images/icon-minus.svg";
import AddIcon from "../images/icon-plus.svg";
function ProductInfo() {
  return (
    <div className={ProductInfoCSS.productinfo}>
      <div className={ProductInfoCSS.shopname}>
        <h1>PEGGY'S SHOP</h1>
      </div>
      <div className={ProductInfoCSS.productname}>
        Autumn Limited Edition Sneakers
      </div>
      <div className={ProductInfoCSS.productdescription}>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
      </div>
      <div className={ProductInfoCSS.productprice}>
        <div className={ProductInfoCSS.newprice}>
          <h2>$125.00</h2>
          <div className={ProductInfoCSS.discount}>
            <p>50%</p>
          </div>
        </div>
        <div className={ProductInfoCSS.oldprice}>
          <p>$250.00</p>

          <hr className={ProductInfoCSS.line} />
        </div>
      </div>
      <div className={ProductInfoCSS.productnumber}>
        <div className={ProductInfoCSS.discard}>
          <img src={DiscardIcon} alt="" />
        </div>
        <div className={ProductInfoCSS.display}>
          <h1>0</h1>
        </div>
        <div className={ProductInfoCSS.add}>
          <img src={AddIcon} alt="" />
        </div>
      </div>
      <div className={ProductInfoCSS.productcart}>
        <div className={ProductInfoCSS.productcartinner}>
          <img src={CartIcon} alt="" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
