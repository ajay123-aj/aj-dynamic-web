import Link from "next/link";
import type { ReactNode } from "react";
import { startingPrice, type Product } from "@/const/products";

export function ProductCard({
  product,
  actions,
}: {
  product: Product;
  actions?: ReactNode;
}) {
  const href = `/products/${product.id}`;

  return (
    <article className="glass-card group flex flex-col overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_rgba(var(--brand-rgb),0.20)]">
      <Link
        href={href}
        aria-label={`View ${product.name}`}
        className="relative m-2.5 block h-52 overflow-hidden rounded-[1.35rem]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand shadow-sm backdrop-blur-md">
          {product.badge}
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-1.5">
        <Link
          href={href}
          className="text-lg font-bold leading-snug text-ink transition hover:text-brand"
        >
          {product.name}
        </Link>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted">
          {product.description}
        </p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-xs font-medium text-muted">from</span>
          <span className="text-xl font-black text-brand">
            ₹{startingPrice(product)}
          </span>
        </div>
        {actions && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4">{actions}</div>
        )}
      </div>
    </article>
  );
}
