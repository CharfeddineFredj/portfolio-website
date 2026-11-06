"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Scroll-linked counter: the number climbs as it moves up the screen and falls
// back as you scroll up, so it moves with the page.
export default function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(to);
      return;
    }

    // While the page moves, the number follows the scroll; once it stops, show the full value.
    let idle: ReturnType<typeof setTimeout> | undefined;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      // 0 when the number sits at the bottom edge of the screen,
      // 1 once it has moved up to 60% of the screen height.
      const progress = Math.min(Math.max((vh - top) / (vh * 0.4), 0), 1);
      setValue(Math.round(to * progress));
      clearTimeout(idle);
      idle = setTimeout(() => setValue(to), 200);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(idle);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [to, reduceMotion]);

  return <span ref={ref}>{value}</span>;
}
