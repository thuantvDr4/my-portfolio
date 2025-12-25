import { images } from "@/constant";
import { Briefcase, GraduationCap } from "lucide-react";

export const aboutMe = {
  short_description: `I'm a software engineer with mindset of a DIY creator, meticulous in detail, and passionate about combining beautiful code with beautiful design and UI.`,
  contents: [
    {
      highlight: `I am a native of the coastal region of Binh Thuan, with over 5 years of experience in mobile and website development. `,
      text: "I have experience developing software for web and mobile, from simple landing pages to progressive applications. I strive to create software that not only functions efficiently but also provides intuitive user experience, perfect down to every pixel.",
    },

    {
      highlight: "",
      text: "My passion for continous learning pushes me to stay update on the lastest trends and techologies, ensuring that I bring fresh, cutting-edge solutions to every project I work on. I consider work an on going education, and I'm always looking for opportunities to work with those who are wiling to share their knowlege as much as I want to learn.",
    },

    {
      highlight: "When I‘m not coding. ",
      text: "I enjoy walking in the fields or in the park. I enjoy diving into some great books. Sometime, I take on DIY projects or renovate things around the house to give them a fresh, new look.",
    },
  ],
};

export const whatIDo = {
  webDevelopment: {
    title: "Web development",
    description: `I specialize in building responsive and high-performance web applications using modern frameworks like ReactJS and NextJS, focusing on seamless user experiences and robust functionality. Combining TailwindCss allows me to create highly responsive and visually appealing web pages.`,
  },
  mobileDevelopment: {
    title: "Mobile development",
    description: `With expertise in React Native, I create cross-platform mobile apps that are both user-friendly and scalable, ensuring consistent performance across Android and iOS.`,
  },
  experienceRD: {
    title: "Experience in R&D",
    description: `With nearly 5 years of experience working in a research and development environment, I have gained a deep understanding of the production process and the lifecycle of a new product.`,
  },
  diversityTech: {
    title: "Diversity Tech",
    description: `Beyond coding frontend and mobile applications, I'm learning about python for Data analysis, machine learning.`,
  },
};

export const profileMe = {
  phone: "+84 0909792583",
  email: "vinhthuan.tr@gmail.com",
  address: "Le Hong Phong st, disctrict 10, HCM",
  name: "Vinh Thuan Tran",
  position: "Frontend & Mobile Software Engineer",
};

export const mySkills = {
  development: [
    "JavaScript",
    "TypeScript",
    "TailwindCss",
    "React",
    "NextJS",
    "React Native",
    "Expo RN",
    "Python",
  ],
  libs_skd: [
    {
      name: "Supbase",
      icon: images.supbase,
    },
    {
      name: "Ant design",
      icon: images.antd,
    },
    {
      name: "Material UI",
      icon: images.materialui,
    },
    {
      name: "ShadCN",
      icon: images.shadcn,
    },
    {
      name: "Expo",
      icon: images.expo,
    },
    {
      name: "Clerk",
      icon: images.clerk,
    },
    {
      name: "GetStream",
      icon: images.getstream,
    },
    {
      name: "Firebase",
      icon: images.firebase,
    },
    {
      name: "MongoDB",
      icon: images.mongodb,
    },
  ],
  tools: [
    "Git + Github | Bitbucket",
    "Command Line",
    "Postman",
    "Xcode",
    "Figma",
  ],
  knowledge: [
    "React Hook",
    "ECMAScript 6",
    "LED lighting Design",
    "Electronic automation",
  ],
};

export const myExperience = [
  {
    work_at: "Industrial University Of Ho Chi Minh City",
    position: "Electronics and communications engineer technology",
    work_time: "Nov 2007 - May 2012",
    description: `Bachelor of Electronics and communications, specializing in Automation. Graduated with a good grade of 8.2/10.`,
    icon: GraduationCap,
  },
  {
    work_at: "Dien Quang Group",
    position: "Staff of Research and Development Center",
    work_time: "Jun 2013 - May 2016",
    description:
      "Electronics engineer, responsible for research, testing and development of new LED lighting products.",
    icon: Briefcase,
  },
  {
    work_at: "University of Ho Chi Minh City Computer Science Center",
    position: "Java Crash course",
    work_time: "April 2014",
    description: `Introduction to Java language. Understanding basic syntax and methods, data types of Java.
      Grade Achieved: 8.0`,
    icon: GraduationCap,
  },
  {
    work_at: "University of Ho Chi Minh City Computer Science Center",
    position: "Android Developer",
    work_time: "Sep 2014",
    description: `The course designed to teach how to create mobile applications on the Android OS. Understanding the role and function of components. How to use Android Studio to code and deploy application.
      Grade Achieved: 5.0`,
    icon: GraduationCap,
  },
  {
    work_at: "Dien Quang Group",
    position:
      "Team leader of Research and Development of new products for Construction Lighting",
    work_time: "May 2016 - Mar 2019",
    description:
      "Receive requests from the Construction Sales Department and coordinate tasks for team members, responsible for progress and quality of new products during production implementation",
    icon: Briefcase,
  },

  {
    work_at: "VNG Corporation",
    position: "Junior IoT developer",
    work_time: "April 2019 - Oct 2019",
    description:
      "Support the team in installing and assembling hardware systems, and build mobile application for reading NFC cards",
    icon: Briefcase,
  },
  {
    work_at: "Fpt Telecom",
    position: "Midle Mobile Application Developer",
    work_time: "May 2020 - Mar 2022",
    description:
      "Responsible for developing new features, maintaining and fixing bugs of mobile applications.",
    icon: Briefcase,
  },
  {
    work_at: "Sharering Network",
    position: "Senior Mobile Application Developer",
    work_time: "Oct 2022 - Oct 2023",
    description:
      "Responsible for supporting the team, developing new applications, new features specialized in blockchain core system, fixing bugs and maitaining. Writing user manuals for company'SDK packages.",
    icon: Briefcase,
  },
  {
    work_at: "Bstar Solutions - Galaxy Holding",
    position: "Senior Frontend Developer",
    work_time: "Nov 2023 - Present",
    description:
      "Worked onsite for the company's Partners, responsible for developing web applications specialized in bank core systems.",
    icon: Briefcase,
  },
  {
    work_at: "Coursera",
    position: "Crash Course on Python",
    work_time: "April 2024",
    description: `
      The course is designed to teach the foundations in order to write simple programs in Python using the most common structures. Understanding basic Python syntax, figure out how the building blocks of programming fit together. Combining all of this knowlegde to solve a complex programming problem.
      Certificate code: https://coursera.org/verify/49CGYGWH9H7C
      `,
    icon: GraduationCap,
  },
  {
    work_at: "Coursera",
    position: "Google AI Essential",
    work_time: "Aug 2024",
    description: `
    Google AI Essentials is a self-paced course designed to help people across roles and indusries get essential AL skills to boost. The course help to  you use AI tools to research, organize, and make more informed decisions. You'll also learn how to write effective promts and use AI responsibly by idenfifying AI's potential biases and avoiding harm.
    Certificate code: https://coursera.org/verify/4ZJVAINDCQSD
    `,
    icon: GraduationCap,
  },
];

export const myProjects = [
  {
    name: "CRM Happy Mommy Clinic",
    descriptions:
      "CRM Happy Mommy is a web application for dashboard management, that allow midwives manage patient records when scheduling appointment or follow-up visits. It support doctors by quickly extracting test results or patient medical history, providing them with sufficient information to make accurate diagnoses.",
    technicals: [
      "ReactJS",
      "TypeScript",
      "Redux",
      "React-query",
      "Tailwind Css",
      "Antd Design",
      "Agora SDK",
    ],
    image: images?.happymommy,
    link: "https://happymommyclinic.com/",
  },
  {
    name: "Infinity Sounds",
    descriptions:
      "The Infinity Sounds is an audio book listening platform that originated from a personal idea of mine. I wanted to have my own personal audio book website that gathers great books I have read. Instead of accessing Youtube, Spotify,or other music sites daily, I refer visiting  my own platform.",
    technicals: [
      "Nextjs",
      "TypeScript",
      "Zustand",
      "React-query",
      "Tailwind Css",
      "Shadcn",
      "Supabase",
    ],
    image: images?.infinitySounds,
    link: "https://infinity-sounds.vercel.app",
  },
  {
    name: "Affiliate Master",
    descriptions:
      "Affiliate Master is a affiliate marketing platform that focused on digital products, offering ad transparent 7-tier commission structure. The platform provides a product management page for publishers and a task and activity history management page for affiliate partners.",
    technicals: [
      "NextJS",
      "React Native",
      "TypeScript",
      "Zustand",
      "SWR",
      "Tailwind Css",
      "Firebase",
      "GetStream SDK",
    ],
    image: images?.affiliateMaster,
    link: "https://www.affiliatemaster.vn/",
  },
  {
    name: "ShareRing Pro & ShareProtect mobile application",
    descriptions:
      "The app ShareRing is a blockchain-based ecosystem providing digital identity solutions. ShareRing helps enterprises operate at higher efficiencies with reusable digital identity blockchain solutions whilst empowering individuals rights to privacy over their data. ShareRing enforces the highest standards of trust and security for personal information. The vault that you can securely store information in your vault, such as passport details, national ID, driving license, proof of address, etc ...",
    technicals: [
      "React Native",
      "TypeScript",
      "RecoilJs",
      "Redux",
      "Firebase",
      "ShareLedger blockchain",
      "NFTs",
    ],
    image: images?.shareringnetwork,
    link: "https://sharering.network/sharering-me",
  },
  {
    name: "Docosan Pro",
    descriptions:
      "The Docosan Pro is a mobile application platform that allows doctors to create online clinics showcasing their expertise and knowlegde. The platform enables patients to quickly connect with doctors by selecting them  when booking appointments. It ensure the legal credentials of doctors and safeguards patient information",
    technicals: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase",
      "Redux-saga",
      "Agora SDK",
    ],
    image: images?.docosanProj,
    link: "https://play.google.com/store/apps/details?id=com.doctorpro&hl=en",
  },
];
