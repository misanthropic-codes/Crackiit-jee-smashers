"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, LucideIcon } from "lucide-react";

type LinkSection = {
  title: string;
  links: string[];
};

type ContentSection = {
  title: string;
  content: Array<{
    icon: LucideIcon;
    text: string;
  }>;
};

type FooterSection = LinkSection | ContentSection;

type SocialLink = {
  icon: LucideIcon;
  href: string;
};

export function Footer() {
  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  const footerSections: FooterSection[] = [
    {
      title: "Quick Links",
      links: ["About Us", "Courses", "Success Stories", "Contact"],
    },
    {
      title: "Contact Us",
      content: [
        { icon: Mail, text: "contact@crackiit.com" },
        { icon: Phone, text: "+91 1234567890" },
      ],
    },
  ];

  function isLinkSection(section: FooterSection): section is LinkSection {
    return 'links' in section;
  }

  return (
    <footer className="bg-primary/5 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              CrackIIT: JEE Smashers
            </h3>
            <p className="text-muted-foreground">
              Your trusted partner in IIT-JEE preparation. Join thousands of
              successful students who cracked IIT-JEE with us.
            </p>
          </motion.div>
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              {isLinkSection(section) ? (
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-4">
                  {section.content.map((item) => (
                    <li
                      key={item.text}
                      className="flex items-center text-muted-foreground"
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-primary/10 text-center text-muted-foreground"
        >
          <p>© 2025 CrackIIT: JEE Smashers. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}