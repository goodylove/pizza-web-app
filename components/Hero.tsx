import React from "react";
import { BsCart2 } from "react-icons/bs";

import { CustomButton, Dailyfresh } from ".";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex   flex-col md:flex-row items-start justify-between overflow-hidden h-full w-full  ">
      <div className="pl-6 my-6">
        <h3 className=" md:text-[4rem] font-[700] max-w-[450px] leading-[69.90px] text-[3rem]">
          Handmade, With an Extra Pinch of{" "}
          <span className="text-red-500">Love</span>
        </h3>
        <p className="text-gray-400 text-start md:text-[1.3rem] md:max-w-[57%] my-5 text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <CustomButton
          className="bg-[#F9B307] text-white flex items-center text-center text-[24px] justify-center gap-2 p-3 rounded-2xl mt-3 w-[200px]"
          title="Order now"
          icon={<BsCart2 />}
        />
      </div>

      <Image
        src="/banner-img.png"
        alt="banner-img"
        width={300}
        height={300}
        className="md:hidden flex ml-10"
      />

      <div className="relative md:right-[-250px] hidden md:flex mt-10 md:mt-0">
        <Image
          src="/banner-img.png"
          alt="banner-img"
          width={300}
          height={300}
          className="absolute  md:left-[-130px] top-16 z-50 object-contain"
        />
        <Image
          src="/leaf.png"
          alt="banner-img"
          width={300}
          height={300}
          className="md:absolute top-0 left-0 object-contain "
        />

        <Image
          src="/banner-img-bottom.png"
          alt="banner-img"
          width={150}
          height={150}
          className="md:absolute bottom-0 left-[-6px] object-contain "
        />

        <div className="w-[537.865px] bg-[#fbb200] rounded-[100%]    h-[537.865px]   hidden  lg:flex"></div>
      </div>
      <Image
        src="/onion.png"
        alt="banner-img"
        width={80}
        height={80}
        className="absolute bottom-0 md:left-[490px] object-contain "
      />
    </section>
  );
}

export default Hero;
