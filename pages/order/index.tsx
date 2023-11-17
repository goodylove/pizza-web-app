import { CustomButton } from "@/components";
import Image from "next/image";
import React from "react";

function OrderPage() {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center gap-7 items-center">
        <Image
          src="/pizza2.png"
          alt="order-pizza"
          width={400}
          height={400}
          priority
        />
        <div className="flex flex-col gap-2">
          <p>This a new pizza </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <p>choose additional ingredient</p>
          <div>
            <input type="checkbox" />
            <span>Sauce</span>
          </div>

          <div className="flex gap-4 items-center">
            <input type="number" className="p-1 border-2" />
            <CustomButton
              className="bg-[#F9B307] text-white flex items-center text-center text-[14px] justify-center gap-2 p-3 rounded-2xl  mt-3 w-[100px]"
              title="AddTOCART"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
