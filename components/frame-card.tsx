"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Wraps a card in a rotating light frame, like the contact form. Clicking the card switches
// the frame on or off. While it is off the card keeps its normal look. Links and buttons
// inside the card keep their own behaviour and do not toggle the frame.
export default function FrameCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest("a, button")) return;
    setActive((value) => !value);
  };

  return (
    <div
      onClick={handleClick}
      className={`relative cursor-pointer overflow-hidden rounded-2xl p-[2px] ${className}`}
    >
      {/* Rotating light arc: only visible while the frame is on */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[250%] bg-[conic-gradient(from_0deg,transparent_0deg,rgb(var(--accent-rgb))_60deg,rgb(var(--accent2-rgb))_120deg,transparent_180deg)]"
        style={{ x: "-50%", y: "-50%" }}
        animate={{ opacity: active ? 1 : 0, rotate: active ? 360 : 0 }}
        transition={{
          opacity: { duration: 0.3 },
          rotate: active
            ? { duration: 4, repeat: Infinity, ease: "linear" }
            : { duration: 0.3 },
        }}
      />
      {/* Solid layer that keeps the arc visible only as a 2px edge */}
      <motion.div
        aria-hidden
        className="absolute inset-[2px] rounded-[calc(1rem_-_2px)] bg-[rgb(var(--bg-rgb))]"
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative h-full">{children}</div>
    </div>
  );
}
