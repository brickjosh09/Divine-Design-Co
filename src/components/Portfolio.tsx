import Image from "next/image";

const portfolioItems = [
  { label: "Wedding Day", span: "col-span-2 row-span-2", image: "/images/portfolio-1.jpg" },
  { label: "Bridal Portrait", span: "col-span-1 row-span-1", image: "/images/portfolio-2.jpg" },
  { label: "Ceremony", span: "col-span-1 row-span-1", image: "/images/portfolio-3.jpg" },
  { label: "Behind the Scenes", span: "col-span-1 row-span-2", image: "/images/portfolio-4.jpg" },
  { label: "Couples Session", span: "col-span-1 row-span-1", image: "/images/portfolio-5.jpg" },
  { label: "Reception Details", span: "col-span-1 row-span-1", image: "/images/portfolio-6.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-4">
            Let&apos;s Create Something Beautiful
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-6">
            Portfolio
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
            I work hard to preserve the moments that mean the most to you.
            Take a look inside my portfolio.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {portfolioItems.map((item) => (
            <div
              key={item.label}
              className={`${item.span} relative bg-ivory overflow-hidden group cursor-pointer`}
            >
              <Image src={item.image} alt={item.label} fill className="object-cover" />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-serif text-xl">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
