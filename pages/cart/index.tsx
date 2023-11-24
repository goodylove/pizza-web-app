import React, { useState } from "react";
import Image from "next/image";
import CartTemplate from "@/components/Carttemplate";
import { CustomButton } from "@/components";
import Model from "@/components/model";

function CartPage() {
  const [checkout, setCheckout] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="h-[70vh] z-0 flex items-start justify-center md:justify-start mt-24 gap-6 px-5 flex-col md:flex-row w-full ">
        <CartTemplate />
        <div className="w-full justify-center flex">
          <div className="w-52 h-fit bg-gray-700 text-white text-center p-2">
            <div className="my-3 text-start px-3 flex flex-col gap-1">
              <p>CART TOTAL</p>
              <p>Subtotal : $23</p>
              <p>Discount : $1</p>
              <p>Total : $22</p>
              <CustomButton
                className={`bg-[#F9B307] text-white  mt-6 flex items-center text-center text-sm justify-center gap-2 p-1 rounded-lg  w-44 ${
                  checkout ? "hidden" : ""
                }`}
                title="Check out Now"
                onClick={() => setCheckout(true)}
              />

              {checkout && (
                <div>
                  <CustomButton
                    className="bg-white  text-green-800  font-semibold   mt-2 flex items-center text-center  justify-center gap-2 p-1  text-lg  w-44"
                    title="Cash On Delivery"
                    onClick={() => setOpenModel(true)}
                  />
                  <CustomButton
                    className="bg-[#F9B307]  font-semibold text-blue-500/50  mt-2 flex items-center text-center  justify-center gap-2 p-1  text-lg  w-44"
                    title="PayPal"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openModel && <Model />}
    </>
  );
}

export default CartPage;
