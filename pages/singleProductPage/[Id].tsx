import { CustomButton } from "@/components";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { productDetails } from "@/constants";

function SingleProduct() {
  const router = useRouter();
  let id = router.query;

  const eachProduct = productDetails.find((item) => item.id === Number(id.Id));

  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex justify-center gap-7 items-center flex-col md:flex-row space-x-10">
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
          <div>
            <p className="font-semibold">Choose pizza size</p>
            <div className="flex gap-5 items-center space-x-7">
              <div className="relative">
                <Image src="/pizza-icon.png" alt="" width={20} height={20} />
                <span className="bg-red-500 text-white absolute text-xs rounded-3xl px-1 top-[-6px] flex items-center  left-2  justify-center">
                  small
                </span>
              </div>
              <div className="relative">
                <Image src="/pizza-icon.png" alt="" width={30} height={30} />
                <span className="bg-red-500 text-white absolute text-xs rounded-3xl px-1 top-[-6px] flex items-center   left-3 justify-center">
                  medium
                </span>
              </div>
              <div className="relative">
                <Image src="/pizza-icon.png" alt="" width={50} height={50} />
                <span className="bg-red-500 text-white absolute text-xs rounded-3xl px-1 top-[-6px] flex items-center   justify-center left-8">
                  large
                </span>
              </div>
            </div>
          </div>
          <p className="text-sm font-semibold">choose additional ingredient</p>
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
