"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { scrollToId } from "@/lib/smooth-scroll";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";
import CountUp from "./count-up";
import TiltCard from "./tilt-card";
import { useSectionInView } from "@/lib/hooks";
import {
  experiencesData,
  mobileProjectsData,
  projectsData,
  skillCategories,
} from "@/lib/data";
import charfeddineImg from "@/public/charfeddine-cutout.png";

const technologyCount = skillCategories.reduce(
  (total, category) => total + category.items.length,
  0
);

// Each stat links to the section that lists its items.
// `target` is the element id; `section` is the name used by the navigation bar.
const stats = [
  {
    label: "Projects",
    target: "projects",
    section: "Projects",
    value: projectsData.length + mobileProjectsData.length,
  },
  {
    label: "Experiences",
    target: "experience",
    section: "Experience",
    value: experiencesData.length,
  },
  {
    label: "Technologies",
    target: "skills",
    section: "Skills",
    value: technologyCount,
  },
] as const;

export default function About() {
  const { ref } = useSectionInView("About");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // Eased scroll to the target section, with the navigation highlight updated at the same time.
  const goToSection =
    (stat: (typeof stats)[number]) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setActiveSection(stat.section);
      setTimeOfLastClick(Date.now());
      scrollToId(stat.target);
    };

  return (
    <section
      ref={ref}
      id="about"
      className="mb-32 w-full max-w-[60rem] scroll-mt-28"
    >
      <SectionHeading eyebrow="01 / About">About Me</SectionHeading>

      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          // md: lift by half the section heading block (89px + 48px margin = 137px)
          // so the photo centres on "title + text" instead of the text alone.
          className="relative mx-auto w-full max-w-[24rem] md:-mt-[137px]"
        >
          <div className="relative mx-auto max-w-[22rem] py-6">
            {/* Soft coloured light behind the photo */}
            <div
              aria-hidden
              className="absolute inset-x-6 inset-y-10 rounded-[2.5rem] bg-accent/25 blur-3xl"
            />

            <TiltCard className="relative">
              {/* Original frame: outer accent ring + inner border */}
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] border border-accent/25"
              />
              <div className="relative aspect-square rounded-3xl border border-line">
                <div className="absolute inset-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
                  <Image
                    src={charfeddineImg}
                    alt="Charfeddine Fredj portrait"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 80vw, 22rem"
                    className="object-contain brightness-[1.15]"
                  />
                </div>
              </div>
            </TiltCard>
          </div>
          <p className="mt-2 text-center font-mono text-sm text-muted md:absolute md:inset-x-0 md:top-full">
            Software Engineer | Full-Stack Developer
          </p>
        </motion.div>

        <div className="space-y-6 text-center md:text-left">
          <p className="text-xl font-medium leading-relaxed text-fg sm:text-2xl">
            I&apos;m Charfeddine Fredj, a computer engineer with a Software Engineering degree. I specialize in{" "}
            <span className="text-gradient">full-stack web development</span>, working with a wide range of modern technologies, frameworks, and AI tools to build complete, scalable solutions.
          </p>

          <div aria-hidden className="mx-auto h-px w-16 bg-gradient-to-r from-accent to-accent2 md:mx-0" />

          <div className="space-y-5 leading-8 text-muted">
            <p>
              My expertise includes building scalable, efficient applications and creating data-driven solutions using <span className="text-fg">AI, Big Data, and Business Intelligence</span> to enhance decision-making.
            </p>
            <p>
              Passionate about innovation, my goal is to contribute to impactful projects that drive meaningful results in the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((stat) => (
              <a
                key={stat.label}
                href={`#${stat.target}`}
                onClick={goToSection(stat)}
                className="glass group relative overflow-hidden rounded-2xl p-4 text-center transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-accent2 transition duration-500 group-hover:scale-x-100"
                />
                <p className="text-3xl font-bold text-gradient sm:text-4xl">
                  <CountUp to={stat.value} />
                </p>
                <p className="mt-1 flex items-center justify-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted transition duration-300 group-hover:text-fg">
                  {stat.label}
                  <BsArrowRight
                    aria-hidden
                    className="transition duration-300 group-hover:translate-x-1"
                  />
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
