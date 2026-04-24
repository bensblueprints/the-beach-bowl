"use client";
import { useEffect, useState } from "react";
import { ORDER_URL } from "@/lib/menu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-sand-50/70 border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg font-semibold tracking-tight">
            The Beach Bowl
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#bowls" className="hover:text-acai-500">Bowls</a>
          <a href="#boba" className="hover:text-coral-500">Boba</a>
          <a href="#smoothies" className="hover:text-seafoam-700">Smoothies</a>
          <a href="#mac" className="hover:text-sand-500">Mac</a>
          <a href="#visit" className="hover:text-acai-500">Visit</a>
          <a href="#recipes" className="hover:text-coral-500">Recipe Book</a>
        </nav>
        <a href={ORDER_URL} target="_blank" rel="noreferrer" className="btn-primary !py-3 !px-5 text-xs">
          Order Now
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6b3fa0" />
          <stop offset="1" stopColor="#ff6f61" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#g1)" />
      <path
        d="M6 23c4 2 8 2 14 0s10-2 14 0v7H6v-7z"
        fill="#4fc3a1"
        opacity="0.9"
      />
      <circle cx="14" cy="15" r="2" fill="#fff" />
      <circle cx="22" cy="12" r="1.5" fill="#fff" />
      <circle cx="28" cy="16" r="1.2" fill="#fff" />
    </svg>
  );
}
