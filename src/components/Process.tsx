const steps = [
  {
    number: "01",
    title: "Fill Out the Form",
    description:
      "Fill out our inquiry form to learn more information about our services and the dates we have available.",
  },
  {
    number: "02",
    title: "Contract & Payment",
    description:
      "We are now a perfect fit for one another! Let's make it official by signing contracts and sealing the deal!",
  },
  {
    number: "03",
    title: "Planning & Session",
    description:
      "This is my favorite part! I am so thrilled to be working with you and helping you bring your vision to life. I can't wait to hear what your dream shoot looks like.",
  },
  {
    number: "04",
    title: "Gallery & Prints",
    description:
      "After our session, I will deliver sneaks within 24 hours! Your turnaround time varies depending on the shoot, but you can expect it between 2-8 weeks.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-champagne text-xs tracking-[0.4em] uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            The Process
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line (hidden on mobile, hidden for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-taupe/30" />
              )}

              <span className="font-serif text-6xl text-champagne/20 mb-4 block group-hover:text-champagne/40 transition-colors duration-500">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
