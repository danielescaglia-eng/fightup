"use client";

import { motion } from "framer-motion";

const combatImages = [
  {
    src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80",
    label: "Boxe",
    desc: "La Noble Arte",
  },
  {
    src: "https://images.unsplash.com/photo-1517438322307-e67111335449?w=600&q=80",
    label: "Muay Thai",
    desc: "L'Arte delle Otto Armi",
  },
  {
    src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80",
    label: "Kickboxing",
    desc: "Potenza e Tecnica",
  },
  {
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
    label: "MMA",
    desc: "Combattimento Completo",
  },
  {
    src: "https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=600&q=80",
    label: "BJJ & Judo",
    desc: "L'Arte della Lotta a Terra",
  },
  {
    src: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=600&q=80",
    label: "Wrestling",
    desc: "Controllo e Dominio",
  },
];

export default function CombatGallery() {
  return (
    <section className="py-20 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4">
            OGNI <span className="text-primary">DISCIPLINA</span>, UN&apos;ARENA
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Dalla boxe al BJJ, dal Muay Thai al Wrestling. Trova il tuo ring, sfida i migliori.
          </p>
        </motion.div>

        {/* Bento grid gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {combatImages.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`${i === 0 ? "h-64 md:h-full" : "h-48 md:h-56"}`}>
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-white">
                  {img.label}
                </div>
                <div className="text-xs text-white/60">{img.desc}</div>
              </div>
              {/* Hover glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
