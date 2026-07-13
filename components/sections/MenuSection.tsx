"use client";

import { useMemo, useState } from "react";
import { categories, menuItems, pizzaExtras } from "@/menu/menuData";
import SectionHeading from "../ui/SectionHeading";
import CategoryTabs from "../CategoryTabs";
import MenuCard from "../MenuCard";

export default function MenuSection() {
  const [active, setActive] = useState(categories[0].slug);

  const items = useMemo(() => menuItems.filter((i) => i.category === active), [active]);
  const isPizza = active.startsWith("pizza");

  return (
    <section id="menu" className="section-pad bg-white">
      <div className="container-px">
        <SectionHeading
          eyebrow="The Menu"
          title="Everything's made to order."
          subtitle="From injected broast to loaded pizzas, browse every category below. Prices shown in Pakistani Rupees."
          align="center"
        />

        <div id="deals" className="mt-10 flex justify-center">
          <CategoryTabs categories={categories} active={active} onChange={setActive} />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {isPizza && (
          <div className="mt-14 bg-cream rounded-2xl border-2 border-char/10 p-6 sm:p-8 grid sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-display font-bold text-char mb-2">Extra Toppings</h4>
              {pizzaExtras.toppings.map((t) => (
                <p key={t.name} className="text-sm text-char/70">
                  {t.name}: S Rs{t.S} · M Rs{t.M} · L Rs{t.L} · F Rs{t.F}
                </p>
              ))}
            </div>
            <div>
              <h4 className="font-display font-bold text-char mb-2">Dip Sauces &mdash; Rs {pizzaExtras.dipSauces.price}</h4>
              <p className="text-sm text-char/70">{pizzaExtras.dipSauces.flavors.join(" · ")}</p>
            </div>
            <div>
              <h4 className="font-display font-bold text-char mb-2">Extras</h4>
              <p className="text-sm text-char/70">Plain Bun: Rs {pizzaExtras.plainBun}</p>
              <p className="text-sm text-char/70">Cheese Slice: Rs {pizzaExtras.cheeseSlice}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
