interface sidebarType {
  num: string;
  title: string;
}

export const Sidebar: React.FC<sidebarType> = (data) => {
  const { num, title } = data;
  return (
    <div
      className="hidden sm:flex flex-col items-center gap-2.5 mr-8"
      data-aos="fade-right"
    >
      <span className="text-2xl font-bold text-yellow-600 [writing-mode:vertical-rl] font-serif">
        {num}
      </span>
      <div className="w-px h-16 bg-border">‎‎‎ </div>
      <span className="text-1xl font-bold tracking-[0.2em] [writing-mode:vertical-rl] font-serif">
        {title}
      </span>
    </div>
  );
};
