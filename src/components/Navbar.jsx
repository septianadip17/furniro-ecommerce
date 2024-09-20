/* eslint-disable react/prop-types */
import React from "react";
import furniroLogo from "../assets/img/furniro-logo.png";
import accountIcon from "../assets/icons/account.svg";
import searchIcon from "../assets/icons/search.svg";
import heartIcon from "../assets/icons/heart.svg";
import cartIcon from "../assets/icons/cart.svg";

// Icon Component: Keep it reusable and clean
const Icon = ({ src, alt }) => (
  <li className="cursor-pointer">
    <img src={src} alt={alt} />
  </li>
);

/**
 * Renders the navbar component.
 *
 * This component consists of a logo, a navigation menu, and a set of icons.
 *
 * @return {React.ReactElement} The rendered navbar component.
 */
const Navbar = () => {
  return (
    <div className="container mx-auto p-5 flex flex-wrap justify-between items-center">
      {/* Logo */}
      <img
        src={furniroLogo}
        alt="furniro logo"
        className="w-24 md:w-32" // Responsive logo size
      />

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-10 lg:gap-14 font-bold text-lg">
        {/* Hidden on mobile, displayed on larger screens */}
        {["Home", "Shop", "About", "Contact"].map((item) => (
          <li key={item} className="cursor-pointer hover:text-gray-500">
            {item}
          </li>
        ))}
      </ul>

      {/* Icons */}
      <ul className="flex gap-4 md:gap-5">
        {/* Icons are stacked on smaller screens */}
        <Icon src={accountIcon} alt="account" />
        <Icon src={searchIcon} alt="search" />
        <Icon src={heartIcon} alt="heart" />
        <Icon src={cartIcon} alt="cart" />
      </ul>
    </div>
  );
};

export default Navbar;
