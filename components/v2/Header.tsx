"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react";
import { sectionIds } from "@/constant";

export default function Header() {
  return (
    <header className="absolute top-0 right-0 left-0 py-3 px-4 lg:px-10 flex items-start justify-between mx-auto xl:items-center drop-blur-md bg-white/10 z-[999] w-full">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* ---social icons */}
        <SocialIcon
          target="_blank"
          fgColor="#f9fafb"
          bgColor="transparent"
          url="https://www.facebook.com/thuanC4fe/"
          className="hover:text-white"
        />
        <SocialIcon
          target="_blank"
          fgColor="#f9fafb"
          bgColor="transparent"
          url="https://www.linkedin.com/in/thuan-tran-287912199/"
        />
        <SocialIcon
          target="_blank"
          fgColor="#f9fafb"
          bgColor="transparent"
          url="https://www.pinterest.com/dr4tvt/"
        />
      </motion.div>

      {/* ---info groups-- */}
      <>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className=""
        >
          <Link
            href={`#${sectionIds.contact}`}
            className="flex flex-row items-center text-gray-300 hover:text-white cursor-pointer gap-x-2 transition"
          >
            <Mail />

            <p className="font-courier uppercase hidden md:inline-flex text-base md:text-xl">
              Get In Touch
            </p>
          </Link>
        </motion.div>
      </>
    </header>
  );
}
