"use client";
import React from "react";
import Image from "next/image";
import { images } from "@/constant";

import { Rocket } from "lucide-react";
import { profileMe } from "@/database";

interface Props {
  scrollTo: () => void;
}

const Hero: React.FC<Props> = ({ scrollTo }) => {
  return (
    <div className="flex flex-col items-center justify-start h-screen relative w-full font-courier">
      <Image
        fill
        alt="hero"
        src={images?.bgMountain}
        className="object-cover"
      />
      {/* --overlay-- */}
      <div className="abosulte drop-blur z-10 h-screen w-full flex flex-col items-center justify-center bg-gradient-to-t from-orange-400/30 to-sky-500/20">
        <div className="text-5xl md:text-[80px] font-bold text-center">
          {profileMe?.name}
        </div>
        <div className="text-2xl md:text-3xl font-light text-center">
          {profileMe?.position}
        </div>
      </div>
      {/* ---learn more-- */}

      <div
        onClick={scrollTo}
        className="absolute bottom-8 group z-10 flex flex-col items-center cursor-pointer text-white"
      >
        <div className="text-xl uppercase mb-1 hidden transition-all group-hover:block">
          Learn more
        </div>
        <Rocket
          size={40}
          className="group-hover:rotate-[135deg] transition-all"
        />
      </div>
    </div>
  );
};

export default Hero;
