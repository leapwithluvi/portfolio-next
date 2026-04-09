"use client"

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { profile } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  
  // Handle theme
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] pointer-events-auto transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-container flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-xl font-serif font-bold tracking-tighter text-foreground relative z-50"
          whileHover={{ scale: 1.05 }}
        >
          {profile.logoName}<span className="text-yellow-600">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 relative z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-full hover:bg-muted transition-colors duration-200 text-foreground cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center gap-4 md:hidden relative z-50">
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-full hover:bg-muted transition-colors duration-200 text-foreground cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="p-2 text-foreground cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
