import { AiFillCloseCircle } from "react-icons/ai";

import React from "react";
import Link from "next/link";

import { eachNavLinks, NavLinksProps } from "@/Types";

function MobileNav({ navLink, toggle }: NavLinksProps) {
  return (
    <div
      className={`border-2 h-full fixed w-[300px] top-0 z-50 right-0 bg-white ease-in-out transition-transform`}
    >
      <div
        className={`flex justify-end px-4 my-5 text-[40px] `}
        onClick={() => toggle(false)}
      >
        <AiFillCloseCircle />
      </div>
      <div className=" flex flex-col gap-8 pl-4">
        {navLink?.map((navBarLinks: eachNavLinks) => (
          <Link
            href={navBarLinks.path}
            className="font-bold font-serif hover:text-red-600"
            onClick={() => toggle(false)}
          >
            {navBarLinks.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
