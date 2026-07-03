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
    title: "Custom Photo Frames",
    subtitle:
      "Beautifully handcrafted frames to preserve your favourite memories.",
    cta: { label: "Explore Frames", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=1600&q=80",
  },
  {
    badge: "Best Sellers",
    title: "Family Collage Frames",
    subtitle: "Turn your best moments into a stunning wall centrepiece.",
    cta: { label: "View Collages", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1600&q=80",
  },
  {
    badge: "Complete Decor",
    title: "Wall Decor & Gifts",
    subtitle:
      "Personalized wall decor and gifting for every special occasion.",
    cta: { label: "See Decor", href: "/products" },
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1600&q=80",
  },
];
