import Image from "next/image";
import React from "react";

function Dailyfresh() {
  return (
    <div className="flex  gap-20 items-center  my-7 flex-col-reverse md:flex-row ">
      <Image
        src="/daily-fresh.png"
        alt="dailyfresh"
        width={400}
        height={400}
        className="object-contain"
      />
      <div>
        <h2 className="text-[30px] font-semibold max-w-[230px]">
          Daily fresh and always tasty
        </h2>
        <p className="max-w-[280px] text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but
          the majority haved
        </p>
      </div>
      <Image
        src="/daily-fresh-vacter.png"
        alt="dailyfresh-oino"
        width={150}
        height={150}
        priority
        className="object-contain"
      />
    </div>
  );
}

export default Dailyfresh;
