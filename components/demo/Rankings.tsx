"use client";

import { useState } from "react";
import {
  FIGHTERS,
  DISCIPLINES,
  DISCIPLINE_ICONS,
  TIER_CONFIG,
} from "@/lib/mock-data";
import type { Discipline } from "@/lib/mock-data";

export default function RankingsScreen() {
  const [discipline, setDiscipline] = useState<Discipline>("Boxing");

  const ranked = [...FIGHTERS]
    .filter((f) => f.discipline === discipline || f.disciplines?.includes(discipline))
    .sort((a, b) => b.elo - a.elo);

  // Fallback: show all fighters sorted by ELO if none match
  const displayFighters =
    ranked.length > 0
      ? ranked
      : [...FIGHTERS].sort((a, b) => b.elo - a.elo).slice(0, 10);

  const champion = displayFighters[0];

  return (
    <div className="px-4">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="font-[family-name:var(--font-display)] text-xl font-bold">
          &#x1F3C6; RANKINGS
        </div>
      </div>

      {/* Discipline tabs */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-none">
        {DISCIPLINES.map((d) => (
          <button
            key={d}
            onClick={() => setDiscipline(d)}
            className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-all ${
              discipline === d
                ? "bg-[#E8352A] text-white"
                : "bg-white/5 text-[#8888AA]"
            }`}
          >
            {DISCIPLINE_ICONS[d]}
          </button>
        ))}
      </div>

      {/* Champion spotlight */}
      {champion && (
        <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#F5A623]/15 to-transparent border border-[#F5A623]/25 text-center crown-glow">
          <div className="text-2xl mb-1">&#x1F451;</div>
          <div className="text-[10px] text-[#F5A623] font-bold mb-2">
            {discipline.toUpperCase()} CROWN CHAMPION
          </div>
          <img
            src={champion.avatar}
            alt={champion.name}
            className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-[#F5A623]"
          />
          <div className="text-sm font-bold">{champion.name}</div>
          <div className="font-[family-name:var(--font-display)] text-xl font-bold text-[#F5A623]">
            {champion.elo} ELO
          </div>
          <div className="text-[10px] text-[#8888AA]">
            {champion.wins}W - {champion.losses}L &middot; {champion.koWins}{" "}
            KOs &middot; {champion.winStreak} streak
          </div>
        </div>
      )}

      {/* Leaderboard */}
      <div className="space-y-1.5">
        {displayFighters.map((f, i) => {
          const tierColor = TIER_CONFIG[f.tier].color;
          return (
            <div
              key={f.id}
              className={`flex items-center gap-3 p-3 rounded-xl border ${
                i === 0
                  ? "bg-[#F5A623]/5 border-[#F5A623]/20"
                  : i === 1
                    ? "bg-[#C0C0C0]/5 border-[#C0C0C0]/10"
                    : i === 2
                      ? "bg-[#CD7F32]/5 border-[#CD7F32]/10"
                      : "bg-[#141420] border-white/[0.05]"
              }`}
            >
              <span
                className="font-[family-name:var(--font-display)] text-lg font-bold w-6 text-center"
                style={{
                  color:
                    i === 0
                      ? "#F5A623"
                      : i === 1
                        ? "#C0C0C0"
                        : i === 2
                          ? "#CD7F32"
                          : "#8888AA",
                }}
              >
                {i + 1}
              </span>
              <img
                src={f.avatar}
                alt={f.name}
                className="w-10 h-10 rounded-full border"
                style={{ borderColor: tierColor }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold truncate">
                  {f.isChampion && "&#x1F451; "}
                  {f.name}
                </div>
                <div className="text-[10px] text-[#8888AA]">
                  {f.gym} &middot; {f.city}
                </div>
              </div>
              <div className="text-right">
                <div
                  className="text-xs font-bold"
                  style={{ color: tierColor }}
                >
                  {f.elo}
                </div>
                <div className="text-[10px] text-[#8888AA]">
                  {f.wins}-{f.losses}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
