"use client";

import { ReactNode } from "react";

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 375, height: 812 }}>
      {/* Phone shell */}
      <div className="absolute inset-0 rounded-[3rem] border-[3px] border-white/10 bg-bg shadow-2xl shadow-black/50 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl z-50" />

        {/* Screen content */}
        <div className="h-full overflow-y-auto overflow-x-hidden pt-10 pb-20 scrollbar-none">
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {children}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
      </div>
    </div>
  );
}
