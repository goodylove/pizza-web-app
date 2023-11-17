import { CustomButton } from "@/components";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import ProductCard from "./../../components/ProductCard";

function Product() {
  return (
    <section className="w-full">
      <div className="flex justify-between px-5 w-full">
        <CustomButton
          className="bg-[#F9B307] text-white flex items-center text-center text-[24px] justify-center gap-2 p-3 rounded-2xl mt-3 w-[200px]"
          title="Order now"
          icon={<BsCart2 />}
        />
      </div>
      <div>
        <h2>Showing all Result</h2>
        <select name="" id="">
          <option value="pizza">pizza</option>
          <option value="buger">buger</option>
          <option value="beef">beef</option>
        </select>
      </div>
    </section>
  );
}

export default Product;
