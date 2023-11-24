import React from "react";
import { FooterLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

function Footer() {
  return (
    <footer className="flex justify-center w-full bg-[#FFFAEE] py-5 bottom-0  ">
      <div className="flex w-[95%] justify-around flex-col gap-4 md:flex-row">
        <div className="flex gap-10  pl-5 flex-col  justify-between w-[60%] md:flex-row">
          {FooterLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-2  font-serif">
              <h2 className="font-bold">{link.title}</h2>
              {link.links.map((_link) => (
                <Link
                  href={_link.url}
                  className="text-gray-500"
                  key={_link.title}
                >
                  {_link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pl-5">
          <h3 className="font-bold">SOCIAL MEDIA</h3>
          <div className="flex gap-5">
            <Link
              href=""
              className="bg-[#4154A2] w-9 h-9 flex justify-center items-center text-white rounded"
            >
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={20}
                height={20}
                className=""
              />
            </Link>

            <Link
              href=""
              className="bg-[#CE202A] w-9 h-9 flex justify-center items-center text-white rounded"
            >
              <Image
                src="/printest.svg"
                alt="pinterest"
                width={20}
                height={20}
              />
            </Link>

            <Link
              href=""
              className={` w-9 h-9 flex justify-center items-center text-white rounded bg-[#2DABDD]`}
            >
              <Image src="/twitter.svg" alt="twitter" width={20} height={20} />
            </Link>

            <Link
              href=""
              className="bg-[#D84D36] w-9 h-9 flex justify-center items-center text-white rounded"
            >
              <Image
                src="instagram.svg"
                alt="instgram"
                width={20}
                height={20}
              />
            </Link>
          </div>
          <p className="text-[12px]">
            Sign up and get exclusive offers and coupon codes
          </p>
          <CustomButton
            title="Sign up"
            className="bg-[#FCB400] text-white rounded-2xl p-[5px] mt-3 text-[13px] w-20 h-8 "
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
