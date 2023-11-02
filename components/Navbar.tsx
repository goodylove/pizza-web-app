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
        src="https://res.cloudinary.com/pizza-web-app/image/upload/dpr_3.0/v1698917789/trhn4epreguzsyq66uc0.png"
        alt="logo"
        width={100}
        height={100}
        className=" object-contain"
      />
      <Image src="/printest.svg" alt="icon" width={30} height={30} />

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
