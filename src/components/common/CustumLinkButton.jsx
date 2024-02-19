import Link from "next/link";
import React from "react";

const CustomLinkButton = (props) => {
  return (
    <Link href={props.link}
      className={`px-5 py-3 bg-orange text-white text-base font-bold font-georgia hover:bg-white border border-orange hover:text-orange duration-300 ${props.style}`}
    >
      {props.title}
    </Link>
  );
};

export default CustomLinkButton;
