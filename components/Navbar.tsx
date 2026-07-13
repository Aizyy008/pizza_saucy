"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { siteConfig } from "@/menu/siteConfig";
import { WhatsAppLink } from "./WhatsAppButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Deals", href: "#deals" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-char/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 sm:h-20">
        <a href="#home" className="flex items-center gap-2 font-display font-extrabold text-xl text-cream">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-saucy-yellow text-char">
            <Flame size={18} strokeWidth={2.5} />
          </span>
          {siteConfig.shortName}
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body font-semibold text-cream/90">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-saucy-yellow transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <WhatsAppLink
            className="inline-flex items-center gap-2 bg-saucy-yellow text-char font-tag font-semibold px-5 py-2.5 rounded-full border-2 border-char shadow-sticker hover:-translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all"
          >
            Order on WhatsApp
          </WhatsAppLink>
        </div>

        <button
          className="lg:hidden text-cream p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-char overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pb-6 font-body font-semibold text-cream">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-cream/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <WhatsAppLink className="inline-flex w-full items-center justify-center gap-2 bg-saucy-yellow text-char font-tag font-semibold px-5 py-3 rounded-full border-2 border-char">
                  Order on WhatsApp
                </WhatsAppLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
