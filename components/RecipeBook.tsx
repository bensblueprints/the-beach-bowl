"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export const RECIPE_BOOK_URL = "https://beachbowl.advancedmarketing.co/recipes";

export function RecipeBook() {
  return (
    <section id="recipes" className="relative overflow-hidden bg-ink py-24 text-sand-50">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] mix-blend-screen [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <div className="absolute -right-24 -top-24 h-[480px] w-[480px] rounded-full bg-acai-500/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-coral-500/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-sand-50/20 bg-sand-50/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur"
          >
            <BookOpen size={14} /> New · Digital Download
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl"
          >
            The Beach Bowl<br />
            <span className="italic text-gradient">Recipe Book.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-sand-50/80"
          >
            Every bowl, every boba, every loaded mac — ratioed, timed, and
            written the way we make it on the lake. Make it at home all winter.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 grid max-w-lg grid-cols-2 gap-x-8 gap-y-3 text-sm text-sand-50/85"
          >
            {[
              "5 signature açaí bowls",
              "12 boba recipes",
              "6 smoothies",
              "4 loaded mac builds",
              "Substitution guide",
              "Instant PDF download",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-seafoam-500" />
                {f}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href={RECIPE_BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition hover:-translate-y-0.5 hover:bg-coral-500 hover:text-sand-50"
            >
              Get the Recipe Book — $9.99 <ArrowRight size={16} />
            </a>
            <div className="text-sm text-sand-50/60">
              <span className="font-display text-2xl text-sand-50">$9.99</span>
              <span className="ml-2 line-through opacity-50">$14.99</span>
              <div className="mt-1 text-[11px] uppercase tracking-widest opacity-60">Launch pricing</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 -z-10 rounded-[40%_60%_55%_45%/55%_45%_55%_45%] bg-gradient-to-br from-acai-500/40 to-coral-500/40 blur-3xl" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-sand-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.55)] ring-8 ring-sand-50/10">
            <img
              src="/menu/acai_pb.jpg"
              alt="Recipe book cover"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/10 to-ink/80" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-sand-50">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">
                Recipe Book · Vol. 1
              </p>
              <p className="mt-2 font-display text-4xl leading-[0.9]">
                The Beach<br />
                <span className="italic">Bowl.</span>
              </p>
              <p className="mt-3 text-xs opacity-80">Door County · Sun · Açaí</p>
            </div>
            <div className="absolute right-5 top-5 rotate-6 rounded-full bg-coral-500 px-4 py-3 text-center font-display text-xl font-bold text-sand-50 shadow-xl">
              $9.99
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
