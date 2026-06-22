"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home", section: "home" },
  { name: "Machines", href: "#machines", section: "machines" },
  { name: "Technology", href: "#technology", section: "technology" },
  { name: "Solutions", href: "#solutions", section: "solutions" },
  { name: "About", href: "#about", section: "about" },
  { name: "Contact", href: "#contact", section: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Track active section via Intersection Observer
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Move the sliding pill indicator to the active link
  useEffect(() => {
    const target = hoveredLink ?? activeSection;
    const el = linkRefs.current[target];
    const indicator = indicatorRef.current;
    if (!el || !indicator) return;

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement?.parentElement?.getBoundingClientRect();
    if (!parentRect) return;

    indicator.style.width = `${rect.width + 24}px`;
    indicator.style.left = `${rect.left - parentRect.left - 12}px`;
  }, [activeSection, hoveredLink]);

  return (
    <>
      {/* Floating Capsule Navbar */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto">
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-full"
          style={{
            background: "rgba(10, 5, 25, 0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(109,40,255,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mr-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-base shadow-lg">
              V
            </div>
            <span className="text-base font-bold tracking-tight text-white hidden sm:block">VendAI</span>
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mr-2 hidden md:block" />

          {/* Desktop Nav Links with Sliding Pill */}
          <ul className="hidden md:flex items-center gap-1 relative">
            {/* Sliding active/hover pill */}
            <span
              ref={indicatorRef}
              className="absolute top-0 h-full rounded-full transition-all duration-300 ease-out pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(109,40,255,0.35), rgba(168,85,247,0.25))",
                border: "1px solid rgba(109,40,255,0.4)",
                boxShadow: "0 0 16px rgba(109,40,255,0.3)",
              }}
            />
            {navLinks.map((link) => (
              <li key={link.name} className="relative z-10">
                <a
                  ref={(el) => { linkRefs.current[link.section] = el; }}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.section)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
                  style={{
                    color: activeSection === link.section ? "#ffffff" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-2 hidden md:block" />

          {/* CTA Button */}
          <button
            className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold text-white shrink-0 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #6D28FF, #A855F7)",
              boxShadow: "0 0 20px rgba(109,40,255,0.4)",
            }}
          >
            Get Quote
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-1 ml-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full mt-3 left-0 right-0 rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "rgba(10, 5, 25, 0.95)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-6 py-4 text-base font-medium border-b border-white/5 last:border-0 transition-colors"
                  style={{
                    color: activeSection === link.section ? "#a855f7" : "rgba(255,255,255,0.7)",
                    background: activeSection === link.section ? "rgba(109,40,255,0.1)" : "transparent",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  {activeSection === link.section && (
                    <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-purple-400" />
                  )}
                </a>
              ))}
              <div className="p-4">
                <button className="w-full py-3 rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #6D28FF, #A855F7)" }}>
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
