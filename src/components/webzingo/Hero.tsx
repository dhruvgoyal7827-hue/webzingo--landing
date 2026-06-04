import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";

const HeroScene = lazy(() => import("./HeroScene"));

const ticker = ["150+ Projects", "98% Satisfaction", "Trusted by 50+ Brands"];

export default function Hero() {
  const words = "We Build Websites That Actually Grow Your Business".split(" ");
  return (
    <section className="relative min-h-screen w-full overflow-hidden grain">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="h-full w-full bg-bg-deep" />}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#07070c_80%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-glass bg-bg-card/40 px-4 py-1.5 text-xs text-text-muted backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-glow shadow-[0_0_8px_rgba(168,85,247,0.9)]" />
          Premium web studio · accepting new projects
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-text-primary text-glow">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block pr-[0.25em]"
            >
              {w === "Grow" ? (
                <span className="bg-gradient-to-r from-accent-glow via-accent-violet to-accent-blue bg-clip-text text-transparent">
                  {w}
                </span>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-6 max-w-xl text-base text-text-muted sm:text-lg"
        >
          Premium web experiences for ambitious brands — starting at{" "}
          <span className="text-text-primary">₹2,999</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-violet px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_32px_-8px_rgba(124,58,237,0.7)] transition-all hover:-translate-y-0.5 hover:bg-accent-glow hover:shadow-[0_16px_48px_-8px_rgba(168,85,247,0.8)]"
          >
            Start Your Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-border-glass bg-bg-card/40 px-7 py-3.5 text-sm font-medium text-text-primary backdrop-blur transition-colors hover:bg-bg-card/80"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 flex w-full max-w-md overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_20%,#000_80%,transparent)]"
        >
          <div className="flex shrink-0 animate-[marquee_18s_linear_infinite] gap-8 pr-8 text-xs uppercase tracking-[0.2em] text-text-muted">
            {[...ticker, ...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                {t}
                <span className="h-1 w-1 rounded-full bg-accent-violet" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}