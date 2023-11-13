import { AiFillCloseCircle } from "react-icons/ai";

import React from "react";
import Link from "next/link";

import { eachNavLinks, NavLinksProps } from "@/Types";

function MobileNav({ navLink, toggle, setoggle }: NavLinksProps) {
  return (
    <div
      className={`border-2 h-full fixed  top-0 bg-white right-0  ${
        toggle ? "mobile " : "close "
      }`}
    >
      <div
        className={`flex justify-end px-4 mt-5 text-[40px] `}
        onClick={() => setoggle(false)}
      >
        <AiFillCloseCircle />
      </div>
      <div className=" flex flex-col gap-8 pl-4">
        {navLink?.map((navBarLinks: eachNavLinks) => (
          <Link
            href={navBarLinks.path}
            key={navBarLinks.name}
            className="font-bold font-serif hover:text-red-600"
            onClick={() => setoggle(false)}
          >
            {navBarLinks.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
