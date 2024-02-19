import React, { useState } from "react";
import { radioList } from "./Helper";

const CustomRadio = ({ setConsultationForm }) => {
  const [selectedRadio, setSelectedRadio] = useState("Church");

  const radioChangeHandler = (event) => {
    const selectedValue = event.target.value;
    setSelectedRadio(selectedValue);
    setConsultationForm((prevForm) => ({
      ...prevForm,
      institution: selectedValue,
    }));
  };

  return (
    <div className="flex flex-wrap justify-between">
      {radioList.map((option) => (
        <div
          key={option.value}
          className="flex gap-3 items-center sm:w-1/2 w-full pb-[18px]"
        >
          <input
            hidden
            className="custom-radio"
            checked={selectedRadio === option.value}
            type="radio"
            name="company"
            id={option.value}
            value={option.value}
            onChange={radioChangeHandler}
          />
          <label
            htmlFor={option.value}
            className={`w-[18px] h-[18px] rounded-full duration-200 cursor-pointer ${
              selectedRadio === option.value
                ? " bg-orange border-[3.5px] border-orange outline-3 outline -outline-offset-4 outline-white"
                : "border border-darkBlack border-opacity-20 bg-white"
            }`}
          ></label>
          <label
            htmlFor={option.value}
            className="font-georgia font-base font-bold cursor-pointer text-darkBlack "
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomRadio;
