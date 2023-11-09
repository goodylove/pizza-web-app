import { CustomButtonProps } from "@/Types";
import React from "react";

function CustomButton({ title, className, icon }: CustomButtonProps) {
  return (
    <button className={className}>
      {icon && icon}
      {title}
    </button>
  );
}

export default CustomButton;
