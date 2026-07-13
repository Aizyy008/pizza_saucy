// ─────────────────────────────────────────────────────────────
// MENU DATA — Pizza Saucy
// Edit prices, descriptions, images, or add/remove items here.
// Every price is in PKR (Rs). Sizes: S = Small, M = Medium,
// L = Large, F = Full/Family. Leave a size blank ("") if a
// product doesn't come in that size.
// No component code needs to change when you edit this file.
// ─────────────────────────────────────────────────────────────

export type SizePrices = {
  S?: number;
  M?: number;
  L?: number;
  F?: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  isNew?: boolean;
  price?: number; // flat price items
  sizes?: SizePrices; // multi-size items (pizzas)
  note?: string; // small print, e.g. "single patty / double patty"
};

export type MenuCategory = {
  slug: string;
  label: string;
  icon: string; // lucide-react icon name
};

export const categories: MenuCategory[] = [
  { slug: "deals", label: "Exclusive Deals", icon: "PartyPopper" },
  { slug: "broast", label: "Injected Broast", icon: "Drumstick" },
  { slug: "pizza-regular", label: "Regular Pizza", icon: "Pizza" },
  { slug: "pizza-special", label: "Special Pizza", icon: "Flame" },
  { slug: "pizza-signature", label: "Signature Pizza", icon: "Crown" },
  { slug: "burgers", label: "Burgers", icon: "Beef" },
  { slug: "wraps", label: "Wraps & Rolls", icon: "Sandwich" },
  { slug: "sides", label: "Sides & Snacks", icon: "UtensilsCrossed" },
  { slug: "wings", label: "Wings", icon: "Bird" },
];

export const menuItems: MenuItem[] = [
  // ── EXCLUSIVE DEALS ──────────────────────────────────────
  {
    id: "deal-pizza-1",
    name: "Pizza Deal No. 1",
    description: "2 small pizzas with half liter drink.",
    image: "/images/menu/deal-pizza.jpg",
    category: "deals",
    price: 1350,
  },
  {
    id: "deal-pizza-2",
    name: "Pizza Deal No. 2",
    description: "2 medium pizzas with 1.5 liter drink.",
    image: "/images/menu/deal-pizza.jpg",
    category: "deals",
    price: 2300,
  },
  {
    id: "deal-pizza-3",
    name: "Pizza Deal No. 3",
    description: "2 large pizzas with 1.5 liter drink.",
    image: "/images/menu/deal-pizza.jpg",
    category: "deals",
    price: 3300,
  },
  {
    id: "deal-pizza-4",
    name: "Pizza Deal No. 4",
    description: "2 family pizzas with 1.5 liter drink.",
    image: "/images/menu/deal-pizza.jpg",
    category: "deals",
    price: 4400,
  },
  {
    id: "deal-family-1",
    name: "Family Deal 1",
    description:
      "1 large pizza, 10 pcs nuggets, 2 zinger burgers and a 1.5 liter drink.",
    image: "/images/menu/family-deal.jpg",
    category: "deals",
    price: 3000,
  },
  {
    id: "deal-family-2",
    name: "Family Deal 2",
    description:
      "1 family pizza, 2 zinger burgers, 1 large fries and a 1.5 liter drink.",
    image: "/images/menu/family-deal.jpg",
    category: "deals",
    price: 3300,
  },
  {
    id: "deal-single",
    name: "Single Deal",
    description: "King zinger, small fries and a 345ml drink.",
    image: "/images/menu/single-deal.jpg",
    category: "deals",
    price: 530,
  },
  {
    id: "deal-duo",
    name: "Duo Deal",
    description: "2 chicken burgers with a half liter drink.",
    image: "/images/menu/duo-deal.jpg",
    category: "deals",
    price: 700,
  },
  {
    id: "deal-burger-1",
    name: "Burger Deal No. 1",
    description: "3 zinger burgers with a 1 liter drink.",
    image: "/images/menu/burger-deal.jpg",
    category: "deals",
    price: 1200,
  },
  {
    id: "deal-burger-2",
    name: "Burger Deal No. 2",
    description: "4 zinger burgers with a 1.5 liter drink.",
    image: "/images/menu/burger-deal.jpg",
    category: "deals",
    price: 1600,
  },
  {
    id: "deal-burger-3",
    name: "Burger Deal No. 3",
    description: "6 zinger burgers with a 1.5 liter drink.",
    image: "/images/menu/burger-deal.jpg",
    category: "deals",
    price: 2300,
  },
  {
    id: "deal-burger-4",
    name: "Burger Deal No. 4",
    description: "8 zinger burgers with a 1.5 liter drink.",
    image: "/images/menu/burger-deal.jpg",
    category: "deals",
    price: 3000,
  },
  {
    id: "injected-nuggets",
    name: "Injected Nuggets",
    description: "10 pieces of our signature injected nuggets.",
    image: "/images/menu/nuggets.jpg",
    category: "deals",
    price: 700,
  },
  {
    id: "injected-nuggets-meal",
    name: "Injected Nuggets with Meal",
    description: "8 pieces injected nuggets, fries, bun, dip sauce and a regular drink.",
    image: "/images/menu/nuggets.jpg",
    category: "deals",
    price: 850,
  },
  {
    id: "injected-wrap",
    name: "Injected Wrap",
    description: "Our juicy injected chicken wrapped fresh, sauced and rolled.",
    image: "/images/menu/wrap.jpg",
    category: "deals",
    isNew: true,
    price: 700,
  },

  // ── INJECTED BROAST ──────────────────────────────────────
  {
    id: "broast-quarter",
    name: "Quarter Broast",
    description: "2 injected pieces (leg + thigh) with bun, fries, dip sauce and a regular drink.",
    image: "/images/menu/broast.jpg",
    category: "broast",
    price: 650,
  },
  {
    id: "broast-half",
    name: "Half Broast",
    description: "4 injected pieces (2 leg + 2 thigh), 2 buns, fries, 2 dip sauces and a half liter drink.",
    image: "/images/menu/broast.jpg",
    category: "broast",
    price: 1300,
  },
  {
    id: "broast-full",
    name: "Full Broast",
    description: "8 injected pieces (4 leg + 4 thigh), 4 buns, fries, 2 dip sauces and a 1.5 liter drink.",
    image: "/images/menu/broast.jpg",
    category: "broast",
    price: 2600,
  },

  // ── REGULAR PIZZA ────────────────────────────────────────
  {
    id: "pz-chicken-tikka",
    name: "Chicken Tikka",
    description: "Classic tikka-topped pizza on our signature crust.",
    image: "/images/menu/pizza-tikka.jpg",
    category: "pizza-regular",
    sizes: { S: 690, M: 1200, L: 1700, F: 2350 },
  },
  {
    id: "pz-chicken-fajita",
    name: "Chicken Fajita",
    description: "Fajita chicken with bell peppers and onions.",
    image: "/images/menu/pizza-fajita.jpg",
    category: "pizza-regular",
    sizes: { S: 690, M: 1200, L: 1700, F: 2350 },
  },
  {
    id: "pz-chicken-supreme",
    name: "Chicken Supreme",
    description: "Loaded with chicken, olives, capsicum and tomato.",
    image: "/images/menu/pizza-supreme.jpg",
    category: "pizza-regular",
    sizes: { S: 690, M: 1200, L: 1700, F: 2350 },
  },
  {
    id: "pz-mughlai",
    name: "Mughlai Pizza",
    description: "Spiced Mughlai-style chicken with peppers and olives.",
    image: "/images/menu/pizza-mughlai.jpg",
    category: "pizza-regular",
    sizes: { S: 690, M: 1200, L: 1700, F: 2350 },
  },
  {
    id: "pz-desi-chaska",
    name: "Desi Chaska",
    description: "Desi-spiced chicken pizza with a saucy drizzle.",
    image: "/images/menu/pizza-desi.jpg",
    category: "pizza-regular",
    sizes: { S: 750, M: 1300, L: 1900, F: 2500 },
  },

  // ── SPECIAL PIZZA ────────────────────────────────────────
  {
    id: "pz-malai-boti",
    name: "Malai Boti Pizza",
    description: "Creamy malai boti chicken with olives and a signature drizzle.",
    image: "/images/menu/pizza-malai.jpg",
    category: "pizza-special",
    sizes: { S: 750, M: 1300, L: 1900, F: 2500 },
  },
  {
    id: "pz-saucy-special",
    name: "Pizza Saucy Special",
    description: "Our house-special pizza, loaded and drizzled.",
    image: "/images/menu/pizza-special.jpg",
    category: "pizza-special",
    sizes: { S: 750, M: 1350, L: 1900, F: 2500 },
  },
  {
    id: "pz-chilli",
    name: "Chicken Chilli Pizza",
    description: "Spiced chilli chicken pizza with a bold kick.",
    image: "/images/menu/pizza-chilli.jpg",
    category: "pizza-special",
    sizes: { S: 750, M: 1350, L: 1900, F: 2500 },
  },
  {
    id: "pz-tikka-creamy",
    name: "Chicken Tikka Creamy",
    description: "Tikka chicken finished with a creamy drizzle and olives.",
    image: "/images/menu/pizza-tikka-creamy.jpg",
    category: "pizza-special",
    sizes: { S: 750, M: 1300, L: 1800, F: 2400 },
  },
  {
    id: "pz-executive",
    name: "Executive Pizza",
    description: "Premium loaded pizza with a generous olive and sauce finish.",
    image: "/images/menu/pizza-executive.jpg",
    category: "pizza-special",
    sizes: { S: 750, M: 1400, L: 2000, F: 2600 },
  },

  // ── SIGNATURE PIZZA ──────────────────────────────────────
  {
    id: "pz-kabab-crust",
    name: "Kabab Crust",
    description: "Pizza wrapped in a seekh kabab-stuffed crust.",
    image: "/images/menu/pizza-kabab-crust.jpg",
    category: "pizza-signature",
    sizes: { M: 1550, L: 2100, F: 2700 },
  },
  {
    id: "pz-turkish",
    name: "Turkish Pizza",
    description: "Turkish-style pizza with mushrooms and olives.",
    image: "/images/menu/pizza-turkish.jpg",
    category: "pizza-signature",
    sizes: { M: 1550, L: 2100, F: 2700 },
  },
  {
    id: "pz-extreme-double",
    name: "Extreme Double Layer",
    description: "Double-layered cheese-loaded pizza for serious appetites.",
    image: "/images/menu/pizza-double-layer.jpg",
    category: "pizza-signature",
    sizes: { M: 1650, L: 2400, F: 3200 },
  },
  {
    id: "pz-crown-crust",
    name: "Crown Crust",
    description: "Cheese-stuffed crown crust with a swirl of sauce.",
    image: "/images/menu/pizza-crown-crust.jpg",
    category: "pizza-signature",
    sizes: { M: 1550, L: 2100, F: 2700 },
  },
  {
    id: "pz-kabab-pizza",
    name: "Kabab Pizza",
    description: "Seekh kabab pieces layered over our signature base.",
    image: "/images/menu/pizza-kabab.jpg",
    category: "pizza-signature",
    sizes: { S: 800, M: 1500, L: 2000, F: 2600 },
  },

  // ── BURGERS ──────────────────────────────────────────────
  {
    id: "b-wehshi",
    name: "Wehshi Burger",
    description: "Crispy fillet stacked high with melted cheese.",
    image: "/images/menu/burger-wehshi.jpg",
    category: "burgers",
    price: 680,
  },
  {
    id: "b-molten-lawa",
    name: "Molten Lawa",
    description: "Double-stacked patty with a molten cheese pull.",
    image: "/images/menu/burger-molten.jpg",
    category: "burgers",
    price: 700,
  },
  {
    id: "b-fish",
    name: "Fish Burger",
    description: "Crispy fish fillet burger, single or double patty.",
    image: "/images/menu/burger-fish.jpg",
    category: "burgers",
    note: "Single patty Rs. 500 · Double patty Rs. 750",
    price: 500,
  },
  {
    id: "b-pizza-burger",
    name: "Pizza Burger",
    description: "A cheesy pizza-topped patty burger.",
    image: "/images/menu/burger-pizza.jpg",
    category: "burgers",
    price: 630,
  },
  {
    id: "b-grill",
    name: "Grill Burger",
    description: "Flame-grilled chicken breast with fresh veggies.",
    image: "/images/menu/burger-grill.jpg",
    category: "burgers",
    price: 630,
  },
  {
    id: "b-special-zinger",
    name: "Special Zinger",
    description: "Our crispiest zinger, double-stacked and sauced.",
    image: "/images/menu/burger-special-zinger.jpg",
    category: "burgers",
    price: 630,
  },
  {
    id: "b-chicken-fillet",
    name: "Chicken Fillet",
    description: "Crispy chicken fillet with lettuce and mayo.",
    image: "/images/menu/burger-fillet.jpg",
    category: "burgers",
    price: 390,
  },
  {
    id: "b-hot-spicy",
    name: "Hot & Spicy",
    description: "Fiery crispy fillet with a spicy sauce kick.",
    image: "/images/menu/burger-hot-spicy.jpg",
    category: "burgers",
    price: 390,
  },
  {
    id: "b-zinger",
    name: "Zinger Burger",
    description: "The original crispy zinger classic.",
    image: "/images/menu/burger-zinger.jpg",
    category: "burgers",
    price: 390,
  },
  {
    id: "b-chicken",
    name: "Chicken Burger",
    description: "Simple, fresh and always a favorite.",
    image: "/images/menu/burger-chicken.jpg",
    category: "burgers",
    price: 360,
  },

  // ── WRAPS & ROLLS ────────────────────────────────────────
  {
    id: "w-tortilla",
    name: "Tortilla Wrap",
    description: "Crispy chicken rolled in a soft tortilla with fresh veggies.",
    image: "/images/menu/wrap-tortilla.jpg",
    category: "wraps",
    price: 600,
  },
  {
    id: "w-grill",
    name: "Grill Wrap",
    description: "Grilled chicken wrap with a smoky sauce.",
    image: "/images/menu/wrap-grill.jpg",
    category: "wraps",
    price: 600,
  },
  {
    id: "w-zingratha",
    name: "Zingratha",
    description: "Zinger chicken rolled paratha-style.",
    image: "/images/menu/wrap-zingratha.jpg",
    category: "wraps",
    price: 390,
  },
  {
    id: "w-malai-boti",
    name: "Malai Boti Wrap",
    description: "Creamy malai boti chicken in a soft wrap.",
    image: "/images/menu/wrap-malai.jpg",
    category: "wraps",
    price: 600,
  },

  // ── SIDES & SNACKS ───────────────────────────────────────
  {
    id: "s-loaded-fries",
    name: "Loaded Fries",
    description: "Crispy fillet or grilled fries, fully loaded.",
    image: "/images/menu/loaded-fries.jpg",
    category: "sides",
    price: 700,
  },
  {
    id: "s-pizza-paratha",
    name: "Pizza Paratha",
    description: "Flaky paratha stuffed with pizza toppings.",
    image: "/images/menu/pizza-paratha.jpg",
    category: "sides",
    price: 600,
  },
  {
    id: "s-special-pizza-paratha",
    name: "Special Pizza Paratha",
    description: "Our upgraded pizza paratha with extra filling.",
    image: "/images/menu/special-pizza-paratha.jpg",
    category: "sides",
    price: 650,
  },
  {
    id: "s-cheese-sticks",
    name: "Chicken Cheese Sticks",
    description: "Cheesy chicken sticks, crisped to order.",
    image: "/images/menu/cheese-sticks.jpg",
    category: "sides",
    price: 680,
  },
  {
    id: "s-macroni",
    name: "Macroni Pasta",
    description: "Creamy chicken macaroni pasta.",
    image: "/images/menu/macroni.jpg",
    category: "sides",
    price: 600,
  },
  {
    id: "s-sandwich",
    name: "Saucy Sandwich",
    description: "Grilled club sandwich, Pizza Saucy style.",
    image: "/images/menu/sandwich.jpg",
    category: "sides",
    price: 600,
  },
  {
    id: "s-hot-shots",
    name: "Hot Shots",
    description: "10 pieces of spicy breaded chicken poppers.",
    image: "/images/menu/hot-shots.jpg",
    category: "sides",
    price: 600,
  },
  {
    id: "s-nuggets",
    name: "Nuggets",
    description: "10 pieces of classic crispy chicken nuggets.",
    image: "/images/menu/nuggets-classic.jpg",
    category: "sides",
    price: 600,
  },
  {
    id: "s-fries-large",
    name: "Fries",
    description: "Golden, crispy salted fries.",
    image: "/images/menu/fries.jpg",
    category: "sides",
    sizes: { M: 200, L: 320 },
  },

  // ── WINGS ────────────────────────────────────────────────
  {
    id: "wg-grilled",
    name: "Grilled Wings",
    description: "10 pieces of smoky flame-grilled wings.",
    image: "/images/menu/wings-grilled.jpg",
    category: "wings",
    isNew: true,
    price: 650,
  },
  {
    id: "wg-chicken",
    name: "Chicken Wings",
    description: "10 pieces of classic crispy fried wings.",
    image: "/images/menu/wings-chicken.jpg",
    category: "wings",
    price: 600,
  },
  {
    id: "wg-salsa",
    name: "Salsa Wings",
    description: "10 pieces tossed in a tangy salsa glaze.",
    image: "/images/menu/wings-salsa.jpg",
    category: "wings",
    price: 650,
  },
];

// Extras applied across the pizza menu
export const pizzaExtras = {
  toppings: [
    { name: "Extra Chicken", S: 150, M: 180, L: 250, F: 300 },
    { name: "Extra Cheese", S: 150, M: 180, L: 250, F: 300 },
  ],
  dipSauces: {
    price: 60,
    flavors: ["Chipotle", "Crust Sauce", "Malai Boti", "Saucy Special"],
  },
  plainBun: 50,
  cheeseSlice: 60,
};

export const combos = {
  mediumMeal: { label: "Add a Medium Meal", price: 250, includes: "Regular fries + 345ml drink" },
  largeMeal: { label: "Add a Large Meal", price: 350, includes: "Medium fries + 500ml drink" },
};
