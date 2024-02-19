"use client";
import Image from "next/image";
import React, { useRef } from "react";
import CustomButton from "../common/CustomButton";
import { blogPost } from "../common/Helper";
import Slider from "react-slick";
import { SliderArrow } from "../common/Icons";

const BlogPost = () => {
  const sliderRef = useRef(null);

  // FUNCTION TO HANDLE LEFT ARROW CLICK
  const handleLeftArrow = () => {
    sliderRef.current.slickPrev();
  };

  // FUNCTION TO HANDLE RIGHT ARROW CLICK
  const handleRightArrow = () => {
    sliderRef.current.slickNext();
  };

  // Slider settings
  var settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023.9,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767.9,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div className="relative">
      {/* POST TITLE */}
      <h3 className="font-normal font-georgia text-9xl sm:text-[150px] lg:text-[220px] text-bluePrimary absolute finaldi_animation sm:!-translate-y-1/3 top-0 z-0 opacity-[4%] leading-[110%]">
        post
      </h3>
      {/* BLOG TITLE */}
      <h3 className="font-normal font-georgia text-9xl sm:text-[150px] lg:text-[220px] text-white absolute stewart_animation top-0 !-translate-y-1/2 z-0 leading-none hero_text_outline opacity-5">
        blog
      </h3>
      <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto relative z-10">
        {/* TITLE */}
        <h2 className="text-center font-georgia font-normal md:text-2xl text-xl tracking-[7.2px] text-darkBlack pb-4 leading-[120%]">
          New Insights
        </h2>
        {/* SUBTITLE */}
        <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal text-center leading-[120%] md:pb-12 pb-8">
          More Recent <span className="text-orange">Blog Post</span>
        </h2>
        <div className="relative">
          <div className="absolute xl:-bottom-10 bottom-6 right-3 w-[600%] h-[317px] bg-extraLightBlue"></div>
          {/* SLIDER */}
          <Slider {...settings} ref={sliderRef}>
            {/* MAP THROUGH BLOG POSTS */}
            {blogPost.map((value, index) => {
              return (
                <div key={index} className="px-3">
                  <div className="relative">
                    {/* IMAGE */}
                    <Image
                      className="w-full"
                      width={364}
                      height={403}
                      src={value.image}
                      alt="post"
                    />
                    {/* DATE */}
                    <p className="absolute top-4 left-4 font-georgia lg:text-base text-sm font-bold text-white">
                      12 February 2024
                    </p>
                  </div>
                  <div className="lg:px-[18px] px-3 py-6">
                    {/* TITLE */}
                    <p className="font-georgia font-bold lg:text-xl text-base text-darkBlack pb-7">
                      {value.title}
                    </p>
                    {/* BUTTON */}
                    <CustomButton
                      title="View More"
                      style="!bg-transparent !text-orange hover:!text-white hover:!bg-orange"
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* ARROW BUTTONS */}
          <div className="flex gap-3 justify-center">
            <div
              onClick={handleLeftArrow}
              className="w-12 h-12 border border-bluePrimary flex justify-center items-center hover:bg-bluePrimary group duration-300 cursor-pointer xl:absolute relative z-10 xl:top-1/2 xl:-left-3 xl:-translate-x-full xl:-translate-y-1/2"
            >
              <SliderArrow color="#192335" style="group-hover:fill-white" />
            </div>
            <div
              onClick={handleRightArrow}
              className="w-12 h-12 border border-bluePrimary flex justify-center items-center hover:bg-bluePrimary group duration-300 cursor-pointer rotate-180 xl:absolute relative z-10 xl:-right-3 xl:top-1/2 xl:translate-x-full xl:-translate-y-1/2"
            >
              <SliderArrow color="#192335" style="group-hover:fill-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
