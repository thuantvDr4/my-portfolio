import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  className?: string;
};

const TagText = ({ text, className }: Props) => {
  return (
    <div
      className={twMerge(
        `
        px-3 py-1
        flex items-center
        justify-center
        text-cyan-400
        text-xs
        bg-cyan-300/15
        rounded-full
        `,
        className
      )}
    >
      {text}
    </div>
  );
};

export default TagText;
