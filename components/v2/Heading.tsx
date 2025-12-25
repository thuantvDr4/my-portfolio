import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  className?: string;
};

const Heading = ({ name, className }: Props) => {
  return (
    <div
      className={twMerge(
        `w-full flex flex-col font-serif text-neutral-200 gap-y-8 text-3xl md:text-5xl font-semibold`,
        className
      )}
    >
      <h1 className="">{name}</h1>

      <div className="w-[120px] rounded-full h-[2px] bg-cyan-500"></div>
    </div>
  );
};

export default Heading;
