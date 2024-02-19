import React from "react";
import { abuseCases } from "../common/Helper";

const GlobalSettlement = () => {
  return (
    // Container for GlobalSettlement section
    <div id="practice" className="bg-extraLightBlue pt-[64px]">
      <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto">
        <div className="max-w-[558px]" data-aos="fade-right">
          <h2 className="font-georgia lg:text-[40px] text-3xl font-normal text-bluePrimary md:pb-7 pb-4">
            Global <span className="text-orange">Settlement</span>
          </h2>
          <p className="font-georgia text-base font-normal text-darkBlack opacity-80 md:pb-[38px] pb-8">
            $216 million global settlement of 110 separate sexual abuse claims
            against the Society of Jesus, Oregon Province (2007, 2011). Various
            Superior Courts in the State of Alaska and U.S. Bankruptcy Court.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto">
          <div className="py-9 flex gap-4 w-full relative flex-wrap justify-center">
            {abuseCases.map((value, index) => {
              return (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={value.delay}
                >
                  <div
                    className={`h-[293px] pt-[57px] px-[28px] border border-bluePrimary bg-white w-[266px] relative z-10 ${
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
                      className={`font-georgia font-bold text-xl text-darkBlack text-center ${
                        index === 3 && "text-white"
                      }`}
                    >
                      {value.description}
                    </p>
                  </div>
                  {index === 3 && (
                    <div className="w-[4000px] bg-extraLightBlue absolute top-1/2 -translate-y-1/2 xl:left-1 -left-2 xl:h-[366px] h-[317px] z-0"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSettlement;
