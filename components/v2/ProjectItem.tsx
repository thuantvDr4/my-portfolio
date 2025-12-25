"use client";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import CustomButton from "../CustomButton";
import TagText from "../TagText";
import { Project } from "@/types";

interface Props {
  item: Project;
}

const ProjectItem: React.FC<Props> = ({ item }) => {
  const gotoLink = (link?: string) => {
    // window.location.href = link!; // Thay URL này bằng URL bạn muốn
    window?.open(link, "_blank");
  };

  return (
    <div
      className={twMerge(`
       w-full md:w-[80%]
        h-full
         flex
         flex-col
         items-start
    `)}
    >
      {/* ---image-- */}
      <div className="w-full aspect-[16/6] relative overflow-hidden rounded">
        <Image
          alt="project-item"
          src={item?.image}
          fill
          className="object-center object-contain"
        />
      </div>
      {/* ---project name */}
      <div className="flex flex-wrap items-center justify-between w-full mt-4 md:mt-8 gap-2">
        <h1 className="text-white font-bold md:text-2xl uppercase truncate">
          {item?.name}
        </h1>
        <CustomButton
          onClick={() => gotoLink(item?.link)}
          title="View Page"
          className="z-20"
          titleClassName="text-sm"
          hoverBg="bg-yellow-400"
        />
      </div>

      {/* --description-- */}
      <div className="text-neutral-300 mt-4 md:mt-8 md:text-lg">
        {item?.descriptions}
      </div>

      {/* ---technical items-- */}
      <div className="flex flex-wrap gap-2 mt-4 md:mt-8">
        {item?.technicals.map((tag, index) => (
          <TagText
            key={index}
            text={tag}
            className="bg-neutral-600/40 text-neutral-500 text-sm rounded"
          />
        ))}
      </div>

      {/* --line-- */}
      <div className="h-[2px] bg-cyan-500 w-[20%] mt-8 md:mt-24 rounded-full" />
    </div>
  );
};

export default ProjectItem;
