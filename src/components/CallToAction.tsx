import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-3xl mx-auto">
        <p className="text-champagne-light text-xs tracking-[0.4em] uppercase mb-6">
          Capturing Raw Moments That Speak to Your Heart
        </p>
        <h2 className="font-serif text-3xl md:text-6xl text-white mb-8 leading-tight">
          Memories Are Worth
          <span className="block italic text-champagne-light">Everything</span>
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Thank you for giving me the opportunity to capture your beautiful
          moments. Whether you&apos;re celebrating a milestone, achievement, or
          one of the happiest days of your life.
        </p>
        <a
          href="#contact"
          className="inline-block bg-champagne text-white px-12 py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne-light hover:text-charcoal transition-all duration-300"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}
