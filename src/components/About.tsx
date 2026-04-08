import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-4">
            Who Is Behind the Lens?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Meet Bailee
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Placeholder */}
          <div className="relative pr-4 pb-4">
            <div className="aspect-[3/4] bg-ivory relative overflow-hidden">
              <Image src="/images/about.jpg" alt="Bailee - Divine Design Co" fill className="object-cover" />
            </div>
            {/* Decorative accent */}
            <div className="absolute bottom-0 right-0 w-full h-full border border-champagne/40 -z-10" />
          </div>

          {/* Bio Content */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3 mb-2">
              {["Wife", "Mom", "Photographer", "Content Creator", "Christ Follower", "Travel Guru"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-[0.15em] uppercase text-warm-gray border border-taupe/30 px-4 py-2"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <p className="text-warm-gray leading-relaxed text-lg">
              Hi, I&apos;m Bailee — the heart and lens behind Divine Design
              Company. I&apos;m a passionate wedding photographer and content
              creator based on the MS Gulf Coast, and my mission is to preserve
              the most meaningful moments of your day through timeless
              photography and real-time content.
            </p>
            <p className="text-warm-gray leading-relaxed">
              As your photographer, I specialize in capturing elegant,
              emotion-filled images that tell the story of your love — from the
              quiet, candid moments in between to the grand celebrations. My
              style is modern, romantic, and light, allowing your wedding day to
              unfold naturally while I preserve it beautifully.
            </p>
            <p className="text-warm-gray leading-relaxed">
              As your wedding content creator, I work behind the scenes to
              capture the raw, real-time magic — the happy tears, stolen glances,
              and all the behind-the-scenes memories you&apos;ll want to relive
              right away. Think of me as your personal wedding-day bestie,
              creating Instagram and TikTok-ready videos so you don&apos;t have
              to wait weeks to feel the magic all over again.
            </p>

            <a
              href="#contact"
              className="inline-block self-start bg-charcoal text-white px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne transition-all duration-300 mt-4"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
