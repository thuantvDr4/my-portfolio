"use client";

import { sectionIds } from "@/constant";
import { SectionId } from "@/types";
import React, { ReactNode, useContext, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

interface AppData {
  activeSectionId: SectionId;
}

const AppContext = React.createContext<AppData>({
  activeSectionId: "hero",
});

const AppProvider = ({ children }: Props) => {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>("hero");

  useEffect(() => {
    const divThatIsScrolling = document.getElementById("section-id");
    if (!!divThatIsScrolling) {
      const handleScroll = () => {
        console.log("-------position");
        console.log(divThatIsScrolling.scrollTop);

        let _key = sectionIds?.hero;

        if (divThatIsScrolling.scrollTop > 400) {
          _key = sectionIds?.about;
        }
        if (divThatIsScrolling.scrollTop > 1200) {
          _key = sectionIds?.whatIDo;
        }
        if (divThatIsScrolling.scrollTop > 2000) {
          _key = sectionIds?.skills;
        }
        if (divThatIsScrolling.scrollTop > 2800) {
          _key = sectionIds?.experience;
        }
        if (divThatIsScrolling.scrollTop > 5800) {
          _key = sectionIds?.projects;
        }
        if (divThatIsScrolling.scrollTop > 10100) {
          _key = sectionIds?.contact;
        }

        setActiveSectionId(_key as SectionId);
      };
      //--listening
      divThatIsScrolling.addEventListener("scroll", handleScroll);

      return () => {
        divThatIsScrolling.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        activeSectionId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => useContext(AppContext);
