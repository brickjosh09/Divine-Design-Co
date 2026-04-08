"use client";

import Image from "next/image";
import { socialLinks } from "@/config/social";

const reelLinks = [
  { id: "reel-1", url: "https://www.facebook.com/reel/1621596952420820/", caption: "Wedding BTS" },
  { id: "reel-2", url: null, caption: "Wedding day magic" },
  { id: "reel-3", url: null, caption: "First look moments" },
];

export default function ContentShowcase() {
  return (
    <section className="py-20 md:py-32 bg-blush-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[13px] uppercase tracking-[0.2em] text-text-light mb-6">Our Mission</p>
          <p className="font-serif text-xl md:text-2xl text-text leading-relaxed max-w-3xl mx-auto">
            More than just photos — we capture the raw, real-time magic of your
            wedding day through cinematic short-form content designed for
            social media. Think behind-the-scenes getting ready, the first look,
            stolen glances, and all the joy in between.
          </p>
        </div>

        {/* Offerings */}
        <div className="grid md:grid-cols-3 gap-4 mb-16 md:mb-24">
          {["Weddings", "Content", "Portraits"].map((item) => (
            <div key={item} className="text-center py-8">
              <h3 className="font-serif text-4xl md:text-6xl italic text-coral">{item}</h3>
            </div>
          ))}
        </div>

        {/* Video Reels Row */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-16">
          {reelLinks.map((reel) => {
            const Wrapper = reel.url ? "a" : "div";
            const linkProps = reel.url
              ? { href: reel.url, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={reel.id}
                {...linkProps}
                className="relative aspect-[3/4] bg-dark/10 rounded-lg overflow-hidden group"
              >
                <Image
                  src="/images/portfolio-5.jpg"
                  alt={reel.caption}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-all duration-500 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-xs uppercase tracking-widest">{reel.caption}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "24hr", label: "Content Delivery" },
            { stat: "Social", label: "Ready to Post" },
            { stat: "BTS", label: "Behind the Scenes" },
            { stat: "Reels", label: "Highlight Videos" },
          ].map((item) => (
            <div key={item.stat}>
              <p className="font-serif text-3xl md:text-4xl text-coral mb-1">{item.stat}</p>
              <p className="text-text-light text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-dark text-dark px-8 py-3 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-dark hover:text-white transition-all duration-300"
          >
            Watch on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
