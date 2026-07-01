export type HeroSlide = {
  badge: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    badge: "Signature Collection",
    title: "Royal Safa Styling",
    subtitle: "Premium groom safa sets crafted for every wedding celebration.",
    cta: { label: "Explore Safas", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80",
  },
  {
    badge: "Rental Service",
    title: "Ceremonial Talwar Rental",
    subtitle: "Elegant decorative swords delivered with full setup support.",
    cta: { label: "View Talwars", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    badge: "Complete Setup",
    title: "Wedding Decor Essentials",
    subtitle: "Grand styling for entry, photography and venue decoration.",
    cta: { label: "See Decor", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80",
  },
];
