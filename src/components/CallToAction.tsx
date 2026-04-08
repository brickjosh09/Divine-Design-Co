import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/cta-bg.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-6xl lg:text-[72px] text-white font-light leading-[1.1] mb-8">
          Memories Are Worth
          <span className="block italic">Everything</span>
        </h2>
        <div className="w-16 h-[1px] bg-coral mx-auto mb-8" />
        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Thank you for giving me the opportunity to capture your beautiful moments.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-dark px-8 py-3 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-coral hover:text-white transition-all duration-300"
        >
          Book Your Session
        </a>
      </div>
    </section>
  );
}
