"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    // console.log("hello sunil");
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or Rent a vehicle - Quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your vehicle rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="explore vehicle"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
           
            src="/hero.png"
            alt="car image"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay "></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
