import React from "react";
import furniroLogo from "../assets/img/furniro-logo.png";
import accountIcon from "../assets/icons/account.svg";
import searchIcon from "../assets/icons/search.svg";
import heartIcon from "../assets/icons/heart.svg";
import cartIcon from "../assets/icons/cart.svg";

const Navbar = () => {
  return (
    <div className="container mx-auto p-5 flex justify-between border-2 border-red-400">
      <div>
        <img src={furniroLogo} alt="furniro logo" />
      </div>
      <div className="">
        <ul className="flex gap-14 font-bold text-lg">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>
            <img src={accountIcon} alt="account" />
          </li>
          <li>
            <img src={searchIcon} alt="search" />
          </li>
          <li>
            <img src={heartIcon} alt="heart" />
          </li>
          <li>
            <img src={cartIcon} alt="cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
