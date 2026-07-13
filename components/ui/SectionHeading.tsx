"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      {eyebrow && (
        <span
          className={`inline-block font-tag text-sm tracking-wide font-semibold px-3 py-1 rounded-full mb-4 ${
            dark ? "bg-saucy-yellow text-char" : "bg-char text-saucy-yellow"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl ${
          dark ? "text-cream" : "text-char"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${dark ? "text-cream/70" : "text-char/70"}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
