"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Check,
  X,
  Star,
  Users,
  Calendar,
  BookOpen,
  Award,
  Phone,
  MessageCircle,
  Video,
  FileText,
  Clock,
  Target,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";

const mentorshipPlans = [
  {
    id: "silver",
    name: "Silver Mentorship",
    price: "₹799",
    originalPrice: "₹1799",
    duration: "12 Months",
    color: "from-slate-400 to-slate-600",
    bgColor: "bg-slate-50/50 dark:bg-slate-900/20",
    borderColor: "border-slate-300 dark:border-slate-600",
    features: [
      {
        name: "Chat and Google Meet (MJK Sir)",
        included: true,
        icon: MessageCircle,
      },
      { name: "Bi-Weekly Google Meets", included: true, icon: Video },
      { name: "Kota Coaching Test Papers", included: true, icon: FileText },
      {
        name: "Kota Coaching (Sheet + DPP) with detailed solutions",
        included: true,
        icon: BookOpen,
      },
      { name: "Time Table Planning", included: true, icon: Calendar },
      { name: "Chemistry Doubt Solving", included: false, icon: X },
      { name: "Notes & Short Notes", included: true, icon: FileText },
      { name: "Early Counselling Perks", included: false, icon: X },
    ],
  },
  {
    id: "platinum",
    name: "Platinum Mentorship",
    subtitle: "(upto Adv. 2026)",
    price: "₹1199",
    originalPrice: "₹2999",
    duration: "12 Months",
    color: "from-slate-600 to-slate-800",
    bgColor:
      "bg-gradient-to-br from-slate-100/50 to-slate-200/50 dark:from-slate-800/20 dark:to-slate-900/20",
    borderColor: "border-slate-400 dark:border-slate-500",
    popular: true,
    features: [
      {
        name: "Personal call, chat and Google Meet (with MJK Sir)",
        included: true,
        icon: Phone,
      },
      { name: "Bi-Weekly Google Meets", included: true, icon: Video },
      { name: "Plus Advanced Tests", included: true, icon: Target },
      {
        name: "Kota Coaching (Sheet + DPP) with detailed solutions",
        included: true,
        icon: BookOpen,
      },
      { name: "Plus daily work review", included: true, icon: Clock },
      { name: "Chemistry Doubt Solving", included: true, icon: Check },
      {
        name: "Plus my handwritten chemistry short notes",
        included: true,
        icon: FileText,
      },
      { name: "Early bird offer included", included: true, icon: Award },
    ],
  },
];

export default function MentorshipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg py-20 md:py-32">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
                duration: 6,
                repeat: Infinity,
                delay: i * 0.2,
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
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                🚀 Mentorship Program Launch
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Personal Mentorship
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Get personalized guidance from MJK Sir and accelerate your IIT-JEE
              preparation with one-on-one mentorship
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="glass-button text-lg px-8 py-6"
                onClick={() =>
                  document
                    .getElementById("plans")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Choose Your Plan
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, label: "1-on-1 Sessions", value: "Personal" },
                { icon: Star, label: "Success Rate", value: "98%" },
                { icon: Calendar, label: "Duration", value: "12 Months" },
                { icon: Award, label: "Guarantee", value: "Results" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Comparison Section */}
      <section id="plans" className="py-32 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-gradient">Choose Your Mentorship Plan</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              What you'll gain with this program? Compare our Silver and
              Platinum mentorship plans designed for your IIT-JEE success.
            </motion.p>
          </div>

          {/* CTA Buttons at Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800"
              onClick={() =>
                (window.location.href =
                  "https://learn.crackiit.site/courses/Jee-Smashers-Silver-Udan-Mentorship-20--689a1f1d6b8b70533253146f")
              }
            >
              Buy Silver Plan - ₹799
            </Button>
            <Button
              size="lg"
              className="glass-button text-lg px-8 py-4"
              onClick={() =>
                (window.location.href =
                  "https://learn.crackiit.site/courses/Jee-Smasher--Platinum-Udan-Mentorship-20-689a21062fa0742b9a9e9241")
              }
            >
              Buy Platinum Plan - ₹1199
            </Button>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {mentorshipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <Card
                  className={`glass-card overflow-hidden hover-card h-full ${plan.bgColor} ${plan.borderColor} border-2`}
                >
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold mb-2 text-foreground">
                        {plan.name}
                      </h3>
                      {plan.subtitle && (
                        <p className="text-sm text-foreground/70 mb-4">
                          {plan.subtitle}
                        </p>
                      )}
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gradient">
                          {plan.price}
                        </span>
                        <span className="text-lg text-muted-foreground ml-2 line-through">
                          {plan.originalPrice}
                        </span>
                      </div>
                      <p className="text-foreground/70">{plan.duration}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                              feature.included
                                ? "bg-green-100 dark:bg-green-900/30"
                                : "bg-red-100 dark:bg-red-900/30"
                            }`}
                          >
                            {feature.included ? (
                              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                            ) : (
                              <X className="w-4 h-4 text-red-600 dark:text-red-400" />
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <feature.icon className="w-4 h-4 text-muted-foreground" />
                            <span
                              className={`text-sm ${
                                !feature.included
                                  ? "text-muted-foreground line-through"
                                  : "text-foreground"
                              }`}
                            >
                              {feature.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {plan.id === "platinum" ? (
                      <Button
                        className="w-full text-lg py-6 glass-button"
                        onClick={() =>
                          (window.location.href =
                            "https://learn.crackiit.site/courses/Jee-Smasher--Platinum-Udan-Mentorship-20-689a21062fa0742b9a9e9241")
                        }
                      >
                        Choose {plan.name}
                      </Button>
                    ) : (
                      <Button
                        className="w-full text-lg py-6 glass-button"
                        onClick={() =>
                          (window.location.href =
                            "https://learn.crackiit.site/courses/Jee-Smashers-Silver-Udan-Mentorship-20--689a1f1d6b8b70533253146f")
                        }
                      >
                        Choose {plan.name}
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-800"
              onClick={() =>
                (window.location.href =
                  "https://learn.crackiit.site/courses/Jee-Smashers-Silver-Udan-Mentorship-20--689a1f1d6b8b70533253146f")
              }
            >
              Buy Silver Plan - ₹799
            </Button>
            <Button
              size="lg"
              className="glass-button text-lg px-8 py-4"
              onClick={() =>
                (window.location.href =
                  "https://learn.crackiit.site/courses/Jee-Smasher--Platinum-Udan-Mentorship-20-689a21062fa0742b9a9e9241")
              }
            >
              Buy Platinum Plan - ₹1199
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Mentorship Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gradient">
              Why Choose Personal Mentorship?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the personalized attention and guidance you need to excel in
              your IIT-JEE preparation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Personalized Strategy",
                description:
                  "Get a customized study plan tailored to your strengths and weaknesses",
              },
              {
                icon: Users,
                title: "Direct Access to MJK Sir",
                description:
                  "One-on-one sessions with experienced faculty for doubt clearing",
              },
              {
                icon: Award,
                title: "Proven Results",
                description:
                  "98% of our mentorship students achieve their target ranks",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card p-8 text-center hover-card h-full">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
