import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent-violet/30 px-6 pt-20 pb-10">
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-violet/15 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-glow to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <defs>
                <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <path d="M11 1L13.5 8.5L21 11L13.5 13.5L11 21L8.5 13.5L1 11L8.5 8.5Z" fill="url(#fg)" />
            </svg>
            <span className="font-display text-xl font-bold text-text-primary">Webzingo</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-text-muted">
            Premium websites for ambitious brands.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-text-muted md:items-center">
          {["Work", "Services", "About", "Process"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-text-primary">
              {l}
            </a>
          ))}
        </div>

        <div className="md:text-right">
          <a
            href="mailto:hello@webzingo.in"
            className="inline-flex items-center gap-2 rounded-full border border-border-glass bg-bg-card/50 px-5 py-3 text-sm text-text-primary backdrop-blur transition-all hover:border-accent-violet/50 hover:bg-bg-card"
          >
            <Mail size={16} className="text-accent-glow" />
            hello@webzingo.in
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl border-t border-border-glass pt-6 text-center text-xs text-text-muted">
        © 2025 Webzingo. All rights reserved.
      </div>
    </footer>
  );
}