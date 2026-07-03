// Shop / contact details and navigation used across the site.
export const site = {
  name: "Vijay Photo Frame and Decor",
  tagline: "Custom Frames & Home Decor",
  phone: "917623038598",
  phoneDisplay: "+91 76230 38598",
  email: "hello@vijayphotoframe.com",
};

export const navLinks = [
  { name: "Home", href: "/#top" },
  { name: "Offers", href: "/#offers" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/#contact" },
];

/**
 * All WhatsApp copy lives here so it can be edited in one place. Dynamic values
 * are written as {token} placeholders and filled in by `fillTemplate` (or the
 * builder helpers below). Available tokens per message are noted inline.
 */
export const whatsappMessages = {
  // Generic "I have a question" chat. Tokens: {shop}
  query: "Hello {shop}, I have a query.",

  // Single-product order (product detail page). Tokens: {shop} {name} {price}
  order: "Hello {shop}, I want to order {name} for ₹{price}.",

  // Multi-product cart checkout, assembled from the pieces below.
  cart: {
    // Common greeting shown once at the top. Tokens: {shop}
    greeting: "Hello {shop}, I'd like to order the following:",
    // One header line per product.
    // Tokens: {index} {name} {price} {qty} {lineTotal}
    item: "{index}. {name} — ₹{price} × {qty} = ₹{lineTotal}",
    // Detail bullet under each product. Tokens: {detail}
    detail: "   • {detail}",
    // Text placed between product blocks.
    itemSeparator: "\n\n",
    // Grand total line. Tokens: {total} {count}
    total: "Total ({count} items): ₹{total}",
  },
};

/** Replace {token} placeholders in a template with the given values. */
export function fillTemplate(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Generic chat / query message. */
export function queryMessage() {
  return fillTemplate(whatsappMessages.query, { shop: site.name });
}

/** Single-product order message (product detail pages). */
export function orderMessage(name: string, price: number) {
  return fillTemplate(whatsappMessages.order, { shop: site.name, name, price });
}

/** Minimal shape needed to build a cart checkout message. */
export type CartLine = {
  name: string;
  price: number;
  quantity: number;
  details?: string[];
};

/**
 * Cart checkout message: a common greeting, then one detailed block per product
 * (name, its detail bullets, and qty × price = line total), then the grand
 * total across all products.
 */
export function cartMessage(items: CartLine[], total: number) {
  const cfg = whatsappMessages.cart;
  const count = items.reduce((sum, line) => sum + line.quantity, 0);

  const blocks = items.map((line, index) => {
    const header = fillTemplate(cfg.item, {
      index: index + 1,
      name: line.name,
      price: line.price,
      qty: line.quantity,
      lineTotal: line.price * line.quantity,
    });
    const bullets = (line.details ?? []).map((detail) =>
      fillTemplate(cfg.detail, { detail }),
    );
    return [header, ...bullets].join("\n");
  });

  return [
    fillTemplate(cfg.greeting, { shop: site.name }),
    blocks.join(cfg.itemSeparator),
    fillTemplate(cfg.total, { total, count }),
  ].join("\n\n");
}
