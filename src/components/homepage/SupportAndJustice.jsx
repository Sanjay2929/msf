import React from "react";
import CustomButton from "../common/CustomButton";

const SupportAndJustice = () => {
  return (
    <div className="bg-black-and-white md:mt-[154px] sm:mt-24 mt-14 px-3">
      <div className="bg-extraLightBlue container xl:max-w-[1140px] px-3 xl:px-0 mx-auto">
        <div
          className="max-w-[519px] mx-auto md:py-[71.5px] py-10 flex flex-col items-center"
          data-aos="fade-up"
        >
          <h2 className="pb-4 text-center font-georgia font-normal md:text-2xl text-xl   tracking-[7px] text-darkBlack">
            Report Sexual Abuse
          </h2>
          <h3 className="pb-4 text-center font-georgia font-normal lg:text-[40px] text-3xl text-darkblack leading-[120%]">
            Seeking <span className="text-orange">Support and</span> Justice
          </h3>
          <p className="pb-8 text-center font-georgia font-normal md:text-base text-sm text-darkBlack">
            Give us a call regarding the potential referral of your sexual abuse
            case. We will provide, free-of charge, a thoughtful and reasoned
            evaluation of your potential or pending case.
          </p>
          <CustomButton title="Join Our Team" style="" />
        </div>
      </div>
    </div>
  );
};

export default SupportAndJustice;
