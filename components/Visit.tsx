"use client";
import { motion } from "framer-motion";
import { Instagram, MapPin, ArrowRight, Clock, Phone } from "lucide-react";
import { ORDER_URL } from "@/lib/menu";

const POPULAR = [
  { name: "Traditional Bowl", price: "$10–13", img: "/menu/acai_bowl_traditional.jpg" },
  { name: "Strawberry Boba", price: "$6", img: "/menu/boba_strawberry.jpg" },
  { name: "Beer Cheese Mac", price: "$15–18", img: "/menu/mac_beer_cheese_v2.jpg" },
  { name: "DC Cherry Choc", price: "$10", img: "/menu/smoothie_cherry_chocolate.jpg" },
];

export function Visit() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-ink py-24 text-sand-50"
    >
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-acai-500/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-coral-500/30 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-seafoam-300" />
              Visit · Order · Follow
            </span>
            <h2 className="mt-5 font-display text-6xl leading-[0.88] tracking-tight md:text-[5.5rem]">
              Come to the beach.<br />
              <span className="italic text-gradient">Leave with a bowl.</span>
            </h2>
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-coral-500 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-sand-50 shadow-[0_18px_40px_-10px_rgba(255,111,97,0.55)] transition hover:-translate-y-0.5 hover:bg-sand-50 hover:text-ink"
          >
            Start an online order
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Bento grid */}
        <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-6">
          {/* 1. Big storefront tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative col-span-1 row-span-1 overflow-hidden rounded-3xl md:col-span-4 md:row-span-4"
          >
            <img
              src="/location/exterior.jpg"
              alt="The Beach Bowl storefront"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sand-50/75">
                The Storefront
              </p>
              <p className="mt-2 font-display text-4xl leading-[0.95] text-sand-50 md:text-5xl">
                Stone walls, patio seats,<br /> neon glow you can spot from the road.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-sand-50/85">
                <span className="rounded-full bg-sand-50/15 px-3 py-1 backdrop-blur">Açaí bowls</span>
                <span className="rounded-full bg-sand-50/15 px-3 py-1 backdrop-blur">Smoothies</span>
                <span className="rounded-full bg-sand-50/15 px-3 py-1 backdrop-blur">Wraps</span>
                <span className="rounded-full bg-sand-50/15 px-3 py-1 backdrop-blur">Grain bowls</span>
                <span className="rounded-full bg-coral-500 px-3 py-1 text-sand-50">Open Today</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Hours tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="col-span-1 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur md:col-span-2 md:row-span-2"
          >
            <div className="flex items-center gap-2 text-seafoam-300">
              <Clock size={16} />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em]">Hours</p>
            </div>
            <ul className="mt-5 space-y-2 text-sm">
              <Row label="Mon – Thu" value="10a – 7p" />
              <Row label="Fri – Sat" value="10a – 9p" />
              <Row label="Sunday" value="10a – 6p" />
            </ul>
            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-sand-50/50">
              Seasonal. Check IG for updates.
            </p>
          </motion.div>

          {/* 3. Address / map tile */}
          <motion.a
            href="https://maps.google.com/?q=The+Beach+Bowl+Door+County+WI"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative col-span-1 overflow-hidden rounded-3xl bg-gradient-to-br from-acai-700 via-acai-500 to-coral-500 p-6 md:col-span-2 md:row-span-2"
          >
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]">Where</p>
              </div>
              <p className="mt-5 font-display text-2xl leading-tight">
                Door County,<br /> Wisconsin
              </p>
              <p className="mt-2 text-xs text-sand-50/80">
                Patio + counter seating · walk-ups welcome
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-transform group-hover:translate-x-1">
                Open in Maps <ArrowRight size={14} />
              </span>
            </div>
          </motion.a>

          {/* 4. Popular-right-now strip (4 mini product cards) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-1 overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur md:col-span-4 md:row-span-2"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral-300">
                  Popular right now
                </p>
                <p className="mt-1 font-display text-xl">Tap to order in seconds.</p>
              </div>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-sand-50/70 hover:text-sand-50 md:inline"
              >
                See full menu →
              </a>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {POPULAR.map((p) => (
                <a
                  key={p.name}
                  href={ORDER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-coral-500"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 text-[11px]">
                    <span className="truncate font-semibold">{p.name}</span>
                    <span className="text-sand-50/70">{p.price}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* 5. Instagram tile */}
          <motion.a
            href="https://www.instagram.com/thebeachbowldc/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative col-span-1 overflow-hidden rounded-3xl md:col-span-2 md:row-span-2"
          >
            <img
              src="/location/interior.jpg"
              alt="Inside The Beach Bowl"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-acai-700/80 via-acai-500/60 to-coral-500/70" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="flex items-center gap-2">
                <Instagram size={16} />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]">Follow</p>
              </div>
              <div>
                <p className="font-display text-3xl leading-tight">@thebeachbowldc</p>
                <p className="mt-2 text-xs text-sand-50/85">
                  Daily bowls, boba drops, what's new on the menu.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-transform group-hover:translate-x-1">
                  Open Instagram <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </motion.a>

          {/* 6. Order-now CTA tile */}
          <motion.a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="group relative col-span-1 overflow-hidden rounded-3xl bg-sand-50 p-7 text-ink md:col-span-4 md:row-span-2"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-coral-300/40 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-acai-300/40 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-coral-700">
                  Online ordering
                </p>
                <p className="mt-3 font-display text-4xl leading-[0.95] md:text-5xl">
                  Ready in<br /> <span className="italic text-acai-700">~10 minutes.</span>
                </p>
                <p className="mt-3 max-w-sm text-sm text-ink/70">
                  Order from the counter or tap below — pickup straight through our Square panel. No new app, no new account.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <span className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-sand-50 shadow-[0_14px_30px_-10px_rgba(26,22,37,0.45)] transition group-hover:-translate-y-0.5 group-hover:bg-acai-700">
                  Order Pickup <ArrowRight size={16} />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
                  Powered by Square
                </span>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between border-b border-white/10 pb-2 last:border-0">
      <span className="text-sand-50/70">{label}</span>
      <span className="font-semibold">{value}</span>
    </li>
  );
}
