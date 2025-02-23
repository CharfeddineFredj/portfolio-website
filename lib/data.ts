import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiAngular } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import HRMImg from "@/public/HRM.png";
import KarhbtiImg from "@/public/Karhabti.png";
import ScootGoImg from "@/public/ScootGo.png";
import unimarketImg from "@/public/UniMarket.png";
import FoodOrderImg from "@/public/FoodOrder.png";

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
    title: "Final Year Engineering Project",
    location: "Digital Identity, Tunis",
    description: 
      "Developed a web and mobile HRM and attendance tracking app using Angular, Spring Boot, and React Native. Integrated platforms into a microservices architecture with Scrum methodology.",
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
    title: "Human Resources Management Website",
    description:
      "A web and mobile application for HR management and attendance tracking, offering features for scheduling, leave requests, and payroll. It supports roles like administrator, HR manager, employee, and recruiter.",
    tags: ["Angular", " Spring Boot", "React Native", "Bootstrap", "PostgreSQL","Docker"],
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
