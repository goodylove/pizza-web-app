import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import { BsCart2 } from "react-icons/bs";

function ProductCard() {
  return (
    <div className="w-[270px] max-h-[330px] flex flex-col border-2  mt-10 mx-10 rounded-lg shadow-md px-2 py-5 items-center">
      <div className="w-[170px] h-[200px] flex justify-center items-center">
        <Image
          src="/pizza2.png"
          width={70}
          height={100}
          alt="pizzaName"
          priority
          className=" object-contain w-full"
        />
      </div>
      <div className="w-full  ">
        <div className="flex justify-between font-bold my-1 ">
          <span>New Pizza</span>
          <span className="text-red-400">$89.00</span>
        </div>
        <div className="flex">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((_, i) => (
            <Image
              src="/rating.png"
              width={20}
              height={20}
              alt="rating"
              priority
              key={i}
            />
          ))}
        </div>
        <p>This is new pizza</p>
        <CustomButton
          className="bg-[#F9B307] text-white flex items-center gap-2 p-2 rounded-2xl mt-3"
          title="Order now"
          icon={<BsCart2 />}
        />
      </div>
    </div>
  );
}

export default ProductCard;
