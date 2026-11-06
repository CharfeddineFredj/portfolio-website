"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

const SHOW_AFTER_PX = 400;
const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Floating "back to top" button. Its ring fills as the visitor scrolls down the page.
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const ringOffset = useTransform(scrollYProgress, [0, 1], [CIRCUMFERENCE, 0]);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          title="Back to top"
          onClick={scrollToTop}
          className="glass fixed bottom-5 right-5 z-[998] flex h-12 w-12 items-center justify-center rounded-full text-accent"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.25 }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 48 48"
            className="absolute inset-0 h-full w-full -rotate-90"
          >
            <defs>
              <linearGradient id="scroll-to-top-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "rgb(var(--accent-rgb))" }} />
                <stop offset="100%" style={{ stopColor: "rgb(var(--accent2-rgb))" }} />
              </linearGradient>
            </defs>
            <circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              strokeWidth="2"
              style={{ stroke: "rgb(var(--fg-rgb) / 0.12)" }}
            />
            <motion.circle
              cx="24"
              cy="24"
              r={RADIUS}
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              stroke="url(#scroll-to-top-ring)"
              strokeDasharray={CIRCUMFERENCE}
              style={{ strokeDashoffset: ringOffset }}
            />
          </svg>
          <BsArrowUp aria-hidden="true" className="relative text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
