"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/menu/siteConfig";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad bg-cream">
      <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Fast food that actually tastes like it was made for you."
            subtitle="Pizza Saucy started on Bedian Road with one promise: injected flavor, char-grilled honesty, and no shortcuts. Every broast, burger and pizza is prepared fresh to order for the Lidher neighborhood we call home."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 grid grid-cols-2 gap-4 max-w-lg"
          >
            {siteConfig.stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl border-2 border-char/10 shadow-card p-5"
              >
                <div className="font-display font-extrabold text-3xl text-saucy-orange">
                  {s.value}
                </div>
                <div className="text-sm text-char/70 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2rem] bg-char text-cream p-10 sm:p-14 border-2 border-char shadow-card overflow-hidden"
        >
          <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-saucy-yellow/10" />
          <div className="absolute -left-6 -bottom-10 w-40 h-40 rounded-full bg-saucy-orange/10" />
          <p className="font-display text-2xl sm:text-3xl font-bold leading-snug relative">
            &ldquo;Char-grilled, injected, and always fresh &mdash; that&rsquo;s the Saucy
            way.&rdquo;
          </p>
          <p className="mt-6 text-cream/60 relative">
            Every piece of chicken is injected for full-flavor consistency, and every deal is
            built for real Lidher families and friend groups &mdash; from the Single Deal to the
            Family Deal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
