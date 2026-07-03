"use client";

import { useState } from "react";
import {
  DEFAULT_SIZE,
  frameSizes,
  priceForSize,
  type Product,
} from "@/const/products";
import { useCart } from "./CartProvider";

/**
 * Size pill selector + Add to Cart button used on product cards, so the
 * customer can pick a size (and see its price) without opening the detail page.
 */
export function AddToCartControl({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState<string>(DEFAULT_SIZE);
  const price = priceForSize(product, size);

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
          Size (inches)
        </span>
        <span className="text-sm font-black text-brand">
          {price > 0 ? `₹${price}` : "On request"}
        </span>
      </div>
      <div className="no-scrollbar -mx-0.5 flex snap-x gap-1.5 overflow-x-auto scroll-smooth px-0.5 pb-1">
        {frameSizes.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSize(option)}
            aria-pressed={size === option}
            className={`shrink-0 snap-start whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
              size === option
                ? "bg-brand text-white shadow-md shadow-brand/25"
                : "border border-brand/15 bg-white/70 text-brand hover:border-brand/40 hover:bg-brand-soft"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={() => addToCart(product, size)}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <circle cx="9" cy="20" r="1.4" />
          <circle cx="18" cy="20" r="1.4" />
          <path d="M2.5 3h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
        </svg>
        Add to Cart
      </button>
    </div>
  );
}
