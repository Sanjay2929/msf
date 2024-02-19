/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto py-[150px] flex md:flex-row flex-col relative z-10">
        <div className="lg:min-w-[485px] sm:min-w-[370px]">
          <Image
            className="lg:w-[485px] sm:w-[370px] w-full max-w-[500px]"
            width={485}
            height={475}
            src="/assets/hero/old-man.webp"
            alt="law-firm"
          />
          <Image
            className="lg:w-[331px] w-[250px] mt-[-122px]"
            width={331}
            height={408}
            src="/assets/hero/law-weight.webp"
            alt="law"
          />
        </div>
        <div className="md:pt-11 ps-5">
          <div className="lg:px-8 md:px-6 py-6 lg:py-10 bg-white max-w-[715px] md:ms-[-85px]">
            <h1 className="font-georgia font-normal md:text-xl sm:text-lg text-base text-darkBlack tracking-[7px]">
              Manly Stewart & Finaldi
            </h1>
            <h2 className="font-georgia xl:text-[60px] lg:text-5xl sm:text-4xl text-3xl text-bluePrimary font-normal leading-[110%]">
              America's Premier Law Firm for{" "}
              <span className="text-orange">Sexual Abuse Cases</span>
            </h2>
          </div>
          <p className="pt-2 font-georgia sm:text-base text-sm font-normal text-darkBlack sm:pb-12 pb-8 opacity-80">
            At Manly Stewart, we understand the profound impact that sexual
            abuse can have on survivors. We are dedicated to providing
            compassionate and unwavering support to those who have endured such
            traumatic experiences.
          </p>
          <CustomButton title="Contact Now" style="" />
        </div>
      </div>
      <h3 className="font-normal font-georgia text-9xl sm:text-[150px] lg:text-[220px] text-bluePrimary absolute stewart_animation lg:bottom-[148px] sm:bottom-28 bottom-24 z-0 opacity-[4%] leading-[110%]">
        Stewart
      </h3>
      <h3 className="font-normal font-georgia text-9xl sm:text-[150px] lg:text-[220px] text-white absolute finaldi_animation -bottom-3 z-0 leading-none hero_text_outline opacity-5">
        Finaldi
      </h3>
    </div>
  );
};

export default Hero;
