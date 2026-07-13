import { Instagram, Facebook, Flame } from "lucide-react";
import { siteConfig } from "@/menu/siteConfig";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-char text-cream">
      <div className="container-px py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-extrabold text-xl">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-saucy-yellow text-char">
              <Flame size={18} strokeWidth={2.5} />
            </span>
            {siteConfig.shortName}
          </div>
          <p className="mt-4 text-cream/60 text-sm max-w-xs">{siteConfig.tagline} &mdash; loud flavor, honest prices, fast delivery across Lidher.</p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-saucy-yellow hover:text-char transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center hover:bg-saucy-yellow hover:text-char transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-tag font-semibold mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm text-cream/70">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-saucy-yellow transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-tag font-semibold mb-4">Get in Touch</p>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>{siteConfig.address}</li>
            {siteConfig.whatsappNumbers.map((w) => (
              <li key={w.number}>{w.display}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
