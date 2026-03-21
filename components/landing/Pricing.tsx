"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Fighter Free",
    price: "0",
    period: "",
    description: "Inizia e unisciti alla community",
    features: [
      "Crea profilo e sfida gli altri",
      "Partecipazione base alle classifiche",
      "1 sfida attiva al mese",
      "Guarda i combattimenti (con ads)",
      "Storico combattimenti pubblico",
    ],
    cta: "Inizia Gratis",
    highlighted: false,
    color: "#8888AA",
  },
  {
    name: "Fighter Pass",
    price: "9,99",
    period: "/mese",
    description: "Per i competitor seri",
    features: [
      "Sfide illimitate",
      "Storico completo e analytics",
      "Streamma i tuoi match (pubblico/privato)",
      "Fighter card e badge personalizzati",
      "Matchmaking prioritario",
      "Revenue share su tip/PPV",
    ],
    cta: "Diventa Pro",
    highlighted: true,
    color: "#E8352A",
  },
  {
    name: "Fan Pass",
    price: "4,99",
    period: "/mese",
    description: "Per l'esperienza fan definitiva",
    features: [
      "Visione senza pubblicita",
      "Accesso stream premium",
      "Contenuti esclusivi",
      "Vota nelle dispute",
      "Accesso anticipato eventi",
    ],
    cta: "Abbonati",
    highlighted: false,
    color: "#00D4FF",
  },
  {
    name: "Gym Pro",
    price: "49",
    period: "/mese",
    description: "Per palestre e promoter",
    features: [
      "Gestione multi-fighter",
      "Organizza tornei locali",
      "Pagine evento brandizzate",
      "Analytics del roster",
      "Streaming white-label",
      "Strumenti di revenue",
    ],
    cta: "Contattaci",
    highlighted: false,
    color: "#F5A623",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-surface/50" id="pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            SCEGLI IL TUO <span className="text-primary">PERCORSO</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Inizia gratis. Passa al livello superiore quando sei pronto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary/10 to-transparent border-primary/40 shadow-lg shadow-primary/10"
                  : "bg-surface border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  PIU POPOLARE
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="font-[family-name:var(--font-display)] text-xl font-bold mb-1"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h3>
                <p className="text-text-secondary text-xs mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-text-secondary">&euro;</span>
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-text-secondary text-sm">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-white/5 hover:bg-white/10 text-white border border-border"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
