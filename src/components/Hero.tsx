import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Single background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/portfolio-2.jpg"
          alt="Divine Design Co - Wedding Photography"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-white/70 text-[13px] uppercase tracking-[0.2em] mb-8">
          MS Gulf Coast Wedding Photographer & Content Creator
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-[80px] text-white font-light leading-[1.1] mb-8">
          Capturing Moments
          <span className="block italic">Designed by God</span>
        </h1>
        <div className="w-16 h-[1px] bg-coral mx-auto mb-8" />
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Guided by God&apos;s divine love, we capture moments that reflect
          purpose, beauty, and the story He has written for you.
        </p>
        <a
          href="#contact"
          className="inline-block bg-black text-white px-8 py-3 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-coral transition-all duration-300"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}
