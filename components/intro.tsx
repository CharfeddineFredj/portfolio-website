"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "@/lib/types";
import ParticlesField from "./particles-field";
import Magnetic from "./magnetic";
import TiltCard from "./tilt-card";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: { y: "110%" },
  show: (index: number) => ({
    y: 0,
    transition: { delay: 0.2 + index * 0.1, duration: 0.9, ease },
  }),
};

// Masked word reveal: each word slides up from behind its own line.
function Word({
  children,
  index,
  className,
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  return (
    <span className="inline-block overflow-hidden py-[0.1em] -my-[0.1em] align-bottom">
      <motion.span
        className={clsx("inline-block", className)}
        custom={index}
        variants={wordVariants}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.span>
    </span>
  );
}

type Segment = [text: string, className: string];

// Code shown in the hero "terminal" card.
const terminalLines: Segment[][] = [
  [["const ", "text-accent2"], ["engineer", "text-fg"], [" = {", "text-muted"]],
  [["  name: ", "text-muted"], ['"Charfeddine Fredj"', "text-accent"], [",", "text-muted"]],
  [["  role: ", "text-muted"], ['"Full-Stack Developer"', "text-accent"], [",", "text-muted"]],
  [["  focus: ", "text-muted"], ['["Web apps", "REST APIs", "AI"]', "text-accent"], [",", "text-muted"]],
  [["  stack: ", "text-muted"], ['["React", "Node.js", "Spring Boot", "Laravel"]', "text-accent"], [",", "text-muted"]],
  [["  degree: ", "text-muted"], ['"Software Engineering"', "text-accent"], [",", "text-muted"]],
  [["};", "text-muted"]],
  [
    ["engineer", "text-fg"],
    [".build", "text-accent2"],
    ["({ scalable: ", "text-muted"],
    ["true", "text-accent2"],
    [" });", "text-muted"],
  ],
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : -90]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);

  const goTo = (name: SectionName) => () => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full max-w-[64rem] scroll-mt-28 py-10 sm:py-16"
    >
      <ParticlesField className="fade-mask pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="font-mono text-sm text-accent"
          >
            Hello, I&apos;m
          </motion.p>

          <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            <Word index={0}>Charfeddine</Word>{" "}
            <Word index={1} className="text-gradient">
              Fredj
            </Word>
          </h1>

          <p className="mt-6 text-xl font-medium sm:text-2xl">
            <Word index={2}>Software Engineer</Word>
            <span className="mx-2 text-muted">|</span>
            <Word index={3}>Full-Stack Developer</Word>
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted lg:mx-0"
          >
            Passionate about web development and delivering high-quality,
            scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Magnetic>
              <Link
                href="#projects"
                onClick={goTo("Projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-bg transition hover:shadow-[0_0_40px_-6px_rgb(var(--accent-rgb)/0.6)]"
              >
                View projects
                <BsArrowRight className="transition group-hover:translate-x-1" />
              </Link>
            </Magnetic>

            <Magnetic>
              <Link
                href="#contact"
                onClick={goTo("Contact")}
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition hover:bg-fg/[0.06]"
              >
                Contact me here
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href="/cv_fredj_charfeddine.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border-2 border-accent px-7 py-3.5 font-semibold text-accent transition hover:bg-accent/10 hover:shadow-[0_0_30px_-8px_rgb(var(--accent-rgb)/0.6)]"
              >
                Download CV
                <HiDownload className="transition group-hover:translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a
              href="https://www.linkedin.com/in/charfeddine-fredj-b30635141/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass rounded-full p-3 text-xl text-muted transition hover:-translate-y-1 hover:text-accent"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/CharfeddineFredj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass rounded-full p-3 text-xl text-muted transition hover:-translate-y-1 hover:text-accent"
            >
              <FaGithubSquare />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
        >
          <TiltCard className="glass overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted">engineer.ts</span>
            </div>

            <div className="px-6 py-7 font-mono text-[0.8rem] leading-7 sm:text-sm">
              {terminalLines.map((segments, lineIndex) => (
                <motion.div
                  key={lineIndex}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + lineIndex * 0.12, duration: 0.45, ease }}
                  className="whitespace-pre"
                >
                  {segments.map(([text, className], i) => (
                    <span key={i} className={className}>
                      {text}
                    </span>
                  ))}
                </motion.div>
              ))}
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
