"use client";

import { FIGHTERS, TIER_CONFIG, ACHIEVEMENTS } from "@/lib/mock-data";

export default function FighterProfile() {
  const fighter = FIGHTERS[0]; // Marco 'The Hammer' Rossi — Crown champion
  const tierColor = TIER_CONFIG[fighter.tier].color;
  const tierLabel = TIER_CONFIG[fighter.tier].label;

  const winRate = Math.round(
    (fighter.wins / (fighter.wins + fighter.losses + fighter.draws)) * 100
  );
  const koRate = Math.round((fighter.koWins / fighter.wins) * 100);

  const unlockedAchievements = ACHIEVEMENTS.filter((a) =>
    fighter.achievements.includes(a.code)
  );

  return (
    <div className="px-4">
      {/* Cover & Avatar */}
      <div className="relative -mx-4 h-32 bg-gradient-to-br from-[#E8352A]/30 to-[#F5A623]/10 mb-12">
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <div className="relative">
            <img
              src={fighter.avatar}
              alt={fighter.name}
              className="w-20 h-20 rounded-full border-4 border-[#0A0A0F]"
            />
            {fighter.isChampion && (
              <span className="absolute -top-2 -right-2 text-xl">&#x1F451;</span>
            )}
          </div>
        </div>
      </div>

      {/* Name & info */}
      <div className="text-center mb-4">
        <div className="text-base font-bold">{fighter.name}</div>
        <div className="text-xs text-[#8888AA]">
          @{fighter.username} &middot; {fighter.city}, {fighter.country}
        </div>
        <div className="text-xs text-[#8888AA]">{fighter.gym}</div>
      </div>

      {/* Tier badge & ELO */}
      <div className="flex justify-center mb-4">
        <div
          className="px-4 py-2 rounded-xl text-center crown-glow"
          style={{
            background: `linear-gradient(135deg, ${tierColor}20, ${tierColor}05)`,
            border: `1px solid ${tierColor}40`,
          }}
        >
          <div
            className="font-[family-name:var(--font-display)] text-sm font-bold"
            style={{ color: tierColor }}
          >
            {fighter.tier.toUpperCase()} &middot; {tierLabel}
          </div>
          <div
            className="font-[family-name:var(--font-display)] text-3xl font-bold"
            style={{ color: tierColor }}
          >
            {fighter.elo}
          </div>
          <div className="text-[10px] text-[#8888AA]">ELO Rating</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: "Wins", value: fighter.wins, color: "#22C55E" },
          { label: "Losses", value: fighter.losses, color: "#EF4444" },
          { label: "KO Rate", value: `${koRate}%`, color: "#F5A623" },
          { label: "Win Rate", value: `${winRate}%`, color: "#00D4FF" },
        ].map((s) => (
          <div
            key={s.label}
            className="text-center p-2 rounded-xl bg-[#141420] border border-white/[0.05]"
          >
            <div
              className="font-[family-name:var(--font-display)] text-lg font-bold"
              style={{ color: s.color }}
            >
              {s.value}
            </div>
            <div className="text-[9px] text-[#8888AA]">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Level & XP */}
      <div className="p-3 rounded-xl bg-[#141420] border border-white/[0.05] mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold">
            Level {fighter.xpLevel}
          </span>
          <span className="text-[10px] text-[#8888AA]">
            {fighter.xpLevel * 1000} XP
          </span>
        </div>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#E8352A] to-[#F5A623]"
            style={{ width: "65%" }}
          />
        </div>
      </div>

      {/* Discipline & Weight */}
      <div className="flex gap-2 mb-4">
        <div className="flex-1 p-3 rounded-xl bg-[#141420] border border-white/[0.05] text-center">
          <div className="text-lg mb-1">&#x1F94A;</div>
          <div className="text-xs font-bold">{fighter.discipline}</div>
          <div className="text-[10px] text-[#8888AA]">Primary</div>
        </div>
        <div className="flex-1 p-3 rounded-xl bg-[#141420] border border-white/[0.05] text-center">
          <div className="text-lg mb-1">&#x2696;&#xFE0F;</div>
          <div className="text-xs font-bold">{fighter.weightClass}</div>
          <div className="text-[10px] text-[#8888AA]">Weight Class</div>
        </div>
      </div>

      {/* Active streaks */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-[#E8352A]/10 to-transparent border border-[#E8352A]/20 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold">
              &#x1F525; {fighter.winStreak} Win Streak
            </div>
            <div className="text-[10px] text-[#8888AA]">
              Longest: {fighter.winStreak} wins
            </div>
          </div>
          <div className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#E8352A]">
            {fighter.winStreak}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-4">
        <div className="text-xs font-bold mb-2">
          &#x1F3C5; ACHIEVEMENTS ({unlockedAchievements.length})
        </div>
        <div className="grid grid-cols-2 gap-2">
          {unlockedAchievements.map((a) => (
            <div
              key={a.code}
              className={`p-2.5 rounded-xl border text-center ${
                a.rarity === "LEGENDARY"
                  ? "bg-[#F5A623]/10 border-[#F5A623]/20"
                  : a.rarity === "EPIC"
                    ? "bg-purple-500/10 border-purple-500/20"
                    : a.rarity === "RARE"
                      ? "bg-[#00D4FF]/10 border-[#00D4FF]/20"
                      : "bg-white/5 border-white/[0.05]"
              }`}
            >
              <div className="text-xl mb-0.5">{a.icon}</div>
              <div className="text-[10px] font-bold">{a.name}</div>
              <div className="text-[9px] text-[#8888AA]">{a.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 pb-4">
        <button className="flex-1 py-2.5 bg-[#E8352A] text-white text-xs font-bold rounded-xl">
          &#x2694;&#xFE0F; Challenge
        </button>
        <button className="flex-1 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl">
          Follow
        </button>
      </div>
    </div>
  );
}
