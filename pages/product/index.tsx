import { CustomButton } from "@/components";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import ProductCard from "./../../components/ProductCard";

function Product() {
  return (
    <section className="w-full my-3 px-5">
      <div className="flex justify-between px-5 w-full">
        <div className="">
          <CustomButton
            className="bg-[#F9B307] text-white flex items-center text-center text-[14px] justify-center gap-2 p-3 rounded-2xl mt-3 w-[120px]"
            title="Filter"
            icon={<BsCart2 />}
          />
        </div>
        <div className="flex items-center gap-3">
          <h2 className="font-[700]">Showing all Result</h2>
          <select name="" id="" className="border-2 p-1 rounded-md">
            <option value="pizza">Default sorting</option>
            <option value="buger">buger</option>
            <option value="pizzaa">pizza</option>
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3   grid-cols-1 justify-items-center  gap-5 ">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default Product;
