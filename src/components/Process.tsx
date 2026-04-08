const steps = [
  { number: "01", title: "Fill Out the Form", description: "Fill out our inquiry form to learn more information about our services and the dates we have available." },
  { number: "02", title: "Contract & Payment", description: "We are now a perfect fit for one another! Let's make it official by signing contracts and sealing the deal!" },
  { number: "03", title: "Planning & Session", description: "This is my favorite part! I am so thrilled to be working with you and helping you bring your vision to life." },
  { number: "04", title: "Gallery & Prints", description: "After our session, I will deliver sneaks within 24 hours! Turnaround time is between 2-8 weeks." },
];

export default function Process() {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-text-light mb-4">How It Works</p>
          <h2 className="font-serif text-4xl md:text-6xl font-light text-dark">
            The <span className="italic text-coral">Process</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              <span className="font-serif text-5xl text-coral/20 group-hover:text-coral/40 transition-colors duration-500 block mb-4">
                {step.number}
              </span>
              <h3 className="font-serif text-xl text-dark mb-3">{step.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
