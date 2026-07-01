"use client";

import Link from "next/link";
import Script from "next/script";
import { notFound, useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { products } from "@/const/products";
import { orderMessage, whatsappLink } from "@/const/contact";
import { useCart } from "@/components/CartProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  generateProductSchema,
  generateBreadcrumbSchema,
  SITE_URL_CONSTANT,
} from "@/lib/seo";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params?.id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = useMemo(
    () => products.find((item) => item.id === productId),
    [productId],
  );

  if (!product) {
    notFound();
  }

  // Generate structured data
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL_CONSTANT },
    { name: "Products", url: `${SITE_URL_CONSTANT}/products` },
    { name: product.name, url: `${SITE_URL_CONSTANT}/products/${product.id}` },
  ]);

  return (
    <>
      {/* Product Schema */}
      <Script
        id={`product-schema-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id={`breadcrumb-schema-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <div className="flex min-h-screen flex-col text-ink">
        <SiteHeader />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="transition hover:text-brand">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="transition hover:text-brand">
              Products
            </Link>
            <span>/</span>
            <span className="font-semibold text-brand">{product.name}</span>
          </nav>

          <div className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_12px_40px_rgba(var(--brand-rgb),0.08)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
            <div>
              <div className="overflow-hidden rounded-[1.5rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  loading="eager"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-2xl border-2 transition ${
                      selectedImage === index
                        ? "border-brand"
                        : "border-transparent hover:border-brand/30"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      loading="lazy"
                      className="h-24 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                  {product.badge}
                </span>
                <h2 className="mt-3 text-4xl font-black">{product.name}</h2>
                <p className="mt-4 text-lg text-muted">{product.description}</p>
                <p className="mt-5 text-3xl font-black text-brand">
                  ₹{product.price}
                </p>
                <ul className="mt-5 space-y-3">
                  {product.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 rounded-2xl bg-brand-soft/50 p-3 text-sm text-muted"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="rounded-full bg-brand px-5 py-3 font-semibold text-white transition hover:bg-brand-dark"
                >
                  Add to Cart
                </button>
                <a
                  href={whatsappLink(orderMessage(product.name, product.price))}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-whatsapp px-5 py-3 font-semibold text-white transition hover:bg-whatsapp-dark"
                >
                  Order on WhatsApp
                </a>
                <Link
                  href="/products"
                  className="rounded-full border border-brand px-5 py-3 font-semibold text-brand transition hover:bg-brand hover:text-white"
                >
                  Explore More Products
                </Link>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
