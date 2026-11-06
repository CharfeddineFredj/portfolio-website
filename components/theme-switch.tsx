"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

// Light/dark toggle, displayed inside the navigation bar.
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-full text-base text-muted transition hover:bg-fg/[0.08] hover:text-fg"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
