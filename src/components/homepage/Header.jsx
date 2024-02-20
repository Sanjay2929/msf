"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CustomLinkButton from "../common/CustumLinkButton";
import { navLinks } from "../common/Helper";
import { CrossMenu, Menu, Search } from "../common/Icons";

const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const navScrollHidden = () => {
    document.body.classList.toggle("custum_hidden");
  };
  const scrollRemove = () => {
    document.body.classList.remove("custum_hidden");
  };
  return (
    <div id="home" className="bg-lightGray fixed w-full z-50">
      <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto flex justify-between items-center py-3">
        <Link href="/" className="relative z-[51]">
          <Image
            className="md:w-[56px] w-10"
            width={56}
            height={56}
            src="/assets/images/common/Logo.png"
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
                onClick={() => {
                  setShowNavLinks(false);
                  scrollRemove();
                }}
                key={index}
                href={value.url}
                className="lg:p-2.5 p-1 font-georgia font-normal text-base text-darkBlack relative after:absolute after:w-0 after:h-[2px] after:bg-orange after:bottom-0 after:left-1/2 hover:after:w-full hover:after:left-0 after:duration-300 leading-normal"
              >
                {value.title}
              </Link>
            );
          })}
          <div
            onClick={() => {
              setShowNavLinks(false);
              scrollRemove();
            }}
          >
            <CustomLinkButton
              link="#free_consultation"
              title="Free Consultation"
              style="block lg:hidden"
            />
          </div>
        </div>
        <div className="flex items-center lg:gap-2 gap-4">
          <div className="lg:w-[46px] lg:h-12 sm:w-10 sm:h-10 group hover:border-orange duration-300 w-8 h-8 flex justify-center items-center border border-bluePrimary ps-[2px] cursor-pointer">
            <Search />
          </div>
          <CustomLinkButton
            link="#free_consultation"
            title="Free Consultation"
            style="lg:block hidden"
          />
          <div
            className="relative z-[51] cursor-pointer group  lg:hidden md:w-[35px] w-7"
            onClick={() => {
              setShowNavLinks(!showNavLinks);
              navScrollHidden();
            }}
          >
            {showNavLinks ? <CrossMenu /> : <Menu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
