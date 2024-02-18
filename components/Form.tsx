import { createBooking, getAddress } from "@/Services";
import { clerkClient } from "@clerk/nextjs";
// import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";

// import { useUser } from "@clerk/nextjs";

import toast from "react-hot-toast";

import React, { useContext, useEffect, useState } from "react";

function Form({ vehicle }: any) {
   
  // let User;
  // const name = async () => {
  //   const userId = "my-user-id";

  //   User = await clerkClient.users.getUser(userId);
  //   console.log(User);
  // };

  const [storeLocation, setStoreLocation] = useState<any>([]);
  // const {showToastMsg,setShowToastMsg}=useContext(BookCreatedFlagContext)

  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "",
    vehicleId: "",
  });

  const today: any = new Date();
  useEffect(() => {
    getStoreLocation_();
  }, []);

  useEffect(() => {
    if (vehicle) {
      setFormValue({
        ...formValue,
        vehicleId: vehicle.id,
      });
    }
  }, [vehicle]);
  const getStoreLocation_ = async () => {
    const resp: any = await getAddress();
    setStoreLocation(resp?.storesLocations);
  };

  const handleChange = (event: any) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(formValue);
    const resp = await createBooking(formValue);
    console.log(resp);
    if (resp) {
      toast.success("Vehicle Booked!");
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select 
        select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location?
          </option>
          {storeLocation &&
            storeLocation.map((loc: any, index: number) => (
              <option key={index}>{loc?.address}</option>
            ))}
        </select>
      </div>
      <div className="flex flec-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            min={today}
            onChange={handleChange}
            placeholder="Type here"
            name="pickUpDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            onChange={handleChange}
            placeholder="Type here"
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            onChange={handleChange}
            name="pickUpTime"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
          onChange={handleChange}
          name="contactNumber"
          className="input input-bordered w-full max-w-lg"
        />
      </div>

      <div className="modal-action">
        <form method="dialog">
          <button className="btn">Close</button>
          <button
            className="btn bg-blue-500 ml-4 text-whitehover:bg-blue-800"
            onClick={handleSubmit}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
