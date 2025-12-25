"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import { images } from "@/constant";
import Heading from "./Heading";
import { Globe, Microscope, MonitorSmartphone, Wallpaper } from "lucide-react";
import { whatIDo } from "@/database";

const WhatIDo = () => {
  const CardInfo = ({
    title,
    description,
    Icon,
  }: {
    title: string;
    description: string;
    Icon: ReactNode;
  }) => {
    return (
      <>
        <div className="text-xl md:text-3xl font-medium flex uppercase items-center font-courier">
          {Icon}
          {title}
        </div>
        <div className="mt-4 text-xl font-light text-neutral-100 font-sans">
          {description}
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen relative w-full font-courier">
      <Image fill alt="hero" src={images?.bgClimp} className="object-cover" />
      {/* --overlay-- */}
      <div className="abosulte z-10 min-h-screen w-full flex flex-col items-center justify-center bg-black/50 p-2 md:py-24 md:px-20">
        {/* ---header-- */}
        <Heading name="What I Do" />

        {/* ---card-- */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full mt-12 md:mt-20 md:px-8 px-0 gap-4 md:gap-0">
          <div className="col-span-1 border-r border-b border-neutral-400 p-4 max-[600px]:border-l max-[600px]:border-t">
            <CardInfo
              Icon={<Wallpaper size={60} className="mr-5 text-neutral-300" />}
              title={whatIDo.webDevelopment.title}
              description={whatIDo?.webDevelopment?.description}
            />
          </div>

          <div className="col-span-1 border-b border-neutral-400 p-4 max-[600px]:border-l max-[600px]:border-r max-[600px]:border-t">
            <CardInfo
              Icon={
                <MonitorSmartphone
                  size={60}
                  className="mr-5 text-neutral-300"
                />
              }
              title={whatIDo.mobileDevelopment.title}
              description={whatIDo?.mobileDevelopment?.description}
            />
          </div>

          <div className="col-span-1 border-r border-neutral-400 p-4 max-[600px]:border-l max-[600px]:border-t max-[600px]:border-b">
            <CardInfo
              Icon={<Microscope size={60} className="mr-5 text-neutral-300" />}
              title={whatIDo.experienceRD.title}
              description={whatIDo?.experienceRD?.description}
            />
          </div>

          <div className="col-span-1 p-4 max-[600px]:border">
            <CardInfo
              Icon={<Globe size={60} className="mr-5 text-neutral-300" />}
              title={whatIDo.diversityTech.title}
              description={whatIDo?.diversityTech?.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
