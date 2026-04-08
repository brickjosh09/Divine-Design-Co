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
    setTimeout(() => { setVisible(false); setClosing(false); localStorage.setItem("email_popup_dismissed", "true"); }, 300);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    localStorage.setItem("email_popup_dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${closing ? "opacity-0" : "opacity-100"}`}>
      <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm" onClick={handleClose} />
      <div className={`relative bg-white rounded-lg max-w-md w-full p-10 md:p-12 text-center transition-all duration-500 ${closing ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-text-light hover:text-dark transition-colors text-xl" aria-label="Close popup">&times;</button>

        {!submitted ? (
          <>
            <div className="w-12 h-[1px] bg-coral mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-light text-dark mb-3">Welcome!</h3>
            <p className="text-text-light mb-2">Join our community and receive</p>
            <p className="font-serif text-4xl italic text-coral mb-4">10% Off</p>
            <p className="text-text-light text-sm leading-relaxed mb-8">
              your first booking when you sign up for our newsletter.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required
                className="w-full border-b border-border bg-transparent py-3 text-center text-dark focus:border-coral outline-none transition-colors placeholder:text-text-light/50" />
              <button type="submit" className="w-full bg-dark text-white py-3.5 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-coral transition-all">
                Get My 10% Off
              </button>
            </form>
            <button onClick={handleClose} className="mt-4 text-text-light text-xs uppercase tracking-widest hover:text-dark transition-colors">
              No thanks
            </button>
          </>
        ) : (
          <>
            <div className="w-12 h-[1px] bg-coral mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-light text-dark mb-3">Thank You!</h3>
            <p className="text-text-light mb-6">Here&apos;s your exclusive coupon code:</p>
            <div className="bg-blush-bg border-2 border-dashed border-coral px-8 py-5 rounded-lg mb-6">
              <p className="font-serif text-3xl tracking-[0.2em] text-dark">{COUPON_CODE}</p>
            </div>
            <p className="text-text-light text-sm mb-8">
              Use this code when booking to receive 10% off. We&apos;ll also send it to <strong>{email}</strong>!
            </p>
            <button onClick={handleClose} className="bg-coral text-white px-10 py-3.5 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-dark transition-all">
              Start Exploring
            </button>
          </>
        )}
      </div>
    </div>
  );
}
