import React from "react";
import VehicleCard from "./VehicleCard";

const VehicleList = ({ vehicles }: any) => {
  return (
    <div className="padding-x padding-y grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {vehicles.map((gadi: any, id: number) => (
        <VehicleCard gadi={gadi} />
      ))}
    </div>
  );
};

export default VehicleList;
