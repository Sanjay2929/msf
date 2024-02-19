"use client";
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import { cityNames } from "../common/Helper";
import CustomRadio from "../common/CustomRadio";
import CustomButton from "../common/CustomButton";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const ConsultationForm = () => {
  const [consultationForm, setConsultationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    institution: "",
    inquiry: "",
  });
  const [loading, setLoading] = useState(false);

  const consultationFormHandler = (event) => {
    event.preventDefault();
    emailjs.init("2AN6L_b9zVPAb_CK-");
    setLoading(true);
    emailjs
      .send("service_wemdy4l", "template_2w31wlk", {
        firstName: consultationForm.firstName,
        lastName: consultationForm.lastName,
        email: consultationForm.email,
        phoneNumber: consultationForm.phoneNumber,
        city: consultationForm.city,
        institution: consultationForm.institution,
        inquiry: consultationForm.inquiry,
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    // Reset form fields to empty values
    setConsultationForm({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      institution: "",
      inquiry: "",
    });
  };
  return (
    <div className="bg-[#FBF1EC] relative md:py-[62px] py-10 px-3">
      <Image
        className="absolute right-0 top-0 lg:w-[35%] w-1/2 object-cover h-full z-0"
        width={4900}
        height={1535}
        src="/assets/consultation-form/old-man.webp"
        alt="consultant"
      />
      <div className="container lg:max-w-[970px] px-3 xl:px-0 mx-auto py-[54px] bg-white relative z-10">
        <h2 className="text-center font-georgia font-normal  md:text-2xl text-xl tracking-[7.2px] text-darkBlack pb-4 leading-[120%]">
          GET UPDATED WITH US
        </h2>
        <h2 className="font-georgia lg:text-[40px] text-3xl text-bluePrimary font-normal text-center leading-[120%] pb-7  max-w-[463px] mx-auto">
          Request <span className="text-orange">Your Free</span> Consultation
        </h2>
        <p className="text-darkBlack sm:text-base text-sm font-normal font-georgia text-center max-w-[463px] mx-auto pb-9">
          Send us an email or{" "}
          <span className="text-orange">call (800) 700-8450</span> for answers
          to anything and everything you would like to know about your case.
        </p>
        <form
          onSubmit={consultationFormHandler}
          className="max-w-[606px] mx-auto"
        >
          <div className="flex sm:flex-row flex-col gap-y-[30px] gap-x-10 w-full">
            <CustomInput
              id="firstName"
              label="First Name"
              type="text"
              value={consultationForm.firstName}
              placeholder="First Name"
              onChange={(value) => {
                setConsultationForm({
                  ...consultationForm,
                  firstName: value,
                });
              }}
            />
            <CustomInput
              id="lastName"
              label="Last Name"
              type="text"
              value={consultationForm.lastName}
              placeholder="Last Name"
              onChange={(value) => {
                setConsultationForm({
                  ...consultationForm,
                  lastName: value,
                });
              }}
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-y-[30px] gap-x-10 w-full pt-[30px]">
            <CustomInput
              id="Phone"
              label="Phone Number"
              type="tel"
              value={consultationForm.phoneNumber}
              placeholder="Phone Number"
              onChange={(value) => {
                setConsultationForm({
                  ...consultationForm,
                  phoneNumber: value,
                });
              }}
            />
            <CustomInput
              id="Email"
              label="Email"
              type="email"
              value={consultationForm.email}
              placeholder="Email"
              onChange={(value) => {
                setConsultationForm({
                  ...consultationForm,
                  email: value,
                });
              }}
            />
          </div>
          <div className="w-full py-[30px]">
            <h3 className="font-georgia font-normal text-base text-darkblack block pb-2.5">
              City
            </h3>
            <select
              required
              className="w-full md:py-[17px] py-3 md:px-4 px-3 bg-white text-base rounded font-georgia font-normal text-darkBlack text-opacity-20 outline-none border border-darkBlack border-opacity-20"
              id="selectOption"
              name="selectOption"
              onChange={(e) =>
                setConsultationForm({
                  ...consultationForm,
                  city: e.target.value,
                })
              }
            >
              <option
                selected
                disabled
                className="cursor-pointer w-full"
                value="please_select"
              >
                Please select
              </option>
              {cityNames.map((option) => (
                <option
                  className="cursor-pointer w-full"
                  key={option.city}
                  value={option.city}
                >
                  {option.city}
                </option>
              ))}
            </select>
          </div>
          <div className="custom-radio">
            <h3 className="font-georgia font-bold text-xl text-darkBlack pb-6">
              Institution Involved <span className="text-lightBlue">*</span>
            </h3>
            <CustomRadio setConsultationForm={setConsultationForm} />
          </div>
          <label
            className="mt-3 font-georgia font-normal text-base text-darkblack block pb-2.5"
            htmlFor="inquiry"
          >
            Reason for inquiry
          </label>
          <textarea
            required
            name="inquiry"
            value={consultationForm.inquiry} // Corrected property name
            id="inquiry"
            onChange={(event) => {
              const { value } = event.target; // Extract the value from the event
              setConsultationForm({
                ...consultationForm,
                inquiry: value, // Corrected property name and use the extracted value
              });
            }}
            className="p-4 h-[135px] rounded resize-none border border-darkBlack border-opacity-20 w-full outline-none placeholder:text-darkBlack placeholder:opacity-20"
            placeholder="Reason for inquiry"
          />
          <h3 className="text-center text-orange text-xl font-georgia font-bold py-7 pb-2.5">
            Disclaimer*
          </h3>
          <p className="font-georgia font-normal md:text-base text-sm text-center text-darkBlack opacity-80 pb-6">
            The use of this website or contact form to communicate with this
            firm or any of its attorneys/members does not establish an
            attorney-client relationship. Time-sensitive information should not
            be sent through this form. All information provided will be kept
            strictly confidential.
          </p>
          <div className="flex justify-center items-center gap-2 md:pb-12 pb-8">
            <input
              required
              className="w-[18px] h-4 !rounded-none"
              type="checkbox"
              name="disclaimer"
              id="disclaimer"
            />
            <label
              htmlFor="disclaimer"
              className="font-georgia font-normal sm:text-base text-sm text-bluePrimary opacity-70"
            >
              I HAVE READ THIS DISCLAIMER
            </label>
          </div>
          <div className="flex justify-center">
            <CustomButton
              title={loading ? "Loading..." : "Free Consultation"}
              style=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
