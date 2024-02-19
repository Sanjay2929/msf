"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { sexualAbuse } from "../common/Helper";

const SexualAbuse = () => {
  return (
    <div className="md:pt-[154px] pt-24 psm:b-[62px] pb-10">
      <div className="px-3 xl:px-0 mx-auto">
        <h2 className="text-center font-georgia font-normal md:text-2xl text-xl tracking-[7.2px] text-darkBlack pb-4 leading-[120%]">
          Why we are
        </h2>
        <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal text-center leading-[120%] md:pb-12 pb-8">
          California <span className="text-orange"> Sexual Abuse</span>{" "}
          Attorneys
        </h2>
        <div className="max-w-[1620px] mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            spaceBetween={24}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              991: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 1.9,
                spaceBetween: 10,
              },
            }}
          >
            {sexualAbuse.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`md:py-11 py-8 sm:px-7 px-4 bg-cover bg-no-repeat ${value.background}`}
                  >
                    <div className="opacity-0 active_slide duration-300">
                      <h3 className="font-georgia font-bold md:text-xl text-lg text-white text-center max-w-[528px] pb-4 mx-auto">
                        Nationally Recognized for Representing Sexual Abuse
                        Survivors
                      </h3>
                      <p className="font-georgia font-normal text-sm sm:text-base text-white text-center pb-4">
                        Manly, Stewart & Finaldi is regarded as America’s
                        leading law firm for sexual abuse cases. Our founder and
                        managing partner,{" "}
                        <span className="text-orange">
                          attorney John C. Manly
                        </span>
                        , has been successfully representing sexual abuse
                        victims for over 20 years. He has been included in Super
                        Lawyers® and named to California’s Top 100 Attorneys by
                        the Los Angeles Daily Journal{" "}
                      </p>
                      <p className="font-georgia font-normal text-sm sm:text-base text-white text-center pb-4">
                        Victim’s advocate and California sexual abuse lawyer
                        John Manly understands that sexual abuse is an ongoing
                        crisis and has devoted himself to becoming a national
                        leader in the legal battle against these brutal crimes.
                        As a firm that exclusively handles sexual abuse cases,
                        our California law firm offers experienced
                        representation to obtain justice for sexual abuse
                        survivors, harassment, and discrimination.
                      </p>
                      <p className="font-georgia font-normal text-sm sm:text-base text-white text-center sm:pb-4">
                        Manly Stewart & Finaldi is currently investigating
                        alleged{" "}
                        <span className="text-orange">
                          sexual abuse by Dr. Robert E. Anderson at the
                          University of Michigan.
                        </span>
                        Contact our firm today if you were affected. . .
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SexualAbuse;
