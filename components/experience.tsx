"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import FrameCard from "./frame-card";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

// Replays every time a card comes into view, whether the visitor scrolls up or down.
const replayOnScroll = { once: false, amount: 0.35 } as const;

// The title flies in one word at a time, just after its card lands.
function AnimatedTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h3 className="text-lg font-semibold capitalize">
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {wordIndex > 0 && " "}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={replayOnScroll}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              delay: 0.35 + wordIndex * 0.06,
            }}
          >
            {word}
          </motion.span>
        </React.Fragment>
      ))}
    </h3>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-32 w-full max-w-[60rem] scroll-mt-28"
    >
      <SectionHeading eyebrow="04 / Experience">My experience</SectionHeading>

      <ol className="relative">
        <div
          aria-hidden
          className="absolute bottom-0 left-4 top-2 w-px bg-gradient-to-b from-accent via-accent2/40 to-transparent md:left-[12.25rem]"
        />

        {experiencesData.map((item, index) => {
          // Each card flies in on its own, from alternating sides, with a soft spring
          // (like a PowerPoint "Fly In" entrance). It leaves again when it scrolls out of view.
          const fromLeft = index % 2 === 0;
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: fromLeft ? -60 : 60, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={replayOnScroll}
              transition={{ type: "spring", stiffness: 80, damping: 15, mass: 0.9 }}
              className="relative pb-12 pl-12 last:pb-0 md:grid md:grid-cols-[11rem_1fr] md:gap-10 md:pl-0"
            >
              <span className="glass absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-accent md:left-[11.25rem]">
                {item.icon}
              </span>

              <p className="font-mono text-xs uppercase tracking-wider text-accent md:pt-1 md:text-right">
                {item.date}
              </p>

              <FrameCard className="mt-3 md:mt-0">
                <div className="glass h-full rounded-2xl p-6">
                  <AnimatedTitle text={item.title} />
                  <p className="mt-1 text-sm text-muted">{item.location}</p>
                  <p className="mt-3 whitespace-pre-line leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FrameCard>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
