import React from "react";
import { useAppContext } from "../context/AppContext";
import CartModalCSS from "./CartModal.module.css";
import ProductImage from "../images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../images/icon-delete.svg";

function CartModal() {
  const { cartView, emptyCartView, itemQuantity, deleteItems } =
    useAppContext();
  return (
    <>
      <div className={CartModalCSS.cartmodal} style={{ visibility: cartView }}>
        <div className={CartModalCSS.carttitle}>Cart</div>
        <div className={CartModalCSS.item}>
          <div className={CartModalCSS.itemcontainer}>
            <img
              src={ProductImage}
              className={CartModalCSS.productimage}
              style={{ width: "50px" }}
              alt=""
            />
            <div className={CartModalCSS.detailcontainer}>
              <p>Autumn Limited Edition...</p>
              <p>
                $125.00 x {itemQuantity} <b>{`$${125 * itemQuantity}.00`}</b>
              </p>
            </div>
            <div className={CartModalCSS.deletecontainer}>
              <img
                src={DeleteIcon}
                onClick={() => deleteItems()}
                style={{ width: "16px" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={CartModalCSS.checkout}>
          <button>Checkout</button>
        </div>
      </div>

      <div
        className={CartModalCSS.emptycartmodal}
        style={{ visibility: emptyCartView }}
      >
        <div className={CartModalCSS.carttitle}>Cart</div>
        <div className={CartModalCSS.emptyitem}>
          <p>Your cart is empty.</p>
        </div>
      </div>
    </>
  );
}

export default CartModal;
