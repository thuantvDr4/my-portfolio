"use client";
import About from "@/components/v2/About";
import ContactMe from "@/components/v2/ContactMe";
import Hero from "@/components/v2/Hero";
import Skills from "@/components/v2/skills";
import { sectionIds } from "@/constant";
import WhatIDo from "@/components/v2/WhatIDo";
import Wave from "@/components/Wave";
import WorkExperience from "@/components/v2/WorkExperience";
import WorkProject from "@/components/v2/WorkProject";

export default function Sections() {
  //--scroll to section
  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div
      id="section-id"
      className="text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-500 h-screen relative overflow-hidden"
    >
      <section id={sectionIds?.hero}>
        <Hero scrollTo={() => scrollToSection(sectionIds?.about)} />
      </section>
      {/* --About--- */}
      <section id={sectionIds?.about}>
        <About />
      </section>

      {/* --what i do--- */}
      <section id={sectionIds?.whatIDo}>
        <WhatIDo />
      </section>

      {/* --skills--- */}
      <section id={sectionIds?.skills}>
        <Skills />
      </section>

      {/* ---work experience-- */}
      <section id={sectionIds?.experience}>
        <WorkExperience />
      </section>

      {/* ---projects-- */}
      <section id={sectionIds?.projects}>
        <WorkProject />
      </section>

      {/* ---contact me-- */}
      <section id={sectionIds?.contact}>
        <ContactMe />
      </section>
      {/* ---sticker-- */}
      {/* <Sticker /> */}
      {/* ----wave-- */}
      <div className="opacity-40">
        <Wave />
      </div>
    </div>
  );
}
