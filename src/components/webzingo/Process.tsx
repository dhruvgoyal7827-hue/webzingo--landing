import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Discovery Call", desc: "We learn your business goals in 20 minutes." },
  { n: "02", title: "Design & Build", desc: "We handle everything — you just give feedback." },
  { n: "03", title: "Launch & Grow", desc: "Go live, then watch your business grow." },
];

export default function Process() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-muted">
            Process
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            How we work — simple, fast, transparent.
          </h2>
        </motion.div>

        <div className="relative grid gap-10 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden border-t border-dashed border-accent-violet/40 md:block"
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="relative z-10 mb-6 grid h-24 w-24 place-items-center rounded-full border border-border-glass bg-bg-deep font-display text-2xl text-accent-glow shadow-[0_0_40px_-10px_rgba(124,58,237,0.6)]">
                {s.n}
              </div>
              <h3 className="font-display text-2xl font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-2 max-w-xs text-text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
