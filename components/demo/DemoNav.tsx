"use client";

import { Home, Search, Swords, Trophy, User } from "lucide-react";

export type DemoScreen =
  | "home"
  | "discover"
  | "fights"
  | "rankings"
  | "profile";

const tabs: { id: DemoScreen; icon: typeof Home; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "discover", icon: Search, label: "Scopri" },
  { id: "fights", icon: Swords, label: "Match" },
  { id: "rankings", icon: Trophy, label: "Classifica" },
  { id: "profile", icon: User, label: "Profilo" },
];

export default function DemoNav({
  active,
  onNavigate,
}: {
  active: DemoScreen;
  onNavigate: (screen: DemoScreen) => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-lg border-t border-border z-40 pb-6 pt-2 px-2">
      <div className="flex justify-around">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-all ${
                isActive ? "text-primary" : "text-text-secondary"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
