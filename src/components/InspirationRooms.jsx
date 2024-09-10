import React from "react";
import room1 from "../assets/img/room1.png";
import room2 from "../assets/img/room2.png";
import room3 from "../assets/img/room3.png";

const InspirationRooms = () => {
  return (
    <div className="flex bg-[#FCF8F3] p-8">
      {/* title */}
      <div className="w-2/5 p-6 border-2 border-yellow-950 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">
          50+ Beautiful Rooms Inspiration
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          ut. Dolorem ipsum placeat ducimus officia?
        </p>
        <button className="bg-yellow-950 text-white py-2 px-4 mt-2 hover:bg-yellow-800">
          Explore More
        </button>
      </div>

      {/* inspiration rooms */}
      <div className="w-3/5 p-6 border-2 border-yellow-950 flex overflow-x-auto whitespace-nowrap">
        <img src={room1} alt="Room 1" className="w-2/3 mr-4 object-cover" />
        <img src={room2} alt="Room 2" className="w-2/3 mr-4 object-cover" />
        <img src={room3} alt="Room 3" className="w-2/3 object-cover" />
      </div>
    </div>
  );
};

export default InspirationRooms;
