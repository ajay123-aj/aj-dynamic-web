export type CategoryKey = "all" | "frames" | "collage" | "wall-decor" | "gifts";

export type Product = {
  id: number;
  name: string;
  category: Exclude<CategoryKey, "all">;
  badge: string;
  description: string;
  details: string[];
  images: string[];
  // Size (inches) -> price. Sizes without an entry (e.g. "Custom") are quoted
  // on WhatsApp and shown as "On request".
  prices: Record<string, number>;
};

export const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "frames", label: "Photo Frames" },
  { key: "collage", label: "Collage Frames" },
  { key: "wall-decor", label: "Wall Decor" },
  { key: "gifts", label: "Personalized Gifts" },
];

// Frame sizes (in inches) the customer can choose from. The price of each size
// is defined per product in its `prices` map below. "Custom" has no fixed
// price — it is quoted on WhatsApp (shown as "On request" in the UI).
export const frameSizes = [
  "5×7",
  "8×12",
  "9×12",
  "10×12",
  "12×16",
  "12×18",
  "16×20",
  "Custom",
] as const;

// Default size selected everywhere a picker starts.
export const DEFAULT_SIZE = frameSizes[0];

// Price of a product at a given size. Unknown / custom sizes return 0
// ("On request").
export function priceForSize(product: Product, size: string): number {
  return product.prices[size] ?? 0;
}

// Lowest price of a product across its sizes — the "from ₹…" starting price.
export function startingPrice(product: Product): number {
  const values = Object.values(product.prices).filter((price) => price > 0);
  return values.length ? Math.min(...values) : 0;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Wooden Photo Frame",
    category: "frames",
    badge: "Best Seller",
    description:
      "Handcrafted solid wood photo frame with a smooth premium finish for any wall or table.",
    details: [
      "Premium solid wood with polished finishing",
      "Available in multiple sizes and colours",
      "Perfect for home, office, and gifting",
    ],
    prices: {
      "5×7": 299,
      "8×12": 499,
      "9×12": 599,
      "10×12": 699,
      "12×16": 899,
      "12×18": 999,
      "16×20": 1299,
    },
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 2,
    name: "Family Collage Frame (7-in-1)",
    category: "collage",
    badge: "Best Seller",
    description:
      "Seven-photo collage frame to turn your favourite family moments into a stunning wall centrepiece.",
    details: [
      "Holds 7 photos in one elegant layout",
      "Ready-to-hang with sturdy backing",
      "Customisable photo prints included",
    ],
    prices: {
      "5×7": 699,
      "8×12": 999,
      "9×12": 1199,
      "10×12": 1399,
      "12×16": 1699,
      "12×18": 1899,
      "16×20": 2299,
    },
    images: [
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 3,
    name: "Personalized Name Wall Decor",
    category: "wall-decor",
    badge: "New",
    description:
      "Custom name and photo wall decor piece that adds a warm personal touch to any room.",
    details: [
      "Fully personalized with your name and photos",
      "Lightweight and easy to mount",
      "Ideal for living rooms and kids' rooms",
    ],
    prices: {
      "5×7": 499,
      "8×12": 799,
      "9×12": 999,
      "10×12": 1199,
      "12×16": 1499,
      "12×18": 1699,
      "16×20": 1999,
    },
    images: [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 4,
    name: "Engraved Photo Gift Frame",
    category: "gifts",
    badge: "Popular",
    description:
      "Laser-engraved keepsake frame — a thoughtful personalized gift for birthdays and anniversaries.",
    details: [
      "Custom engraving with names and dates",
      "Premium finish with gift-ready packaging",
      "Perfect for weddings, birthdays, and anniversaries",
    ],
    prices: {
      "5×7": 399,
      "8×12": 699,
      "9×12": 849,
      "10×12": 999,
      "12×16": 1249,
      "12×18": 1449,
      "16×20": 1799,
    },
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 5,
    name: "Premium Metal Table Frame",
    category: "frames",
    badge: "Featured",
    description:
      "Sleek metal table-top frame with a modern finish that complements any desk or shelf.",
    details: [
      "Durable metal build with matte finish",
      "Free-standing design for desk and shelf",
      "Fits standard photo sizes",
    ],
    prices: {
      "5×7": 349,
      "8×12": 599,
      "9×12": 699,
      "10×12": 799,
      "12×16": 1049,
      "12×18": 1199,
      "16×20": 1499,
    },
    images: [
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 6,
    name: "Heart Collage Photo Frame",
    category: "collage",
    badge: "Trending",
    description:
      "Heart-shaped multi-photo collage frame — a romantic way to display your best memories.",
    details: [
      "Heart layout holding multiple photos",
      "Great for couples and family moments",
      "Ready-to-hang with premium print quality",
    ],
    prices: {
      "5×7": 649,
      "8×12": 949,
      "9×12": 1149,
      "10×12": 1349,
      "12×16": 1649,
      "12×18": 1849,
      "16×20": 2199,
    },
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 7,
    name: "3D Acrylic Wall Photo",
    category: "wall-decor",
    badge: "Premium",
    description:
      "High-gloss 3D acrylic photo panel that brings vivid colour and depth to your walls.",
    details: [
      "Crystal-clear acrylic with vivid printing",
      "Modern frameless floating look",
      "Scratch and moisture resistant",
    ],
    prices: {
      "5×7": 899,
      "8×12": 1299,
      "9×12": 1499,
      "10×12": 1799,
      "12×16": 2199,
      "12×18": 2499,
      "16×20": 2999,
    },
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 8,
    name: "Custom Couple Gift Frame",
    category: "gifts",
    badge: "Limited",
    description:
      "Personalized couple frame with custom photo and caption — an ideal anniversary or wedding gift.",
    details: [
      "Custom photo and caption of your choice",
      "Elegant finish with gift packaging",
      "Made to order within a few days",
    ],
    prices: {
      "5×7": 449,
      "8×12": 749,
      "9×12": 899,
      "10×12": 1099,
      "12×16": 1349,
      "12×18": 1549,
      "16×20": 1899,
    },
    images: [
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export type Offer = Product & { mrp: number };

// Featured deals: MRP is rounded up from the starting price to show a real
// discount off the smallest size.
export const offers: Offer[] = products.slice(0, 3).map((product) => ({
  ...product,
  mrp: Math.round((startingPrice(product) * 1.4) / 10) * 10,
}));
