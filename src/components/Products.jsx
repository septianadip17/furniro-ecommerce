import React from "react";
import syltherine from "../assets/img/products/syltherine.png";
import leviosa from "../assets/img/products/leviosa.png";
import lolito from "../assets/img/products/lolito.png";
import respira from "../assets/img/products/respira.png"
import grifo from "../assets/img/products/grifo.png"
import muggo from "../assets/img/products/muggo.png"
import pigky from "../assets/img/products/pingky.png"
import potty from "../assets/img/products/potty.png"

const Products = () => {

  const allProducts = [
    {
      name : "Syltherine",
      desc : "Stylish cafe chair",
      discPrice : "2.500.000",
      normalPrice : "3.500.000",
      tagType: "discount",
      tagName: "-30%",
      img: "syltherine"
    },
    {
      
    }

  ]

  return (
    <div>
      {/* title */}
      <div className="text-center">
        <h1 className="mt-2 text-3xl font-bold">Our Products</h1>
      </div>

      {/* products grid  */}
      <div className="grid grid-cols-4">

      </div>
    </div>
  );
};

export default Products;
