// Shop / contact details and navigation used across the site.
export const site = {
  name: "Jayu Khiladi Safa Shop",
  tagline: "Royal Wedding Essentials",
  phone: "917623038598",
  phoneDisplay: "+91 76230 38598",
  email: "hello@ajtechhub.com",
};

export const navLinks = [
  { name: "Home", href: "/#top" },
  { name: "Offers", href: "/#offers" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/#contact" },
];

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function orderMessage(name: string, price: number) {
  return `Hello ${site.name}, I want to order ${name} for ₹${price}.`;
}
