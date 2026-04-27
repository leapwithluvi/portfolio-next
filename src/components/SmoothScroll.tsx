"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Initial sync
    if (pathname === "/") {
      lenis.stop();
    } else {
      lenis.start();
    }

    const handleLoaderFinished = () => {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
    };

    window.addEventListener("loader-finished", handleLoaderFinished);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      window.removeEventListener("loader-finished", handleLoaderFinished);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Truly init once, pathname logic is handled below

  // Handle route changes separately
  useEffect(() => {
    if (lenisRef.current) {
      if (pathname === "/") {
        // Don't auto-start on home if loader might run
        const hasLoaded = sessionStorage.getItem("has-loaded");
        if (!hasLoaded) {
          lenisRef.current.stop();
        } else {
          lenisRef.current.start();
        }
      } else {
        lenisRef.current.start();
      }
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
