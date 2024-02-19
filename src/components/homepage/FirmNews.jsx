import Image from "next/image";
import React from "react";
import { newsMedia } from "../common/Helper";

const FirmNews = () => {
  return (
    <div id="media" className="relative">
      <h3 className="font-normal font-georgia text-[100px] sm:text-[150px] lg:text-[220px] text-bluePrimary absolute finaldi_animation top-10 z-0 opacity-[4%] leading-[110%]">
        News
      </h3>
      <h3 className="font-normal font-georgia text-[100px] sm:text-[150px] lg:text-[220px] text-white absolute stewart_animation top-0 z-0 leading-none hero_text_outline opacity-5">
        Firm
      </h3>
      <div className="container xl:max-w-[1140px] px-3 xl:px-0 mx-auto md:pt-[180px] pt-24 md:pb-[154px] pb-24 relative z-10">
        <h1 className="font-georgia font-normal md:text-xl text-lg text-darkBlack tracking-[6px] pb-3 text-center">
          News Insights
        </h1>
        <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal leading-[110%] text-center md:pb-12 pb-8">
          Our Firm <span className="text-orange">In News</span>
        </h2>
        <div className="relative h-[120px] w-full overflow-hidden">
          <div className="flex justify-center items-center flex-nowrap gap-6 news_animation absolute top-0 left-0">
            {newsMedia.map((value, index) => {
              return (
                <div
                  key={index}
                  className="md:w-[208px] w-[160px] sm:h-[120px] flex justify-center items-center group"
                >
                  <Image className="group-hover:-translate-y-3 duration-300"
                    width={value.widht}
                    height={value.height}
                    src={value.image}
                    alt="time"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmNews;
