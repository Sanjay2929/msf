import React from "react";

const CustomButton = (props) => {
  return (
    <button
      type="submit"
      aria-hidden="true"
      className={`px-5 py-3 bg-orange text-white md:text-base text-sm font-bold font-georgia hover:bg-white border border-orange hover:text-orange duration-300 ${props.style}`}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
