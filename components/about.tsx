"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
<motion.section
  ref={ref}
  className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
  id="about"
>
<SectionHeading>About Me</SectionHeading>
<p className="mb-3">
I'm Charfeddine Fredj, a computer engineer with a Software Engineering degree. I specialize in full-stack web development, focusing on modern frameworks such as Angular, Spring Boot, and Laravel.
</p>
<p className="mb-3">
  My expertise includes building scalable, efficient applications and creating data-driven solutions using AI, Big Data, and Business Intelligence to enhance decision-making.
</p>
<p className="mb-3">
  Through various internships and projects, I've refined my technical skills and adaptability, excelling in collaborative environments. I am always eager to explore new technologies and continuously enhance my knowledge.
</p>
<p className="mb-3">
  Passionate about innovation, my goal is to contribute to impactful projects that drive meaningful results in the tech industry.
</p>

</motion.section>





  );
}
