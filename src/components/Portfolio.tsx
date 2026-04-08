import Image from "next/image";

const portfolioItems = [
  { label: "Wedding Day", image: "/images/portfolio-1.jpg" },
  { label: "Bridal Portrait", image: "/images/portfolio-2.jpg" },
  { label: "Ceremony", image: "/images/portfolio-3.jpg" },
  { label: "Behind the Scenes", image: "/images/portfolio-4.jpg" },
  { label: "Couples Session", image: "/images/portfolio-5.jpg" },
  { label: "Reception Details", image: "/images/portfolio-6.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-text-light mb-4">Featured Work</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-dark">
            Our <span className="italic text-coral">Portfolio</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {portfolioItems.map((item) => (
            <div
              key={item.label}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
            >
              <Image src={item.image} alt={item.label} fill className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-end p-4 md:p-6">
                <span className="text-white text-sm font-serif italic opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
