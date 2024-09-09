import React from "react";
import dining from "../assets/img/dining.png";
import living from "../assets/img/living.png";
import bedroom from "../assets/img/bedroom.png";

const Room = () => {
  return (
    <div className="text-center p-4 m-7">
      {/* header title */}
      <div className="p-4">
        <h1 className="text-3xl font-bold">Browse The Range</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* room images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center">
        <div className="flex flex-col items-center">
          <img src={dining} alt="Dining" />
          <h1 className="mt-2 text-lg font-semibold">Dining</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src={living} alt="Living" />
          <h1 className="mt-2 text-lg font-semibold">Living</h1>
        </div>
        <div className="flex flex-col items-center">
          <img src={bedroom} alt="Bedroom" />
          <h1 className="mt-2 text-lg font-semibold">Bedroom</h1>
        </div>
      </div>
    </div>
  );
};

export default Room;
