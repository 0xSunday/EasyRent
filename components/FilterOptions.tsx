import React from "react";

const FilterOptions = () => {
  return (
    <div className="padding-x padding-y flex gap-3 flex-col md:flex-row items-center justify-between">
      <div>
        <h2 className=" text-3xl font-bold">Select vehicle</h2>
      </div>

      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>high to low</option>
          <option>low to high</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Type
          </option>
          <option>car</option>
          <option>bike</option>
          <option>bus</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
