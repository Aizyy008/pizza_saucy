// ─────────────────────────────────────────────────────────────
// SITE CONFIG — Pizza Saucy
// This is the ONLY file the owner needs to touch to update
// restaurant details, contact info, hours, and social links.
// No other code files need to change.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Pizza Saucy",
  shortName: "Pizza Saucy",
  tagline: "Pride of Pakistan",
  headline: "Lidher's Loudest Flavor Since Day One",
  subheadline:
    "Char-grilled broast, stacked burgers and loaded pizzas — made fresh, delivered fast across Lidher and Bedian Road.",

  // Contact
  phone: "+923060132222",
  phoneDisplay: "0306 0132222",
  whatsappNumbers: [
    { label: "Orders", number: "923060132222", display: "0306 0132222" },
    { label: "Orders", number: "923060142222", display: "0306 0142222" },
  ],

  // Location
  address: "Near Askari-XI, Bedian Road, Lidher, Lahore",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Askari+XI+Bedian+Road+Lidher+Lahore&output=embed",
  mapDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Askari+XI+Bedian+Road+Lidher+Lahore",
  deliveryRadius: "Delivery up to 6 KM",

  // Hours — 24hr format, edit freely
  hours: [
    { day: "Monday – Thursday", time: "12:00 PM – 1:00 AM" },
    { day: "Friday", time: "2:00 PM – 1:00 AM" },
    { day: "Saturday – Sunday", time: "12:00 PM – 2:00 AM" },
  ],

  // Social
  social: {
    instagram: "https://instagram.com/pizzasaucylidher.official",
    facebook: "https://facebook.com/pizzasaucylidher.official",
    handle: "@pizzasaucylidher.official",
  },

  // SEO
  seo: {
    title: "Pizza Saucy Lidher | Pizza, Broast, Burgers & Deals in Lahore",
    description:
      "Pizza Saucy in Lidher, Bedian Road, Lahore — loaded pizzas, injected broast, stacked burgers, wraps and family deals. Order on WhatsApp, delivery up to 6 KM.",
    url: "https://pizzasaucy.com",
    ogImage: "/images/og-cover.jpg",
  },

  stats: [
    { label: "Years Serving Lidher", value: "5+" },
    { label: "Happy Customers", value: "20K+" },
    { label: "Menu Items", value: "45+" },
    { label: "Customer Rating", value: "4.8" },
  ],
};

export type SiteConfig = typeof siteConfig;
