"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../motion";
import { Variants } from "framer-motion";

const Hero = () => {
  const handleScroll = () => {
    // console.log("hello sunil");
  };
  return (
    <div
      className="hero"
      // initial="hidden"
      // whileInView="show"
      // variants={staggerContainer}
      // viewport={{ once: true, amount: 0.25 }}
    >
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or Rent a vehicle - Quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your vehicle rental experience with our effortless booking
          process.
        </p>
        <a href={`#explore`}>
          <CustomButton
            title="Explore Vehicle"
            containerStyles="bg-primary-blue text-white rounded-full mt-10 border-[1px]
          border-white hover:bg-blue-900  transition-all hover:border-blue-500
          hover:font-bold hover:scale-110"
            handleClick={handleScroll}
          />
        </a>
      </div>

      <div
        className="hero__image-container"
        // initial="hidden"
        // whileInView="show"
        // variants={fadeIn("left", "tween", 0.1, 1)}
        // viewport={{ once: true, amount: 0.25 }}
      >
        <div className="hero__image">
          <div>
            <Image
              src="/hero.png"
              alt="car image"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="hero__image-overlay "></div>
      </div>
    </div>
  );
};

export default Hero;
