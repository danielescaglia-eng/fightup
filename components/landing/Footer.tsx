"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative py-24 px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80')",
        }}
      />
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(232,53,42,0.15)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            PRONTO A <span className="text-primary">COMBATTERE</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto">
            Unisciti alla waitlist e sii tra i primi fighter sulla piattaforma.
            I membri early access ricevono il Fighter Pass gratis per 3 mesi.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-success/10 border border-success/20 text-success font-medium"
            >
              &#x2705; Sei nella lista! Ti contatteremo presto.
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="la-tua@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-xl bg-surface border border-border text-white placeholder:text-text-secondary focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                onClick={() => email && setSubmitted(true)}
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all whitespace-nowrap"
              >
                Unisciti alla Waitlist
              </button>
            </div>
          )}
        </motion.div>

        {/* Bottom links */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-[family-name:var(--font-display)] text-2xl font-bold">
              FIGHT<span className="text-primary">UP</span>
            </div>
            <div className="flex gap-6 text-sm text-text-secondary">
              <a href="#features" className="hover:text-white transition-colors">
                Funzionalita
              </a>
              <a href="#disciplines" className="hover:text-white transition-colors">
                Discipline
              </a>
              <a href="#rankings" className="hover:text-white transition-colors">
                Classifiche
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Prezzi
              </a>
            </div>
            <div className="text-xs text-text-secondary">
              &copy; 2026 FightUp. Tutti i diritti riservati.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
