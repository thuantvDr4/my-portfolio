"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import Heading from "./Heading";
import { BrainCircuit, Check, Cog, PencilRuler } from "lucide-react";
import { mySkills } from "@/database";

const skills = () => {
  //-----title
  const TitleItem = ({ Icon, title }: { Icon: ReactNode; title: string }) => {
    return (
      <div className="flex items-center gap-x-4 uppercase text-white">
        {Icon}
        <h1 className="text-2xl text-white">{title}</h1>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative w-full font-courier">
      {/* --overlay-- */}
      <div className="abosulte z-10 min-h-screen w-full flex flex-col items-center justify-start bg-neutral-900/40 p-3 md:py-20 md:px-20">
        {/* ---header-- */}
        <Heading name="Skills" />

        {/* ----contents-- */}
        <div className="grid grid-cols-1 md:grid-cols-5 h-full w-full mt-12 flex-1 gap-4 md:gap-20">
          {/* ---col-1 */}
          <div className="col-span-1 md:col-span-2 h-full w-full">
            {/* ---title */}
            <TitleItem Icon={<Cog size={40} />} title="development" />

            {/* ---items-- */}
            <div className="w-full flex flex-wrap gap-4  mt-4 md:mt-8">
              {mySkills.development.map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="w-[100px] h-[100px] rounded-full border border-neutral-500/60 flex items-center justify-center p-[2px] font-sans text-neutral-200 text-sm">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---col-2 */}
          <div className="col-span-1 md:col-span-3 flex flex-col">
            {/* --libs & sdk */}
            <div className="">
              {/* ---title */}
              <TitleItem Icon={<Cog size={40} />} title="Libs & SDKs" />

              {/* ---items-- */}
              <div className="flex flex-wrap items-center mt-4 md:mt-8 gap-5">
                {mySkills?.libs_skd.map((item, index) => (
                  <div key={index}>
                    <div className="relative w-[60px] h-[60px] rounded overflow-hidden group border border-neutral-600/50">
                      <Image
                        src={item?.icon}
                        fill
                        className="object-center object-cover"
                        alt="logo ap"
                      />
                      <div className="absolute inset-0 text-center items-center justify-center bg-neutral-600/80 hidden group-hover:flex transition-all text-sm">
                        {item?.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --tool&knowledge */}
            <div className="grid grid-cols-2 gap-1 md:gap-4 mt-20">
              {/* --tool */}
              <div className="col-span-1">
                {/* ---title */}
                <TitleItem Icon={<PencilRuler size={40} />} title="Tools" />

                {/* --items-- */}
                <div className="p-4 gap-y-2 flex flex-col">
                  {mySkills.tools.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-neutral-200 font-sans"
                    >
                      <Check size={16} className="mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* --knowledge- */}
              <div className="col-span-1">
                {/* ---title */}
                <TitleItem
                  Icon={<BrainCircuit size={40} />}
                  title="Knowledge"
                />

                {/* --items- */}
                <div className="p-4 gap-y-2 flex flex-col">
                  {mySkills.knowledge.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-neutral-200 font-sans"
                    >
                      <Check size={16} className="mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
