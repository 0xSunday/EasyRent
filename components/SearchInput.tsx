import React from "react";
import { FaLocationDot } from "react-icons/fa6";
const SearchInput = () => {
  return (
    <div className="flex  gap-6 flex-col padding-x padding-y">
      <h2 className="text-center text-3xl font-bold">Search for vehicle</h2>
      <div className="flex justify-center flex-wrap min-w-4">
        <div className="bg-gray-200 focus:bg-gray-500 rounded-full px-4 flex items-center">
          <div className="flex items-center text-gray-500">
            <FaLocationDot className="text-black" />
            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent w-full "
            />
          </div>

          <div className="flex items-center text-gray-500">
            <input type="date" className="p-2 outline-none bg-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
