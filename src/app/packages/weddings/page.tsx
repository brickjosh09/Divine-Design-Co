import Image from "next/image";
import Link from "next/link";

const packages = [
  { name: "Divine", price: "$1,800", subtitle: "Starting at", features: ["6 hours of coverage", "Planning consult", "300+ images", "Online gallery", "Printing rights", "Behind the scenes", "Detailed & candid shots", "Ceremony overview"] },
  { name: "Agape", price: "$2,400", subtitle: "Starting at", popular: true, features: ["8 hours of coverage", "Planning consult", "Engagement or bridals session", "600+ images", "Online gallery", "Printing rights", "Behind the scenes", "Ceremony & reception"] },
  { name: "Everlasting", price: "$3,000", subtitle: "Starting at", features: ["10 hours of coverage", "Planning consult", "Engagement AND bridals session", "800+ images", "Online gallery", "Printing rights", "Full ceremony & reception"] },
];

const addOns = [
  { name: "Polaroid Pictures", price: "$150" },
  { name: "Second Shooter", price: "$600" },
  { name: "Additional Hour", price: "$150/hr" },
  { name: "Rehearsal Dinner", price: "$600" },
];

const included = [
  "Behind the scenes", "Detailed & candid shots", "First looks", "Private vows",
  "Venue overview", "Getting ready", "Bridal party & attendees",
  "Ceremony overview", "Reception & exit", "And more",
];

export default function WeddingsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/portfolio-2.jpg" alt="Wedding Photography" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="relative z-10 text-center px-4">
          <Link href="/#packages" className="text-white/60 text-[13px] uppercase tracking-[0.2em] hover:text-coral transition-colors mb-4 block">
            &larr; Back to Packages
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] text-white font-light leading-[1.1]">
            Wedding <span className="italic">Photography</span>
          </h1>
          <div className="w-16 h-[1px] bg-coral mx-auto mt-6" />
        </div>
      </div>

      {/* What's Included */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-[13px] uppercase tracking-[0.2em] text-text-light mb-4">What Is Offered</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-dark">
            In Our Wedding <span className="italic text-coral">Package</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
          {included.map((item) => (
            <span key={item} className="bg-white px-4 py-3 rounded-lg text-text-light text-sm text-center">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-lg flex flex-col transition-all duration-500 ${
                pkg.popular ? "shadow-lg md:-translate-y-3 border-2 border-coral/30" : "hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="bg-coral text-white py-2 text-[11px] uppercase tracking-[0.15em] text-center rounded-t-lg">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-dark mb-1">{pkg.name}</h3>
                <p className="text-text-light text-xs uppercase tracking-widest mb-1">{pkg.subtitle}</p>
                <p className="font-serif text-4xl text-dark mb-6">{pkg.price}</p>
                <div className="w-full h-[1px] bg-[#E8D5D2] mb-6" />
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-text-light text-sm">
                      <span className="text-[#7D8A5C] mt-0.5 flex-shrink-0">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/#contact"
                  className="block w-full py-3.5 text-[13px] uppercase tracking-[0.1em] rounded-[10px] bg-dark text-white hover:bg-coral transition-all duration-300 text-center">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-[13px] uppercase tracking-[0.15em] text-text-light mb-4">Add-On Options</p>
          <div className="flex flex-wrap justify-center gap-3">
            {addOns.map((a) => (
              <span key={a.name} className="bg-white px-4 py-2 rounded-full text-sm text-text-light">
                {a.name} — <span className="text-dark">{a.price}</span>
              </span>
            ))}
          </div>
          <p className="text-text-light text-xs mt-4">Travel fees may apply for locations 30+ miles from Ocean Springs, MS</p>
        </div>

        {/* Retainer Note */}
        <div className="mt-12 text-center">
          <p className="text-text-light text-sm">A non-refundable retainer of 30% is required to secure your date.</p>
          <p className="text-text-light text-sm mt-2">
            Questions? Email <a href="mailto:designdivinecompany@gmail.com" className="text-coral hover:underline">designdivinecompany@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
