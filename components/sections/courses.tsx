"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { courses } from "@/lib/data";
import { Clock, BookOpen, Award, Users, ChevronRight } from "lucide-react";

export function CoursesSection() {
  return (
    <section id="courses" className="py-32 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
          >
            Featured Courses
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mb-4 text-gradient"
          >
            Top-Rated IIT-JEE Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive courses designed by IIT alumni and experienced faculty to help you achieve your dream of getting into IIT.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card overflow-hidden hover-card">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-primary/90 text-primary-foreground">
                    Bestseller
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {course.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      120+ Hours
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 mr-2" />
                      50+ Chapters
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="w-4 h-4 mr-2" />
                      Certificate
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      100+ Students
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-gradient">
                        {course.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        <s>₹9999</s>
                      </span>
                    </div>
                    <Button
                      className="glass-button"
                      onClick={() => window.open(course.link, "_blank")}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="text-lg" onClick={() => window.open("https://www.crackiit.live/s/store", "_blank")}>
            View All Courses <ChevronRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}