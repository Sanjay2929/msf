import React from "react";
import { abuseCases } from "../common/Helper";
import Image from "next/image";

const GlobalSettlement = () => {
  return (
    // Container for GlobalSettlement section
    <div id="practice" className="md:pt-[150px] sm:pt-24 pt-14">
      <div className="bg-extraLightBlue md:pt-[64px] pt-8">
        <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto">
          <div className="max-w-[550px] relative" data-aos="fade-right">
            <Image
              width={91}
              height={85}
              className="absolute top-2 xl:block hidden  left-0 -translate-x-full -translate-y-2/3 w-[91px] h-auto z-10 object-contain"
              src="/assets/images/common/comma.png"
              alt="comma"
            />
            <h2 className="font-georgia lg:text-[40px] text-3xl font-normal  text-bluePrimary md:pb-7 pb-4">
              Global <span className="text-orange">Settlement</span>
            </h2>
            <p className="font-georgia sm:text-base text-sm font-normal text-darkBlack opacity-80 md:pb-[38px] pb-4">
              $216 million global settlement of 110 separate sexual abuse claims
              against the Society of Jesus, Oregon Province (2007, 2011).
              Various Superior Courts in the State of Alaska and U.S. Bankruptcy
              Court.
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto">
            <div className="md:py-9 py-5 flex lg:gap-4 w-full relative flex-wrap justify-center">
              {abuseCases.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-1/2 lg:w-auto max-[550px]:w-full px-2 lg:px-0 my-2 lg:my-0"
                    data-aos="fade-up"
                    data-aos-delay={value.delay}
                  >
                    <div
                      className={`h-[293px] pt-[57px] px-[28px] border border-bluePrimary bg-white lg:w-[266px] relative z-10 ${
                        index === 3 && "xl:ms-7 !bg-bluePrimary group"
                      }`}
                    >
                      <h3
                        className={`font-georgia font-normal text-[60px] text-bluePrimary text-center ${
                          index === 3 && "text-white"
                        }`}
                      >
                        {value.cases}
                      </h3>
                      <p
                        className={`font-georgia font-bold text-xl text-darkBlack text-center max-w-[250px] mx-auto ${
                          index === 3 && "text-white"
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                    {index === 3 && (
                      <div className="w-[4000px] bg-extraLightBlue absolute top-1/2 -translate-y-1/2 xl:left-1 lg:-left-2 left-0 xl:h-[366px] h-[317px] z-0"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSettlement;
