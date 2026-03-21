"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background fighter image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/85 via-[#0A0A0F]/75 to-[#0A0A0F]" />
      {/* Red accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,53,42,0.2)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,212,255,0.08)_0%,_transparent_50%)]" />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-[10%] text-8xl opacity-10 select-none"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        &#x1F94A;
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[15%] text-7xl opacity-10 select-none"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        &#x1F451;
      </motion.div>
      <motion.div
        className="absolute top-40 right-[20%] text-6xl opacity-10 select-none"
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        &#x1F525;
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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

        {/* Stats preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center gap-8 md:gap-16"
        >
          {[
            { label: "Discipline", value: "9" },
            { label: "Categorie di Peso", value: "10" },
            { label: "Livelli di Rank", value: "7" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary mt-1">
                {stat.label}
              </div>
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
