"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides as slides } from "@/const/slides";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, 5000);
    return () => clearInterval(timer);
  }, [count]);

  const go = (direction: number) =>
    setIndex((prev) => (prev + direction + count) % count);

  const active = slides[index];

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_30px_80px_rgba(var(--brand-rgb),0.22)] sm:h-[520px]">
          {slides.map((slide, idx) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`h-full w-full object-cover ${
                  idx === index ? "animate-kenburns" : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          ))}

          {/* Slide counter */}
          <div className="absolute right-5 top-5 z-10 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-widest text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
            <span className="mx-1 text-white/50">/</span>
            {String(count).padStart(2, "0")}
          </div>

          <div className="relative flex h-full max-w-2xl flex-col justify-center gap-1 p-8 sm:p-12 lg:p-16">
            <div key={index} className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft backdrop-blur">
                {active.badge}
              </span>
              <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                {active.title}
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85 sm:text-lg">
                {active.subtitle}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={active.cta.href}
                  className="btn-gold rounded-full px-6 py-3 text-sm font-bold shadow-lg shadow-black/25 transition hover:-translate-y-0.5"
                >
                  {active.cta.label}
                </Link>
                <a
                  href="#contact"
                  className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/25 sm:grid"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/25 sm:grid"
          >
            ›
          </button>

          <div className="absolute bottom-6 left-8 flex gap-2 sm:left-12 lg:left-16">
            {slides.map((slide, idx) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === index
                    ? "w-9 bg-gold shadow-[0_0_12px_rgba(var(--gold-rgb),0.75)]"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
