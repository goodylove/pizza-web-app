import { CustomButton } from "@/components";
import CartTemplate from "@/components/Carttemplate";
import OrderTamplate from "@/components/orderTamplate";
import React from "react";

export default function OrderPage() {
  return (
    <div>
      <div className="h-[70vh] z-0 flex items-start justify-center md:justify-start mt-24 gap-6 px-5 flex-col md:flex-row w-full ">
        <OrderTamplate />
        <div className="w-full justify-center flex">
          <div className="w-52 h-fit bg-gray-700 text-white text-center p-2">
            <div className="my-3 text-start px-3 flex flex-col gap-1">
              <p>CART TOTAL</p>
              <p>Subtotal : $23</p>
              <p>Discount : $1</p>
              <p>Total : $22</p>
              <CustomButton
                className={`bg-[#F9B307] text-white  mt-6 flex items-center text-center text-sm justify-center gap-2 p-1 rounded-lg  w-44 
                   
                  `}
                title="Paid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
