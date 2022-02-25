import React from "react";
import { useAppContext } from "../context/AppContext";
import NavBarCSS from "./NavBar.module.css";
import MenuIcon from "../images/icon-menu.svg";
import CartIcon from "../images/icon-cart.svg";
import AvatarIcon from "../images/image-avatar.png";
function NavBar() {
  const { itemQuantity, openMenu, showCart } = useAppContext();
  return (
    <div className={NavBarCSS.navbarcontainer}>
      <div className={NavBarCSS.navbar}>
        <div className={NavBarCSS.leftMenu}>
          <img
            src={MenuIcon}
            style={{
              padding: "10px",
            }}
            onClick={() => openMenu()}
            alt=""
          />
          <div className={NavBarCSS.shopName}>PEGGY'S SHOP</div>
        </div>
        <div className={NavBarCSS.middleMenu}>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={NavBarCSS.rightMenu}>
          <div className={NavBarCSS.cart} onClick={() => showCart()}>
            <img src={CartIcon} style={{ width: "25px" }} alt="" />
            <div className={NavBarCSS.producttracker}>
              <h1>{itemQuantity}</h1>
            </div>
          </div>

          <div className={NavBarCSS.avatar}>
            <img src={AvatarIcon} style={{ width: "40px" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
