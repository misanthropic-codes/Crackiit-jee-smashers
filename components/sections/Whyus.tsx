"use client";   
import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Users, Lightbulb, Sparkles, Target, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Teaching",
      description: "Learn from top educators through interactive classes, structured study materials, and personalized doubt resolution sessions."
    },
    {
      icon: Users,
      title: "Dedicated Mentorship",
      description: "Get guided by experienced mentors who track your progress and help optimize your preparation strategy."
    },
    {
      icon: Lightbulb,
      title: "College Counselling",
      description: "Make informed decisions about your future with expert counselling on college selection, branch choices, and career paths."
    },
    {
      icon: Sparkles,
      title: "Seamless Integration",
      description: "Experience how teaching, mentorship, and counselling work together harmoniously to maximize your success."
    },
    {
      icon: Target,
      title: "Unified Progress Tracking",
      description: "Track your development across all three aspects - academics, personal growth, and career planning - in one dashboard."
    },
    {
      icon: Clock,
      title: "Continuous Support",
      description: "Access teaching, mentorship, and counselling support whenever you need it, all through a single platform."
    }
  ];

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-dot-pattern">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            The Power of Integration
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-gradient">
            Three Pillars, One Platform
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the synergy of teaching, mentorship, and college counselling working together seamlessly to transform your preparation journey.
          </p>
        </motion.div>

        {/* New Dynamic Integration Animation */}
        <div className="relative w-full aspect-square max-w-[600px] mx-auto mb-8 md:mb-16">
          {/* Central Brand Element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 backdrop-blur-lg flex items-center justify-center border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="text-center p-4"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-lg md:text-xl font-bold text-primary block">CRACKIIT</span>
                <span className="text-sm md:text-base font-bold text-gradient block">JEE SMASHERS</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Rotating Triangular Formation */}
          {[0, 120, 240].map((baseAngle, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ rotate: baseAngle, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className="absolute left-3/4 top-1/2 origin-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {/* Service Card */}
                <motion.div
                  className="absolute top-0 -translate-x-1/2 -translate-y-1/2"
                  style={{ rotate: -baseAngle }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm flex flex-col items-center justify-center border border-primary/20 shadow-lg">
                    {index === 0 && (
                      <>
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
                        <span className="text-xs md:text-sm font-bold text-center">Teaching</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <Users className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
                        <span className="text-xs md:text-sm font-bold text-center">Mentorship</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
                        <span className="text-xs md:text-sm font-bold text-center">Counselling</span>
                      </>
                    )}
                  </div>
                  
                  {/* Connecting Line */}
                  <div 
                    className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-primary/30 to-transparent"
                    style={{
                      width: '120px',
                      transform: 'translateY(-50%)',
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
          
          {/* Decorative Orbits */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/5"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-4 md:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;