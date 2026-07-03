"use client";

import { cartMessage, whatsappLink } from "@/const/contact";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    count,
    total,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const checkoutHref = whatsappLink(cartMessage(items, total));

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-brand/10 bg-brand px-5 py-4 text-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
              Your Cart
            </p>
            <h2 className="text-xl font-bold">
              {count} {count === 1 ? "item" : "items"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xl transition hover:bg-white/20"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="mt-16 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-soft text-3xl">
                🛒
              </div>
              <p className="mt-4 font-semibold text-ink">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted">
                Add frames and decor to see them here.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-2xl border border-white/70 bg-white p-3 shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold leading-tight text-ink">
                        {item.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted transition hover:text-brand"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-sm text-muted">₹{item.price} each</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Reduce ${item.name}`}
                          className="h-7 w-7 rounded-full bg-brand-soft font-bold text-brand transition hover:bg-brand hover:text-white"
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Add ${item.name}`}
                          className="h-7 w-7 rounded-full bg-brand font-bold text-white transition hover:bg-brand-dark"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-brand">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-brand/10 bg-white/70 px-5 py-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wider text-muted">
                Total
              </span>
              <span className="text-2xl font-black text-brand">
                ₹{total}
              </span>
            </div>
            <a
              href={checkoutHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
            >
              Checkout on WhatsApp
            </a>
            <button
              type="button"
              onClick={clearCart}
              className="mt-2 w-full rounded-full py-2 text-sm font-semibold text-muted transition hover:text-brand"
            >
              Clear cart
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
