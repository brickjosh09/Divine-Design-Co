"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { socialLinks } from "@/config/social";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="#home">
          <span
            className={`font-serif text-xl md:text-2xl italic transition-colors duration-500 ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            Divine Design Co
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-[13px] uppercase tracking-[0.1em] transition-colors duration-300 hover:text-coral ${
                scrolled ? "text-text" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer"
            className={`text-[13px] uppercase tracking-[0.1em] transition-colors hover:text-coral ${scrolled ? "text-text" : "text-white/90"}`}>
            IG
          </a>
          <a href={socialLinks.tiktok.url} target="_blank" rel="noopener noreferrer"
            className={`text-[13px] uppercase tracking-[0.1em] transition-colors hover:text-coral ${scrolled ? "text-text" : "text-white/90"}`}>
            TT
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px] bg-white" : scrolled ? "bg-dark" : "bg-white"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${menuOpen ? "opacity-0" : scrolled ? "bg-dark" : "bg-white"}`} />
          <span className={`block w-6 h-[1.5px] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px] bg-white" : scrolled ? "bg-dark" : "bg-white"}`} />
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <div
        className={`fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center gap-6 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <span className="font-serif text-3xl italic text-white mb-8">Divine Design Co</span>
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 text-white hover:text-coral transition-colors"
          >
            <span className="text-coral/50 text-sm font-serif">0{i + 1}</span>
            <span className="text-2xl font-serif italic">{link.label}</span>
          </a>
        ))}
        <div className="flex gap-6 mt-8">
          {Object.values(socialLinks).slice(0, 3).map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
              className="text-white/50 text-xs uppercase tracking-widest hover:text-coral transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
