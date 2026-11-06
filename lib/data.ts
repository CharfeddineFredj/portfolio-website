import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiAngular } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiSpringboot,
  SiSymfony,
  SiPhp,
  SiOpenjdk,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGitlab,
  SiPowerbi,
  SiPython,
} from "react-icons/si";
import { TbApi, TbSparkles } from "react-icons/tb";
import {
  SiAndroid,
  SiIos,
  SiSwift,
  SiFlutter,
  SiDart,
  SiFirebase,
} from "react-icons/si";
import HRMImg from "@/public/HRM.png";
import KarhbtiImg from "@/public/Karhabti.png";
import ScootGoImg from "@/public/ScootGo.png";
import unimarketImg from "@/public/UniMarket.png";
import FoodOrderImg from "@/public/FoodOrder.png";
import MahdiaBlueGreenImg from "@/public/MahdiaBlueGreen.png";

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
    title: "Full Stack Developer",
    location: "Naviris Tech, Tunisia",
    description:
      "Designing and developing full stack web applications, covering both the user interface and the back-end services.",
    icon: React.createElement(FaLaptopCode),
    date: "January 2025 - Present",
  },
  {
    title: "Full Stack Developer (Freelance)",
    location: "Independent",
    description:
      "Delivered full stack web development projects for clients, handling front-end implementation, back-end logic and database integration.",
    icon: React.createElement(FaLaptopCode),
    date: "September 2024 - December 2024",
  },
  {
    title: "Final Year Engineering Project",
    location: "Digital Identity, Tunis",
    description: 
      "Developed a web and mobile HRM and attendance tracking application using Angular, Spring Boot, and React Native, integrated into a microservices architecture with Scrum methodology, including AI services via Flask REST APIs for employee data analysis.",
    icon: React.createElement(LuGraduationCap),
    date: "February 2024 - June 2024",
  },
  {
    title: "Professional Internship",
    location: "ITGUST, Tunis",
    description: 
      "Developed an administrative management system using Angular and Spring Boot.\nSuccessfully integrated REST APIs and an SQL database.",
    icon: React.createElement(SiAngular),
    date: "August 2023 (1 month)",
  },
  {
    title: "Skill Enhancement Internship",
    location: "Terraform Tunisia, Sousse",
    description: 
      "Contributed to the development of the UniMarket platform by combining Angular and Laravel.\nDesigned UML diagrams and developed in-depth expertise in Angular and its architecture.",
    icon: React.createElement(FaLaptopCode),
    date: "February 2023 - May 2023",
  },
  {
    title: "Final Year Project - Bachelor's Degree",
    location: "Développement de Vision, Mahdia",
    description: 
      "Developed a decision support app for car purchasing using a microservices architecture. Designed the frontend with Vue.js and the backend with Laravel.",
    icon: React.createElement(SiLaravel), 
    date: "February 2021 - June 2021",
  },
] as const;


  export const projectsData = [
    {
      title: "Mahdia Blue & Green",
      description:
        "Platform of the OIT Mahdia initiative promoting the transition to a sustainable economy through the blue, green and circular economy. It features news, events, resources, a blog, an entrepreneurs section, user accounts, and an AI chatbot integrating LLM models via OpenRouter.",
      tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "OpenRouter"],
      imageUrl: MahdiaBlueGreenImg,
      githubLink: "https://github.com/CharfeddineFredj/Mahdia-Blue-Green",
      alertMessage: ""
    },
    {
      title: "Human Resources Management Website",
      description:
        "A web and mobile HR and attendance management app with scheduling, leave, and payroll features, integrating AI via Flask REST services to analyze employee data.", 
      tags: ["Angular", "Spring Boot", "React Native", "PostgreSQL", "Docker", "Flask", "AI"],
      imageUrl: HRMImg,
      githubLink: "https://github.com/CharfeddineFredj/HR-Management",
      alertMessage: ""
    },
 
  
  {
    title: "Karhabti",
    description:
      "Karhabti is a web application built on a microservices architecture, offering advanced features for car search, comparison, agency browsing, chat, ad management, and administrative control.",
    tags: ["Laravel", "Vue.js", "tailwind css", "MySQL","Docker"],
    imageUrl: KarhbtiImg,
    githubLink: "https://github.com/CharfeddineFredj/Karhabti",
    alertMessage: ""
  },
  {
    title: "ScootGo",
    description:
      "A web application for electric scooter reservations, allowing users to easily browse, select, and book scooters. Administrators can manage scooter availability, handle reservations, and oversee user interactions for a seamless experience.",
    tags: ["Symfony", "JavaScript", "Twig", "MySQL"],
    imageUrl: ScootGoImg,
    githubLink: "https://github.com/CharfeddineFredj/ElectricScooterRental",
    alertMessage : ""
  },
  {
    title: "UniMarket",
    description:
      "UniMarket is a multi-domain sales platform that allows businesses to sell their unsold stock efficiently on a single platform, ensuring profitability while promoting sustainability by reducing waste.",
    tags: ["Angular", "Laravel", "Bootstrap", "MySQL"],
    imageUrl: unimarketImg,
    githubLink: "https://github.com/CharfeddineFredj/UniMarket",
    alertMessage: "I am unable to share the code as the company places a strong emphasis on confidentiality and the protection of its projects. I appreciate your understanding and respect for these privacy policies. Thank you for your consideration."
  },
  {
    title: "FoodEase",
    description:
      "FoodEase is a web platform that allows users to explore menus, place food orders, and track their history. Administrators can manage users, food categories, and orders to ensure smooth operation. Designed for an intuitive and efficient food ordering experience.",
    tags: ["PHP", "JavaScript", " MySQL", "CSS", "MySQL"],
    imageUrl: FoodOrderImg,
    githubLink: "https://github.com/CharfeddineFredj/food-order",
    alertMessage : ""
  },
] as const;

// Mobile applications. These are concept projects: they carry a "Concept" badge
// and have no public repository, so they never claim to be published apps.
export const mobileProjectsData = [
  {
    title: "Campus Connect",
    platform: "Android",
    description:
      "A native Android app built with Java for university students to follow timetables, course announcements and campus events in one place, with Firebase Cloud Messaging for instant notifications.",
    tags: ["Java", "Android SDK", "Firebase", "Cloud Firestore", "Cloud Messaging"],
    imageUrl: "/CampusConnect.svg",
    githubLink: "",
    alertMessage:
      "This is a concept project created to showcase my mobile design and development skills. It is not a published app and has no public source code.",
    badge: "Concept",
  },
  {
    title: "PulseFit",
    platform: "Cross-platform",
    description:
      "A cross-platform fitness app built with Flutter and Dart for iOS and Android, to log workouts, follow training plans and visualise progress with clear charts, backed by Firebase.",
    tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    imageUrl: "/PulseFit.svg",
    githubLink: "",
    alertMessage:
      "This is a concept project created to showcase my mobile design and development skills. It is not a published app and has no public source code.",
    badge: "Concept",
  },
  {
    title: "Budgetly",
    platform: "iOS",
    description:
      "A native iOS personal finance app built with Swift and SwiftUI, to track income and expenses, set monthly budgets per category and review spending trends with interactive charts.",
    tags: ["Swift", "SwiftUI", "Core Data", "Swift Charts"],
    imageUrl: "/Budgetly.svg",
    githubLink: "",
    alertMessage:
      "This is a concept project created to showcase my mobile design and development skills. It is not a published app and has no public source code.",
    badge: "Concept",
  },
] as const;

// Official brand colors for the skill logos. `dark` is used in dark mode for logos
// that are black by default, so they stay visible on the dark background.
export const skillColors: Record<string, { light: string; dark?: string }> = {
  "React.js": { light: "#61DAFB" },
  "Next.js": { light: "#000000", dark: "#FFFFFF" },
  Angular: { light: "#DD0031" },
  "Vue.js": { light: "#4FC08D" },
  HTML: { light: "#E34F26" },
  CSS: { light: "#1572B6" },
  JavaScript: { light: "#F7DF1E" },
  TypeScript: { light: "#3178C6" },
  "Tailwind CSS": { light: "#06B6D4" },
  "Node.js": { light: "#339933" },
  NestJS: { light: "#E0234E" },
  "Express.js": { light: "#000000", dark: "#FFFFFF" },
  "Spring Boot": { light: "#6DB33F" },
  Laravel: { light: "#FF2D20" },
  Symfony: { light: "#000000", dark: "#FFFFFF" },
  PHP: { light: "#777BB4" },
  Java: { light: "#ED8B00" },
  PostgreSQL: { light: "#4169E1" },
  MySQL: { light: "#4479A1" },
  MongoDB: { light: "#47A248" },
  Docker: { light: "#2496ED" },
  Git: { light: "#F05032" },
  GitLab: { light: "#FC6D26" },
  "Power BI": { light: "#F2C811" },
  Android: { light: "#3DDC84" },
  iOS: { light: "#000000", dark: "#FFFFFF" },
  Swift: { light: "#F05138" },
  Flutter: { light: "#02569B" },
  Dart: { light: "#0175C2" },
  "React Native": { light: "#61DAFB" },
  Firebase: { light: "#DD2C00" },
  Python: { light: "#3776AB" },
};

export const skillCategories = [
  {
    name: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Laravel", icon: SiLaravel },
      { name: "Symfony", icon: SiSymfony },
      { name: "PHP", icon: SiPhp },
      { name: "Java", icon: SiOpenjdk },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    name: "DevOps & Tools",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Git", icon: SiGit },
      { name: "GitLab", icon: SiGitlab },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    name: "Mobile",
    items: [
      { name: "Android", icon: SiAndroid },
      { name: "iOS", icon: SiIos },
      { name: "Swift", icon: SiSwift },
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "React Native", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    name: "Other",
    items: [
      { name: "Artificial Intelligence", icon: TbSparkles },
      { name: "Power BI", icon: SiPowerbi },
      { name: "Python", icon: SiPython },
    ],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "PHP",
  "Angular",
  "Spring boot",
  "Laravel",
  "Symfony",
  "Vue js",
  "Python",
  "Tailwind css",
  "PostgreSQL",
  "Docker",
  "Git"
] as const;
