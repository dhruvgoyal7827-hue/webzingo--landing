import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Check, ChevronDown } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";

const serviceOptions = [
  "Landing Page",
  "Full Business Site",
  "Custom Web Application",
  "E-commerce Store",
  "Brand Identity & Design"
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 - ₹30,000",
  "₹30,000 - ₹1,00,000",
  "₹1,00,000+"
];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!service) {
      toast.error("Please select a project type");
      return;
    }
    if (!budget) {
      toast.error("Please select a budget range");
      return;
    }
    if (!message.trim()) {
      toast.error("Please tell us a bit about your project");
      return;
    }

    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          budget: budget,
          project_type: service,
          message: message.trim(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
      );

      setSubmitted(true);
      toast.success("Booking request sent successfully!");
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setBudget("");
      setMessage("");
    } catch (error: any) {
      console.error("Error sending email via EmailJS: ", error);
      const errorMsg = error?.text || error?.message || "Failed to submit request. Please try again.";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden bg-bg-deep py-24 px-6">
      <Toaster position="bottom-right" richColors />
      
      {/* Glow Effects */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-accent-glow/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-blue/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Left Column: Context Info */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-glass bg-bg-card/40 px-4 py-1.5 text-xs text-text-muted backdrop-blur">
                <Sparkles size={12} className="text-accent-glow animate-pulse" />
                Let's start your project
              </div>
              
              <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary sm:text-5xl text-glow leading-tight">
                Let's build something <br />
                <span className="bg-gradient-to-r from-accent-glow via-accent-violet to-accent-blue bg-clip-text text-transparent">
                  exceptional
                </span>{" "}
                together.
              </h2>
              
              <p className="mt-6 text-base text-text-muted sm:text-lg leading-relaxed">
                Have an ambitious idea? Share your project details below, and we'll craft a bespoke web experience tailored for your brand. Let's make your vision reality.
              </p>

              <div className="mt-8 flex flex-col gap-6 text-sm text-text-muted">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-glass bg-bg-card/60">
                    <Check size={16} className="text-accent-glow" />
                  </div>
                  <span>Response within 12-24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-glass bg-bg-card/60">
                    <Check size={16} className="text-accent-glow" />
                  </div>
                  <span>Direct partnership with senior builders</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-glass bg-bg-card/60">
                    <Check size={16} className="text-accent-glow" />
                  </div>
                  <span>Modern, blazing fast premium stack</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative rounded-3xl p-8 sm:p-10 shadow-[0_24px_48px_-12px_rgba(124,58,237,0.15)]"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-glow/20 border border-accent-glow/40 text-accent-glow animate-bounce">
                      <Check size={32} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-text-primary">
                      Proposal Submitted!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm text-text-muted">
                      Thank you for choosing Webzingo, {name}. Our team will review your application and contact you via email at {email} within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-full border border-border-glass bg-bg-card/50 px-6 py-2.5 text-sm font-medium text-text-primary hover:bg-bg-card transition-colors"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elon Musk"
                        className="w-full rounded-xl border border-border-glass bg-bg-deep/40 px-4 py-3 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted/50 focus:border-accent-violet focus:bg-bg-deep/80 focus:shadow-[0_0_12px_rgba(124,58,237,0.2)]"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elon@spacex.com"
                        className="w-full rounded-xl border border-border-glass bg-bg-deep/40 px-4 py-3 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted/50 focus:border-accent-violet focus:bg-bg-deep/80 focus:shadow-[0_0_12px_rgba(124,58,237,0.2)]"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-border-glass bg-bg-deep/40 px-4 py-3 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted/50 focus:border-accent-violet focus:bg-bg-deep/80 focus:shadow-[0_0_12px_rgba(124,58,237,0.2)]"
                        required
                      />
                    </div>

                    {/* Service Type (Custom Dropdown) */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        What can we build for you?
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setIsServiceOpen(!isServiceOpen);
                          setIsBudgetOpen(false);
                        }}
                        className="flex w-full items-center justify-between rounded-xl border border-border-glass bg-bg-deep/40 px-4 py-3 text-left text-sm text-text-primary outline-none transition-all focus:border-accent-violet"
                      >
                        <span className={service ? "text-text-primary" : "text-text-muted/50"}>
                          {service || "Select service type..."}
                        </span>
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isServiceOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isServiceOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute top-[calc(100%+4px)] left-0 z-20 w-full rounded-xl border border-border-glass bg-bg-card p-2 shadow-xl"
                          >
                            {serviceOptions.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  setService(opt);
                                  setIsServiceOpen(false);
                                }}
                                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-text-muted hover:bg-bg-deep/80 hover:text-text-primary transition-colors"
                              >
                                {opt}
                                {service === opt && <Check size={14} className="text-accent-glow" />}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Budget Range (Custom Dropdown) */}
                    <div className="flex flex-col gap-2 relative">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Estimated Budget
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setIsBudgetOpen(!isBudgetOpen);
                          setIsServiceOpen(false);
                        }}
                        className="flex w-full items-center justify-between rounded-xl border border-border-glass bg-bg-deep/40 px-4 py-3 text-left text-sm text-text-primary outline-none transition-all focus:border-accent-violet"
                      >
                        <span className={budget ? "text-text-primary" : "text-text-muted/50"}>
                          {budget || "Select budget range..."}
                        </span>
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isBudgetOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isBudgetOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute top-[calc(100%+4px)] left-0 z-20 w-full rounded-xl border border-border-glass bg-bg-card p-2 shadow-xl"
                          >
                            {budgetOptions.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  setBudget(opt);
                                  setIsBudgetOpen(false);
                                }}
                                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-text-muted hover:bg-bg-deep/80 hover:text-text-primary transition-colors"
                              >
                                {opt}
                                {budget === opt && <Check size={14} className="text-accent-glow" />}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                        Project Brief
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about the project goals, timeline, and any features you need..."
                        rows={4}
                        className="w-full rounded-xl border border-border-glass bg-bg-deep/40 px-4 py-3 text-sm text-text-primary outline-none transition-all placeholder:text-text-muted/50 focus:border-accent-violet focus:bg-bg-deep/80 focus:shadow-[0_0_12px_rgba(124,58,237,0.2)] resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent-violet py-3.5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.6)] transition-all hover:bg-accent-glow hover:shadow-[0_12px_32px_-8px_rgba(168,85,247,0.7)] hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          Send Project Request
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
