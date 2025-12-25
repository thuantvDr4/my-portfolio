export interface Experience {
  id: string;
  position: string;
  company_name: string;
  company_link: string;
  working_time: string[];
  employment_type?: string;
  technical: string[];
  description: string;
  image?: string | StaticImageData;
}

export interface Project {
  name: string;
  descriptions: string;
  technicals: string[];
  image?: string | StaticImageData;
  link?: string;
}

export interface Skill {
  id?: string;
  name: string;
  image?: string | StaticImageData;
  description?: string;
  link?: string;
  point?: number;
}

export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "contact"
  | "what_i_do";
