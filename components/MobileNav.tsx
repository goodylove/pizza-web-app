import { NavBarLinks } from "@/constants";
import Link from "next/link";
import React from "react";

function MobileNav() {
  return (
    <div className="border-2">
      {NavBarLinks.map((navBarLinks) => (
        <Link href={navBarLinks.path}>{navBarLinks.name}</Link>
      ))}
    </div>
  );
}

export default MobileNav;
