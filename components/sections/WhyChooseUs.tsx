"use client";

import { motion } from "framer-motion";
import { Leaf, Flame, Wallet, Users, Zap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const points = [
  { Icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily, never frozen for long." },
  { Icon: Flame, title: "Authentic Taste", desc: "Char-grilled and injected for real flavor." },
  { Icon: Wallet, title: "Affordable Prices", desc: "Deals built for every group size." },
  { Icon: Users, title: "Family Environment", desc: "A neighborhood spot for Lidher families." },
  { Icon: Zap, title: "Fast Service", desc: "Hot food, fast delivery, up to 6 KM." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-char text-cream">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Pizza Saucy"
          title="Built on flavor, not shortcuts."
          align="center"
          dark
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="bg-char-light rounded-2xl border-2 border-cream/10 p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="mx-auto w-14 h-14 rounded-full bg-saucy-yellow text-char flex items-center justify-center mb-4"
              >
                <Icon size={24} />
              </motion.div>
              <h3 className="font-display font-bold text-lg">{title}</h3>
              <p className="text-sm text-cream/60 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
