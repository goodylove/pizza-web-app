import { NavBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between  items-center gap-28 px-10 py-4">
      <Image
        src="/logo.png"
        alt="logo"
        width={80}
        height={80}
        className=" object-contain"
      />

      <div className="flex justify-center items-center gap-6 font-bold font-serif">
        {NavBarLinks.map((item) => (
          <Link href={item.path} key={item.name}>
            {item.name}
          </Link>
        ))}
        <FiSearch />
        <div className="relative">
          <BsCart2 className="text-blue-500 text-[25px]" />
          <div className="h-4 w-4 text-[10px] rounded-full bg-red-500 text-white flex  left-3 absolute top-[-2px] justify-center items-center">
            0
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
