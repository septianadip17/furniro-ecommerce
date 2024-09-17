import React from "react";
import banner from "../assets/img/furniture-banner.png";

const Share = () => {
  return (
    <>
      <div
        className="h-[750px] bg-cover bg-center flex"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-center justify-center items-center mx-auto space-y-2">
          <h2 className="text-1xl font-bold text-gray-500">
            Share our setup with
          </h2>
          <h1 className="text-4xl font-bold">#FuniroFurniture</h1>
        </div>
      </div>
    </>
  );
};

export default Share;
