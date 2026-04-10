"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable Lenis on touch/mobile devices — native scroll is smoother
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      // Still fire loader-finished so preloader unblocks correctly
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
      const handleLoaderFinished = () => {};
      window.addEventListener("loader-finished", handleLoaderFinished);
      return () => window.removeEventListener("loader-finished", handleLoaderFinished);
    }

    // Desktop: use Lenis smooth scroll
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.0,           // Reduced from 1.2 → snappier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,      // Reduced from 2 → less aggressive on hybrid devices
      infinite: false,
    });

    if (window.location.pathname === "/") {
      lenis.stop();
      if (window.location.hash) {
        window.scrollTo(0, 0);
        window.history.replaceState(null, "", window.location.pathname);
      }
    }

    const handleLoaderFinished = () => {
      lenis.start();
    };

    window.addEventListener("loader-finished", handleLoaderFinished);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.removeEventListener("loader-finished", handleLoaderFinished);
    };
  }, []);

  return <>{children}</>;
}
