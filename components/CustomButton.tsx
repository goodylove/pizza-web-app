import { CustomButtonProps } from "@/Types";
import React from "react";

function CustomButton({ title, className, icon, onClick }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} hover:bg-red-500 transition-transform    ease-in-out`}
    >
      {icon && icon}
      {title}
    </button>
  );
}

export default CustomButton;
