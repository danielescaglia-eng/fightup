"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "how-it-works", label: "Come Funziona" },
  { id: "features", label: "Funzionalita" },
  { id: "disciplines", label: "Discipline" },
  { id: "rankings", label: "Classifiche" },
  { id: "pricing", label: "Prezzi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-bold"
        >
          FIGHT<span className="text-primary">UP</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/demo"
            className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all text-sm"
          >
            Prova la Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-border px-6 py-6 space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="block text-text-secondary hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/demo"
            className="block w-full text-center px-5 py-3 bg-primary text-white font-bold rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Prova la Demo
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
