"use client";

import { FIGHTS, FIGHTERS, DISCIPLINE_ICONS } from "@/lib/mock-data";

function FightCard({ fight }: { fight: (typeof FIGHTS)[0] }) {
  const isLive = fight.status === "LIVE";
  const isCompleted = fight.status === "COMPLETED";
  const winner = fight.winnerId
    ? fight.fighterA.id === fight.winnerId
      ? fight.fighterA
      : fight.fighterB
    : null;

  return (
    <div className="bg-[#141420] rounded-2xl p-4 border border-white/[0.05]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">{DISCIPLINE_ICONS[fight.discipline]}</span>
          <span className="text-xs text-[#8888AA]">{fight.discipline}</span>
        </div>
        {isLive && (
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] text-red-400 font-bold">LIVE</span>
          </div>
        )}
        {isCompleted && (
          <span className="text-[10px] text-[#8888AA] px-2 py-0.5 rounded-full bg-white/5">
            COMPLETED
          </span>
        )}
        {fight.status === "SCHEDULED" && (
          <span className="text-[10px] text-[#00D4FF] px-2 py-0.5 rounded-full bg-[#00D4FF]/10">
            {fight.scheduledAt}
          </span>
        )}
      </div>

      {/* Fighters VS */}
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <img
            src={fight.fighterA.avatar}
            alt={fight.fighterA.name}
            className={`w-14 h-14 rounded-full mx-auto mb-1.5 border-2 ${
              winner?.id === fight.fighterA.id
                ? "border-[#22C55E]"
                : "border-white/10"
            }`}
          />
          <div className="text-xs font-bold truncate px-1">
            {fight.fighterA.name.split(" ")[0]}
          </div>
          <div className="text-[10px] text-[#8888AA]">
            {fight.fighterA.elo} ELO
          </div>
          {winner?.id === fight.fighterA.id && (
            <span className="text-[10px] text-[#22C55E] font-bold">WIN</span>
          )}
        </div>

        <div className="px-3">
          <div className="font-[family-name:var(--font-display)] text-xl font-bold text-[#8888AA]">
            VS
          </div>
        </div>

        <div className="flex-1 text-center">
          <img
            src={fight.fighterB.avatar}
            alt={fight.fighterB.name}
            className={`w-14 h-14 rounded-full mx-auto mb-1.5 border-2 ${
              winner?.id === fight.fighterB.id
                ? "border-[#22C55E]"
                : "border-white/10"
            }`}
          />
          <div className="text-xs font-bold truncate px-1">
            {fight.fighterB.name.split(" ")[0]}
          </div>
          <div className="text-[10px] text-[#8888AA]">
            {fight.fighterB.elo} ELO
          </div>
          {winner?.id === fight.fighterB.id && (
            <span className="text-[10px] text-[#22C55E] font-bold">WIN</span>
          )}
        </div>
      </div>

      {/* Footer stats */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.05]">
        <div className="flex items-center gap-3 text-[10px] text-[#8888AA]">
          <span>&#x1F441; {fight.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
          <span>&#x1F4AC; {fight.comments}</span>
        </div>
        {isLive && (
          <button className="px-3 py-1 bg-[#E8352A] text-white text-[10px] font-bold rounded-lg">
            Watch Live
          </button>
        )}
      </div>
    </div>
  );
}

export default function HomeFeed() {
  const liveFights = FIGHTS.filter((f) => f.status === "LIVE");
  const topFighters = FIGHTERS.filter((f) => f.isChampion).slice(0, 3);

  return (
    <div className="px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="font-[family-name:var(--font-display)] text-xl font-bold">
            FIGHT<span className="text-[#E8352A]">UP</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm">
            &#x1F514;
          </button>
        </div>
      </div>

      {/* Live now banner */}
      {liveFights.length > 0 && (
        <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[#E8352A]/20 to-transparent border border-[#E8352A]/20">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#E8352A] animate-pulse" />
            <span className="text-xs font-bold text-[#E8352A]">
              {liveFights.length} FIGHT{liveFights.length > 1 ? "S" : ""} LIVE NOW
            </span>
          </div>
          <div className="text-[10px] text-[#8888AA]">
            {liveFights[0].fighterA.name} vs {liveFights[0].fighterB.name}
          </div>
        </div>
      )}

      {/* Crown Champions row */}
      <div className="mb-4">
        <div className="text-xs font-bold text-[#8888AA] mb-2">
          &#x1F451; CROWN CHAMPIONS
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {topFighters.map((f) => (
            <div
              key={f.id}
              className="flex-shrink-0 text-center p-3 rounded-xl bg-gradient-to-b from-[#F5A623]/10 to-transparent border border-[#F5A623]/20 w-[90px]"
            >
              <img
                src={f.avatar}
                alt={f.name}
                className="w-10 h-10 rounded-full mx-auto mb-1 border border-[#F5A623]"
              />
              <div className="text-[10px] font-bold truncate">{f.name.split(" ")[0]}</div>
              <div className="text-[9px] text-[#F5A623]">{f.discipline}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard snapshot */}
      <div className="mb-4 p-3 rounded-xl bg-[#141420] border border-white/[0.05]">
        <div className="text-xs font-bold mb-2">&#x1F3C6; TOP FIGHTERS</div>
        {FIGHTERS.slice(0, 3).map((f, i) => (
          <div
            key={f.id}
            className="flex items-center gap-3 py-2 border-b border-white/[0.03] last:border-0"
          >
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[#8888AA] w-6">
              {i + 1}
            </span>
            <img
              src={f.avatar}
              alt={f.name}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold truncate">{f.name}</div>
              <div className="text-[10px] text-[#8888AA]">{f.discipline}</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold" style={{ color: f.tier === "Crown" ? "#F5A623" : f.tier === "Diamond" ? "#00D4FF" : "#fff" }}>
                {f.elo}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fight feed */}
      <div className="text-xs font-bold text-[#8888AA] mb-2">
        &#x26A1; RECENT FIGHTS
      </div>
      <div className="space-y-3 pb-4">
        {FIGHTS.map((fight) => (
          <FightCard key={fight.id} fight={fight} />
        ))}
      </div>
    </div>
  );
}
