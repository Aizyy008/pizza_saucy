"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const reviews = [
  {
    name: "Hamza R.",
    text: "Full Broast bilkul juicy aur masaledar hota hai, delivery pe bhi garam garam pohonchta hai. Hamara Friday ka pakka order yahi hai.",
    rating: 5,
  },
  {
    name: "Ayesha K.",
    text: "Kabab Crust pizza kamaal ki cheez hai. Family gathering ke liye order kiya tha aur sab poochte reh gaye ke ye kahan se aaya hai.",
    rating: 5,
  },
  {
    name: "Bilal S.",
    text: "Bedian Road ke aas paas delivery bahut fast hai, aur Family Deal 2 waqai 4 logon ke liye kaafi hoti hai. Paise ke hisaab se bahut achhi value hai.",
    rating: 5,
  },
  {
    name: "Mahnoor A.",
    text: "Molten Lawa burger naam ke mutabiq hi lajawab hai, cheese itna kheenchta hai ke maza aa jata hai. Is hafte phir order karungi.",
    rating: 4,
  },
  {
    name: "Usman T.",
    text: "Crispy fillet wali Loaded Fries meri comfort order hai. Har baar wahi achi quality milti hai, kabhi maayous nahi kiya.",
    rating: 5,
  },
];

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="w-80 flex-shrink-0 bg-white rounded-2xl border-2 border-char/10 shadow-card p-6 mx-3">
      <Quote className="text-saucy-orange" size={26} />
      <p className="mt-3 text-char/80 text-sm leading-relaxed">{r.text}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-tag font-semibold text-char">{r.name}</span>
        <span className="flex gap-0.5 text-saucy-orange">
          {Array.from({ length: r.rating }).map((_, i) => (
            <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
          ))}
        </span>
      </div>
    </div>
  );
}

export default function Reviews() {
  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="section-pad bg-cream overflow-hidden">
      <div className="container-px">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved across Lidher."
          subtitle="4.8 average rating from real Pizza Saucy customers."
          align="center"
        />
      </div>

      <div className="mt-14 relative">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
