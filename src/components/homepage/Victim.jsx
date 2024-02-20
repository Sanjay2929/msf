import React from "react";
import CustomButton from "../common/CustomButton";
import Image from "next/image";

const Victim = () => {
  return (
    <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto pt-12 relative">
      {/* LEFT SECTION */}
      <div className="max-w-[473px] relative z-10" data-aos="fade-right">
        {/* TITLE */}
        <h2 className="font-georgia font-normal md:text-[40px] text-3xl text-bluePrimary leading-[120%]">
          Were you a <span className="text-orange">victim</span> of
        </h2>
        {/* PARAGRAPH */}
        <p className="font-georgia font-normal text-base text-darkblack opacity-80 sm:pt-7 pt-4 sm:pb-12 pb-8">
          At Manly Stewart, we understand the profound impact that sexual abuse
          can have on survivors. We are dedicated to providing compassionate and
          unwavering support to those who have endured such traumatic
          experiences.
        </p>
        {/* BUTTON */}
        <CustomButton title="Take Action Now" style="" />
      </div>
      {/* RIGHT SECTION */}
      <div className="max-w-[948px] ms-auto relative z-10">
        {/* SUBTITLE */}
        <h3 className="text-center tracking-[7.3px] font-georgia font-normal text-2xl text-darkblack pb-8 lg:mt-[-20px] mt-0 lg:pt-0 pt-10">
          Breaking Cases
        </h3>
        {/* IMAGE GRID */}
        <div
          className="flex sm:flex-nowrap flex-col sm:flex-row lg:gap-8 gap-4 items-center"
          data-aos="fade-up"
        >
          {/* CASE 1 */}
          <div className="relative sm:max-w-[500px] max-w-[400px]">
            <Image
              className="w-full"
              width={458}
              height={564}
              src="/assets/images/victim/victim-one.webp"
              alt="victim"
            />
            <div className="absolute bottom-0 left-0 flex w-full lg:p-[18px] p-3">
              <div className="lg:min-w-[194px] min-w-[100px] md:h-[115px] h-[100px] flex justify-center items-center bg-white">
                <h3 className="font-georgia font-normal lg:text-[80px] text-5xl text-darkBlack">
                  01
                </h3>
              </div>
              <h3 className="lg:ps-[22px] ps-3 lg:pe-5 pe-4 pt-[20px] font-georgia font-normal sm:text-base text-sm text-white leading-normal max-w-[250px]">
                Los Angeles County Juvenile Probation Camp Sexual Assault
              </h3>
            </div>
          </div>
          {/* CASE 2 */}
          <div
            className="relative sm:max-w-[500px] max-w-[400px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="w-full"
              width={458}
              height={564}
              src="/assets/images/victim/victim-two.webp"
              alt="victim-two"
            />
            <div className="absolute bottom-0 left-0 flex w-full lg:p-[18px] p-3">
              <div className="lg:min-w-[194px] min-w-[100px] md:h-[115px] h-[100px] flex justify-center items-center bg-white">
                <h3 className="font-georgia font-normal lg:text-[80px] text-5xl text-darkBlack">
                  02
                </h3>
              </div>
              <h3 className="lg:ps-[22px] ps-3 lg:pe-5 pe-4 pt-[20px] font-georgia font-normal sm:text-base text-sm text-white leading-normal max-w-[250px]">
                California Schools Sexual Abuse
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* BACKGROUND ELEMENT */}
      <div className="absolute sm:right-[100px] right-0 top-0 w-[500%] h-[556px] bg-extraLightBlue z-0"></div>
    </div>
  );
};

export default Victim;
