"use client";

import { useState, useEffect } from "react";
import { socialLinks } from "@/config/social";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const fallbackReviews: GoogleReview[] = [
  { author_name: "Emily McAdams", rating: 5, text: "She brought my vision to life with my branding shoot. I am over the moon about how my photos came out. She also got them to me super quick. She is an absolute sweetheart and I highly recommend her for all your photography needs.", relative_time_description: "a month ago" },
  { author_name: "The Anson's", rating: 5, text: "Bailee was our wedding content creator and captured so many behind-the-scenes videos. We are so happy that we can relive our wedding day over and over again.", relative_time_description: "2 months ago" },
  { author_name: "Macy & Cole", rating: 5, text: "I booked a shoot with her and was nervous because I am shy behind the camera. She did a phenomenal job making me feel comfortable and confident. The photos came back so precious and I am so happy I booked her.", relative_time_description: "3 months ago" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? "text-coral" : "text-border"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>(fallbackReviews);
  const [overallRating, setOverallRating] = useState(5);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [isGoogle, setIsGoogle] = useState(false);

  useEffect(() => {
    fetch("/api/google-reviews").then(r => r.json()).then(data => {
      if (data.reviews?.length > 0) {
        setReviews(data.reviews);
        setOverallRating(data.rating);
        setTotalReviews(data.totalReviews);
        setIsGoogle(true);
      }
    }).catch(() => {});
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-blush-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-text-light mb-4">
            {isGoogle ? "Google Reviews" : "Client Love"}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-dark mb-6">
            Kind <span className="italic text-coral">Words</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Stars rating={Math.round(overallRating)} />
            <span className="font-serif text-xl text-dark">{overallRating.toFixed(1)}</span>
            {totalReviews && <span className="text-text-light text-sm">({totalReviews} reviews)</span>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <div key={i} className="bg-white rounded-lg p-8 md:p-10">
              <Stars rating={review.rating} />
              <p className="text-text-light leading-[1.8] mt-4 mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center font-serif text-coral">
                  {review.author_name.charAt(0)}
                </div>
                <div>
                  <p className="text-dark font-medium text-sm">{review.author_name}</p>
                  <p className="text-text-light text-xs">{review.relative_time_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={socialLinks.google.url} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-dark text-white px-8 py-3 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-coral transition-all">
            See All Reviews
          </a>
          <a href={socialLinks.google.url} target="_blank" rel="noopener noreferrer"
            className="inline-block border-2 border-dark text-dark px-8 py-3 text-[13px] uppercase tracking-[0.1em] rounded-[10px] hover:bg-dark hover:text-white transition-all">
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
