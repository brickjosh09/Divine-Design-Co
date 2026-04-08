"use client";

import { useState, type FormEvent } from "react";
import { socialLinks, businessInfo } from "@/config/social";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <p className="text-coral text-[13px] uppercase tracking-[0.2em] mb-4">Get in Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-dark mb-8 leading-tight">
              Let&apos;s Create <span className="block italic">Something Beautiful</span>
            </h2>
            <p className="text-text-light leading-[1.8] mb-10">
              Ready to book your session? Fill out the inquiry form and I&apos;ll be in touch within 24-48 hours.
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-[13px] uppercase tracking-[0.15em] text-dark mb-1">Location</p>
                <p className="text-text-light">{businessInfo.location.city}, {businessInfo.location.state} — {businessInfo.location.region}</p>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[0.15em] text-dark mb-1">Email</p>
                <a href={`mailto:${businessInfo.email}`} className="text-text-light hover:text-coral transition-colors">{businessInfo.email}</a>
              </div>
              <div>
                <p className="text-[13px] uppercase tracking-[0.15em] text-dark mb-1">Follow Along</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {Object.values(socialLinks).map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="text-text-light hover:text-coral transition-colors text-sm">{link.label}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <span className="font-serif text-5xl text-coral block mb-4">Thank You!</span>
                  <p className="text-text-light">Your inquiry has been sent. I&apos;ll be in touch within 24-48 hours!</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" required placeholder="First Name"
                    className="w-full border-b border-border bg-transparent py-3 text-dark focus:border-coral outline-none transition-colors placeholder:text-text-light/50" />
                  <input type="text" required placeholder="Last Name"
                    className="w-full border-b border-border bg-transparent py-3 text-dark focus:border-coral outline-none transition-colors placeholder:text-text-light/50" />
                </div>
                <input type="email" required placeholder="Email"
                  className="w-full border-b border-border bg-transparent py-3 text-dark focus:border-coral outline-none transition-colors placeholder:text-text-light/50" />
                <select className="w-full border-b border-border bg-transparent py-3 text-dark focus:border-coral outline-none transition-colors">
                  <option value="">Type of Session</option>
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
                <input type="date" className="w-full border-b border-border bg-transparent py-3 text-dark focus:border-coral outline-none transition-colors" />
                <textarea rows={3} placeholder="Tell me about your vision"
                  className="w-full border-b border-border bg-transparent py-3 text-dark focus:border-coral outline-none transition-colors resize-none placeholder:text-text-light/50" />
                <button type="submit"
                  className="bg-dark text-white px-8 py-3 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-coral transition-all duration-300 w-full sm:w-auto">
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
