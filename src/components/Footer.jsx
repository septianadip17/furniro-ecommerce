import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <hr className="bg-gray-900" />
      <div className="flex flex-wrap justify-between p-10">
        {/* Funiro address */}
        <div className="space-y-6 max-w-xs">
          <h1 className="text-xl font-bold">Funiro.</h1>
          <p className="text-gray-600">
            400 University Drive Suite 200 Coral Gavles, <br /> FL 333134 USA
          </p>
        </div>

        {/* Links */}
        <div className="space-y-6 max-w-xs">
          <h1 className="text-xl font-bold">Links</h1>
          <ul className="space-y-2">
            <li className="hover:text-gray-600">Home</li>
            <li className="hover:text-gray-600">Shop</li>
            <li className="hover:text-gray-600">About</li>
            <li className="hover:text-gray-600">Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div className="space-y-6 max-w-xs">
          <h1 className="text-xl font-bold">Help</h1>
          <ul className="space-y-2">
            <li className="hover:text-gray-600">Payment Options</li>
            <li className="hover:text-gray-600">Returns</li>
            <li className="hover:text-gray-600">Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6 max-w-xs">
          <h1 className="text-xl font-bold">Newsletter</h1>
          <div className="flex space-x-2">
            <input
              type="text"
              className="border-b-[0.5px] border-black py-1 px-2 flex-grow"
              placeholder="Enter Your Email Address"
            />
            <button className="font-bold text-xs border-b-[0.5px] border-black hover:bg-gray-200 py-1 px-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-10 py-5 space-y-5">
        <hr />
        <p className="text-start text-gray-600">
          2023 Funiro. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
