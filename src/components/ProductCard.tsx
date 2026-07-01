import type { ReactNode } from "react";
import type { Product } from "@/const/products";

export function ProductCard({
  product,
  actions,
}: {
  product: Product;
  actions?: ReactNode;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/85 shadow-[0_14px_44px_rgba(var(--brand-rgb),0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_26px_64px_rgba(var(--brand-rgb),0.18)]">
      <div className="relative h-52 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand shadow">
          {product.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-lg font-bold text-ink">
            {product.name}
          </h4>
          <p className="whitespace-nowrap text-lg font-black text-brand">
            ₹{product.price}
          </p>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted">
          {product.description}
        </p>
        {actions && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4">{actions}</div>
        )}
      </div>
    </article>
  );
}
