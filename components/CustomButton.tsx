import { CustomButtonProps } from "@/Types";
import React from "react";

function CustomButton({ title, className }: CustomButtonProps) {
  return <button className={className}>{title}</button>;
}

export default CustomButton;
