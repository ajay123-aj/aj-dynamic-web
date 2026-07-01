export type CategoryKey = "all" | "safa" | "talwar" | "accessories" | "decor";

export type Product = {
  id: number;
  name: string;
  category: Exclude<CategoryKey, "all">;
  price: number;
  badge: string;
  description: string;
  details: string[];
  images: string[];
};

export const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "safa", label: "Safa" },
  { key: "talwar", label: "Talwar" },
  { key: "accessories", label: "Accessories" },
  { key: "decor", label: "Decor" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Groom Safa",
    category: "safa",
    price: 3200,
    badge: "Best Seller",
    description:
      "Premium velvet safa set with matching turban and brooch styling.",
    details: [
      "Premium velvet fabric with royal finish",
      "Includes matching turban and decorative brooch",
      "Perfect for groom entry, wedding rituals, and photography",
    ],
    images: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 2,
    name: "Ceremonial Talwar Rental",
    category: "talwar",
    price: 1800,
    badge: "Rental",
    description:
      "Elegant decorative sword for baraat, processions, and wedding photography.",
    details: [
      "Rental option available for wedding events",
      "Polished finish with premium design",
      "Delivered safely with setup support",
    ],
    images: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 3,
    name: "Royal Pagdi Set",
    category: "accessories",
    price: 1400,
    badge: "New",
    description: "Matching pagdi and accessory kit for a complete groom look.",
    details: [
      "Premium fabric with handcrafted styling",
      "Includes matching pocket square and brooch",
      "Ideal for reception and wedding ceremonies",
    ],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 4,
    name: "Wedding Decor Umbrella",
    category: "decor",
    price: 2600,
    badge: "Decor",
    description:
      "Grand wedding decorative umbrella for entry and photo setups.",
    details: [
      "Elegant decorative umbrella for wedding entryways",
      "Perfect for photo booths and reception decor",
      "Customisable for matching wedding colour themes",
    ],
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 5,
    name: "Golden Safa Brooch",
    category: "accessories",
    price: 900,
    badge: "Accessory",
    description:
      "Handcrafted brooch for premium safa styling and groom finishing touches.",
    details: [
      "Handcrafted golden finish",
      "Adds charm to safa and pagdi styling",
      "Lightweight and comfortable for long event wear",
    ],
    images: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 6,
    name: "Royal Sword Stand",
    category: "decor",
    price: 2200,
    badge: "Decor",
    description:
      "Decorative sword holder to complete the wedding ambience and display.",
    details: [
      "Beautifully crafted display stand",
      "Creates a royal ceremonial look",
      "Ideal for venue styling and photography",
    ],
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 7,
    name: "Traditional Safa Bundle",
    category: "safa",
    price: 3500,
    badge: "Limited",
    description:
      "Luxury safa bundle with contrast fabric and premium finishing.",
    details: [
      "High-end fabric with rich colour contrast",
      "Includes matching brooch and finish accessories",
      "Great for premium wedding ceremonies",
    ],
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: 8,
    name: "Wedding Talwar Set",
    category: "talwar",
    price: 2400,
    badge: "Featured",
    description:
      "Heavy duty talwar for groom entry, wedding processions, and video shoots.",
    details: [
      "Premium metallic finish and strong build",
      "Suitable for entry processions and photography",
      "Available for rental and purchase",
    ],
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export type Offer = Product & { mrp: number };

// Featured deals: MRP is rounded up from the sale price to show a real discount.
export const offers: Offer[] = products.slice(0, 3).map((product) => ({
  ...product,
  mrp: Math.round((product.price * 1.4) / 10) * 10,
}));
