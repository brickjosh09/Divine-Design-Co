import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image src="/images/about.jpg" alt="Bailee - Divine Design Co" fill className="object-cover opacity-90" />
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-coral text-[13px] uppercase tracking-[0.2em] mb-4">About</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-dark mb-6 leading-tight">
              Meet <span className="italic">Bailee</span>
            </h2>
            <div className="w-12 h-[1px] bg-coral mb-8" />

            <div className="flex flex-wrap gap-2 mb-8">
              {["Wife", "Mom", "Photographer", "Content Creator", "Christ Follower", "Travel Guru"].map(
                (tag) => (
                  <span key={tag} className="text-[11px] uppercase tracking-[0.15em] text-text-light border border-border px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                )
              )}
            </div>

            <p className="text-text-light leading-[1.8] mb-6">
              Hi, I&apos;m Bailee — the heart and lens behind Divine Design
              Company. I&apos;m a passionate wedding photographer and content
              creator based on the MS Gulf Coast, and my mission is to preserve
              the most meaningful moments of your day through timeless
              photography and real-time content.
            </p>
            <p className="text-text-light leading-[1.8] mb-8">
              As your photographer, I specialize in capturing elegant,
              emotion-filled images that tell the story of your love. As your
              content creator, I capture Instagram and TikTok-ready videos so
              you can relive the magic right away.
            </p>

            <a
              href="#contact"
              className="inline-block bg-black text-white px-8 py-3 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-coral transition-all duration-300"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
