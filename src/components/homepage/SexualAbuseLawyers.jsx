import React from "react";
import CustomButton from "../common/CustomButton";
import Image from "next/image";

const SexualAbuseLawyers = () => {
  return (
    <div className="container xl:max-w-[1140px] px-3 lg:pe- xl:px-0 mx-auto flex bg-bluePrimary mt-[82px] lg:justify-between items-center lg:items-start lg:flex-row flex-col-reverse relative z-10">
      <div
        className="lg:w-1/2 pt-11 xl:ps-11 md:ps-4 md:pb-[62px] pb-10 md:pe-6 lg:max-w-[540px]"
        data-aos="fade-right"
      >
        <h2 className="font-georgia lg:text-[40px] text-3xl text-white font-normal leading-[110%] lg:text-start text-center">
          California <span className="text-orange">Sexual Abuse Lawyers</span>{" "}
          Who Are Here for You
        </h2>
        <p className="pt-4 font-georgia sm:text-base text-sm font-normal text-white md:pb-7 pb-4 opacity-80 pe-2 lg:text-start text-center">
          No case is too challenging for our lawyers. When we say that we aren’t
          afraid to stand up to any major institution, we have the track record
          to prove it. The firm has recovered more than $2 billion dollars on
          behalf of clients from the nation’s largest school districts,
          religious institutions, municipalities, sports and youth organizations
          and Fortune 500 companies.
        </p>
        <p className="pt-4 font-georgia sm:text-base text-sm font-normal text-white mb:pb-7 pb-4 opacity-80 pe-2 lg:text-start text-center">
          If you or a loved one is a survivor of sexual violence and abuse,
          please{" "}
          <span className="text-orange">
            contact our law offices in Southern California
          </span>{" "}
          for a free, 100% confidential consultation regarding your case.
        </p>
        <p className="pt-4 font-georgia sm:text-base text-sm font-normal text-white md:pb-7 pb-4 opacity-80 pe-2 lg:text-start text-center">
          You deserve closure, and any responsible parties deserve justice for
          their despicable actions. Let a trusted California sexual abuse lawyer
          at our firm help you today.
        </p>
        <div className="flex lg:justify-start justify-center">
          <CustomButton title="Request A Free Consultation" style="" />
        </div>
      </div>
      <div className="lg:w-auto max-w-[598px]" data-aos="fade-left">
        <Image
          width={598}
          height={630}
          className="w-full mt-[-82px]"
          src="/assets/sexual-abuse-lawyers/men-women.webp"
          alt="lawyers"
        />
      </div>
    </div>
  );
};

export default SexualAbuseLawyers;
