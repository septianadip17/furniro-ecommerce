import React from "react";
import banner from "../assets/img/banner-header.png";

const Header = () => {
  return (
    <div
      className="h-[800px] bg-cover bg-center border-2 border-orange-400 flex"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-1/2"></div>
      <div className="absolute w-1/2 bg-[#FFF3E3] flex flex-col p-8 text-start">
        <h4 className="text-xl font-semibold">New Arrival</h4>
        <h1 className="text-4xl font-bold mt-2 text-yellow-700">
          Discover Our <br /> New Collection
        </h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          repellendus debitis eaque corporis consequatur omnis?
        </p>
        <button className="mt-6 p-4 bg-yellow-700 text-white">BUY NOW</button>
      </div>
    </div>
  );
};

export default Header;
