import Image from "next/image";
import React from "react";
import CustomButton from "../common/CustomButton";

const AbuseCase = () => {
  return (
    // Container for AbuseCase section
    <div
      id="attorneys"
      className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto md:py-[150px] py-24 flex md:flex-row flex-col items-center md:items-start relative z-10"
    >
      {/* Image container */}
      <div className="lg:min-w-[485px] sm:min-w-[370px]" data-aos="zoom-in">
        {/* Image */}
        <Image
          className="lg:w-[485px] sm:w-[370px] w-full md:max-w-[500px] max-w-[370px]"
          width={485}
          height={475}
          src="/assets/abuse-case/girl-image.webp"
          alt="girl"
        />
      </div>
      {/* Text container */}
      <div className="lg:pt-11 pt-5 md:ps-5">
        {/* Content */}
        <div
          className="lg:px-[30px] md:px-6 py-4 lg:py-8 bg-white max-w-[715px] md:ms-[-85px]"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {/* Title */}
          <h1 className="font-georgia font-normal md:text-xl text-lg text-darkBlack tracking-[6px] pb-3">
            Attorneys
          </h1>
          {/* Subtitle */}
          <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal leading-[110%]">
            Refer Your <span className="text-orange">Sexual Abuse Case</span> to
            Us
          </h2>
        </div>
        {/* Description */}
        <p className="lg:pt-7 sm:pt-3 font-georgia sm:text-base text-sm font-normal text-darkBlack lg:pb-12 pb-8 opacity-80">
          Give us a call regarding the potential referral of your sexual abuse
          case. We will provide, free-of charge, a thoughtful and reasoned
          evaluation of your potential or pending case.
        </p>
        {/* Custom button */}
        <CustomButton title="Join Our Team Today" style="" />
      </div>
    </div>
  );
};

export default AbuseCase;
