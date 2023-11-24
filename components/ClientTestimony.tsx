import React from "react";
import { ClientCard, Subtitle } from ".";
import { ClientsDetails } from "@/constants";
import { CLientCardProps } from "@/Types";
import Image from "next/image";

function ClientTestimony() {
  return (
    <section className="w-full p-5">
      <Image src="/leaf.png" alt="leaf" width={40} height={40} />
      <h3 className="before:content-[' '] before:absolute before:w-[90px] before:h-[3px] before:bg-red-500 before:top-[50%] translate-y-[50%] md:before:left-[19%]   before:left-[66%]   font-semibold text-red-500 text-[24px]">
        Customer Feedback
      </h3>
      <p className="my-6 md:text-[40px]  text-[29px] font-[700]">
        Client Testimonials
      </p>

      <div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3  justify-items-center">
        {ClientsDetails.map((client) => (
          <div className="" key={client.name}>
            <ClientCard client={client} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientTestimony;
