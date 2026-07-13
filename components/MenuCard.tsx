"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MenuItem, categories } from "@/menu/menuData";
import PriceTag from "./ui/PriceTag";

const sizeLabels: Record<string, string> = { S: "Small", M: "Medium", L: "Large", F: "Full" };

export default function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const category = categories.find((c) => c.slug === item.category);
  const Icon = (category ? (Icons as unknown as Record<string, LucideIcon>)[category.icon] : Icons.UtensilsCrossed) || Icons.UtensilsCrossed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl border-2 border-char/10 shadow-card overflow-hidden flex flex-col"
    >
      {item.isNew && (
        <span className="absolute top-3 right-3 z-10 bg-sauce text-cream text-xs font-tag font-bold px-2.5 py-1 rounded-full border-2 border-char rotate-3">
          NEW
        </span>
      )}

      <div className="relative h-36 flex items-center justify-center bg-gradient-to-br from-saucy-yellow to-saucy-orange">
        <div className="w-16 h-16 rounded-full bg-char/90 flex items-center justify-center text-saucy-yellow group-hover:scale-110 transition-transform duration-300">
          <Icon size={28} strokeWidth={2} />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-char leading-tight">{item.name}</h3>
        <p className="mt-1.5 text-sm text-char/60 flex-1">{item.description}</p>
        {item.note && <p className="mt-1 text-xs text-sauce font-semibold">{item.note}</p>}

        <div className="mt-4 flex flex-wrap gap-2">
          {item.price && <PriceTag price={item.price} size="sm" tilt={index % 2 === 0 ? -3 : 3} />}
          {item.sizes &&
            Object.entries(item.sizes).map(([size, price], i) => (
              <PriceTag
                key={size}
                price={`${sizeLabels[size]} Rs ${price}`}
                size="sm"
                tilt={i % 2 === 0 ? -3 : 3}
                variant={i % 2 === 0 ? "yellow" : "orange"}
              />
            ))}
        </div>
      </div>
    </motion.article>
  );
}
