import Link from "next/link";

export default function BookingConfirmed() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-4 md:px-6">
      <div className="max-w-lg w-full bg-white p-10 md:p-16 text-center">
        <div className="w-16 h-[2px] bg-champagne mx-auto mb-8" />

        <h1 className="font-serif text-3xl md:text-5xl text-charcoal mb-4">
          You&apos;re Booked!
        </h1>

        <p className="text-warm-gray leading-relaxed mb-8">
          Your deposit has been received and your date is officially secured!
          I&apos;m so excited to work with you. You&apos;ll receive a
          confirmation email shortly with all the details.
        </p>

        <div className="bg-ivory p-6 mb-8">
          <p className="font-serif text-xl text-charcoal mb-2">
            What Happens Next?
          </p>
          <ul className="text-warm-gray text-sm space-y-2 text-left max-w-xs mx-auto">
            <li className="flex items-start gap-2">
              <span className="text-champagne font-bold">1.</span>
              You&apos;ll receive a confirmation email
            </li>
            <li className="flex items-start gap-2">
              <span className="text-champagne font-bold">2.</span>
              I&apos;ll send over your contract to sign
            </li>
            <li className="flex items-start gap-2">
              <span className="text-champagne font-bold">3.</span>
              We&apos;ll schedule a planning call to discuss your vision
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block bg-charcoal text-white px-10 py-4 text-xs tracking-[0.25em] uppercase hover:bg-champagne transition-all duration-300"
        >
          Back to Home
        </Link>

        <p className="mt-8 text-taupe text-xs tracking-widest">
          Divine Design Co
        </p>
      </div>
    </div>
  );
}
