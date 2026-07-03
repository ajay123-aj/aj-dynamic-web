"use client";

import { useMemo, useState } from "react";
import {
  categories,
  products,
  type CategoryKey,
  type Product,
} from "@/const/products";
import { useCart } from "@/components/CartProvider";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import Link from "next/link";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const query = search.toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="flex min-h-screen flex-col text-ink">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
            Our Collection
          </p>
          <h1 className="mt-1 text-4xl font-black sm:text-5xl">
            Find your perfect frames &amp; decor
          </h1>
        </div>

        <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(var(--brand-rgb),0.08)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category.key
                      ? "bg-brand text-white shadow-lg shadow-brand/25"
                      : "bg-brand-soft text-brand hover:bg-brand hover:text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-brand/20 bg-white/90 px-5 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20 lg:w-72"
            />
          </div>
        </section>

        {filteredProducts.length === 0 ? (
          <p className="mt-12 rounded-[2rem] border border-white/70 bg-white/70 p-10 text-center text-muted">
            No products match your search. Try a different keyword or category.
          </p>
        ) : (
          <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                actions={<ProductActions product={product} />}
              />
            ))}
          </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function ProductActions({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <>
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        Add to Cart
      </button>
      <Link
        href={`/products/${product.id}`}
        className="rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand-soft"
      >
        View Details
      </Link>
    </>
  );
}
