import React from "react";

const CustomInput = (props) => {
  return (
    <div className="w-full">
      <label
        className="font-georgia font-normal text-base text-darkblack block pb-2.5"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <input
        required
        type={props.type}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange(e.target.value)}
        className="md:px-4 px-3 md:py-[17px] py-3 border border-darkBlack border-opacity-20 w-full outline-none placeholder:text-darkBlack placeholder:opacity-20 rounded"
      />
    </div>
  );
};

export default CustomInput;
