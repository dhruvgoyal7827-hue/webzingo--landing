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
