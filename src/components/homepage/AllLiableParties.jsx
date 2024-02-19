import Image from "next/image";
import React from "react";
import { CheckListOrange } from "../common/Icons";

const AllLiableParties = () => {
  return (
    <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto flex lg:flex-row flex-col lg:items-end xl:mt-[-180px] lg:-mt-12 md:pb-[85px] pb-10 items-center relative z-10">
      <div className="lg:w-1/2 lg:pe-2 max-w-[542px]" data-aos="fade-right">
        <Image
          className="w-full"
          width={542}
          height={764}
          src="/assets/images/all-liable-parties/two-lawyer.webp"
          alt="lawyer"
        />
      </div>
      <div
        className="lg:w-1/2 xl:ps-14 lg:ps-6 pt-8 lg:pt-0"
        data-aos="fade-left"
      >
        <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal leading-[110%] lg:text-start text-center">
          We Pursue <span className="text-orange">All Liable</span> Parties
        </h2>
        <p className="pt-4 font-georgia sm:text-base text-sm font-normal text-darkBlack pb-7 opacity-80 lg:text-start text-center">
          At Manly, Stewart & Finaldi, we understand that in cases of sexual
          abuse, there are often other parties that may share liability for the
          abuser’s despicable actions. Therefore, we strive to hold all
          responsible parties accountable for their part in your case. This
          includes:
        </p>
        <ul className="flex gap-4 flex-col experience_list md:pb-7 pb-4 max-w-[546px] mx-auto">
          <li className="italic font-georgia font-normal text-base text-darkBlack text-opacity-80 flex gap-3 items-center ">
            <CheckListOrange background="fill-bluePrimary" /> The abuser who was
            directly responsible
          </li>
          <li className="italic font-georgia font-normal text-base text-darkBlack text-opacity-80 flex gap-3 items-center">
            <CheckListOrange background="fill-bluePrimary" /> Any coworkers,
            staff members, or others who knew of the abuse but did not come
            forward to report it
          </li>
          <li className="italic font-georgia font-normal text-base text-darkBlack text-opacity-80 flex gap-3 items-center">
            <CheckListOrange background="fill-bluePrimary" /> Any larger
            organizations or institutions who failed to take action against the
            abuse
          </li>
          <li className="italic font-georgia font-normal text-base text-darkBlack text-opacity-80 flex gap-3 items-center">
            <CheckListOrange background="fill-bluePrimary" /> Any potential law
            enforcement officials who exercised negligence in allowing the abuse
            to occur
          </li>
        </ul>
        <p className="font-georgia sm:text-base text-sm font-normal text-darkBlack pb-8 opacity-80 lg:text-start text-center">
          Any and all parties who had some direct or indirect part in your case
          deserve to be held accountable to the fullest extent.
        </p>
      </div>
    </div>
  );
};

export default AllLiableParties;
