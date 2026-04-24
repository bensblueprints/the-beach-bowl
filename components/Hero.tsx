"use client";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { ORDER_URL } from "@/lib/menu";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <FloatingFruit />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-8 md:pb-32">
        <div>
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
            className="font-display text-[13vw] leading-[0.88] tracking-tight md:text-[7.5rem]"
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
            mac n' cheese loaded the way the lake town deserves. Fresh fruit,
            real dairy, zero shortcuts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Order Online <ArrowRight size={16} />
            </a>
            <a href="#bowls" className="btn-secondary">
              See the menu
            </a>
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
            className="mt-14 grid max-w-xl grid-cols-3 gap-8 text-sm"
          >
            <Stat value="4" label="Signature bowls" />
            <Stat value="12" label="Boba flavors" />
            <Stat value="$6" label="Flat-price boba" />
          </motion.div>
        </div>

        <HeroShowcase />
      </div>

      <WaveDivider />
    </section>
  );
}

function HeroShowcase() {
  // Three product shots arranged in a playful stack.
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      <div className="absolute inset-0 -z-10 rounded-[40%_60%_55%_45%/55%_45%_55%_45%] bg-gradient-to-br from-acai-300/60 via-coral-300/60 to-seafoam-300/60 blur-3xl" />

      <motion.img
        src="/menu/acai_bowl_traditional.jpg"
        alt="Traditional açaí bowl"
        className="absolute left-[6%] top-[4%] h-[72%] w-[72%] rounded-[2.25rem] object-cover shadow-[0_30px_60px_-20px_rgba(71,36,112,0.45)] ring-4 ring-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/menu/boba_strawberry.jpg"
        alt="Strawberry boba tea"
        className="absolute bottom-[2%] right-[2%] h-[46%] w-[46%] rounded-[1.75rem] object-cover shadow-[0_30px_60px_-20px_rgba(214,69,55,0.5)] ring-4 ring-white"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />
      <motion.img
        src="/menu/smoothie_cherry_chocolate.jpg"
        alt="DC Cherry Chocolate smoothie"
        className="absolute right-[4%] top-[8%] h-[34%] w-[34%] rounded-full object-cover shadow-[0_22px_45px_-15px_rgba(42,143,114,0.55)] ring-4 ring-white"
        animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.1,
        }}
      />

      <span className="absolute -bottom-3 left-[8%] inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/95 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] shadow-lg backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-coral-500" /> 28 items on the menu
      </span>
    </motion.div>
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
