"use client";

import { NavBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import React from "react";
import { MobileNav } from ".";

function NavBar() {
  const [toggle, setToggle] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  const pathname = usePathname();

  React.useEffect(() => {
    const handleSroll = () => {
      setScroll(window.scrollY === 0 ? false : true);
    };
    window.addEventListener("scroll", handleSroll);

    return () => window.removeEventListener("scroll", handleSroll);
  }, []);

  return (
    <nav
      className={`flex justify-between  items-center gap-28 md:px-10  py-2 px-3 cursor-pointer  w-full ease-in-out transition-all  ${
        scroll ? "fixed  top-0   z-50 bg-white" : ""
      }`}
    >
      <Image
        src="/logo (1).png"
        alt="logo"
        width={70}
        height={70}
        className={` object-contain ${
          scroll ? "w-[50px]" : ""
        } w-[30px] md:w-[60px]`}
        priority
      />
      {scroll ? (
        ""
      ) : (
        <Image
          src="/header-img.png"
          alt="header-logo"
          priority
          width={150}
          height={150}
          className=" ease-in-out transition-all md:flex hidden"
        />
      )}

      <div className="flex justify-center items-center gap-6 font-bold font-serif">
        <div className=" gap-7  hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
          {NavBarLinks.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={`${
                pathname === item.path ? "text-red-600 " : ""
              } text-[17px] font-bold hover:text-red-600`}
            >
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
         
            <BiMenuAltLeft onClick={() => setToggle((prev) => !prev)} />
         
        </div>
      </div>
      {toggle ? (
        <MobileNav navLink={NavBarLinks} setoggle={setToggle} toggle={toggle} />
      ) : (
        ""
      )}
    </nav>
  );
}

export default NavBar;
