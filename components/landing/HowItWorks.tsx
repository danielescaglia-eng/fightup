"use client";

import { motion } from "framer-motion";

const steps = [
  {
    icon: "\u2694\uFE0F",
    title: "Sfida",
    description:
      "Trova avversari per disciplina, peso e posizione. Lancia una sfida in meno di 60 secondi.",
    color: "#E8352A",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=400&q=80",
  },
  {
    icon: "\uD83E\uDD4A",
    title: "Combatti",
    description:
      "Incontratevi, combattete. Trasmetti in diretta o registra per la community.",
    color: "#F5A623",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=400&q=80",
  },
  {
    icon: "\uD83D\uDCF9",
    title: "Registra",
    description:
      "Invia i risultati, carica il video. Ogni combattimento diventa un momento social condivisibile.",
    color: "#00D4FF",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Scala",
    description:
      "Scala le classifiche ELO, guadagna badge e combatti per il titolo di Crown Champion.",
    color: "#22C55E",
    image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=400&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 relative" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            COME <span className="text-primary">FUNZIONA</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Dalla sfida al campionato in quattro semplici passi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-gold to-cyan opacity-20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Step image */}
              <div className="relative z-10 mx-auto mb-6">
                <div
                  className="w-28 h-28 rounded-2xl overflow-hidden mx-auto transition-transform group-hover:scale-110 duration-300 relative"
                  style={{
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center text-4xl"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}60, ${step.color}20)`,
                    }}
                  >
                    {step.icon}
                  </div>
                </div>
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {i + 1}
                </div>
              </div>

              <h3
                className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3"
                style={{ color: step.color }}
              >
                {step.title.toUpperCase()}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
