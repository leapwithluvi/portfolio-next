import { profile } from "@/data/profile";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background font-serif">
      <div className="max-container py-6 text-center border-t border-border">
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed text-center">
          &copy; {currentYear} {profile.name}. Built with open-source technologies.
        </p>
      </div>
    </footer>
  );
};
