import React from "react";
import VehicleCard from "./VehicleCard";
import Form from "@/components/Form";

const BookingModel = ({ selectedVehicle }: any) => {
  return (
    <div className="modal-box w-full">
      <h3 className="font-bold text-lg"> Rent A Car Now!</h3>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <VehicleCard gadi={selectedVehicle} />
        </div>
        <div>
          <Form vehicle={selectedVehicle} />
        </div>
      </div>
    </div>
  );
};

export default BookingModel;
