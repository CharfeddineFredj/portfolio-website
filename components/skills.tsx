"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import TiltCard from "./tilt-card";
import FrameCard from "./frame-card";
import { skillCategories, skillColors } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-32 w-full max-w-[60rem] scroll-mt-28"
    >
      <SectionHeading eyebrow="03 / Skills">My skills</SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, categoryIndex) => (
          // Same pattern as the project cards: the entrance animation sits on the outer
          // element, and the card itself tilts with the mouse (TiltCard).
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (categoryIndex % 2) * 0.1 }}
          >
            <FrameCard className="h-full">
            <TiltCard className="glass h-full rounded-2xl p-6 transition-colors duration-500 hover:border-accent/30">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <span className="font-mono text-xs text-muted">
                  {String(category.items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  const brand = skillColors[item.name];
                  return (
                    // The scroll animation sits on the <li>; the hover styles sit on the inner card,
                    // so framer's inline transform does not cancel the hover lift.
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: (itemIndex % 4) * 0.06 }}
                    >
                      <div className="group flex h-full flex-col items-center gap-2 rounded-xl border border-line bg-fg/[0.02] px-2 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/[0.06]">
                        <Icon
                          aria-hidden
                          className={`text-2xl transition duration-300 group-hover:scale-110 ${
                            brand ? "brand-icon" : "text-accent"
                          }`}
                          style={
                            brand
                              ? ({
                                  "--brand-light": brand.light,
                                  "--brand-dark": brand.dark ?? brand.light,
                                } as React.CSSProperties)
                              : undefined
                          }
                        />
                        <span className="text-xs text-muted transition group-hover:text-fg">
                          {item.name}
                        </span>
                      </div>
                    </motion.li>
                  );
                })}
              </ul>
            </TiltCard>
            </FrameCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
