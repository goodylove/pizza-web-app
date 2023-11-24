import React from "react";
import Image from "next/image";
import CartTemplate from "@/components/Carttemplate";
import { CustomButton } from "@/components";

function CartPage() {
  return (
    <div className="h-[70vh] z-0 flex items-start mt-24 ml-3 ">
      <CartTemplate />
      <div className="w-52 h-44 bg-gray-700 text-white text-center p-2">
        <div className="my-3 text-start px-3">
          <p>CART TOTAL</p>
          <p>Subtotal : $23</p>
          <p>Discount : $1</p>
          <p>Total : $22</p>
          <CustomButton
            className="bg-[#F9B307] text-white  mt-5 flex items-center text-center text-sm justify-center gap-2 p-1 rounded-lg  w-44"
            title="Check out Now"
          />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
