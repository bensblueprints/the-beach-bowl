"use client";
import { motion } from "framer-motion";
import { Instagram, MapPin, ArrowRight } from "lucide-react";
import { ORDER_URL } from "@/lib/menu";

export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-acai-700 via-acai-500 to-coral-500" />
      <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="mx-auto max-w-7xl px-6 text-sand-50">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-6xl leading-[0.9] tracking-tight md:text-8xl"
        >
          Come say<br />
          <span className="italic">hi at the beach.</span>
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card
            icon={<MapPin size={20} />}
            label="Find us"
            body={
              <>
                Door County, WI
                <br />
                <span className="opacity-70">Follow Instagram for the pop-up + seasonal location.</span>
              </>
            }
          />
          <Card
            icon={<Instagram size={20} />}
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
          />
          <Card
            icon={<ArrowRight size={20} />}
            label="Order"
            body={
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-sand-50/40 underline-offset-4 hover:decoration-sand-50"
              >
                Pickup via Square →
              </a>
            }
          />
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-4">
          <a href={ORDER_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-sand-50 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition hover:-translate-y-0.5">
            Start an Order <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, label, body }: { icon: React.ReactNode; label: string; body: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] opacity-70">
        {label}
      </p>
      <div className="mt-2 text-lg leading-snug">{body}</div>
    </motion.div>
  );
}
