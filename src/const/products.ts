export type CategoryKey = "all" | "frames" | "collage" | "wall-decor" | "gifts";

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
  { key: "frames", label: "Photo Frames" },
  { key: "collage", label: "Collage Frames" },
  { key: "wall-decor", label: "Wall Decor" },
  { key: "gifts", label: "Personalized Gifts" },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Wooden Photo Frame",
    category: "frames",
    price: 799,
    badge: "Best Seller",
    description:
      "Handcrafted solid wood photo frame with a smooth premium finish for any wall or table.",
    details: [
      "Premium solid wood with polished finishing",
      "Available in multiple sizes and colours",
      "Perfect for home, office, and gifting",
    ],
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
    price: 1499,
    badge: "Best Seller",
    description:
      "Seven-photo collage frame to turn your favourite family moments into a stunning wall centrepiece.",
    details: [
      "Holds 7 photos in one elegant layout",
      "Ready-to-hang with sturdy backing",
      "Customisable photo prints included",
    ],
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
    price: 1199,
    badge: "New",
    description:
      "Custom name and photo wall decor piece that adds a warm personal touch to any room.",
    details: [
      "Fully personalized with your name and photos",
      "Lightweight and easy to mount",
      "Ideal for living rooms and kids' rooms",
    ],
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
    price: 999,
    badge: "Popular",
    description:
      "Laser-engraved keepsake frame — a thoughtful personalized gift for birthdays and anniversaries.",
    details: [
      "Custom engraving with names and dates",
      "Premium finish with gift-ready packaging",
      "Perfect for weddings, birthdays, and anniversaries",
    ],
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
    price: 649,
    badge: "Featured",
    description:
      "Sleek metal table-top frame with a modern finish that complements any desk or shelf.",
    details: [
      "Durable metal build with matte finish",
      "Free-standing design for desk and shelf",
      "Fits standard photo sizes",
    ],
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
    price: 1299,
    badge: "Trending",
    description:
      "Heart-shaped multi-photo collage frame — a romantic way to display your best memories.",
    details: [
      "Heart layout holding multiple photos",
      "Great for couples and family moments",
      "Ready-to-hang with premium print quality",
    ],
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
    price: 1899,
    badge: "Premium",
    description:
      "High-gloss 3D acrylic photo panel that brings vivid colour and depth to your walls.",
    details: [
      "Crystal-clear acrylic with vivid printing",
      "Modern frameless floating look",
      "Scratch and moisture resistant",
    ],
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
    price: 1099,
    badge: "Limited",
    description:
      "Personalized couple frame with custom photo and caption — an ideal anniversary or wedding gift.",
    details: [
      "Custom photo and caption of your choice",
      "Elegant finish with gift packaging",
      "Made to order within a few days",
    ],
    images: [
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export type Offer = Product & { mrp: number };

// Featured deals: MRP is rounded up from the sale price to show a real discount.
export const offers: Offer[] = products.slice(0, 3).map((product) => ({
  ...product,
  mrp: Math.round((product.price * 1.4) / 10) * 10,
}));
