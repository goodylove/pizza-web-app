"use client";

import { NavBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import React from "react";

function NavBar() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <nav className="flex justify-between  items-center gap-28 md:px-10 py-4 px-3 cursor-pointer">
      <Image
        src="/logo.png"
        alt="logo"
        width={70}
        height={70}
        className=" object-contain"
        priority
      />

      <div className="flex justify-center items-center gap-6 font-bold font-serif">
        <div className=" gap-10 hidden md:flex">
          {NavBarLinks.map((item) => (
            <Link href={item.path} key={item.name}>
              {item.name}
            </Link>
          ))}
        </div>
        <FiSearch />
        <div className="relative">
          <BsCart2 className="text-blue-500 text-[25px]" />
          <div className="h-4 w-4 text-[10px] rounded-full bg-red-500 text-white flex  left-3 absolute top-[-2px] justify-center items-center">
            0
          </div>
        </div>
        <div className="md:hidden flex text-[40px]  transform ease-in-out">
          {toggle ? (
            <AiFillCloseCircle onClick={() => setToggle(false)} />
          ) : (
            <BiMenuAltLeft onClick={() => setToggle((prev) => !prev)} />
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
