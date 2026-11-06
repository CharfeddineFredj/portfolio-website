"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
  eyebrow?: string;
};

export default function SectionHeading({ children, eyebrow }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <p className="mb-3 font-mono text-sm text-accent">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight capitalize sm:text-4xl">
        {children}
      </h2>
      <span className="mt-4 block h-px w-16 bg-gradient-to-r from-accent to-accent2" />
    </motion.div>
  );
}
