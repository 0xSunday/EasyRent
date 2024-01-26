import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10  ">
      <nav className="max-w-[1440px] mx-auto flex  justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-self-center items-center sm:font-extrabold sm:text-3xl text-2xl font-bold ">
        <Image src="/logo4.png" width={70} height={70} alt="easy rent logo " />
         <span className="">EasyRent</span> 
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border-[1px]
         border-blue-500  hover:bg-blue-500 hover:text-white transition-all hover:border-white 
         hover:font-bold hover:scale-110"
        />
      </nav>
    </header>
  );
};

export default Navbar;
