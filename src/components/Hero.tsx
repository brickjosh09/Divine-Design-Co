import Image from "next/image";

const collageImages = [
  { src: "/images/portfolio-2.jpg", alt: "Wedding couple embrace" },
  { src: "/images/portfolio-3.jpg", alt: "Couples session in garden" },
  { src: "/images/portfolio-1.jpg", alt: "Couple on dock" },
  { src: "/images/portfolio-5.jpg", alt: "Joyful couple" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mobile: Single photo */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/portfolio-2.jpg"
          alt="Wedding couple embrace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Desktop: 4-photo collage */}
      <div className="absolute inset-0 hidden md:grid md:grid-cols-4">
        {collageImages.map((img, i) => (
          <div key={i} className="relative h-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i < 2}
            />
          </div>
        ))}
      </div>

      {/* Soft warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/35 to-charcoal/55" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <p className="text-champagne-light text-sm tracking-[0.4em] uppercase mb-6">
          MS Gulf Coast Photographer & Content Creator
        </p>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl xl:text-8xl text-white leading-tight mb-8">
          Capturing Moments
          <span className="block italic text-champagne-light">Designed by God</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Guided by God&apos;s divine love, we capture moments that reflect
          purpose, beauty, and the story He has written for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block bg-champagne text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne-light hover:text-charcoal transition-all duration-300"
          >
            Book Your Session
          </a>
          <a
            href="#portfolio"
            className="inline-block border border-white/50 text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
