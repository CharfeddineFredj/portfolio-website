"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { mobileProjectsData, projectsData } from "@/lib/data";
import Project from "./project";
import FrameCard from "./frame-card";
import { useSectionInView } from "@/lib/hooks";

type ProjectGroupProps = {
  title: string;
  count: number;
  children: React.ReactNode;
};

// A labelled group of project cards (web or mobile).
function ProjectGroup({ title, count, children }: ProjectGroupProps) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="mb-8 flex items-center gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="font-mono text-xs text-muted">
          {String(count).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">{children}</div>
    </div>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-32 w-full max-w-[60rem] scroll-mt-28"
    >
      <SectionHeading eyebrow="02 / Projects">My projects</SectionHeading>

      <ProjectGroup title="Web applications" count={projectsData.length}>
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            className="h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
          >
            <FrameCard className="h-full">
              <Project {...project} />
            </FrameCard>
          </motion.div>
        ))}
      </ProjectGroup>

      <ProjectGroup title="Mobile applications" count={mobileProjectsData.length}>
        {mobileProjectsData.map((project, index) => (
          <motion.div
            key={project.title}
            className="h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
          >
            <FrameCard className="h-full">
              <Project {...project} />
            </FrameCard>
          </motion.div>
        ))}
      </ProjectGroup>
    </section>
  );
}
