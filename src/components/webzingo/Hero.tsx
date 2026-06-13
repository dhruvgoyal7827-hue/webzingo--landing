import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onGoogleSignIn?: () => void;
  signingIn?: boolean;
}

const HeroScene = lazy(() => import("./HeroScene"));

const ticker = ["150+ Projects", "98% Satisfaction", "Trusted by 50+ Brands"];

export default function Hero({ onGoogleSignIn, signingIn }: HeroProps) {
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
          <button
            id="google-signin"
            onClick={onGoogleSignIn}
            disabled={signingIn}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border-glass bg-bg-card/40 px-7 py-3.5 text-sm font-medium text-text-primary backdrop-blur transition-colors hover:bg-bg-card/80 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {signingIn ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-text-primary border-t-transparent" />
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            )}
            {signingIn ? "Signing in…" : "Sign in with Google"}
          </button>
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