"use client";

import { FIGHTS, FIGHTERS, DISCIPLINE_ICONS } from "@/lib/mock-data";

export default function FightsScreen() {
  // Simulate "my" pending challenges
  const pendingChallenges = [
    {
      id: "c1",
      from: FIGHTERS[1],
      discipline: "MMA" as const,
      date: "Mar 25, 18:00",
      status: "incoming" as const,
    },
    {
      id: "c2",
      from: FIGHTERS[6],
      discipline: "Kickboxing" as const,
      date: "Mar 28, 20:00",
      status: "sent" as const,
    },
  ];

  const myFights = FIGHTS.filter(
    (f) => f.status === "COMPLETED" || f.status === "SCHEDULED"
  );

  return (
    <div className="px-4">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="font-[family-name:var(--font-display)] text-xl font-bold">
          &#x2694;&#xFE0F; MY FIGHTS
        </div>
      </div>

      {/* Pending Challenges */}
      <div className="mb-4">
        <div className="text-xs font-bold text-[#8888AA] mb-2">
          &#x1F4E8; PENDING CHALLENGES
        </div>
        <div className="space-y-2">
          {pendingChallenges.map((c) => (
            <div
              key={c.id}
              className="p-3 rounded-xl bg-[#141420] border border-white/[0.05]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={c.from.avatar}
                  alt={c.from.name}
                  className="w-10 h-10 rounded-full border border-white/10"
                />
                <div className="flex-1">
                  <div className="text-xs font-bold">{c.from.name}</div>
                  <div className="text-[10px] text-[#8888AA]">
                    {DISCIPLINE_ICONS[c.discipline]} {c.discipline} &middot;{" "}
                    {c.date}
                  </div>
                </div>
                {c.status === "incoming" ? (
                  <div className="flex gap-1.5">
                    <button className="px-2.5 py-1.5 bg-[#22C55E] text-white text-[10px] font-bold rounded-lg">
                      Accept
                    </button>
                    <button className="px-2.5 py-1.5 bg-white/5 text-[#8888AA] text-[10px] font-bold rounded-lg">
                      Decline
                    </button>
                  </div>
                ) : (
                  <span className="text-[10px] text-[#F5A623] font-medium px-2 py-1 bg-[#F5A623]/10 rounded-lg">
                    Sent
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming */}
      <div className="mb-4">
        <div className="text-xs font-bold text-[#8888AA] mb-2">
          &#x1F4C5; UPCOMING
        </div>
        {myFights
          .filter((f) => f.status === "SCHEDULED")
          .map((f) => (
            <div
              key={f.id}
              className="p-3 rounded-xl bg-gradient-to-r from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 mb-2"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-[#00D4FF] font-bold">
                  {f.scheduledAt}
                </span>
                <span className="text-[10px] text-[#8888AA]">
                  {DISCIPLINE_ICONS[f.discipline]} {f.discipline}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={f.fighterA.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-xs font-bold">
                    {f.fighterA.name.split(" ")[0]}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[#8888AA]">
                  VS
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold">
                    {f.fighterB.name.split(" ")[0]}
                  </span>
                  <img
                    src={f.fighterB.avatar}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Fight History */}
      <div>
        <div className="text-xs font-bold text-[#8888AA] mb-2">
          &#x1F4DC; FIGHT HISTORY
        </div>
        <div className="space-y-2 pb-4">
          {myFights
            .filter((f) => f.status === "COMPLETED")
            .map((f) => {
              const winner = f.winnerId === f.fighterA.id ? f.fighterA : f.fighterB;
              const resultLabel =
                f.result === "WIN_KO"
                  ? "KO"
                  : f.result === "WIN_SUBMISSION"
                    ? "SUB"
                    : "DEC";
              return (
                <div
                  key={f.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#141420] border border-white/[0.05]"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <img
                      src={f.fighterA.avatar}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-[10px] text-[#8888AA]">vs</span>
                    <img
                      src={f.fighterB.avatar}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-[#22C55E]">
                      {winner.name.split(" ")[0]} won
                    </div>
                    <div className="text-[9px] text-[#8888AA]">
                      {resultLabel} &middot; {f.scheduledAt}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
