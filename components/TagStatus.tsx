import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

type VariantType = "info" | "processing" | "success" | "error" | "warning";
type TagStatusProps = {
  name: string;
  variant: VariantType;
  hideDot?: boolean;
  textSize?: "sm" | "base" | "lg" | "xl";
  shape?: "round" | "square";
  className?: string;
  nameStyle?: string;
};

const TagStatus: React.FC<TagStatusProps> = ({
  name,
  variant = "processing",
  hideDot,
  shape = "round",
  className,
  nameStyle,
}) => {
  const Dot = () => {
    let dotColor = "";
    switch (variant) {
      case "info": {
        dotColor = "bg-cyan-600";
        break;
      }
      case "processing": {
        dotColor = "bg-blue-600";
        break;
      }
      case "success": {
        dotColor = "bg-green-600";
        break;
      }
      case "error": {
        dotColor = "bg-red-600";
        break;
      }
      case "warning": {
        dotColor = "bg-amber-500";
        break;
      }
    }
    return (
      <div
        className={twMerge(
          `
      h-[6px]
       w-[6px] 
       rounded-full 
       `,
          dotColor
        )}
      ></div>
    );
  };

  const _tagColor = useMemo(() => {
    switch (variant) {
      case "info": {
        return {
          text: "text-cyan-500",
          border: "border-cyan-500/30",
        };
      }
      case "processing": {
        return {
          text: "text-blue-500",
          border: "border-blue-500/30",
        };
      }
      case "success": {
        return {
          text: "text-green-500",
          border: "border-green-500/30",
        };
      }
      case "error": {
        return {
          text: "text-red-500",
          border: "border-red-600/30",
        };
      }
      case "warning": {
        return {
          text: "text-amber-500",
          border: "border-amber-500/30",
        };
      }
    }
  }, [variant]);

  return (
    <div
      className={twMerge(
        `
          bg-neutral-800
          rounded-full 
          px-2 
          py-[2px] 
          border
         flex 
        flex-row 
        items-center
        space-x-2
        w-fit
          `,
        _tagColor?.border,
        _tagColor?.text,
        shape === "square" && "rounded",
        className
      )}
    >
      {!hideDot && <Dot />}
      <p className={twMerge(`text-sm`, nameStyle)}>{name}</p>
    </div>
  );
};

export default TagStatus;
