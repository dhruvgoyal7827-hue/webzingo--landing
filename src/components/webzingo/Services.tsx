import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import ServiceIcon from "./ServiceIcon";

type Tier = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  icon: "orb" | "cube" | "ring";
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Digital Presence",
    price: "₹2,999",
    tagline: "For creators & solopreneurs ready to launch",
    features: ["Landing Page", "Mobile Responsive", "Contact Form", "Basic SEO", "7-Day Delivery"],
    icon: "orb",
  },
  {
    name: "Business Pro",
    price: "₹5,999",
    tagline: "For growing businesses that need results",
    features: [
      "Everything in Digital",
      "Multi-Page Site",
      "WhatsApp Integration",
      "Speed Optimization",
      "Google Analytics",
      "10-Day Delivery",
    ],
    icon: "cube",
    featured: true,
  },
  {
    name: "Brand Elite",
    price: "₹9,999",
    tagline: "For brands demanding a premium web presence",
    features: [
      "Everything in Pro",
      "Custom Animations",
      "CMS Integration",
      "1 Month Support",
      "Priority Delivery",
      "Brand Strategy Call",
    ],
    icon: "ring",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border-glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-muted">
            Services
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight text-text-primary sm:text-5xl">
            What We Build{" "}
            <span className="relative inline-block">
              For You
              <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-accent-violet/0 via-accent-glow to-accent-violet/0" />
            </span>
          </h2>
          <p className="mt-4 text-text-muted">
            Transparent pricing. Real craft. Built to perform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-center">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-3xl ${t.featured ? "lg:-my-6 lg:scale-[1.04]" : ""}`}
            >
              {t.featured && (
                <div className="absolute -top-4 left-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-3 py-1 text-xs font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.8)]">
                  <Sparkles size={12} /> Most Popular
                </div>
              )}
              <div
                className={`relative overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent-violet/40 hover:shadow-[0_30px_80px_-30px_rgba(124,58,237,0.6)] ${t.featured ? "conic-border" : ""}`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-glow to-transparent" />

                <div className="mb-6 flex justify-center">
                  <ServiceIcon kind={t.icon} />
                </div>

                <h3 className="font-display text-xl font-semibold text-text-primary">{t.name}</h3>
                <p className="mt-1 text-sm text-text-muted">{t.tagline}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold text-text-primary">{t.price}</span>
                  <span className="text-sm text-text-muted">one-time</span>
                </div>

                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text-primary/90">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-violet/15 text-accent-glow">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 block w-full rounded-full py-3 text-center text-sm font-medium transition-all ${
                    t.featured
                      ? "bg-accent-violet text-white shadow-[0_8px_32px_-8px_rgba(124,58,237,0.7)] hover:bg-accent-glow"
                      : "border border-border-glass bg-bg-deep/40 text-text-primary hover:border-accent-violet/40"
                  }`}
                >
                  Choose {t.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}