import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import translAItor from "@/public/translAItor.png";
import chaseTheBrie from "@/public/chase-the-brie.png";
import starbucks from "@/public/starbucks-web.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Interior Design Internship",
    location: "Jakarta, Indonesia",
    description:
      "I intern at a design studio, helping senior designer in making layout, 3D design, and etc.",
    icon: React.createElement(CgWorkAlt), // because we are working on a .ts file we use React.createElement
    date: "2017",
  },
  {
    title: "Senior Visual Merchandiser",
    location: "Jakarta, Indonesia",
    description:
      "I worked as a Visual Merchandiser for 3 years in fashion retail company, MASARI Group.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Graduated from bootcamp",
    location: "Jakarta, Indonesia",
    description:
      "I'm now a just graduated full-stack developer, open to full-time opportunities. My stack includes React, Node.js, JavaScript, Tailwind and PostgreSQL. And I'm currently learning TypeScript and Next.js",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TranslAItor",
    description:
      "This project was created while learning about the third party API, I use Google Translate and OpenAI for this project.",
    tags: ["Vue.js", "PostgreSQL", "Tailwind", 'Express'],
    imageUrl: translAItor,
    link: 'https://github.com/felixleandr/translaitor'
  },
  {
    title: "Chase the Brie",
    description:
      "A maze game created using React.js with Bread First Search method and Socket.io for multiplayer mode.",
    tags: ["React.js", "Tailwind", "Redux", "MongoDB", "Socket.io"],
    imageUrl: chaseTheBrie,
    link: 'https://chase-the-brie.web.app'
  },
  {
    title: "Starbucks Clone",
    description:
      "Making a clone web while learning about React.js, for customers, admin side, and a mobile app.",
    tags: ["React.js", "React Native", "PostgreSQL", "Tailwind", "GraphQL", "Redis", "Docker"],
    imageUrl: starbucks,
    link: "https://github.com/felixleandr/Starbucks-clone-web"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
