import React from "react";

const CustomButton = (props) => {
  return (
    <button type="submit"
      className={`px-5 py-3 bg-orange text-white text-base font-bold font-georgia hover:bg-white border border-orange hover:text-orange duration-300 ${props.style}`}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
