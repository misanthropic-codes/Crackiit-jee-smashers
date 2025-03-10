"use client";

import { motion } from "framer-motion";
import { ChevronRight, BookOpen, Users, Trophy, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function HeroSection() {
  const stats = [
    { icon: Users, label: "Active Learners", value: "10,000+" },
    { icon: Trophy, label: "Success Rate", value: "95%" },
    { icon: BookOpen, label: "Total Courses", value: "50+" },
    { icon: Timer, label: "Hours of Content", value: "1,000+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg py-20 md:py-32">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="light-particle"
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: 800,
              opacity: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              #1 Platform for IIT-JEE Preparation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            CrackIIT: JEE Smashers
          </h1>

          <TextGenerateEffect
            words="Transform Your IIT-JEE Journey with Expert-Led Courses"
            className="text-xl md:text-2xl mb-8 text-foreground/80"
          />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of successful students who have cracked IIT-JEE with
            our comprehensive courses, expert faculty, and proven methodology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="glass-button text-lg px-8 py-6"
              onClick={() =>
                window.open("https://learn.crackiit.site/s/store", "_blank")
              }
            >
              Explore Courses <ChevronRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() =>
                window.open(
                  "https://learn.crackiit.site/products/1-Hour-Counselling-and-mentorship-67a84634f5733d1e0e60c0b7?dgps_s=pbl&dgps_u=c&dgps_uid=6623b3e11b1ea87c8d28a61a&dgps_t=cp_m",
                  "_blank"
                )
              }
            >
              Demo Class
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
