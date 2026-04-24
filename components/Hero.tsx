"use client";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { ORDER_URL } from "@/lib/menu";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <FloatingFruit />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 md:pb-36">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-sand-50/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-seafoam-500" />
          Door County, WI · Open Daily
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[15vw] leading-[0.88] tracking-tight md:text-[9.5rem]"
        >
          Açaí all day.
          <br />
          <span className="italic text-gradient">Boba, smoothies</span>
          <br />
          & loaded mac.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-xl text-lg text-ink/75"
        >
          Pure-blend açaí bowls, 16oz boba, thick smoothies, and oven-finished
          mac n' cheese loaded the way the lake town deserves. Fresh fruit, real
          dairy, zero shortcuts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href={ORDER_URL} target="_blank" rel="noreferrer" className="btn-primary">
            Order Online <ArrowRight size={16} />
          </a>
          <a href="#bowls" className="btn-secondary">See the menu</a>
          <a
            href="https://www.instagram.com/thebeachbowldc/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 hover:text-acai-500"
          >
            <Instagram size={18} /> @thebeachbowldc
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 text-sm"
        >
          <Stat value="4" label="Signature bowls" />
          <Stat value="12" label="Boba flavors" />
          <Stat value="$6" label="Flat-price boba" />
        </motion.div>
      </div>

      <WaveDivider />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl font-semibold text-acai-700 md:text-5xl">
        {value}
      </div>
      <div className="mt-1 uppercase tracking-widest text-ink/60">{label}</div>
    </div>
  );
}

function FloatingFruit() {
  const blobs = [
    { c: "bg-acai-500", x: "12%", y: "18%", s: 220, d: "0s" },
    { c: "bg-coral-500", x: "78%", y: "12%", s: 160, d: "1.2s" },
    { c: "bg-seafoam-500", x: "85%", y: "55%", s: 260, d: "2.1s" },
    { c: "bg-sand-500", x: "8%", y: "62%", s: 140, d: "0.6s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {blobs.map((b, i) => (
        <span
          key={i}
          className={`absolute block animate-float rounded-full ${b.c} opacity-30 blur-3xl`}
          style={{
            left: b.x,
            top: b.y,
            width: b.s,
            height: b.s,
            animationDelay: b.d,
          }}
        />
      ))}
    </div>
  );
}

function WaveDivider() {
  return (
    <svg
      aria-hidden
      className="relative -mb-px block w-full text-sand-100"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0 40 C240 80 480 0 720 32 C960 64 1200 16 1440 48 L1440 80 L0 80 Z"
      />
    </svg>
  );
}
