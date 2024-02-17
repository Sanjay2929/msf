"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "../common/Helper";
import { Menu, Search } from "../common/Icons";
import CustomButton from "../common/CustomButton";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  return (
    <div className="bg-lightGray fixed w-full z-50">
      <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto flex justify-between items-center py-3">
        <Link href="/" className="relative z-[51]">
          <Image
            className=""
            width={56}
            height={56}
            src="/assets/common/Logo.png"
            alt="msf-logo"
          />
        </Link>
        <div
          className={`flex lg:flex-row flex-col lg:static fixed lg:w-auto w-full lg:min-h-0 min-h-screen bg-lightGray items-center top-0 justify-center gap-4 duration-300 z-50 ${
            showNavLinks ? "left-0" : "-left-full"
          }`}
        >
          {navLinks.map((value, index) => {
            return (
              <Link
                key={index}
                href={value.url}
                className="p-2.5 font-georgia font-normal text-base text-darkBlack relative after:absolute after:w-0 after:h-[2px] after:bg-orange after:bottom-0 after:left-1/2 hover:after:w-full hover:after:left-0 after:duration-300 leading-normal"
              >
                {value.title}
              </Link>
            );
          })}
          <CustomButton title="Free Consultation" style="block lg:hidden" />
        </div>
        <div className="flex items-center lg:gap-2 gap-4">
          <div className="lg:w-[46px] lg:h-12 w-10 h-10 flex justify-center items-center border border-bluePrimary">
            <Search />
          </div>
          <CustomButton title="Free Consultation" style="lg:block hidden" />
          <div
            className="relative z-[51] cursor-pointer group lg:hidden "
            onClick={() => setShowNavLinks(!showNavLinks)}
          >
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
