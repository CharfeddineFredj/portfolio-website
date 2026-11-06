"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      aria-hidden
      className="my-24 hidden h-24 w-px bg-gradient-to-b from-transparent via-accent to-transparent sm:block"
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ duration: 1.2, delay: 0.6 }}
    ></motion.div>
  );
}
