"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { DISCIPLINES, DISCIPLINE_ICONS, FIGHTERS } from "@/lib/mock-data";
import type { Discipline } from "@/lib/mock-data";

const disciplineInfo: Record<
  Discipline,
  { tagline: string; fighters: number; avgElo: number; image: string }
> = {
  Boxing: { tagline: "La Noble Arte", fighters: 12400, avgElo: 1280, image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80" },
  Kickboxing: { tagline: "Colpi Oltre i Pugni", fighters: 8200, avgElo: 1190, image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80" },
  "Muay Thai": { tagline: "L'Arte delle Otto Armi", fighters: 9100, avgElo: 1310, image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&q=80" },
  MMA: { tagline: "Combattimento Completo", fighters: 15600, avgElo: 1250, image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80" },
  BJJ: { tagline: "L'Arte Gentile", fighters: 11800, avgElo: 1340, image: "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=600&q=80" },
  Wrestling: { tagline: "Controllo a Terra", fighters: 6500, avgElo: 1220, image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&q=80" },
  Karate: { tagline: "La Via della Mano Vuota", fighters: 5300, avgElo: 1200, image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80" },
  Taekwondo: { tagline: "La Via del Piede e del Pugno", fighters: 4800, avgElo: 1180, image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80" },
  Judo: { tagline: "La Via della Gentilezza", fighters: 4200, avgElo: 1260, image: "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=600&q=80" },
};

function formatNumber(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default function DisciplinesSection() {
  const [active, setActive] = useState<Discipline>("Boxing");
  const info = disciplineInfo[active];
  const champion = FIGHTERS.find(
    (f) => f.discipline === active && f.isChampion
  );

  return (
    <section className="py-24 px-6" id="disciplines">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            9 <span className="text-primary">DISCIPLINE</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Ognuna con la propria classifica e il proprio Crown Champion
          </p>
        </motion.div>

        {/* Discipline tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {DISCIPLINES.map((d) => (
            <button
              key={d}
              onClick={() => setActive(d)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                active === d
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-surface hover:bg-elevated text-text-secondary"
              }`}
            >
              <span>{DISCIPLINE_ICONS[d]}</span>
              {d}
            </button>
          ))}
        </div>

        {/* Active discipline card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-surface border border-border rounded-3xl overflow-hidden relative"
        >
          {/* Background image */}
          <div className="absolute inset-0 opacity-10">
            <img src={info.image} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-8xl">{DISCIPLINE_ICONS[active]}</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-[family-name:var(--font-display)] text-4xl font-bold mb-2">
                  {active.toUpperCase()}
                </h3>
                <p className="text-text-secondary text-lg italic mb-6">
                  &ldquo;{info.tagline}&rdquo;
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-primary">
                      {formatNumber(info.fighters)}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Fighter Attivi
                    </div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-gold">
                      {info.avgElo}
                    </div>
                    <div className="text-xs text-text-secondary">ELO Medio</div>
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-cyan">
                      10
                    </div>
                    <div className="text-xs text-text-secondary">
                      Categorie di Peso
                    </div>
                  </div>
                </div>
              </div>

              {/* Crown Champion */}
              {champion && (
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 crown-glow">
                  <div className="text-3xl mb-2">&#x1F451;</div>
                  <div className="text-xs text-gold font-medium mb-2">
                    CROWN CHAMPION
                  </div>
                  <img
                    src={champion.avatar}
                    alt={champion.name}
                    className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-gold object-cover"
                  />
                  <div className="font-bold text-sm">{champion.name}</div>
                  <div className="text-gold font-[family-name:var(--font-display)] text-lg font-bold">
                    {champion.elo} ELO
                  </div>
                  <div className="text-xs text-text-secondary">
                    {champion.wins}V - {champion.losses}S
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
