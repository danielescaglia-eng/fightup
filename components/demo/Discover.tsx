"use client";

import { useState } from "react";
import { FIGHTERS, DISCIPLINES, DISCIPLINE_ICONS, TIER_CONFIG } from "@/lib/mock-data";
import type { Discipline } from "@/lib/mock-data";

export default function Discover() {
  const [filter, setFilter] = useState<Discipline | "All">("All");
  const filtered =
    filter === "All"
      ? FIGHTERS
      : FIGHTERS.filter((f) => f.discipline === filter);

  return (
    <div className="px-4">
      {/* Search bar */}
      <div className="mb-4">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#141420] border border-white/[0.05]">
          <span className="text-[#8888AA]">&#x1F50D;</span>
          <input
            type="text"
            placeholder="Search fighters, gyms, cities..."
            className="bg-transparent text-xs text-white placeholder:text-[#8888AA] focus:outline-none flex-1"
            readOnly
          />
        </div>
      </div>

      {/* Discipline filters */}
      <div className="flex gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-none">
        <button
          onClick={() => setFilter("All")}
          className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all ${
            filter === "All"
              ? "bg-[#E8352A] text-white"
              : "bg-white/5 text-[#8888AA]"
          }`}
        >
          All
        </button>
        {DISCIPLINES.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all flex items-center gap-1 ${
              filter === d
                ? "bg-[#E8352A] text-white"
                : "bg-white/5 text-[#8888AA]"
            }`}
          >
            <span className="text-xs">{DISCIPLINE_ICONS[d]}</span>
            {d}
          </button>
        ))}
      </div>

      {/* Map teaser */}
      <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 text-center">
        <div className="text-2xl mb-1">&#x1F5FA;&#xFE0F;</div>
        <div className="text-xs font-bold">Fighters Near You</div>
        <div className="text-[10px] text-[#8888AA]">
          Enable location to find opponents nearby
        </div>
      </div>

      {/* Fighter cards */}
      <div className="space-y-2.5">
        {filtered.map((f) => {
          const tierColor = TIER_CONFIG[f.tier].color;
          return (
            <div
              key={f.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#141420] border border-white/[0.05]"
            >
              <div className="relative">
                <img
                  src={f.avatar}
                  alt={f.name}
                  className="w-12 h-12 rounded-full border-2"
                  style={{ borderColor: tierColor }}
                />
                {f.isChampion && (
                  <span className="absolute -top-1 -right-1 text-xs">&#x1F451;</span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold truncate">{f.name}</div>
                <div className="flex items-center gap-2 text-[10px] text-[#8888AA]">
                  <span>
                    {DISCIPLINE_ICONS[f.discipline]} {f.discipline}
                  </span>
                  <span>&#x2022;</span>
                  <span>{f.weightClass}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span
                    className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                    style={{
                      color: tierColor,
                      backgroundColor: `${tierColor}15`,
                    }}
                  >
                    {f.tier} &middot; {f.elo}
                  </span>
                  <span className="text-[10px] text-[#8888AA]">
                    {f.wins}W-{f.losses}L
                  </span>
                </div>
              </div>

              <button className="px-3 py-1.5 bg-[#E8352A] text-white text-[10px] font-bold rounded-lg whitespace-nowrap">
                &#x2694;&#xFE0F; Challenge
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
