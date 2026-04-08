import Image from "next/image";
import { socialLinks, businessInfo } from "@/config/social";

const navLinks = ["About", "Packages", "Portfolio", "Reviews", "Contact"];
const portfolioScroll = [
  "/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg",
  "/images/portfolio-4.jpg", "/images/portfolio-5.jpg", "/images/portfolio-6.jpg",
];

export default function Footer() {
  return (
    <footer className="bg-dark overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="font-serif text-3xl italic text-white block mb-4">
              Divine Design Co
            </span>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              {businessInfo.tagline}
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-white/40 text-sm mb-2">{businessInfo.location.city}, {businessInfo.location.state}</p>
            <a href={`mailto:${businessInfo.email}`} className="text-white/60 text-sm hover:text-coral transition-colors">
              {businessInfo.email}
            </a>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 my-12" />

        {/* Nav + Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-white/40 text-[13px] uppercase tracking-[0.1em] hover:text-coral transition-colors">
                {link}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            {Object.values(socialLinks).map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                className="text-white/40 text-[13px] uppercase tracking-[0.1em] hover:text-coral transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Text Banner */}
      <div className="border-t border-white/10 py-6 overflow-hidden">
        <div className="animate-scroll-left whitespace-nowrap flex">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-serif text-4xl md:text-6xl italic text-white/[0.06] mx-8">
              Divine Design Co &bull; Capturing Moments &bull; Designed by God &bull;
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio Strip */}
      <div className="flex gap-1 overflow-hidden">
        {portfolioScroll.map((img, i) => (
          <div key={i} className="relative w-[180px] md:w-[240px] aspect-[3/4] flex-shrink-0">
            <Image src={img} alt="" fill className="object-cover opacity-60 hover:opacity-90 transition-opacity duration-500" />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="py-6 text-center">
        <p className="text-white/20 text-xs tracking-widest">
          &copy; {new Date().getFullYear()} {businessInfo.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
