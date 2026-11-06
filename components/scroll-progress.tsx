"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Thin bar at the top of the viewport showing how far the page has been scrolled.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[1000] h-[2px] origin-left bg-gradient-to-r from-accent to-accent2"
      style={{ scaleX }}
    />
  );
}
