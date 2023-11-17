import { CLientCardProps } from "@/Types";
import Image from "next/image";
import React from "react";

function ClientCard({ client }: CLientCardProps) {
  return (
    <div className="flex justify-center max-w-[298.846px] border  h-[320px]  rounded-md">
      <div className="w-full  flex flex-col items-center gap-5 p-10">
        <Image
          src={client.img}
          alt="client-pic"
          width={80}
          height={80}
          priority
          className="object-cover rounded-full"
        />
        <h3 className="font-[500] text-[20px]">{client.name}</h3>
        <p className="text-center text-[14px]">{client.text}</p>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((_, i) => (
            <Image
              src="/rating.png"
              width={15}
              height={15}
              alt="rating"
              priority
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
