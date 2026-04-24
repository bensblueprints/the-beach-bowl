"use client";
import { motion } from "framer-motion";
import { Instagram, MapPin, ArrowRight } from "lucide-react";
import { ORDER_URL } from "@/lib/menu";

export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden py-24">
      {/* Real exterior photo as backdrop */}
      <div className="absolute inset-0 -z-20">
        <img
          src="/location/exterior.jpg"
          alt="The Beach Bowl storefront"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Tinted gradient veil so text reads cleanly */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-acai-700/90 via-acai-500/80 to-coral-500/85" />
      <div className="absolute inset-0 -z-10 opacity-25 mix-blend-overlay [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div className="text-sand-50">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-seafoam-300" />
            Visit the shop
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-6 font-display text-6xl leading-[0.9] tracking-tight md:text-7xl"
          >
            Come say<br />
            <span className="italic">hi at the beach.</span>
          </motion.h2>

          <p className="mt-6 max-w-md text-sand-50/85">
            Stone-front shop with a patio, hand-painted signs, and a neon glow
            you can see from the road. Pull up, grab a bowl, stay a while.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Card
              icon={<MapPin size={18} />}
              label="Find us"
              body="Door County, WI"
              sub="Follow Instagram for the seasonal pop-up."
            />
            <Card
              icon={<Instagram size={18} />}
              label="Follow"
              body={
                <a
                  href="https://www.instagram.com/thebeachbowldc/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-sand-50/40 underline-offset-4 hover:decoration-sand-50"
                >
                  @thebeachbowldc
                </a>
              }
              sub="Daily bowls, boba + weekend specials."
            />
            <Card
              icon={<ArrowRight size={18} />}
              label="Order"
              body={
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-sand-50/40 underline-offset-4 hover:decoration-sand-50"
                >
                  Pickup via Square
                </a>
              }
              sub="Ready in ~10 min during off-peak."
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition hover:-translate-y-0.5"
            >
              Start an Order <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Storefront sign call-out card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto hidden w-full max-w-md md:block"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-sand-50/10 p-3 ring-1 ring-white/25 backdrop-blur">
            <img
              src="/location/exterior.jpg"
              alt="The Beach Bowl storefront and patio"
              className="h-full w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white/95 p-4 text-ink shadow-xl backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-acai-700">
                  The storefront
                </p>
                <p className="mt-1 font-display text-lg leading-tight">
                  Açaí bowls, smoothies,<br /> wraps &amp; grain bowls.
                </p>
              </div>
              <span className="rounded-full bg-coral-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-sand-50">
                Open
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({
  icon,
  label,
  body,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  body: React.ReactNode;
  sub?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] opacity-70">
        {label}
      </p>
      <div className="mt-1 text-base leading-snug">{body}</div>
      {sub && <p className="mt-2 text-xs opacity-70">{sub}</p>}
    </motion.div>
  );
}
