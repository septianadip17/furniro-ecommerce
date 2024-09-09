import React from "react";
import syltherine from "../assets/img/products/syltherine.png";
import leviosa from "../assets/img/products/leviosa.png";
import lolito from "../assets/img/products/lolito.png";
import respira from "../assets/img/products/respira.png";
import grifo from "../assets/img/products/grifo.png";
import muggo from "../assets/img/products/muggo.png";
import pingky from "../assets/img/products/pingky.png";
import potty from "../assets/img/products/potty.png";
import shareIcon from "../assets/icons/share.svg";
import compareIcon from "../assets/icons/compare.svg";
import likeIcon from "../assets/icons/like.svg";

const Products = () => {
  const allProducts = [
    {
      name: "Syltherine",
      desc: "Stylish cafe chair",
      discPrice: "2.500.000",
      normalPrice: "3.500.000",
      tagType: "discount",
      tagName: "-30%",
      img: syltherine,
    },
    {
      name: "Leviosa",
      desc: "Stylish cafe chair",
      discPrice: null,
      normalPrice: "2.500.000",
      tagType: null,
      tagName: null,
      img: leviosa,
    },
    {
      name: "Lolito",
      desc: "Luxury big sofa",
      discPrice: "7.000.000",
      normalPrice: "14.000.000",
      tagType: "discount",
      tagName: "-50%",
      img: lolito,
    },
    {
      name: "Respira",
      desc: "Outdoor bar table and stool",
      discPrice: null,
      normalPrice: "500.000",
      tagType: "new",
      tagName: "New",
      img: respira,
    },
    {
      name: "Grifo",
      desc: "Night lamp",
      discPrice: null,
      normalPrice: "1.500.000",
      tagType: null,
      tagName: null,
      img: grifo,
    },
    {
      name: "Muggo",
      desc: "Small mug",
      discPrice: null,
      normalPrice: "150.000",
      tagType: "new",
      tagName: "New",
      img: muggo,
    },
    {
      name: "Pingky",
      desc: "Cute bed set",
      discPrice: "7.000.000",
      normalPrice: "14.000.000",
      tagType: "discount",
      tagName: "-50%",
      img: pingky,
    },
    {
      name: "Potty",
      desc: "Minimalist flower pot",
      discPrice: null,
      normalPrice: "500.000",
      tagType: "new",
      tagName: "New",
      img: potty,
    },
  ];

  return (
    <div className="container mx-auto p-3 m-6">
      {/* Title */}
      <div className="text-center m-7">
        <h1 className="mt-2 text-3xl font-bold">Our Products</h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-4">
        <div className="relative bg-gray-200 shadow rounded-lg overflow-hidden group">
          {/* image */}
          <img src={syltherine} alt={syltherine} className="w-full" />
          <div className="absolute top-2 right-2 bg-red-500  text-white text-xs font-bold p-2 rounded-full">
            -30%
          </div>

          {/* hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white text-[#B88E2F] py-2 px-4 rounded-sm mb-4">
              Add to Cart
            </button>
            {/* icon */}
            <div className="flex gap-3 border-2 border-red-600 justify-center items-center">
              <div className="flex items-center gap-1">
                <img src={shareIcon} alt="Share" className="w-6 h-6" />
                <p className="text-white">Share</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={compareIcon} alt="Compare" className="w-6 h-6" />
                <p className="text-white">Compare</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={likeIcon} alt="Like" className="w-6 h-6" />
                <p className="text-white">Like</p>
              </div>
            </div>
          </div>

          {/* desc */}
          {/* desc */}
          <div className="p-4">
            <h3 className="text-lg font-semibold">Syltherine</h3>
            <p className="text-gray-500 text-sm">Stylish cafe chair</p>
            <div className="mt-2">
              Rp. 2.500.000
              <div>
                <span className="font-bold"></span>
                <span className="text-gray-500 line-through ml-2"></span>
              </div>
              <span className="text-black font-bold"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
