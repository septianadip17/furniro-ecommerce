import React from "react";
import room1 from "../assets/img/room1.png";
import room2 from "../assets/img/room2.png";
import room3 from "../assets/img/room3.png";

const InspirationRooms = () => {
  return (
    <div className="flex bg-[#FCF8F3] p-8 mb-20">
      {/* title */}
      <div className="w-2/5 p-6 flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">
          50+ Beautiful Rooms Inspiration
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          ut. Dolorem ipsum placeat ducimus officia?
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-4 mt-2 hover:bg-yellow-800 w-44">
          Explore More
        </button>
      </div>

      {/* inspiration rooms */}
      <div className="w-3/5 p-6 flex ">
        <img src={room1} alt="Room 1" className="w-2/3 mr-4 object-cover" />
        <img src={room2} alt="Room 2" className="w-2/3 mr-4 object-cover" />
        <img src={room3} alt="Room 3" className="w-2/3 object-cover" />
      </div>
    </div>
  );
};

export default InspirationRooms;
