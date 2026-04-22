"use client";

import dynamic from "next/dynamic";

import { useEffect } from "react";

// Non-critical UI components - Lazy loaded for performance
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });
const BackToTop = dynamic(() => import("./BackToTop"), { ssr: false });

export function GlobalUI() {
  useEffect(() => {
    // Clear hash from URL on refresh/mount for cleaner navigation
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <>
      <CommandPalette />
      <BackToTop />
    </>
  );
}
