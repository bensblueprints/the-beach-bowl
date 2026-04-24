"use client";
import { motion } from "framer-motion";
import { Leaf, Sun, Waves } from "lucide-react";

export function Story() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[1fr_1.05fr] md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
            Our story
          </p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
            Door County,<br />
            in a bowl.
          </h2>
          <p className="mt-8 max-w-md text-lg text-ink/75">
            We built The Beach Bowl for the long summer days on the lake — the
            ones where you want something cold, something bright, and something
            that actually fills you up. Açaí at sunrise, boba after a swim,
            loaded mac when the sun goes down.
          </p>
          <p className="mt-5 max-w-md text-ink/70">
            Local ingredients when we can get them — Lautenbach tart cherries
            and Peach Barn IPA in the beer cheese are the reason some of our
            bowls and macs only exist here.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <Pillar
              icon={<Sun size={20} />}
              title="Pure Açaí"
              copy="Unsweetened base. The fruit carries the sweetness — never syrup."
              tone="bg-acai-500 text-sand-50"
            />
            <Pillar
              icon={<Leaf size={20} />}
              title="Made to Order"
              copy="Blended fresh at the counter. Bowls arrive thick, smoothies cold."
              tone="bg-seafoam-500 text-sand-50"
            />
            <Pillar
              icon={<Waves size={20} />}
              title="Local"
              copy="Tart cherries from Lautenbach. IPA from Peach Barn."
              tone="bg-coral-500 text-sand-50"
            />
            <Pillar
              icon={<Sun size={20} />}
              title="$6 flat boba"
              copy="Every 16oz boba is $6. Pick a flavor, grab the pearls, go."
              tone="bg-ink text-sand-50"
            />
          </div>
        </div>

        <InteriorShowcase />
      </div>
    </section>
  );
}

function InteriorShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative"
    >
      <div className="absolute -inset-6 -z-10 rounded-[40%_60%_55%_45%/55%_45%_55%_45%] bg-gradient-to-br from-acai-500/25 to-coral-500/25 blur-3xl" />

      {/* Main portrait of the shop interior */}
      <div className="relative overflow-hidden rounded-[2rem] bg-sand-100 shadow-[0_40px_80px_-30px_rgba(71,36,112,0.45)] ring-8 ring-white">
        <img
          src="/location/interior.jpg"
          alt="Inside The Beach Bowl — neon sign and bar counter"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-6 pt-24">
          <div className="flex flex-wrap items-end justify-between gap-3 text-sand-50">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-80">
                The Shop
              </p>
              <p className="mt-1 font-display text-2xl leading-tight">
                Counter seating,<br />
                neon, palm prints.
              </p>
            </div>
            <span className="rounded-full bg-sand-50/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
              Door County, WI
            </span>
          </div>
        </div>
      </div>

      {/* Floating caption card */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 5 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute -bottom-8 -left-4 hidden max-w-[240px] rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] md:block"
      >
        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-seafoam-500" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60">
            Open today
          </p>
        </div>
        <p className="mt-2 text-sm leading-snug text-ink/80">
          Grab an açaí bowl at the counter, take it out back to the patio.
        </p>
      </motion.div>
    </motion.div>
  );
}

function Pillar({
  icon,
  title,
  copy,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
  tone: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-5 shadow-sm ${tone}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-xl">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed opacity-90">{copy}</p>
    </motion.div>
  );
}
