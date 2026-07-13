# Pizza Saucy — Website

A premium, fully static Next.js website for Pizza Saucy (Lidher, Bedian Road, Lahore).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

The output is 100% static content — no database, no backend, no auth. It can be hosted on Vercel, Netlify, or any static-friendly Node host.

## Editing menu, prices, and descriptions

Open **`menu/menuData.ts`**. Every dish is one object in the `menuItems` array:

```ts
{
  id: "b-zinger",
  name: "Zinger Burger",
  description: "The original crispy zinger classic.",
  image: "/images/menu/burger-zinger.jpg",
  category: "burgers",
  price: 390,
}
```

- Flat-price items use `price`.
- Pizzas use `sizes: { S, M, L, F }` instead.
- Add `isNew: true` to show a "NEW" badge.
- Add or remove categories in the `categories` array at the top of the same file.

No component code needs to change — cards and tabs render automatically from this file.

## Editing contact info, hours, and social links

Open **`menu/siteConfig.ts`**: restaurant name, phone, WhatsApp numbers, address, map link, business hours, and Instagram/Facebook links all live there.

## Adding real food photography

The menu cards currently use an icon-and-color placeholder in place of photography (no product photos were supplied). To switch a card to a real photo:

1. Drop the image in `public/images/menu/`.
2. In `components/MenuCard.tsx`, swap the icon circle for a `next/image` `<Image>` tag pointing at `item.image`.

The `image` field is already present on every menu item, ready for this swap.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide icons — no other libraries, no CMS, no server.
