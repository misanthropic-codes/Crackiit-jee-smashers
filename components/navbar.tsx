"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Mentorship", href: "/mentorship" },
    { name: "About", id: "about" },
    { name: "Courses", id: "courses" },
    { name: "Why Choose us?", id: "whyus" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Download App", id: "download" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            CrackIIT
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              )
            )}

            <Button
              className="glass-button"
              onClick={() =>
                window.open("https://learn.crackiit.site/s/store", "_blank")
              }
            >
              Buy Courses
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-6">
            <div className="flex flex-col space-y-6">
              {navItems
                .filter((item) => item.id)
                .map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-foreground/80 hover:text-primary transition-colors text-lg"
                  >
                    {item.name}
                  </button>
                ))}
              <Button
                className="glass-button w-full"
                onClick={() =>
                  window.open("https://www.crackiit.live/s/store", "_blank")
                }
              >
                Buy Courses
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
