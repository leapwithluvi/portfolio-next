export const Footer = () => {
  return (
    <footer className="w-full bg-background font-serif">
      <div className="max-container py-6 text-center border-t border-border">
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
          &copy; 2025 Luvi Aprilyansyah Gabriel. Built with open-source
          technologies. <br className="sm:hidden" />
          Inspired by <a href="https://www.delfanladen.my.id/" className="hover:text-yellow-600 transition-colors">Delfan Rynaldo Laden</a>.
        </p>
      </div>
    </footer>
  );
};
