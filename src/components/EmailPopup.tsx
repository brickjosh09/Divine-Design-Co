"use client";

import { useState, useEffect, type FormEvent } from "react";

const COUPON_CODE = "DIVINE10";

export default function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("email_popup_dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
      localStorage.setItem("email_popup_dismissed", "true");
    }, 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    localStorage.setItem("email_popup_dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white max-w-md w-full p-10 md:p-12 text-center transition-all duration-500 ${
          closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-warm-gray hover:text-charcoal transition-colors text-xl leading-none"
          aria-label="Close popup"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            {/* Decorative accent */}
            <div className="w-16 h-[2px] bg-champagne mx-auto mb-6" />

            <h3 className="font-serif text-3xl text-charcoal mb-3">
              Welcome!
            </h3>
            <p className="text-warm-gray leading-relaxed mb-2">
              Join our community and receive
            </p>
            <p className="font-serif text-4xl text-champagne mb-4">10% Off</p>
            <p className="text-warm-gray text-sm leading-relaxed mb-8">
              your first booking when you sign up for our newsletter. Be the
              first to know about mini sessions, specials, and behind-the-scenes
              content!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border-b border-taupe/40 bg-transparent py-3 text-center text-charcoal focus:border-champagne outline-none transition-colors placeholder:text-taupe"
              />
              <button
                type="submit"
                className="w-full bg-charcoal text-white py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne transition-all duration-300"
              >
                Get My 10% Off
              </button>
            </form>

            <button
              onClick={handleClose}
              className="mt-4 text-taupe text-xs tracking-widest uppercase hover:text-warm-gray transition-colors"
            >
              No thanks
            </button>
          </>
        ) : (
          <>
            <div className="w-16 h-[2px] bg-champagne mx-auto mb-6" />
            <h3 className="font-serif text-3xl text-charcoal mb-3">
              Thank You!
            </h3>
            <p className="text-warm-gray leading-relaxed mb-6">
              Here&apos;s your exclusive coupon code:
            </p>
            <div className="bg-ivory border-2 border-dashed border-champagne px-8 py-5 mb-6">
              <p className="font-serif text-3xl tracking-[0.2em] text-charcoal">
                {COUPON_CODE}
              </p>
            </div>
            <p className="text-warm-gray text-sm leading-relaxed mb-8">
              Use this code when booking your session to receive 10% off.
              We&apos;ll also send it to <strong>{email}</strong> for
              safekeeping!
            </p>
            <button
              onClick={handleClose}
              className="bg-champagne text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-charcoal transition-all duration-300"
            >
              Start Exploring
            </button>
          </>
        )}
      </div>
    </div>
  );
}
