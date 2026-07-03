import Link from "next/link";
import { startingPrice, type Offer } from "@/const/products";

export function OfferCard({ offer }: { offer: Offer }) {
  const price = startingPrice(offer);
  const discount = Math.round(((offer.mrp - price) / offer.mrp) * 100);

  return (
    <article className="glass-card group relative flex flex-col overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_36px_84px_rgba(var(--brand-rgb),0.22)]">
      <div className="relative m-2.5 h-52 overflow-hidden rounded-[1.35rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={offer.images[0]}
          alt={offer.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
        {discount > 0 && (
          <span className="btn-gold absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold shadow-md">
            {discount}% OFF
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full border border-white/25 bg-brand/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {offer.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-1.5">
        <h4 className="text-xl font-bold text-ink">{offer.name}</h4>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted">
          {offer.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-medium text-muted">from</span>
            <span className="text-2xl font-black text-brand">₹{price}</span>
            {discount > 0 && (
              <span className="text-sm text-muted line-through">
                ₹{offer.mrp}
              </span>
            )}
          </div>
          <Link
            href={`/products/${offer.id}`}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:bg-brand-dark"
          >
            View Deal
          </Link>
        </div>
      </div>
    </article>
  );
}
