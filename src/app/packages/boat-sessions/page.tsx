import Image from "next/image";
import Link from "next/link";

const included = [
  "1 hour session",
  "1 outfit",
  "Props included",
  "Blankets & pillows",
  "Seasonal decor",
  "Wine glasses",
  "Charcuterie board",
  "Flowers",
  "Picnic basket",
  "White umbrella",
  "And more",
];

export default function BoatSessionsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/portfolio-1.jpg" alt="Boat Sessions" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-dark/50" />
        <div className="relative z-10 text-center px-4">
          <Link href="/#packages" className="text-white/60 text-[13px] uppercase tracking-[0.2em] hover:text-coral transition-colors mb-4 block">
            &larr; Back to Packages
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[72px] text-white font-light leading-[1.1]">
            Boat <span className="italic">Sessions</span>
          </h1>
          <div className="w-16 h-[1px] bg-coral mx-auto mt-6" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start max-w-4xl mx-auto">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image src="/images/portfolio-5.jpg" alt="Boat Session Experience" fill className="object-cover" />
          </div>

          {/* Details */}
          <div>
            <p className="text-coral text-[11px] uppercase tracking-[0.2em] mb-2">A Unique Experience</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-dark mb-2">
              Wooden Boat <span className="italic">Session</span>
            </h2>
            <p className="text-text-light text-xs uppercase tracking-widest mb-1">Starting at</p>
            <p className="font-serif text-5xl text-dark mb-6">$225</p>
            <div className="w-full h-[1px] bg-[#E8D5D2] mb-6" />

            <p className="text-text-light leading-relaxed mb-8">
              A unique experience for unique people. These sessions take place on
              our wooden boat on the bayou in Ocean Springs, MS. Everything is styled
              and provided — all you need to bring is yourself.
            </p>

            <p className="text-dark text-[13px] uppercase tracking-[0.15em] mb-4">What&apos;s Included</p>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {included.map((item) => (
                <span key={item} className="flex items-start gap-2 text-text-light text-sm">
                  <span className="text-[#7D8A5C] mt-0.5 flex-shrink-0">&#10003;</span>
                  {item}
                </span>
              ))}
            </div>

            <p className="text-dark text-[13px] uppercase tracking-[0.15em] mb-3">Perfect For</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Couples", "Engagements", "Maternity", "Lifestyle"].map((tag) => (
                <span key={tag} className="text-[11px] uppercase tracking-[0.1em] text-text-light border border-[#E8D5D2] px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="/#contact"
              className="block w-full py-3.5 text-[13px] uppercase tracking-[0.1em] rounded-[10px] bg-dark text-white hover:bg-coral transition-all duration-300 text-center"
            >
              Book a Boat Session
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl text-dark text-center mb-8">Frequently <span className="italic text-coral">Asked</span></h3>
          <div className="space-y-6">
            {[
              { q: "Do you offer makeup as part of the boat session?", a: "Yes, we can discuss the opportunity of doing your makeup onsite. However, this will be a $150 add-on feature to your session." },
              { q: "Where are these sessions located?", a: "These sessions take place at our location on the bayou. The address will be sent to you upon booking. The general area is the surrounding areas of Ocean Springs, MS." },
              { q: "Can we choose a different location?", a: "Absolutely! If you would prefer we travel to your location with the boat we can discuss travel expenses." },
              { q: "How long does a session last?", a: "This session is a minimum of an hour. However if you'd like a longer session we can discuss that upon booking." },
              { q: "How long does it take to receive photos?", a: "Our editing process typically takes 1-2 weeks, depending on the volume of images and the complexity of editing required." },
              { q: "What happens if the weather is bad?", a: "We want you to have the best experience so we will reschedule for a date that best fits your schedule." },
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
