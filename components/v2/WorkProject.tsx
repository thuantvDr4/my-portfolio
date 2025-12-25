"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import ProjectItem from "./ProjectItem";
import { myProjects } from "@/database";

const WorkProject = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="min-h-screen relative flex flex-col"
    >
      {/* ---overloady-- */}
      <div className="abosulte z-10 first-line:w-full flex flex-col bg-neutral-900/40 p-3 md:px-20 py-12 md:py-24 gap-y-8 md:gap-y-24">
        {/* ---header-- */}
        <Heading name="Some of My work" />
        {/* --list items-- */}
        {myProjects.map((item, index) => {
          return <ProjectItem key={index} item={item} />;
        })}
      </div>
    </motion.div>
  );
};

export default WorkProject;
