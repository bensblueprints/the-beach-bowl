"use client";
import { motion } from "framer-motion";
import { MENU, SIDES, ORDER_URL, type MenuCategory } from "@/lib/menu";

const ACCENT: Record<
  MenuCategory["accent"],
  { chip: string; dot: string; card: string; ring: string; glow: string }
> = {
  acai: {
    chip: "bg-acai-100 text-acai-700",
    dot: "bg-acai-500",
    card: "from-acai-50 to-white",
    ring: "ring-acai-300/50 hover:ring-acai-500",
    glow: "from-acai-500/30",
  },
  coral: {
    chip: "bg-coral-300/30 text-coral-700",
    dot: "bg-coral-500",
    card: "from-coral-300/20 to-white",
    ring: "ring-coral-300/50 hover:ring-coral-500",
    glow: "from-coral-500/30",
  },
  seafoam: {
    chip: "bg-seafoam-300/40 text-seafoam-700",
    dot: "bg-seafoam-500",
    card: "from-seafoam-300/25 to-white",
    ring: "ring-seafoam-300/50 hover:ring-seafoam-500",
    glow: "from-seafoam-500/30",
  },
  sand: {
    chip: "bg-sand-300/50 text-ink",
    dot: "bg-sand-500",
    card: "from-sand-100 to-white",
    ring: "ring-sand-300/60 hover:ring-sand-500",
    glow: "from-sand-500/40",
  },
};

export function MenuSection() {
  return (
    <section className="relative bg-sand-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              The Menu
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Fresh today.<br />
              <span className="italic text-acai-700">Every day.</span>
            </h2>
          </div>
          <p className="max-w-md text-ink/70">
            Everything is built to order. Prices reflect size ranges where
            applicable. Customize any bowl — extras diversify, no upcharge.
          </p>
        </div>

        <div className="space-y-28">
          {MENU.map((cat, idx) => (
            <Category key={cat.id} cat={cat} reverse={idx % 2 === 1} />
          ))}
        </div>

        <div id="addons" className="mt-24 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
          <div className="grid items-center gap-0 md:grid-cols-[auto_1fr_auto]">
            {SIDES[0].image && (
              <div className="relative h-48 w-full md:h-48 md:w-48">
                <img
                  src={SIDES[0].image}
                  alt={SIDES[0].name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
                Add-on
              </p>
              <h3 className="mt-2 font-display text-3xl">{SIDES[0].name}</h3>
              <p className="mt-2 max-w-md text-sm text-ink/70">
                {SIDES[0].description}
              </p>
            </div>
            <div className="flex items-center gap-6 px-8 pb-8 md:pb-0">
              <span className="font-display text-4xl font-semibold text-coral-700">
                {SIDES[0].price}
              </span>
              <a href={ORDER_URL} target="_blank" rel="noreferrer" className="btn-primary !py-3">
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Category({ cat, reverse }: { cat: MenuCategory; reverse: boolean }) {
  const a = ACCENT[cat.accent];
  return (
    <div id={cat.id} className="scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className={`mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${a.chip}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
            {cat.kicker}
          </span>
          <h3 className="mt-4 font-display text-5xl leading-none tracking-tight md:text-6xl">
            {cat.title}
          </h3>
        </div>
        <p className="max-w-md text-ink/70">{cat.blurb}</p>
      </motion.div>

      <div
        className={`grid gap-5 sm:grid-cols-2 ${
          cat.id === "boba" ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {cat.items.map((item, i) => (
          <motion.a
            key={item.name}
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
            className={`group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_-18px_rgba(26,22,37,0.25)] ${a.card} ${a.ring}`}
          >
            {item.image && (
              <div className="relative aspect-square overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${a.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
                {item.tag && (
                  <span
                    className={`absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur ${a.chip.replace(
                      "bg-",
                      "!text-"
                    )}`}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
            )}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h4 className="font-display text-xl leading-tight">
                  {item.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-ink">
                  {item.price}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-ink/50 transition-colors group-hover:text-ink">
                  Order →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
