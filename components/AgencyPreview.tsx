"use client";
import { useState } from "react";
import { Mail, FileText, X } from "lucide-react";

export function AgencyPreview() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-sm rounded-2xl border border-ink/10 bg-white/95 p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] backdrop-blur">
      <button
        onClick={() => setOpen(false)}
        className="absolute right-2 top-2 rounded-full p-1 text-ink/40 hover:bg-ink/5 hover:text-ink"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-acai-700">
        Agency Preview
      </p>
      <p className="mt-1 text-xs text-ink/60">
        Outreach assets for this concept:
      </p>
      <div className="mt-3 flex flex-col gap-2">
        <a
          href="/outreach/email.html"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-ink/10 bg-sand-50 px-3 py-2 text-xs font-semibold text-ink hover:border-acai-500 hover:bg-acai-50"
        >
          <Mail size={14} className="text-acai-500" />
          View outreach email
          <span className="ml-auto text-ink/40">↗</span>
        </a>
        <a
          href="/outreach/postcard.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-ink/10 bg-sand-50 px-3 py-2 text-xs font-semibold text-ink hover:border-coral-500 hover:bg-coral-300/10"
        >
          <FileText size={14} className="text-coral-500" />
          View printable postcard PDF
          <span className="ml-auto text-ink/40">↗</span>
        </a>
      </div>
    </div>
  );
}
