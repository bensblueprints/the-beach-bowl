"use client";
import { motion } from "framer-motion";
import { Leaf, Sun, Waves } from "lucide-react";

export function Story() {
  return (
    <section className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-20">
        <div className="relative">
          <div className="sticky top-32">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              Our story
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
              Door County,<br />
              in a bowl.
            </h2>
            <p className="mt-8 max-w-md text-lg text-ink/75">
              We built The Beach Bowl for the long summer days on the lake — the
              ones where you want something cold, something bright, and
              something that actually fills you up. Açaí at sunrise, boba after
              a swim, loaded mac when the sun goes down.
            </p>
            <p className="mt-5 max-w-md text-ink/70">
              Local ingredients when we can get them — Lautenbach tart cherries
              and Peach Barn IPA in the beer cheese are the reason some of our
              bowls and macs only exist here.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Pillar
            icon={<Sun size={22} />}
            title="Pure Açaí"
            copy="Unsweetened base. The fruit and drizzle carry the sweetness — never syrup."
            tone="bg-acai-500 text-sand-50"
          />
          <Pillar
            icon={<Leaf size={22} />}
            title="Made to Order"
            copy="Blended fresh at the counter. Bowls arrive thick, smoothies arrive cold."
            tone="bg-seafoam-500 text-sand-50"
            offset
          />
          <Pillar
            icon={<Waves size={22} />}
            title="Local Door County"
            copy="Tart cherries from Lautenbach. IPA from Peach Barn. The lake is in the menu."
            tone="bg-coral-500 text-sand-50"
          />
          <Pillar
            icon={<Sun size={22} />}
            title="Flat-price Boba"
            copy="Every 16oz boba is $6. Pick a flavor, grab the pearls, go."
            tone="bg-ink text-sand-50"
            offset
          />
        </div>
      </div>
    </section>
  );
}

function Pillar({
  icon,
  title,
  copy,
  tone,
  offset,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
  tone: string;
  offset?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`rounded-3xl p-7 shadow-sm ${tone} ${offset ? "sm:mt-10" : ""}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed opacity-90">{copy}</p>
    </motion.div>
  );
}
