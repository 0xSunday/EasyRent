"use client";
import React, { useEffect, useState } from "react";

const FilterOptions = ({ originalVehicles, setVehicles, setOrder }: any) => {
  const [vehicleType, setVehicleType] = useState<any>([]);
  const VehicleType = new Set();

  useEffect(() => {
    if (originalVehicles) {
      filterList();
    }
  }, [originalVehicles]);

  const filterList = () => {
    originalVehicles.forEach((element: any) => {
      VehicleType.add(element.vehicleType);
    });

    setVehicleType(Array.from(VehicleType));
  };
  // console.log(vehicleType);
  return (
    <div
      id="explore"
      className="padding-x padding-y flex gap-3 flex-col md:flex-row items-center justify-between"
    >
      <div>
        <h2 className=" text-3xl font-bold">Select vehicle</h2>
      </div>

      <div className="flex gap-5">
        <select
          onChange={(e) => setOrder(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Low to High</option>
          <option value={1}>High to Low</option>
        </select>

        <select
          onChange={(e) => setVehicles(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Type
          </option>

          {vehicleType &&
            vehicleType.map((vehicle: any, index: number) => (
              <option key={index}>{vehicle}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
