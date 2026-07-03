"use client";

import Script from "next/script";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  categories,
  offers,
  products,
  type CategoryKey,
} from "@/const/products";
import { site, whatsappLink } from "@/const/contact";
import { stats, whyChooseUs } from "@/const/content";
import { AddToCartControl } from "@/components/AddToCartControl";
import { HeroSlider } from "@/components/HeroSlider";
import { OfferCard } from "@/components/OfferCard";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_URL_CONSTANT } from "@/lib/seo";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Generate schema for visible products
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: visibleProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL_CONSTANT}/products/${product.id}`,
      name: product.name,
    })),
  };

  return (
    <>
      {/* Product Schema Markup */}
      <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsSchema),
        }}
      />

      <div className="flex min-h-screen flex-col text-ink">
        <SiteHeader />
        <HeroSlider />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
          {/* Stats band */}
          <section className="grid gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(var(--brand-rgb),0.08)] backdrop-blur-xl sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/70 bg-white/70 p-4 text-center shadow-sm backdrop-blur"
              >
                <p className="text-3xl font-black text-brand">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Special Offers */}
          <section id="offers" className="mt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                  Special Offers
                </p>
                <h3 className="mt-1 text-3xl font-bold sm:text-4xl">
                  Trending frame picks
                </h3>
              </div>
              <Link
                href="/products"
                className="rounded-full border border-brand px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                View All Products
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {offers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mt-12 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(var(--brand-rgb),0.08)] backdrop-blur-xl">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                  Choose your Category
                </p>
                <h3 className="mt-1 text-3xl font-bold">
                  Browse by category
                </h3>
              </div>
              <p className="max-w-xl text-sm text-muted">
                Select the category that fits your space and see the matching
                products instantly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.key);
                    setVisibleCount(6);
                  }}
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
          </section>

          {/* Products */}
          <section id="products" className="mt-8">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                  Choose your Products
                </p>
                <h3 className="mt-1 text-3xl font-bold">
                  Premium frames &amp; decor
                </h3>
              </div>
              <p className="text-sm text-muted">
                {filteredProducts.length} items available in this selection.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  actions={<AddToCartControl product={product} />}
                />
              ))}
            </div>

            {filteredProducts.length > visibleCount && (
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="rounded-full border border-brand px-6 py-2.5 font-semibold text-brand transition hover:bg-brand hover:text-white"
                >
                  View More
                </button>
              </div>
            )}
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="mt-12 grid gap-6 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(var(--brand-rgb),0.08)] backdrop-blur-xl md:grid-cols-2 md:p-8"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">
                Contact & Support
              </p>
              <h3 className="mt-2 text-3xl font-bold">
                Order your custom frames
              </h3>
              <p className="mt-3 max-w-md text-sm text-muted">
                Call or WhatsApp us for orders, custom sizing, delivery support,
                and personalized gifting. We help you frame your best memories.
              </p>
              <div className="mt-4 space-y-2 text-sm text-muted">
                <p>Mobile: {site.phoneDisplay}</p>
                <p>Email: {site.email}</p>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="rounded-[1.5rem] bg-brand-soft/60 p-6">
              <h4 className="text-xl font-bold text-brand">
                Why choose us
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {whyChooseUs.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
