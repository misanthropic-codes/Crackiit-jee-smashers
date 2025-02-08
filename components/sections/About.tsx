import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  Users, 
  Instagram,
  Youtube,
  Clock,
  BookOpen,
  LinkedinIcon, 
  TwitterIcon, 
  YoutubeIcon,
  InstagramIcon,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  symbol?: string;
}

const AnimatedCounter = ({ value, duration = 2, symbol = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | undefined;
    const startValue = 0;
    const endValue = parseInt(value.replace(/[^0-9]/g, ''));
    
    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (endValue - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  }, [value, duration, isVisible]);

  return (
    
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onViewportEnter={() => setIsVisible(true)}
      className="stat-value"
    >
      {count}{symbol}
    </motion.div>
  );
};

const AboutSection = () => {
  const mentorDetails = {
    name: "Mritunjay Kumar",
    title: "Founder & Lead Educator",
    image: "https://d502jbuhuh9wk.cloudfront.net/orgData/6623b3e11b1ea87c8d28a618/pages/assets/images/YSPFNwhatsappimage20240502at08.15.146e808c62.jpg",
    description: "Mritunjay aka MJK sir is renowned for his innovative teaching methods and deep understanding of Chemistry concepts. His approach combines theoretical knowledge with practical applications, making complex topics easily digestible for students.",
    stats: [
      { icon: Users, value: "20000", symbol: "+", label: "Students Taught" },
      { icon: Instagram, value: "9", symbol: "K", label: "Instagram Followers" },
      { icon: Youtube, value: "15", symbol: "K", label: "YouTube Subscribers" },
      { icon: Clock, value: "3", symbol: "+", label: "Years Teaching" }
    ],
    achievements: [
      "Trained 10,000+ students for IIT-JEE",
      "Most followed Chemistry educator in both North and South INDIA on Instagram",
      "Invited at IIT Bombay TechFest and RVCE banaglore as a guest speaker",
      "Creator of innovative teaching methodologies"
    ],
    specializations: [
      "Advanced Chemistry",
      "JEE Problem Solving",
      "Competitive Exam Strategy",
      "JOSSA Counselling"
    ],
    social: {
      linkedin: "#",
      twitter: "#",
      youtube: "#",
      instagram: "#"
    }
  };

  return (
    <section id='about' className="py-20 md:py-32 relative overflow-hidden bg-dot-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block mb-4">
            Meet Your Mentor
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Learn from the Expert
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Photo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative group">
                <img 
                  src={mentorDetails.image} 
                  alt={mentorDetails.name}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{mentorDetails.name}</h3>
                  <p className="text-primary font-medium text-lg">{mentorDetails.title}</p>
                  <div className="flex gap-4 mt-4">
                    {Object.entries(mentorDetails.social).map(([platform, link]) => (
                      <Button key={platform} variant="ghost" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                        {platform === 'linkedin' && <LinkedinIcon className="w-5 h-5" />}
                        {platform === 'twitter' && <TwitterIcon className="w-5 h-5" />}
                        {platform === 'youtube' && <YoutubeIcon className="w-5 h-5" />}
                        {platform === 'instagram' && <InstagramIcon className="w-5 h-5" />}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description Card */}
            <div className="glass-card rounded-2xl p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mentorDetails.description}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats and Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {mentorDetails.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                    <AnimatedCounter value={stat.value} symbol={stat.symbol} />
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-primary" />
                    Notable Achievements
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {mentorDetails.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 p-3 rounded-lg bg-primary/5"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    Expertise Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {mentorDetails.specializations.map((spec, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <Button size="lg" className="w-full md:w-auto text-lg">
                    Schedule a Free Consultation
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  );
};

export default AboutSection;