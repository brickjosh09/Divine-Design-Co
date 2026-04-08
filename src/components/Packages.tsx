"use client";

import { useState, type FormEvent } from "react";
import { businessInfo } from "@/config/social";

type PackageCategory = "lifestyle" | "weddings" | "boat";

const categories: { key: PackageCategory; label: string; description: string }[] = [
  {
    key: "lifestyle",
    label: "Lifestyle & Branding",
    description: "Portrait, branding, couples, engagement, and milestone sessions",
  },
  {
    key: "weddings",
    label: "Wedding Photography",
    description: "Your love story told through elegant, emotion-filled images",
  },
  {
    key: "boat",
    label: "Boat Sessions",
    description: "A unique experience on the bayou in Ocean Springs, MS",
  },
];

const packageData: Record<PackageCategory, {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
}[]> = {
  lifestyle: [
    {
      name: "Couples",
      price: "$200",
      subtitle: "Starting at",
      features: ["1 hour session", "1 location", "Optional 2 outfits", "30+ edited images", "Online gallery", "Print release"],
    },
    {
      name: "Lifestyle",
      price: "$200",
      subtitle: "Starting at",
      features: ["Family, graduates, milestones", "1 hour session", "1 location", "1 outfit", "2 to 6 people", "30+ edited images", "Online gallery"],
    },
    {
      name: "Branding",
      price: "$275",
      subtitle: "Starting at",
      features: ["Optional studio location", "Location of choice", "1 hour session", "2 outfits", "30+ edited images", "Online gallery", "Print release"],
      popular: true,
    },
    {
      name: "Engagements",
      price: "$300",
      subtitle: "Starting at",
      features: ["2 hours", "2 locations", "Optional 2 outfits", "30+ edited images", "Online gallery", "Print release"],
    },
  ],
  weddings: [
    {
      name: "Divine",
      price: "$1,800",
      subtitle: "Starting at",
      features: [
        "6 hours of coverage",
        "Planning consult",
        "300+ images",
        "Online gallery",
        "Printing rights",
        "Behind the scenes",
        "Detailed & candid shots",
        "Ceremony overview",
      ],
    },
    {
      name: "Agape",
      price: "$2,400",
      subtitle: "Starting at",
      features: [
        "8 hours of coverage",
        "Planning consult",
        "Engagement or bridals session",
        "600+ images",
        "Online gallery",
        "Printing rights",
        "Behind the scenes",
        "Detailed & candid shots",
        "Ceremony & reception",
      ],
      popular: true,
    },
    {
      name: "Everlasting",
      price: "$3,000",
      subtitle: "Starting at",
      features: [
        "10 hours of coverage",
        "Planning consult",
        "Engagement AND bridals session",
        "800+ images",
        "Online gallery",
        "Printing rights",
        "Behind the scenes",
        "Detailed & candid shots",
        "Full ceremony & reception",
      ],
    },
  ],
  boat: [
    {
      name: "Wooden Boat Session",
      price: "$225",
      subtitle: "Starting at",
      features: [
        "1 hour session",
        "1 outfit",
        "Props included",
        "Blankets & pillows",
        "Seasonal decor",
        "Wine glasses & charcuterie board",
        "Flowers & picnic basket",
        "Perfect for couples, engagements, maternity",
      ],
      popular: true,
    },
  ],
};

const weddingAddOns = [
  { name: "Polaroid Pictures", price: "$150" },
  { name: "Second Shooter", price: "$600" },
  { name: "Additional Hour", price: "$150/hr" },
  { name: "Rehearsal Dinner", price: "$600" },
];

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>("weddings");
  const [activePackage, setActivePackage] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCalendly, setShowCalendly] = useState(false);

  const currentPackages = packageData[activeCategory];

  const handleBook = (pkgName: string) => {
    const newActive = activePackage === pkgName ? null : pkgName;
    setActivePackage(newActive);
    setShowCalendly(false);
    setError("");
    // Scroll booking panel into view on mobile after state updates
    if (newActive) {
      setTimeout(() => {
        document.getElementById("booking-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const handlePayDeposit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !activePackage) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionType: `${activeCategory} - ${activePackage}`,
          clientName: name,
          clientEmail: email,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to process payment. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-4">
            Investment
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-6">
            Packages & Pricing
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Whether I&apos;m behind my camera or phone, I&apos;m here to serve
            you with heart, intention, and excellence — because your story
            deserves to be told in every form.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setActivePackage(null);
              }}
              className={`px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-charcoal text-white"
                  : "bg-white text-charcoal hover:bg-charcoal hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <p className="text-center text-warm-gray mb-12">
          {categories.find((c) => c.key === activeCategory)?.description}
        </p>

        {/* Package Cards */}
        <div
          className={`grid gap-6 lg:gap-8 max-w-5xl mx-auto ${
            currentPackages.length === 1
              ? "md:grid-cols-1 max-w-lg"
              : currentPackages.length === 2
              ? "md:grid-cols-2 max-w-3xl"
              : currentPackages.length <= 3
              ? "md:grid-cols-3"
              : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {currentPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white flex flex-col transition-all duration-500 z-10 ${
                pkg.popular ? "shadow-lg md:-translate-y-4" : "hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="bg-champagne text-white px-6 py-2 text-xs tracking-[0.2em] uppercase text-center md:absolute md:-top-4 md:left-1/2 md:-translate-x-1/2 md:whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-charcoal mb-1">
                  {pkg.name}
                </h3>
                <p className="text-taupe text-xs tracking-widest uppercase mb-1">
                  {pkg.subtitle}
                </p>
                <p className="font-serif text-4xl text-charcoal mb-6">
                  {pkg.price}
                </p>

                <div className="w-full h-[1px] bg-taupe/20 mb-6" />

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-warm-gray text-sm"
                    >
                      <span className="text-champagne mt-0.5 flex-shrink-0">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBook(pkg.name)}
                  className={`w-full py-4 text-xs tracking-[0.25em] uppercase transition-all duration-300 ${
                    activePackage === pkg.name
                      ? "bg-champagne text-white"
                      : "bg-charcoal text-white hover:bg-champagne"
                  }`}
                >
                  {activePackage === pkg.name ? "Close" : "Book Now"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wedding Add-Ons */}
        {activeCategory === "weddings" && (
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-charcoal mb-4">
              Add-On Options
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {weddingAddOns.map((addon) => (
                <span
                  key={addon.name}
                  className="bg-white px-5 py-3 text-sm text-warm-gray"
                >
                  {addon.name} — <span className="text-charcoal">{addon.price}</span>
                </span>
              ))}
            </div>
            <p className="text-taupe text-xs mt-4">
              Travel fees may apply for locations 30+ miles from Ocean Springs, MS
            </p>
          </div>
        )}

        {/* Booking Panel */}
        {activePackage && (
          <div id="booking-panel" className="mt-12 bg-white p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-2">
                Booking
              </p>
              <h3 className="font-serif text-3xl text-charcoal">
                {activePackage}
              </h3>
              <p className="text-warm-gray mt-2">
                A non-refundable retainer of 30% is required to secure your date.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Step 1: Schedule */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center font-serif text-champagne">
                    1
                  </span>
                  <h4 className="font-serif text-xl text-charcoal">
                    Choose Your Date
                  </h4>
                </div>

                {!showCalendly ? (
                  <div className="text-center">
                    <p className="text-warm-gray text-sm mb-6 leading-relaxed">
                      Select a consultation call or go straight to booking your session date.
                    </p>
                    <div className="flex flex-col gap-3">
                      <button
                        onClick={() => setShowCalendly(true)}
                        className="w-full border border-charcoal text-charcoal py-3 text-xs tracking-[0.2em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
                      >
                        Free Consultation Call
                      </button>
                      <button
                        onClick={() => setShowCalendly(true)}
                        className="w-full border border-champagne text-champagne py-3 text-xs tracking-[0.2em] uppercase hover:bg-champagne hover:text-white transition-all duration-300"
                      >
                        Book Session Date
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative bg-ivory" style={{ minHeight: "400px" }}>
                    <iframe
                      src={businessInfo.calendly.consultation}
                      width="100%"
                      height="400"
                      frameBorder="0"
                      title="Schedule with Calendly"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ivory/90 pointer-events-none">
                      <div className="text-center px-4">
                        <p className="font-serif text-xl text-charcoal mb-2">
                          Calendly Calendar
                        </p>
                        <p className="text-warm-gray text-xs max-w-xs leading-relaxed">
                          Replace the Calendly URL in{" "}
                          <code className="text-champagne">config/social.ts</code>{" "}
                          with Bailee&apos;s actual link.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 2: Pay Deposit */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center font-serif text-champagne">
                    2
                  </span>
                  <h4 className="font-serif text-xl text-charcoal">
                    Pay Retainer
                  </h4>
                </div>

                <form onSubmit={handlePayDeposit} className="space-y-5">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors"
                    />
                  </div>

                  <div className="bg-ivory p-5 mt-4">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs tracking-[0.15em] uppercase text-charcoal">
                        {activePackage} — 30% Retainer
                      </span>
                    </div>
                    <p className="text-taupe text-xs">
                      Non-refundable. Applied toward your total package price.
                    </p>
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-charcoal text-white py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? "Processing..." : "Pay Retainer & Book"}
                  </button>

                  <p className="text-taupe text-xs text-center leading-relaxed">
                    Securely processed via Stripe. No card info stored on our site.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-warm-gray text-sm mb-2">
            Best time to book: weekends after 3pm
          </p>
          <p className="text-warm-gray text-sm">
            Questions? Email{" "}
            <a
              href="mailto:designdivinecompany@gmail.com"
              className="text-champagne hover:text-charcoal transition-colors"
            >
              designdivinecompany@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
