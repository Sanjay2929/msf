"use client";
import React, { useRef } from "react";
import { Experience, SliderArrow } from "../common/Icons";
import { chooseUsExpertise } from "../common/Helper";
import Slider from "react-slick";

const WhyChooseUs = () => {
  const sliderRef = useRef(null);
  const handleLeftArrow = () => {
    sliderRef.current.slickPrev();
  };
  // FUNCTION TO HENDLE RIGHT ARROW CLICK
  const handleRightArrow = () => {
    sliderRef.current.slickNext();
  };
  //slider settings
  var settings = {
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1023.9,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          centerMode: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto lg:py-[154px] py-[100px] flex gap-[31px] lg:flex-row flex-col">
      <div className="lg:w-[260px]">
        <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal leading-[110%]">
          Why <span className="text-orange">Choose</span> Us
        </h2>
        <p className="lg:pt-7 pt-3 font-georgia sm:text-base text-sm font-normal text-darkBlack lg:pb-12 pb-8 opacity-80 lg:max-w-[249px] max-w-[600px]">
          Choose us for unparalleled expertise, exceptional service, and a
          commitment to exceeding your expectations. Our team is dedicated to
          delivering innovative solutions tailored to your needs, ensuring your
          satisfaction every step of the way.
        </p>
        <div className="flex gap-4">
          <div
            onClick={handleLeftArrow}
            className="w-12 h-12 border border-bluePrimary flex justify-center items-center hover:bg-bluePrimary group duration-300 cursor-pointer"
          >
            <SliderArrow color="#192335" style="group-hover:fill-white" />
          </div>
          <div
            onClick={handleRightArrow}
            className="w-12 h-12 border border-bluePrimary flex justify-center items-center hover:bg-bluePrimary group duration-300 cursor-pointer rotate-180"
          >
            <SliderArrow color="#192335" style="group-hover:fill-white" />
          </div>
        </div>
      </div>
      <div className="relative lg:max-w-[calc(100%-300px)]">
        <div className="absolute top-0 left-[-11px] w-[600%] h-[205px] bg-extraLightBlue"></div>
        <Slider
          {...settings}
          ref={sliderRef}
          className=" lg:h-[448px]  md:h-[420px] sm:h-[365px] h-[385px] max-[500px]:h-auto overflow-y-hidden"
        >
          {chooseUsExpertise.map((value, index) => {
            return (
              <div
                key={index}
                className="px-1.5 lg:pt-[80px] pt-5 pb-[90px] choose_us_slide duration-300 h-full flex"
              >
                <div className="border border-bluePrimary min-h-[253px] py-5 flex flex-col justify-center items-center gap-[30px] md:px-[23px] px-3 duration-300 h-full bg-white">
                  {value.icon}
                  <h3 className="text-center font-georgia text-xl font-bold leading-normal text-darkblack max-w-[174px]">
                    {value.title}
                  </h3>
                  <p className="text-center text-white font-georgia text-base font-normal hidden leading-normal duration-300 pt-1">
                    {value.discription}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default WhyChooseUs;
