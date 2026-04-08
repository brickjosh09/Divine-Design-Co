import Image from "next/image";
import Link from "next/link";

const packages = [
  { name: "Couples", price: "$200", subtitle: "Starting at", features: ["1 hour session", "1 location", "Optional 2 outfits", "30+ edited images", "Online gallery", "Print release"] },
  { name: "Branding", price: "$275", subtitle: "Starting at", popular: true, features: ["Optional studio location", "Location of choice", "1 hour session", "2 outfits", "30+ edited images", "Online gallery", "Print release"] },
  { name: "Engagements", price: "$300", subtitle: "Starting at", features: ["2 hours", "2 locations", "Optional 2 outfits", "30+ edited images", "Online gallery", "Print release"] },
  { name: "Lifestyle", price: "$200", subtitle: "Starting at", features: ["Family, graduates, milestones", "1 hour session", "1 location", "1 outfit", "2 to 6 people", "30+ edited images", "Online gallery"] },
];

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/portfolio-3.jpg" alt="Lifestyle & Branding Photography" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="relative z-10 text-center px-4">
          <Link href="/#packages" className="text-white/60 text-[13px] uppercase tracking-[0.2em] hover:text-coral transition-colors mb-4 block">
            &larr; Back to Packages
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] text-white font-light leading-[1.1]">
            Lifestyle & <span className="italic">Branding</span>
          </h1>
          <div className="w-16 h-[1px] bg-coral mx-auto mt-6" />
        </div>
      </div>

      {/* Description */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[13px] uppercase tracking-[0.2em] text-text-light mb-4">Sessions For Every Occasion</p>
          <p className="text-text-light leading-relaxed">
            Whether you&apos;re celebrating a milestone, building your brand, or capturing your love story —
            these sessions are designed to make you feel comfortable, confident, and beautiful.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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

        {/* FAQ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl text-dark text-center mb-8">Frequently <span className="italic text-coral">Asked</span></h3>
          <div className="space-y-6">
            {[
              { q: "How many photos will I receive?", a: "You can expect 30+ images for every shoot." },
              { q: "How should I dress?", a: "Please wear whatever makes you the most comfortable and confident. I want to capture authentic photos of authentic people." },
              { q: "What's the best time to book?", a: "The best time to book a session with me is weekends anytime after 3pm." },
              { q: "Do you charge for travel?", a: "For anything 30 miles out from Ocean Springs, MS a travel fee will be added. You can expect the total to be a minimum of $30." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg p-6">
                <p className="text-dark font-medium text-sm mb-2">{faq.q}</p>
                <p className="text-text-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

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
