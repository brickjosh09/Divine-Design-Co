"use client";

import { socialLinks } from "@/config/social";

// Add more Facebook Reel embed URLs here as Bailee creates content
// To get embed code: go to the Reel on Facebook > click "..." > "Embed" > copy the src URL
// Link to Bailee's reels - these open in a new tab since Facebook embeds
// often get blocked due to copyrighted music. Add more URLs as she creates content.
const reelLinks = [
  {
    id: "reel-1",
    url: "https://www.facebook.com/reel/1621596952420820/",
    caption: "Wedding BTS",
  },
  {
    id: "reel-2",
    url: null,
    caption: "Wedding day magic",
  },
  {
    id: "reel-3",
    url: null,
    caption: "First look moments",
  },
];

export default function ContentShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#6B6360] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center overflow-hidden">
          {/* Left Column - Text */}
          <div className="min-w-0">
            <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-4">
              Wedding Content Creator
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
              Relive Your Day
              <span className="block italic text-champagne-light">
                The Very Next Day
              </span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6 break-words">
              More than just photos — I capture the raw, real-time magic of your
              wedding day through cinematic short-form content designed for
              social media. Think behind-the-scenes getting ready moments, the
              first look, stolen glances, and all the joy in between.
            </p>
            <p className="text-white/60 leading-relaxed mb-6 break-words">
              As your personal wedding-day content creator, I work behind the
              scenes capturing Instagram and TikTok-ready videos so you can
              share your day with the world — without waiting weeks for
              traditional edits.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10 overflow-hidden">
              <div className="border-l-2 border-champagne pl-4">
                <p className="font-serif text-2xl text-white mb-1">24hr</p>
                <p className="text-white/50 text-sm">Content delivery</p>
              </div>
              <div className="border-l-2 border-champagne pl-4">
                <p className="font-serif text-2xl text-white mb-1">Social</p>
                <p className="text-white/50 text-sm">Ready to post</p>
              </div>
              <div className="border-l-2 border-champagne pl-4">
                <p className="font-serif text-2xl text-white mb-1">BTS</p>
                <p className="text-white/50 text-sm">Behind the scenes</p>
              </div>
              <div className="border-l-2 border-champagne pl-4">
                <p className="font-serif text-2xl text-white mb-1">Reels</p>
                <p className="text-white/50 text-sm">Highlight videos</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#packages"
                className="inline-block w-full sm:w-auto bg-champagne text-white px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne-light hover:text-charcoal transition-all duration-300 text-center"
              >
                View Packages
              </a>
              <a
                href={socialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto border border-white/30 text-white px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-charcoal transition-all duration-300 text-center"
              >
                Watch on Instagram
              </a>
            </div>
          </div>

          {/* Right Column - Video Reels */}
          <div className="hidden md:flex gap-4 justify-center md:justify-end">
            {reelLinks.map((reel, index) => {
              const Wrapper = reel.url ? "a" : "div";
              const linkProps = reel.url
                ? { href: reel.url, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper
                  key={reel.id}
                  {...linkProps}
                  className={`relative w-[160px] md:w-[190px] aspect-[9/16] bg-warm-gray/30 rounded-2xl overflow-hidden group ${
                    reel.url ? "cursor-pointer" : ""
                  } ${
                    index === 1 ? "mt-0" : index === 0 ? "mt-8" : "mt-16"
                  }`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-300 ${
                      reel.url
                        ? "border-champagne/60 group-hover:border-champagne group-hover:bg-champagne/20 group-hover:scale-110"
                        : "border-champagne/40"
                    }`}>
                      <svg
                        className={`w-6 h-6 ml-0.5 transition-colors ${
                          reel.url ? "text-champagne/80 group-hover:text-champagne" : "text-champagne/60"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {reel.caption}
                    </p>
                    {reel.url && (
                      <p className="text-champagne/60 text-[10px] mt-2 tracking-widest uppercase group-hover:text-champagne transition-colors">
                        Watch
                      </p>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* What You Get Strip */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "Getting Ready",
                desc: "Every detail of your prep, beautifully captured",
              },
              {
                title: "Ceremony Moments",
                desc: "The vows, the tears, the celebration",
              },
              {
                title: "Reception Highlights",
                desc: "Dancing, toasts, and all the fun",
              },
              {
                title: "Same-Day Delivery",
                desc: "Share your day before it's even over",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-serif text-lg text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
