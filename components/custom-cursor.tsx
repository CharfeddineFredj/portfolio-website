"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// A ring that follows the pointer and grows over interactive elements.
// Only shown on fine pointers (mouse / trackpad) and when motion is allowed.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    setEnabled(true);

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      setHovering(
        Boolean(
          target?.closest("a, button, input, textarea, select, label, [role='button']")
        )
      );
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("pointerover", handleOver);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1000] -ml-4 -mt-4 h-8 w-8 rounded-full border border-accent"
      style={{ x: springX, y: springY }}
      animate={{
        scale: hovering ? 1.8 : 1,
        backgroundColor: hovering ? "rgba(34, 211, 238, 0.12)" : "rgba(34, 211, 238, 0)",
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
