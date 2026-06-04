import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/webzingo/Navbar";
import Hero from "@/components/webzingo/Hero";
import Marquee from "@/components/webzingo/Marquee";
import Services from "@/components/webzingo/Services";
import Stats from "@/components/webzingo/Stats";
import Process from "@/components/webzingo/Process";
import BookingForm from "@/components/webzingo/BookingForm";
import Footer from "@/components/webzingo/Footer";
import CustomCursor from "@/components/webzingo/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webzingo — Premium Web Studio for Ambitious Brands" },
      { name: "description", content: "Premium web experiences for ambitious brands. Landing pages, business sites, and brand-elite builds starting at ₹2,999." },
      { property: "og:title", content: "Webzingo — Premium Web Studio" },
      { property: "og:description", content: "Premium web experiences for ambitious brands — starting at ₹2,999." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-bg-deep text-text-primary">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Process />
      <BookingForm />
      <Footer />
    </main>
  );
}
