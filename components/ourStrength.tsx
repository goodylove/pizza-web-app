import React from "react";
import { Subtitle } from ".";
import { ourStrengthDetils } from "@/constants";
import Image from "next/image";

function OurStrength() {
  return (
    <section className="flex justify-center w-full p-5 bg-[#FFFAEE] my-6 relative">
      <div className="p-5 ">
        <Subtitle title="Our Strength" />
        <p className="my-6 md:text-[40px]  text-[25px] font-[700]">
          Why We Are The Best?
        </p>

        <Image
          src="/strength-vacter.png"
          alt="strength-vacter"
          width={300}
          height={300}
          priority
          className="object-contain absolute right-1 top-10 hidden md:flex"
        />

        <div className=" flex gap-5  flex-col md:flex-row sm:flex-col lg:flex-row p-5  ">
          {ourStrengthDetils.map((item) => (
            <div key={item.title}>
              <Image
                src={item.img}
                alt={item.title}
                width={50}
                height={50}
                priority
                className="object-contain"
              />
              <h2 className="text-[18px] my-3 font-[500]">{item.title}</h2>
              <p className="text-gray-500 text-[18px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStrength;
