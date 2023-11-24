import { CustomButton } from "@/components";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import ProductCard from "./../../components/ProductCard";
import { productDetails } from "@/constants";

function Product() {
  return (
    <section className="w-full my-3 px-5">
      <div className="flex justify-between md:px-5 w-full items-center">
        <div className="">
          <CustomButton
            className="bg-[#F9B307] text-white flex items-center text-center text-xs justify-center gap-2 p-3 rounded-2xl mt-3 w-24"
            title="Filter"
            icon={<BsCart2 />}
          />
          <CustomButton
            className="bg-[#F9B307] text-white flex items-center text-center text-xs justify-center gap-2 p-3 rounded-2xl mt-3  w-24"
            title="Add Product"
          />
        </div>
        <div className="flex items-center gap-3 flex-col md:flex-row">
          <h2 className="font-[700]">Showing all Result</h2>
          <select name="" id="" className="border-2 p-1 rounded-md">
            <option value="pizza">Default sorting</option>
            <option value="buger">buger</option>
            <option value="pizzaa">pizza</option>
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4  md:grid-cols-3   grid-cols-1 justify-items-center  gap-5  ">
        {productDetails.map((item) => (
          <ProductCard key={item.name} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Product;
