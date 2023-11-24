import React from "react";
import { ProductCard, Subtitle } from ".";
import { productDetails } from "@/constants";

function BrowserMenu() {
  return (
    <section className="px-5 my-10">
      <Subtitle title="Popular Dishes" />
      <p className="my-6 md:text-[40px] font-[600]  text-[29px]">
        Browse Our Menu
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3   grid-cols-1 justify-items-center  gap-5 ">
        {productDetails.map((item) => (
          <ProductCard key={item.name} data={item} />
        ))}
      </div>
    </section>
  );
}

export default BrowserMenu;
