import { SubTitleProps } from "@/Types";
import { type } from "os";
import React from "react";

function Subtitle({ title }: SubTitleProps) {
  return (
    <h3 className="before:content-[' '] before:absolute before:w-[90px] before:left-[49%]  before:h-[3px] before:bg-red-500 before:top-[50%] translate-y-[50%] md:before:left-[14%]   font-semibold text-red-500 text-[24px]">
      {title}
    </h3>
  );
}

export default Subtitle;
