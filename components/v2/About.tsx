"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutMe } from "@/database";
import { twMerge } from "tailwind-merge";
import { images } from "@/constant";

const About = () => {
  //----render content
  const RenderContent = ({ className }: { className: string }) => {
    return (
      <div className={twMerge(`space-y-4 h-full block md:hidden`, className)}>
        {aboutMe.contents.map((content, index) => (
          <div key={index} className="text-xl font-sans font-light">
            <span className="font-bold mr-2">{content.highlight}</span>
            {content.text}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full px-8 md:px-20 py-24  min-h-screen font-serif bg-neutral-500/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full h-full gap-8">
        {/* --col-L */}
        <div className="col-span-1 lg:col-span-3">
          <h1 className="text-3xl md:text-5xl font-semibold ">{`Hey, I'm Vinh Thuan.`}</h1>

          <h5 className="font-courier text-xl md:text-2xl mt-8 font-medium">
            {aboutMe?.short_description}
          </h5>
          {/* --line-- */}
          <div className="rounded-full h-[2px] w-[200px] bg-cyan-500 my-8" />

          {/* --contents- */}
          <RenderContent className="hidden md:block" />
        </div>

        {/* --col-R- */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-start pt-0 md:pt-10">
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[300px] rounded-full bg-yellow-100/60 md:h-[500px] aspect-square overflow-hidden relative"
          >
            <Image
              alt="me"
              src={images.me}
              fill
              className="object-center object-contain"
            />
          </motion.div>

          {/* --contents- */}
          <RenderContent className="block md:hidden mt-8" />
        </div>
      </div>
    </div>
  );
};

export default About;
