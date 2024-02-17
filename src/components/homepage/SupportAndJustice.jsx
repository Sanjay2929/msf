import React from "react";
import CustomButton from "../common/CustomButton";

const SupportAndJustice = () => {
  return (
    <div className="bg-black-and-white mt-[154px]">
      <div className="bg-skyblue container xl:max-w-[1140px] px-3 xl:px-0 mx-auto">
        <div className="max-w-[519px] mx-auto py-[71.5px] flex flex-col items-center">
          <h2 className="pb-4 text-center font-georgia font-normal text-2xl tracking-[7px] text-darkBlack">
            Report Sexual Abuse
          </h2>
          <h3 className="pb-4 text-center font-georgia font-normal text-[40px] text-darkblack leading-[120%]">
            Seeking <span className="text-orange">Support and</span> Justice
          </h3>
          <p className="pb-8 text-center font-georgia font-normal text-base text-darkBlack">
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
