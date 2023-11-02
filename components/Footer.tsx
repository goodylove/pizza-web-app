import React from "react";
import { FooterLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

function Footer() {
  return (
    <footer className="flex justify-center w-full bg-[#FFFAEE] py-5">
      <div className="flex w-[95%] justify-around">
        <div className="flex gap-10  justify-between w-[60%]">
          {FooterLinks.map((link) => (
            <div key={link.title} className="flex flex-col">
              <h2 className="font-bold">{link.title}</h2>
              {link.links.map((_link) => (
                <Link href={_link.url}>{_link.title}</Link>
              ))}
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-bold">SOCIAL MEDIA</h3>
          <div className="flex gap-3">
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={20}
              height={20}
              className=""
            />
            <Image src="/printest.svg" alt="pinterest" width={20} height={20} />
            <Image src="/twitter.svg" alt="twitter" width={20} height={20} />
            <Image src="instagram.svg" alt="instgram" width={20} height={20} />
          </div>
          <p className="text-[12px]">
            Sign up and get exclusive offers and coupon codes
          </p>
          <CustomButton
            title="Sign up"
            className="bg-[#FCB400] text-white rounded-3xl p-[4px] mt-3 text-[13px]"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
