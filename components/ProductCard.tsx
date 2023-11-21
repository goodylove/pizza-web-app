import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import { BsCart2 } from "react-icons/bs";
import { ProductProps, ProuctDetailsProps } from "@/Types";

function ProductCard({ data }: ProuctDetailsProps) {
  return (
    <div className="w-[300px] max-h-[350px] flex flex-col border-2  mt-10 mx-10 rounded-lg shadow px-2 py-5 items-center">
      <div className="w-[170px] h-[200px] flex justify-center items-center">
        <Image
          src={data.img}
          width={70}
          height={70}
          alt="pizzaName"
          priority
          className=" w-full object-cover transition-transform transform hover:rotate-45  cursor-pointer"
        />
      </div>
      <div className="w-full  ">
        <div className="flex justify-between font-bold my-1 ">
          <span>{data.name}</span>
          <span className="text-red-400">${data.price}</span>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((_, i) => (
            <Image
              src="/rating.png"
              width={15}
              height={15}
              alt="rating"
              priority
              key={i}
            />
          ))}
        </div>
        <p className="text-gray-500 text-[14px] my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <CustomButton
          className="bg-[#F9B307] text-white flex items-center text-center justify-center gap-2 p-2 rounded-2xl mt-3 w-[150px]"
          title="Order now"
          icon={<BsCart2 />}
        />
      </div>
    </div>
  );
}

export default ProductCard;
