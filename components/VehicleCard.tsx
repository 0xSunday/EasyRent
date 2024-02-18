import Image from "next/image";
import React from "react";
import { FaGasPump, FaGear } from "react-icons/fa6";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
import Tilt from "react-parallax-tilt";
const VehicleCard = ({ gadi }: any) => {
  return (
    <Tilt>
      <div
        className="group  p-4  sm:p-5 rounded-3xl m-1 sm:m-5
bg-white 
    border-[1px] cursor-pointer duration-50
    border-blue-200 hover:border-blue-500"
      >
        <h2 className="text-2xl font-bold mb-2">{gadi.name}</h2>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[28px] font-bold mb-2">
              <span className="text-[18px] font-light">₹ </span>
              {gadi.price}
              <span className="text-[18px] font-light"> /day</span>
            </h2>
          </div>
          <div>
            <span className="text-[18px] font-light">{gadi.vehicleBrand}</span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Image
            className=" w-[250px] h-[150px] mb-3 object-contain"
            src={gadi.image?.url}
            alt={gadi.name}
            width={220}
            height={200}
          />
        </div>
        <div>
          <div className="flex justify-around group-hover:hidden">
            <div className="text-center text-gray-500">
              <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
              <h2 className="line-clamp-5 text-[14px] font-light">
                {gadi?.engType}
              </h2>
            </div>
            <div className="text-center text-gray-500">
              {gadi.vehicleType == "Bike" ? (
                <>
                  <FaGear className="w-full text-[22px] mb-2" />
                  <h2 className="line-clamp-5 text-[14px] font-light">
                    {gadi.seat}
                  </h2>
                </>
              ) : (
                <>
                  <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
                  <h2 className="line-clamp-5 text-[14px] font-light">
                    {gadi.seat} Seat
                  </h2>
                </>
              )}
            </div>
            <div className=" text-center text-gray-500 ">
              <FaGasPump className="w-full text-[22px] mb-2" />
              <h2 className="line-clamp-5 text-[14px] font-light">
                {gadi.avarage} KM
              </h2>
            </div>
          </div>
        </div>

        <button
          className="hidden group-hover:flex bg-gradient-to-r
     from-blue-400 to-blue-700
    p-2 rounded-lg text-white w-full px-5 justify-between"
        >
          Rent Now
          <span className="bg-blue-400 p-1 rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </Tilt>
  );
};

export default VehicleCard;

// avarage: 20;
// createdAt: "2024-02-18T02:34:38.617821+00:00";
// engType: "Petrol";
// id: "clsqw9u471m220apd0ghs04xf";
// image: {
//   url: "https://media.graphassets.com/9hKgNCpISTqqSyaHMO5Q";
// }
// name: "Dzire";
// price: 2000;
// publishedAt: "2024-02-18T03:14:33.076741+00:00";
// seat: 5;
// stage: "PUBLISHED";
// updatedAt: "2024-02-18T02:37:19.862818+00:00";
// vehicleBrand: "Suzuki";
// vehicleType: "Car";
