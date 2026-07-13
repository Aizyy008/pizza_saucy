"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/menu/siteConfig";

function buildLink(message: string) {
  const number = siteConfig.whatsappNumbers[0].number;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppLink({
  message = "Hi! I'd like to place an order at Pizza Saucy.",
  className = "",
  children,
}: {
  message?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={buildLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Order on WhatsApp"
    >
      {children}
    </a>
  );
}

export default function WhatsAppButton({ floating = false }: { floating?: boolean }) {
  if (!floating) return null;

  return (
    <motion.a
      href={buildLink("Hi! I'd like to place an order at Pizza Saucy.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pizza Saucy on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-leaf text-white shadow-pop border-2 border-char"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
