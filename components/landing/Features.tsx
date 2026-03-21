"use client";

import { motion } from "framer-motion";
import {
  Swords,
  Trophy,
  Video,
  Zap,
  Users,
  TrendingUp,
  Globe,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Matchmaking Intelligente",
    description:
      "Trova avversari per disciplina, peso, rank e posizione. Sfida chiunque, in qualsiasi momento.",
    gradient: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=300&q=80",
  },
  {
    icon: Trophy,
    title: "Classifiche ELO",
    description:
      "Sistema di ranking competitivo per disciplina. Scala da Iron a Crown Champion.",
    gradient: "from-gold/20 to-gold/5",
    borderColor: "border-gold/20",
    image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=300&q=80",
  },
  {
    icon: Video,
    title: "Streaming Live",
    description:
      "Trasmetti i tuoi combattimenti in diretta. I fan guardano, reagiscono e inviano tip in tempo reale.",
    gradient: "from-cyan/20 to-cyan/5",
    borderColor: "border-cyan/20",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&q=80",
  },
  {
    icon: Zap,
    title: "Gamification",
    description:
      "Guadagna XP, sblocca badge, completa sfide settimanali. Ogni combattimento conta.",
    gradient: "from-warning/20 to-warning/5",
    borderColor: "border-warning/20",
    image: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=300&q=80",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Segui i fighter, commenta i combattimenti, vota nelle dispute. Costruita per la tribu degli sport da combattimento.",
    gradient: "from-success/20 to-success/5",
    borderColor: "border-success/20",
  },
  {
    icon: TrendingUp,
    title: "Statistiche Fighter",
    description:
      "Monitora il tuo KO rate, la storia ELO, le serie di vittorie e la progressione della carriera.",
    gradient: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Globe,
    title: "9 Discipline",
    description:
      "Boxe, MMA, BJJ, Muay Thai, Kickboxing, Wrestling, Karate, Taekwondo, Judo.",
    gradient: "from-cyan/20 to-cyan/5",
    borderColor: "border-cyan/20",
  },
  {
    icon: Shield,
    title: "Fair Play",
    description:
      "Conferma dei risultati, arbitraggio della community per le dispute e record verificati.",
    gradient: "from-primary/20 to-primary/5",
    borderColor: "border-primary/20",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-surface/50" id="features">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            COSTRUITA PER I <span className="text-primary">FIGHTER</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Tutto quello che ti serve per competere, crescere e costruire la tua leggenda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${f.gradient} border ${f.borderColor} hover:scale-[1.02] transition-all duration-300 relative overflow-hidden`}
            >
              {f.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img src={f.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold mb-2">
                  {f.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
