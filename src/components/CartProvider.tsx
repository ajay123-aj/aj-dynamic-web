"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { products, type Product } from "@/const/products";

type CartMap = Record<number, number>;
export type CartItem = Product & { quantity: number };

const STORAGE_KEY = "jayu-cart";

/**
 * Cart is kept in a small localStorage-backed external store and read via
 * useSyncExternalStore. The server snapshot is always empty, so the first
 * client render matches the server markup (no hydration mismatch); the stored
 * cart is loaded on subscribe, right after mount.
 */
const EMPTY: CartMap = {};
let state: CartMap = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function readStorage(): CartMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartMap) : {};
  } catch {
    return {};
  }
}

function writeState(next: CartMap) {
  state = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore storage errors (e.g. private mode)
  }
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  if (!loaded) {
    loaded = true;
    state = readStorage(); // React re-reads the snapshot after subscribing
  }
  return () => {
    listeners.delete(callback);
  };
}

const getSnapshot = () => state;
const getServerSnapshot = () => EMPTY;

const cartStore = {
  add: (id: number) => writeState({ ...state, [id]: (state[id] || 0) + 1 }),
  update: (id: number, amount: number) => {
    const next = { ...state };
    const updated = (next[id] || 0) + amount;
    if (updated <= 0) {
      delete next[id];
    } else {
      next[id] = updated;
    }
    writeState(next);
  },
  remove: (id: number) => {
    const next = { ...state };
    delete next[id];
    writeState(next);
  },
  clear: () => writeState({}),
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  updateQuantity: (id: number, amount: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const items = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, quantity]) => {
          const product = products.find((item) => item.id === Number(id));
          return product ? { ...product, quantity } : null;
        })
        .filter(Boolean) as CartItem[],
    [cart],
  );

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const addToCart = useCallback((product: Product) => {
    cartStore.add(product.id);
    setIsOpen(true);
  }, []);

  const value: CartContextValue = {
    items,
    count,
    total,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addToCart,
    updateQuantity: cartStore.update,
    removeFromCart: cartStore.remove,
    clearCart: cartStore.clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
