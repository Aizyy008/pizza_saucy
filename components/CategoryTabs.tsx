"use client";

import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MenuCategory } from "@/menu/menuData";

export default function CategoryTabs({
  categories,
  active,
  onChange,
}: {
  categories: MenuCategory[];
  active: string;
  onChange: (slug: string) => void;
}) {
  return (
    <div
      className="flex gap-3 overflow-x-auto pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap"
      role="tablist"
      aria-label="Menu categories"
    >
      {categories.map((c) => {
        const Icon = (Icons as unknown as Record<string, LucideIcon>)[c.icon] || Icons.UtensilsCrossed;
        const isActive = active === c.slug;
        return (
          <button
            key={c.slug}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(c.slug)}
            className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 font-tag font-semibold text-sm transition-all ${
              isActive
                ? "bg-char text-saucy-yellow border-char"
                : "bg-white text-char/70 border-char/10 hover:border-char/30"
            }`}
          >
            <Icon size={16} />
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
