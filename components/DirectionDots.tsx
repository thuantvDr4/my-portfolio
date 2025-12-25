"use client";

import { sectionIds } from "@/constant";
import { useAppContext } from "@/provider/AppProvider";
import { SectionId } from "@/types";
import React, { useMemo } from "react";
import { twMerge } from "tailwind-merge";

const DirectionDots = () => {
  const { activeSectionId } = useAppContext();

  const goToSection = (id: SectionId) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  //-----
  const sectionDots = useMemo(() => {
    return [
      { id: sectionIds?.hero, name: "Hero" },
      { id: sectionIds?.about, name: "About me" },
      { id: sectionIds?.whatIDo, name: "What I do" },
      { id: sectionIds?.skills, name: "Skills" },
      { id: sectionIds?.experience, name: "Experience" },
      { id: sectionIds?.projects, name: "Some of my work" },
      { id: sectionIds?.contact, name: "Contact" },
    ];
  }, []);

  return (
    <div className="absolute right-10 top-[45%] z-[999]">
      <div className="flex flex-col gap-y-4 md:gap-y-8">
        {sectionDots.map((item, index) => {
          return (
            <button
              onClick={() => goToSection(item?.id as SectionId)}
              key={index}
              className={twMerge(
                `bg-neutral-300/30 w-4 h-4 rounded-full group relative`,
                item.id === activeSectionId && "bg-cyan-500/90"
              )}
            >
              <div className="group-hover:block hidden absolute right-8 -bottom-[2px] w-[200px] text-right transition-all font-courier">
                {item?.name}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DirectionDots;
