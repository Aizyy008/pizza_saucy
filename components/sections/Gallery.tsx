"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import PriceTag from "../ui/PriceTag";
import { menuItems } from "@/menu/menuData";

// A hand-picked spread of standout items for the visual showcase
const spotlightIds = [
  "pz-kabab-crust",
  "broast-full",
  "b-molten-lawa",
  "deal-family-1",
  "pz-extreme-double",
  "wg-salsa",
  "w-malai-boti",
  "s-loaded-fries",
];

const heights = ["h-64", "h-48", "h-56", "h-72", "h-52", "h-60", "h-44", "h-64"];

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  const spotlight = spotlightIds
    .map((id) => menuItems.find((m) => m.id === id))
    .filter(Boolean);
  const activeItem = menuItems.find((m) => m.id === active);

  return (
    <section id="gallery" className="section-pad bg-cream">
      <div className="container-px">
        <SectionHeading
          eyebrow="Gallery"
          title="A taste of what's coming."
          subtitle="Tap any dish for a closer look. Real photography coming soon — this preview is styled from our menu."
          align="center"
        />

        <div className="mt-12 columns-2 sm:columns-3 lg:columns-4 gap-5 [&>*]:mb-5">
          {spotlight.map((item, i) => {
            if (!item) return null;
            const Icon = (Icons as unknown as Record<string, LucideIcon>)["Utensils"] as LucideIcon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActive(item.id)}
                className={`group relative w-full rounded-2xl overflow-hidden border-2 border-char/10 shadow-card break-inside-avoid ${heights[i % heights.length]} bg-gradient-to-br from-saucy-orange to-sauce flex items-end p-4 text-left`}
              >
                <div className="absolute inset-0 bg-char/0 group-hover:bg-char/20 transition-colors" />
                <span className="relative font-display font-bold text-cream text-lg drop-shadow">
                  {item.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-char/80 flex items-center justify-center p-6"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl max-w-md w-full p-8 border-2 border-char"
            >
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-char/50 hover:text-char"
              >
                <X size={22} />
              </button>
              <h3 className="font-display font-extrabold text-2xl text-char">{activeItem.name}</h3>
              <p className="mt-3 text-char/70">{activeItem.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {activeItem.price && <PriceTag price={activeItem.price} />}
                {activeItem.sizes &&
                  Object.entries(activeItem.sizes).map(([size, price]) => (
                    <PriceTag key={size} price={`${size} Rs ${price}`} size="sm" />
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
