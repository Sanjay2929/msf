import Image from "next/image";
import Link from "next/link";
import React from "react";
import { branchDetail, footerLinks, socialmediaLinks } from "../common/Helper";
import { ArrowRight, Location, Telephone } from "../common/Icons";

const Footer = () => {
  return (
    <div className="bg-darkBlack md:pt-[122px] pt-16">
      <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto">
        <div className="flex justify-between flex-wrap">
          <div className="lg:w-[349px] w-full">
            <Link href="/">
              <Image
                width={56}
                height={56}
                src="/assets/footer/white-Logo.png"
                alt="logo"
              />
            </Link>
            <p className="pt-6 font-georgia font-normal text-sm text-white text-opacity-50 pb-8 max-w-[500px]">
              Committed legal professionals offering expert guidance and
              representation. Trust us with your legal matters. Contact our team
              for personalized assistance today.
            </p>
          </div>

          {footerLinks.map((value, index) => {
            return (
              <div key={index} className="sm:w-auto w-1/2">
                <h3 className="font-georgia font-bold text-sm text-white opacity-80 pb-2.5">
                  {value.heading}
                </h3>
                <div className="flex flex-col gap-y-2.5">
                  {value.link.map((value, index) => {
                    return (
                      <Link
                        key={index}
                        className="font-georgia font-normal text-sm text-white opacity-50 hover:opacity-100 duration-300 leading-4"
                        href="/"
                      >
                        {value.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="sm:w-auto w-full sm:pt-0 pt-8">
            <h3 className="font-georgia font-bold text-sm text-white opacity-80 pb-2.5">
              Connect with us!
            </h3>
            <div className="flex gap-2.5 items-center">
              {socialmediaLinks.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="w-8 h-8 flex justify-center items-center bg-lightOrange group"
                  >
                    {value.icon}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-[31px] flex flex-wrap xl:justify-center justify-between gap-[31px] pb-[43px]">
          {branchDetail.map((value, index) => {
            return (
              <div key={index} className={value.width}>
                <h3 className="font-georgia font-bold text-sm text-white opacity-80 pb-2.5">
                  {value.heading}
                </h3>
                <div className="flex gap-2.5 pb-3 pe-2 group">
                  <div className="w-8 h-8 min-w-8 flex justify-center items-center bg-lightOrange">
                    <Location />
                  </div>
                  <p className="font-georgia font-normal text-sm text-white opacity-50 group-hover:opacity-100 duration-300">
                    {value.location}
                  </p>
                </div>
                <Link
                  href={`tel:${value.phone}`}
                  className="flex gap-2.5 items-center group"
                >
                  <div className="w-8 h-8 flex justify-center items-center bg-lightOrange">
                    <Telephone />
                  </div>
                  <p className="font-georgia font-normal text-sm text-white opacity-50 group-hover:opacity-100 duration-300">
                    {value.phone}
                  </p>
                </Link>
                <h3 className="font-georgia font-normal text-sm text-orange flex items-center gap-1 pt-3 group">
                  <span> Get directions on the map </span>
                  <span className="group-hover:translate-x-2 duration-300">
                    <ArrowRight />
                  </span>
                </h3>
              </div>
            );
          })}
        </div>
        <div className="border-t border-white border-opacity-20">
          <p className="py-4 font-georgia font-normal text-sm text-white text-opacity-50 text-center">
            ©2024 Manly Steward Finaldi Lawyers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
