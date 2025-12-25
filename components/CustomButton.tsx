"use client";
import { MoveUpRight } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  titleClassName?: string;
  hoverBg?: string;
};
const CustomButton: React.FC<Props> = ({
  title,
  children,
  onClick,
  className,
  titleClassName,
  hoverBg = "bg-[#38D430]",
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `flex items-center justify-center px-4 py-2 bg-transparent relative group/btn overflow-hidden transition-all rounded-full border border-cyan-500/30`,
        className
      )}
    >
      {/* --green-box-- */}
      <span
        className={twMerge(
          `rounded-tr-full w-0 h-0 absolute bottom-0 left-0 ease-out duration-500 transition-all group-hover/btn:w-full group-hover/btn:h-full -z-1 group-hover/btn:scale-[180%]`,
          hoverBg
        )}
      ></span>

      {/* --title- */}
      <div
        className={twMerge(
          `content paragraph-light w-full text-brand transition-colors duration-300 ease-in-out group-hover/btn:text-black font-medium z-10 flex items-center justify-center`,
          titleClassName
        )}
      >
        {children ? (
          children
        ) : (
          <div className="flex flex-row place-items-center justify-center gap-x-4">
            {title || "View more"}
            <div>
              <MoveUpRight
                size={16}
                className={`
                    group-hover/btn:-translate-y-1 
                    group-hover/btn:translate-x-1 
                    transition-all
                    `}
              />
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default CustomButton;
