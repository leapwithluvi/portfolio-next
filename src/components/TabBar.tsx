import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface TabBarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  tabs: TabItem[];
}

export const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex gap-2 p-1 bg-muted/50 rounded-xl w-fit">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
              isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-lg -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            <tab.icon size={18} />
            <span className="relative z-10 hidden sm:inline font-medium">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
