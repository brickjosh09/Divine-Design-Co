"use client";

import { useState, type FormEvent } from "react";
import { socialLinks, businessInfo } from "@/config/social";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left Column - Info */}
          <div>
            <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-8">
              Let&apos;s Create
              <span className="block italic">Something Beautiful</span>
            </h2>
            <p className="text-warm-gray leading-relaxed mb-10">
              Ready to book your session? Fill out the inquiry form and
              I&apos;ll be in touch within 24-48 hours. I can&apos;t wait to
              hear about your vision and help bring it to life!
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-charcoal mb-1">
                  Location
                </p>
                <p className="text-warm-gray">
                  {businessInfo.location.city}, {businessInfo.location.state} — {businessInfo.location.region}
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-charcoal mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-warm-gray hover:text-champagne transition-colors"
                >
                  {businessInfo.email}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-charcoal mb-1">
                  Best Time to Book
                </p>
                <p className="text-warm-gray">Weekends after 3pm</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-charcoal mb-1">
                  Follow Along
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {Object.values(socialLinks).map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-gray hover:text-champagne transition-colors text-sm tracking-widest uppercase"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <span className="font-serif text-6xl text-champagne block mb-4">
                    Thank You!
                  </span>
                  <p className="text-warm-gray leading-relaxed">
                    Your inquiry has been sent. I&apos;ll be in touch within
                    24-48 hours!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                    Type of Session
                  </label>
                  <select className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors">
                    <option value="">Select a service</option>
                    <option value="wedding-divine">Wedding — Divine ($1,800)</option>
                    <option value="wedding-agape">Wedding — Agape ($2,400)</option>
                    <option value="wedding-everlasting">Wedding — Everlasting ($3,000)</option>
                    <option value="couples">Couples ($200)</option>
                    <option value="branding">Branding ($275)</option>
                    <option value="engagements">Engagements ($300)</option>
                    <option value="lifestyle">Lifestyle ($200)</option>
                    <option value="boat-session">Boat Session ($225)</option>
                    <option value="content-creation">Content Creation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                    Event / Session Date
                  </label>
                  <input
                    type="date"
                    className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-charcoal mb-2">
                    Tell Me About Your Vision
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-taupe/40 bg-transparent py-3 text-charcoal focus:border-champagne outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-charcoal text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne transition-all duration-300 w-full sm:w-auto"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
