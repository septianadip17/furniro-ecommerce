/* eslint-disable react/prop-types */
import React from "react";
import furniroLogo from "../assets/img/furniro-logo.png";
import accountIcon from "../assets/icons/account.svg";
import searchIcon from "../assets/icons/search.svg";
import heartIcon from "../assets/icons/heart.svg";
import cartIcon from "../assets/icons/cart.svg";

const Icon = ({ src, alt }) => (
  <li className="cursor-pointer">
    <img src={src} alt={alt} />
  </li>
);

const Navbar = () => {
  return (
    <div className="container mx-auto p-5 flex justify-between items-center">
      {/* Logo */}
      <img src={furniroLogo} alt="furniro logo" />

      {/* Navigation Menu */}
      <ul className="flex gap-14 font-bold text-lg">
        {["Home", "Shop", "About", "Contact"].map((item) => (
          <li key={item} className="cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {/* Icons */}
      <ul className="flex gap-5">
        <Icon src={accountIcon} alt="account" />
        <Icon src={searchIcon} alt="search" />
        <Icon src={heartIcon} alt="heart" />
        <Icon src={cartIcon} alt="cart" />
      </ul>
    </div>
  );
};

export default Navbar;
