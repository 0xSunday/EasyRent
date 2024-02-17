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
          <option>High to Low</option>
          <option>Low to High</option>
        </select>

        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Type
          </option>
          <option>Car</option>
          <option>Bike</option>
          <option>Van</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
