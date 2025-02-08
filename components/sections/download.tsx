"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadSection() {
  return (
    <section id="download" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold mb-6 text-gradient"
            >
              Get Our Mobile App
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto"
            >
              Take your JEE preparation to the next level with our mobile app.
              Study anytime, anywhere with offline access to all course materials.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Button size="lg" className="glass-button text-lg px-8" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mjk.resourses&pcampaignid=web_share&pli=1', '_blank')}>
                <Download className="mr-2" /> Download for Android
              </Button>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}