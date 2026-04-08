"use client";

import { useState, useEffect } from "react";
import { socialLinks } from "@/config/social";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

// Fallback reviews from Bailee's existing testimonials
const fallbackReviews: GoogleReview[] = [
  {
    author_name: "Emily McAdams",
    rating: 5,
    text: "She brought my vision to life with my branding shoot. I am over the moon about how my photos came out. She also got them to me super quick. She is an absolute sweetheart and I highly recommend her for all your photography needs.",
    relative_time_description: "a month ago",
  },
  {
    author_name: "The Anson's",
    rating: 5,
    text: "Bailee was our wedding content creator and captured so many behind-the-scenes videos. We are so happy that we can relive our wedding day over and over again.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Macy & Cole",
    rating: 5,
    text: "I booked a shoot with her and was nervous because I am shy behind the camera. She did a phenomenal job making me feel comfortable and confident. The photos came back so precious and I am so happy I booked her.",
    relative_time_description: "3 months ago",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-yellow-400" : "text-taupe/30"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReview[]>(fallbackReviews);
  const [overallRating, setOverallRating] = useState<number>(5);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [isGoogle, setIsGoogle] = useState(false);

  useEffect(() => {
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setOverallRating(data.rating);
          setTotalReviews(data.totalReviews);
          setIsGoogle(true);
        }
      })
      .catch(() => {
        // Keep fallback reviews
      });
  }, []);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-4">
            {isGoogle ? "Google Reviews" : "Client Love"}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-6">
            What Our Clients Say
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <StarRating rating={Math.round(overallRating)} />
            <span className="font-serif text-2xl text-charcoal">
              {overallRating.toFixed(1)}
            </span>
            {totalReviews && (
              <span className="text-warm-gray text-sm">
                ({totalReviews} reviews)
              </span>
            )}
          </div>

          {isGoogle && (
            <div className="flex items-center justify-center gap-2 text-warm-gray text-xs tracking-widest">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Verified Google Reviews</span>
            </div>
          )}
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review, i) => (
            <div
              key={i}
              className="bg-ivory p-10 md:p-12 group hover:bg-cream transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-champagne/20 flex items-center justify-center font-serif text-champagne text-lg">
                  {review.author_name.charAt(0)}
                </div>
                <div>
                  <p className="font-serif text-charcoal">{review.author_name}</p>
                  <p className="text-taupe text-xs">{review.relative_time_description}</p>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-warm-gray leading-relaxed mt-4 italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={socialLinks.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-charcoal text-white px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne transition-all duration-300"
          >
            See All Reviews on Google
          </a>
          <a
            href={socialLinks.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-charcoal text-charcoal px-8 py-4 text-xs tracking-[0.25em] uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            Leave a Review
          </a>
        </div>
      </div>
    </section>
  );
}
