import React from "react";
import NavBarCSS from "./NavBar.module.css";
import MenuIcon from "../images/icon-menu.svg";
import CartIcon from "../images/icon-cart.svg";
import AvatarIcon from "../images/image-avatar.png";
function NavBar() {
  return (
    <div className={NavBarCSS.navbar}>
      <div className={NavBarCSS.leftMenu}>
        <img src={MenuIcon} alt="" />
        <div className={NavBarCSS.shopName}>Peggy's Shop</div>
      </div>
      <div className={NavBarCSS.rightMenu}>
        <img src={CartIcon} style={{ width: "25px" }} alt="" />
        <div className={NavBarCSS.cart}>
          <div className={NavBarCSS.producttracker}>
            <h1>0</h1>
          </div>
          <img src={AvatarIcon} style={{ width: "25px" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
