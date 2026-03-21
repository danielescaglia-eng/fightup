"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 120,
    suffix: "M+",
    label: "Praticanti nel Mondo",
    color: "#E8352A",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80",
  },
  { value: 30, suffix: "B+", label: "Mercato Globale (USD)", color: "#F5A623", image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=400&q=80" },
  { value: 9, suffix: "", label: "Discipline", color: "#00D4FF", image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80" },
  { value: 0, suffix: "", label: "Piattaforme Come Noi", color: "#22C55E", image: "" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            L&apos;<span className="text-primary">OPPORTUNIT&Agrave;</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            120M+ di fighter amatoriali nel mondo. Zero infrastruttura per
            matchmaking, ranking e streaming. Fino ad ora.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center p-8 rounded-2xl bg-surface border border-border hover:border-white/10 transition-all overflow-hidden group"
            >
              {stat.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={stat.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="relative z-10">
                <div
                  className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value === 0 ? (
                    "0"
                  ) : (
                    <AnimatedNumber
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
