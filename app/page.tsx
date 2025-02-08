"use client";

import { HeroSection } from "@/components/sections/hero";
import { CoursesSection } from "@/components/sections/courses";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { DownloadSection } from "@/components/sections/download";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}