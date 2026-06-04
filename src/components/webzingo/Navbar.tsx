import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-border-glass bg-bg-deep/60 px-5 py-3 backdrop-blur-2xl">
          <a href="#" className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
              <path d="M11 1L13.5 8.5L21 11L13.5 13.5L11 21L8.5 13.5L1 11L8.5 8.5Z" fill="url(#g1)" />
            </svg>
            <span className="font-display text-xl font-bold tracking-tight text-text-primary">
              Webzingo
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-glow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="http://localhost:8081/login"
              className="rounded-full border border-border-glass bg-bg-card/40 px-5 py-2 text-sm font-medium text-text-primary backdrop-blur transition-all hover:border-accent-violet/50 hover:bg-bg-card"
            >
              Client Login
            </a>
            <a
              href="#contact"
              className="rounded-full bg-accent-violet px-5 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(124,58,237,0.4)] transition-all hover:bg-accent-glow hover:shadow-[0_0_36px_rgba(168,85,247,0.6)]"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-2xl border border-border-glass bg-bg-deep/90 p-5 backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-text-muted hover:text-text-primary"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="http://localhost:8081/login"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-border-glass bg-bg-card/40 px-5 py-2 text-center text-sm font-medium text-text-primary backdrop-blur hover:bg-bg-card/80"
                >
                  Client Login
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-accent-violet px-5 py-2 text-center text-sm font-medium text-white"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}