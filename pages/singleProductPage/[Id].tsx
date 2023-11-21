import { CustomButton } from "@/components";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { productDetails } from "@/constants";

function SingleProduct() {
  const router = useRouter();
  let id = router.query;

  const eachProduct = productDetails.find((item) => item.id === Number(id.Id));
  console.log(eachProduct, id.Id);

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center gap-7 items-center flex-col md:flex-row">
        <Image
          src={eachProduct ? eachProduct.img : ""}
          alt="order-pizza"
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col gap-3">
          <p className="text-red-400">${eachProduct?.price} </p>
          <p className="text-base font-bold">{eachProduct?.name} </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="text-sm">choose additional ingredient</p>
          <div className="flex gap-1">
            <input type="checkbox" />
            <span>Sauce</span>
          </div>

          <div className="flex gap-4 ">
            <input type="number" className="p-1 border-2 rounded-md" />
            <CustomButton
              className="bg-[#F9B307] text-white flex items-center text-center text-sm justify-center gap-2 p-3 rounded-2xl   w-32"
              title="Add To Cart"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
