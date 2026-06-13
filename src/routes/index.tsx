import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { signInWithPopup } from "firebase/auth";
import { Toaster, toast } from "sonner";
import { auth, googleProvider } from "../lib/firebase";
import { registerClient } from "../lib/clientApi";
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
  const [signingIn, setSigningIn] = useState(false);

  const handleGoogleSignIn = async () => {
    setSigningIn(true);
    try {
      // Step 1: Firebase Google sign-in
      const result = await signInWithPopup(auth, googleProvider);
      const { uid, displayName, email } = result.user;

      // Step 2: Register / upsert in MongoDB via backend API
      // Non-blocking: if backend fails, user is still logged in via Firebase
      try {
        await registerClient(uid, displayName ?? "", email ?? "");
        toast.success("Welcome! You're signed in.");
      } catch (apiError) {
        console.error("Backend registration error:", apiError);
        toast.error(
          `Sign-in successful but profile sync failed: ${
            apiError instanceof Error ? apiError.message : String(apiError)
          }. You can still access the portal.`
        );
      }

      // Step 3: Redirect to client portal (same tab)
      window.location.href = "https://client-portal-gray-five.vercel.app";
    } catch (firebaseError: any) {
      // Firebase sign-in failed (user cancelled popup, network error, etc.)
      if (firebaseError.code !== "auth/popup-closed-by-user") {
        toast.error(
          firebaseError.message ?? "Google sign-in failed. Please try again."
        );
      }
    } finally {
      setSigningIn(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-clip bg-bg-deep text-text-primary">
      {/* Global toast notifications */}
      <Toaster position="bottom-right" richColors closeButton />

      <CustomCursor />
      <Navbar onGoogleSignIn={handleGoogleSignIn} signingIn={signingIn} />
      <Hero onGoogleSignIn={handleGoogleSignIn} signingIn={signingIn} />
      <Marquee />
      <Services />
      <Stats />
      <Process />
      <BookingForm />
      <Footer />
    </main>
  );
}
