"use client";

import { motion } from "framer-motion";
import { Pizza, Drumstick, Beef, ChevronDown, Star } from "lucide-react";
import { siteConfig } from "@/menu/siteConfig";
import { WhatsAppLink } from "../WhatsAppButton";
import PriceTag from "../ui/PriceTag";
import Burst from "../ui/Burst";

const badgeIcons = [
  { Icon: Pizza, top: "8%", left: "6%", tilt: -10, delay: 0 },
  { Icon: Drumstick, top: "58%", left: "3%", tilt: 8, delay: 0.6 },
  { Icon: Beef, top: "20%", left: "88%", tilt: 10, delay: 1.1 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-char text-cream pt-24 pb-16"
    >
      {/* diagonal yellow cut, echoes the printed menu's poster header */}
      <div
        className="absolute inset-0 bg-saucy-yellow"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 22%, 0 42%)" }}
      />
      <div className="absolute inset-0 bg-diagonal-stripe opacity-40" />

      {/* floating icon badges */}
      {badgeIcons.map(({ Icon, top, left, tilt, delay }, i) => (
        <motion.div
          key={i}
          className="hidden md:flex absolute w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-saucy-orange border-4 border-char items-center justify-center text-char shadow-pop animate-float"
          style={{ top, left, ["--tilt" as any]: `${tilt}deg` }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.7, ease: "easeOut" }}
        >
          <Icon size={36} strokeWidth={2} />
        </motion.div>
      ))}

      <div className="relative container-px w-full grid lg:grid-cols-[1.15fr,0.85fr] gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 font-tag font-semibold bg-char text-saucy-yellow border-2 border-saucy-yellow px-4 py-1.5 rounded-full text-sm mb-6"
          >
            <Star size={14} fill="currentColor" /> {siteConfig.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            {siteConfig.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-cream/75 max-w-xl"
          >
            {siteConfig.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <WhatsAppLink className="inline-flex items-center gap-2 bg-leaf text-white font-tag font-semibold text-base px-7 py-3.5 rounded-full border-2 border-char shadow-sticker hover:-translate-y-0.5 hover:shadow-none active:translate-y-1.5 transition-all">
              Order on WhatsApp
            </WhatsAppLink>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-transparent text-cream font-tag font-semibold text-base px-7 py-3.5 rounded-full border-2 border-cream/40 hover:border-saucy-yellow hover:text-saucy-yellow transition-colors"
            >
              View Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <PriceTag price="Quarter Broast Rs 650" size="sm" tilt={-4} />
            <PriceTag price="Single Deal Rs 530" size="sm" tilt={3} variant="orange" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center"
        >
          <Burst label="FAMILY DEAL Rs 3000" className="w-64 h-64" />
        </motion.div>
      </div>

      <motion.a
        href="#menu"
        aria-label="Scroll to menu"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 hover:text-saucy-yellow"
      >
        <ChevronDown size={30} />
      </motion.a>
    </section>
  );
}
