"use client";

import { HeroSection } from "@/components/sections/hero";
import  AboutSection  from "@/components/sections/About";
import { CoursesSection } from "@/components/sections/courses";
import  FeaturesSection from "@/components/sections/Whyus";
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
      <AboutSection />
    
      <FeaturesSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
