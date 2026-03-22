"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroImages = [
  "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&q=80",
  "https://images.unsplash.com/photo-1517438322307-e67111335449?w=400&q=80",
  "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background fighter image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/80 via-[#0A0A0F]/70 to-[#0A0A0F]" />
      {/* Red accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,53,42,0.25)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">
            Il Futuro degli Sport da Combattimento Amatoriali
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[family-name:var(--font-display)] text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
        >
          <span className="block">SFIDA.</span>
          <span className="block text-primary">COMBATTI.</span>
          <span className="block">
            CONQUISTA
            <span className="text-gold">.</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          La piattaforma dove i fighter amatoriali si sfidano, scalano le
          classifiche, trasmettono i loro combattimenti e costruiscono una
          leggenda.
          <br />
          <span className="text-white font-medium">
            Chess.com incontra Tinder incontra Twitch &mdash; per gli sport da
            combattimento.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl transition-all duration-300 pulse-red">
            <span className="relative z-10 flex items-center gap-2">
              &#x1F94A; Entra nel Ring
            </span>
          </button>
          <Link
            href="/demo"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-border text-white font-semibold text-lg rounded-xl transition-all duration-300"
          >
            &#x1F4F1; Prova la Demo
          </Link>
        </motion.div>

        {/* Combat sports image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-3 mb-12"
        >
          {heroImages.map((img, i) => (
            <div
              key={i}
              className="w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <img
                src={img}
                alt="Combat sports"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Discipline badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {[
            { emoji: "\uD83E\uDD4A", name: "Boxe" },
            { emoji: "\uD83E\uDDB5", name: "Kickboxing" },
            { emoji: "\uD83D\uDC32", name: "Muay Thai" },
            { emoji: "\uD83E\uDD3C", name: "MMA" },
            { emoji: "\uD83D\uDD77\uFE0F", name: "BJJ" },
            { emoji: "\uD83E\uDD3C", name: "Wrestling" },
            { emoji: "\uD83E\uDD4B", name: "Karate" },
            { emoji: "\uD83E\uDD4B", name: "Taekwondo" },
            { emoji: "\uD83E\uDD4B", name: "Judo" },
          ].map((d) => (
            <div
              key={d.name}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary hover:text-white hover:border-primary/30 transition-all"
            >
              <span>{d.emoji}</span>
              <span className="text-xs font-medium">{d.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
