import React, { useState } from "react";
import VehicleCard from "./VehicleCard";
import BookingModel from "./BookingModel";

const VehicleList = ({ vehicles }: any) => {
  const [selectedVehicle, setSelectedVehicle] = useState<any>([]);
  return (
    <div  className="padding-x padding-y grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {vehicles.map((gadi: any, id: number) => (
        <div
          onClick={() => {
            (window as any).my_modal_4.showModal();
            setSelectedVehicle(gadi);
          }}
        >
          <VehicleCard key={id} gadi={gadi} className="btn" />
        </div>
      ))}

      <dialog id="my_modal_4" className="modal">
        <BookingModel selectedVehicle={selectedVehicle} />
      </dialog>
    </div>
  );
};

export default VehicleList;
