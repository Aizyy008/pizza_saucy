"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { siteConfig } from "@/menu/siteConfig";
import SectionHeading from "../ui/SectionHeading";
import { WhatsAppLink } from "../WhatsAppButton";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-px grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <SectionHeading
            eyebrow="Visit or Order"
            title="Find us in Lidher."
            subtitle={siteConfig.deliveryRadius}
          />

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-saucy-yellow/20 text-saucy-orange flex items-center justify-center">
                <MapPin size={20} />
              </span>
              <div>
                <p className="font-tag font-semibold text-char">Address</p>
                <p className="text-char/70 text-sm mt-0.5">{siteConfig.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-saucy-yellow/20 text-saucy-orange flex items-center justify-center">
                <Phone size={20} />
              </span>
              <div>
                <p className="font-tag font-semibold text-char">WhatsApp</p>
                {siteConfig.whatsappNumbers.map((w) => (
                  <p key={w.number} className="text-char/70 text-sm mt-0.5">
                    {w.display}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 w-11 h-11 rounded-full bg-saucy-yellow/20 text-saucy-orange flex items-center justify-center">
                <Clock size={20} />
              </span>
              <div>
                <p className="font-tag font-semibold text-char">Business Hours</p>
                {siteConfig.hours.map((h) => (
                  <p key={h.day} className="text-char/70 text-sm mt-0.5">
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={siteConfig.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-char text-cream font-tag font-semibold px-6 py-3 rounded-full border-2 border-char hover:bg-char-light transition-colors"
            >
              <Navigation size={16} /> Get Directions
            </a>
            <WhatsAppLink className="inline-flex items-center gap-2 bg-leaf text-white font-tag font-semibold px-6 py-3 rounded-full border-2 border-char shadow-sticker hover:-translate-y-0.5 hover:shadow-none active:translate-y-1 transition-all">
              Order on WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border-2 border-char/10 shadow-card h-80 lg:h-full min-h-[320px]"
        >
          <iframe
            title="Pizza Saucy location map"
            src={siteConfig.mapEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
