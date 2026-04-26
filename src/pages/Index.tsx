import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Showcase } from "@/components/site/Showcase";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Phoenix-Invitation — Digital Invitations for Weddings, Birthdays & Engagements";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Beautiful digital invitation websites for weddings, birthdays and engagements. Bilingual (English & Tamil). Delivered in 24–48 hours. Starting from ₹499."
    );
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Showcase />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
