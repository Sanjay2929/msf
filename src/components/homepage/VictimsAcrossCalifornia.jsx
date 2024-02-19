import React from "react";
import { CheckListOrange } from "../common/Icons";
import Image from "next/image";

const VictimsAcrossCalifornia = () => {
  return (
    <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto flex lg:flex-row flex-col-reverse items-center lg:items-start relative z-10">
      <div className="lg:w-1/2 lg:pt-0 pt-8" data-aos="fade-right">
        {/* Title */}
        <h2 className="font-georgia font-normal md:text-xl text-lg text-darkBlack tracking-[6px] pb-3 lg:text-start text-center">
          Representation for
        </h2>
        {/* Subtitle */}
        <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal leading-[110%] lg:text-start text-center">
          Sexual Abuse <span className="text-orange">Victims Across</span>{" "}
          California
        </h2>
        {/* Description */}
        <p className="pt-4 font-georgia sm:text-base text-sm font-normal text-darkBlack pb-7 opacity-80 lg:text-start text-center">
          Our California sexual abuse lawyers have over 20 years of experience
          litigating various cases of sexual violence. This includes instances
          of:
        </p>
        {/* List of abuse cases */}
        <ul className="flex flex-wrap gap-4 lg:justify-between justify-evenly experience_list md:pb-7 pb-4">
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-darkBlack text-opacity-80 flex gap-2 ">
            <CheckListOrange /> Clergy abuse
          </li>
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-darkBlack text-opacity-80 flex gap-2">
            <CheckListOrange /> School abuse
          </li>
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-orange text-opacity-80 flex gap-2">
            <CheckListOrange /> Abuse occurring in sports organizations
          </li>
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-darkBlack text-opacity-80 flex gap-2">
            <CheckListOrange /> Abuse at youth group and summer camps
          </li>
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-darkBlack text-opacity-80 flex gap-2">
            <CheckListOrange />
            <span>
              Cases of{" "}
              <span className="text-orange">online sexual harassment</span>
            </span>
          </li>
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-orange text-opacity-80 flex gap-2">
            <CheckListOrange /> Elder sexual abuse in nursing homes
          </li>
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-darkBlack text-opacity-80 flex gap-2">
            <CheckListOrange /> Uber/Lyft sexual abuse
          </li>
          <li className="w-[239px] italic font-georgia font-normal text-sm sm:text-base text-darkBlack text-opacity-80 flex gap-2">
            <CheckListOrange /> Sexual abuse by doctors
          </li>
        </ul>
        {/* Conclusion */}
        <p className=" font-georgia sm:text-base text-sm font-normal text-darkBlack lg:pb-8 md:pb-20 pb-10 opacity-80 lg:text-start text-center">
          We are passionate about seeking justice for any and all survivors of
          sexual assault and abuse.
        </p>
      </div>
      {/* Right side image */}
      <div className="lg:w-1/2 lg:ps-6 max-w-[542px]" data-aos="fade-left">
        <Image
          className="w-full"
          width={542}
          height={753}
          src="/assets/images/victims-across-california/lawyer.webp"
          alt="lawyer"
        />
      </div>
    </div>
  );
};

export default VictimsAcrossCalifornia;
