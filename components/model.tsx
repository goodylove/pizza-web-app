import React from "react";
import { CustomButton } from ".";
import Link from "next/link";

function Model() {
  return (
    <div className="h-screen w-full fixed top-0 backdrop-blur-xl bg-white/30 insert-0   opacity-1  z-50 flex items-center justify-center">
      <div className="bg-white z-50 rounded-md shadow-md flex justify-center flex-col  w-72 px-3 py-3 ">
        <h2 className=" font-semibold py-2">You will pay $23 on delivery</h2>
        <form
          action=""
          className=" flex justify-center flex-col items-center space-y-3"
        >
          <div className="flex flex-col">
            <label htmlFor="fullname " className="font-bold text-sm py-1">
              FullName
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="border p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phonenumber" className="font-bold text-sm py-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phonenumber"
              name="phonenumber"
              className="border p-1 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="font-bold text-sm py-1">
              Address
            </label>
            <textarea
              name=""
              id="address"
              cols={22}
              rows={4}
              className="border p-1 rounded-md"
            ></textarea>
          </div>
          <Link href="/order">
            <CustomButton
              className="bg-[#F9B307] text-white flex items-center text-center text-sm justify-center gap-2 p-2 rounded-2xl border-black border    shadow-xl mt-3 w-20"
              title="Order"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Model;
