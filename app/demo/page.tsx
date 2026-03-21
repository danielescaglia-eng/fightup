"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PhoneFrame from "@/components/demo/PhoneFrame";
import DemoNav, { type DemoScreen } from "@/components/demo/DemoNav";
import HomeFeed from "@/components/demo/HomeFeed";
import Discover from "@/components/demo/Discover";
import FightsScreen from "@/components/demo/FightsScreen";
import RankingsScreen from "@/components/demo/Rankings";
import FighterProfile from "@/components/demo/FighterProfile";

const screenComponents: Record<DemoScreen, React.ComponentType> = {
  home: HomeFeed,
  discover: Discover,
  fights: FightsScreen,
  rankings: RankingsScreen,
  profile: FighterProfile,
};

const screenLabels: Record<DemoScreen, string> = {
  home: "Home Feed",
  discover: "Scopri Fighter",
  fights: "I Miei Match",
  rankings: "Classifiche",
  profile: "Profilo Fighter",
};

export default function DemoPage() {
  const [activeScreen, setActiveScreen] = useState<DemoScreen>("home");
  const Screen = screenComponents[activeScreen];

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Torna a FightUp</span>
      </Link>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold mb-2">
          DEMO <span className="text-primary">INTERATTIVA</span>
        </h1>
        <p className="text-text-secondary text-sm">
          Esplora l&apos;esperienza FightUp &middot;{" "}
          <span className="text-white font-medium">
            {screenLabels[activeScreen]}
          </span>
        </p>
      </div>

      {/* Phone frame with screen */}
      <div className="relative">
        <PhoneFrame>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <Screen />
            </motion.div>
          </AnimatePresence>
          <DemoNav active={activeScreen} onNavigate={setActiveScreen} />
        </PhoneFrame>
      </div>

      {/* Screen selector pills (desktop) */}
      <div className="hidden md:flex gap-2 mt-8">
        {(Object.keys(screenComponents) as DemoScreen[]).map((screen) => (
          <button
            key={screen}
            onClick={() => setActiveScreen(screen)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeScreen === screen
                ? "bg-primary text-white"
                : "bg-surface text-text-secondary hover:text-white"
            }`}
          >
            {screenLabels[screen]}
          </button>
        ))}
      </div>

      {/* Footer note */}
      <p className="text-text-secondary text-xs mt-8 text-center max-w-md">
        Questa e una demo interattiva con dati fittizi. La vera app FightUp
        avra matchmaking live, streaming in tempo reale e l&apos;esperienza completa
        delle classifiche.
      </p>
    </div>
  );
}
