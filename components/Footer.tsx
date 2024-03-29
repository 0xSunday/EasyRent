import { footerLinks } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex justify-center items-center sm:font-extrabold sm:text-2xl text-[20px] font-bold  ">
            <Image
              src="/logo4.png"
              width={50}
              height={50}
              alt="easy rent logo "
            />
            <span className="">EasyRent</span>
          </div>
          <p>
            Easy Rent 2024 &copy; <br />
            All rights reserved
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  className=" text-gray-500 hover:text-black"
                  href={item.url}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 ">
        <p>@2024 Easy Rent. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>

          <Link href="/" className="text-gray-500">
            Term of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
