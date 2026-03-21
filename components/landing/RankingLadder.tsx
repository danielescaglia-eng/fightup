"use client";

import { motion } from "framer-motion";
import { TIER_CONFIG } from "@/lib/mock-data";
import type { RankTier } from "@/lib/mock-data";

const tiers: RankTier[] = [
  "Crown",
  "Diamond",
  "Platinum",
  "Gold",
  "Silver",
  "Bronze",
  "Iron",
];

const tierLabelsIT: Record<RankTier, string> = {
  Iron: "Novizio",
  Bronze: "Contendente",
  Silver: "Combattente",
  Gold: "Guerriero",
  Platinum: "Elite",
  Diamond: "Campione",
  Crown: "Re/Regina",
};

export default function RankingLadder() {
  return (
    <section className="py-24 px-6 bg-surface/50 relative overflow-hidden" id="rankings">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=1920&q=80')",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            SCALA LE <span className="text-gold">CLASSIFICHE</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Sistema di ranking competitivo basato su ELO. Vinci, sali di livello, conquista la Corona.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {tiers.map((tier, i) => {
            const config = TIER_CONFIG[tier];
            const widthPercent = 100 - i * 8;
            const isCrown = tier === "Crown";

            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative mx-auto ${isCrown ? "crown-glow rounded-2xl" : ""}`}
                style={{ width: `${widthPercent}%` }}
              >
                <div
                  className="flex items-center justify-between p-4 md:p-5 rounded-xl border transition-all hover:scale-[1.02] duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${config.color}15, ${config.color}05)`,
                    borderColor: `${config.color}30`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm tier-bg-${tier.toLowerCase()}`}
                    >
                      {isCrown ? "\uD83D\uDC51" : tier[0]}
                    </div>
                    <div>
                      <div
                        className="font-[family-name:var(--font-display)] text-lg font-bold"
                        style={{ color: config.color }}
                      >
                        {tier.toUpperCase()}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {tierLabelsIT[tier]}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-display)] font-bold text-sm" style={{ color: config.color }}>
                      {config.eloRange}
                    </div>
                    <div className="text-xs text-text-secondary">ELO</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ELO explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 text-xs text-text-secondary">
            <span>
              &#x2B06;&#xFE0F; KO/Sub: <span className="text-success">+20% ELO</span>
            </span>
            <span>
              &#x1F3C6; Titolo in palio:{" "}
              <span className="text-gold">+30% ELO</span>
            </span>
            <span>
              &#x1F525; Finale Torneo:{" "}
              <span className="text-primary">+50% ELO</span>
            </span>
            <span>
              &#x1F4A1; Vittoria a sorpresa:{" "}
              <span className="text-cyan">+10% ELO</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
