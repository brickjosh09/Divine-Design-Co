import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    label: "Weddings",
    subtitle: "Photography & Content",
    description: "Starting at $1,800",
    image: "/images/portfolio-2.jpg",
    href: "/packages/weddings",
  },
  {
    label: "Lifestyle",
    subtitle: "Portraits & Branding",
    description: "Starting at $200",
    image: "/images/portfolio-3.jpg",
    href: "/packages/lifestyle",
  },
  {
    label: "Boat Sessions",
    subtitle: "A Unique Experience",
    description: "Starting at $225",
    image: "/images/portfolio-1.jpg",
    href: "/packages/boat-sessions",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-text-light mb-4">Investment</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-dark mb-6">
            Packages & <span className="italic text-coral">Pricing</span>
          </h2>
          <p className="text-text-light max-w-xl mx-auto leading-relaxed">
            Select a category to explore our packages and pricing.
          </p>
        </div>

        {/* Category Image Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group rounded-lg block"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/30 transition-all duration-500 flex flex-col items-center justify-center text-center">
                <p className="text-white/70 text-[11px] uppercase tracking-[0.2em] mb-2">
                  {cat.subtitle}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-white italic">
                  {cat.label}
                </h3>
                <div className="w-10 h-[1px] bg-white/50 mt-4 mb-3" />
                <p className="text-white/80 text-sm">{cat.description}</p>
                <span className="mt-4 inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 text-[12px] uppercase tracking-[0.1em] rounded-full group-hover:bg-coral transition-all duration-300">
                  View Packages
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-light text-sm">
            A non-refundable retainer of 30% is required to secure your date.
          </p>
          <p className="text-text-light text-sm mt-2">
            Questions? Email{" "}
            <a href="mailto:designdivinecompany@gmail.com" className="text-coral hover:underline">
              designdivinecompany@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
