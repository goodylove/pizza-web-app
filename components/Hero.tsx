import React from "react";
import { BsCart2 } from "react-icons/bs";

import { CustomButton } from ".";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between overflow-hidden h-full w-full  ">
      <div className="pl-6">
        <h3 className=" text-[4rem] font-[700] w-[450px] leading-[69.90px]">
          Handmade, With an Extra Pinch of Love
        </h3>
        <p className="text-gray-400 text-start text-[1.7rem] max-w-[57%] my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <CustomButton
          className="bg-[#F9B307] text-white flex items-center text-center text-[24px] justify-center gap-2 p-3 rounded-2xl mt-3 w-[200px]"
          title="Order now"
          icon={<BsCart2 />}
        />
      </div>

      <div className="relative ">
        <div className="w-[557.865px] bg-[#fbb200] rounded-[100%]   h-[557.865px] right-[-14rem]  absolute  "></div>
      </div>
    </section>
  );
}

export default Hero;
