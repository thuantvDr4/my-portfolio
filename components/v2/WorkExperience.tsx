"use client";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Image from "next/image";
import { images } from "@/constant";
import Heading from "./Heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { myExperience } from "@/database";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen relative">
      {/* --image-bg-- */}
      <Image fill alt="hero" src={images?.bgDawn} className="object-cover" />
      {/* --overlay-- */}
      <div className="abosulte inset-0 z-20 bg-neutral-800/50 flex-1 w-full h-full">
        {/* ---content-- */}
        <div className="w-full h-full  flex flex-col justify-start py-12 md:py-24">
          <Heading name="Experience" className="flex items-center" />
          {/*---time-line--  */}
          <VerticalTimeline
            lineColor="#00B7C7"
            animate={false}
            className="flex-1"
          >
            {myExperience.map((item, index) => {
              const Icon = item.icon;
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#212121",
                    color: "#fff",
                    boxShadow: "none",
                  }}
                  contentArrowStyle={{
                    borderTop: "16px solid  transparent",
                    borderRight: "20px solid  #212121",
                    borderBottom: "16px solid  transparent",
                  }}
                  date={item?.work_time}
                  dateClassName="text-white font-bold"
                  iconClassName="hover:bg-cyan-700 bg-neutral-800 transition-all"
                  iconStyle={{
                    //   background: "#212121",
                    color: "#fff",
                    boxShadow: "none",
                  }}
                  icon={<Icon />}
                >
                  <h3 className="vertical-timeline-element-title text-white font-bold uppercase text-xl">
                    {item?.work_at}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-cyan-400 font-semibold">
                    {item?.position}
                  </h4>
                  <p>{item?.description}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>

      <div className="h-20 w-full bg-cyan-700 z-10 flex items-center justify-center font-courier text-xl font-semibold uppercase text-white hover:bg-cyan-600 transition-all cursor-pointer group flex-col">
        <div className="block group-hover:hidden transition-all">
          View my full resume
        </div>
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
            scale: 0.5,
          }}
          viewport={{ once: true }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="hidden group-hover:flex items-center justify-center transition-all"
        >
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download size={40} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkExperience;
