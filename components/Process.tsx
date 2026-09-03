import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    title: "Tell us what you need",
    description:
      "Call, message or send the quote form and describe the job.",
  },
  {
    title: "We'll discuss the job",
    description:
      "We talk through the work, the options and what to expect.",
  },
  {
    title: "Arrange a suitable time",
    description:
      "We agree a convenient time and get it sorted.",
  },
];

export default function Process() {
  return (
    <section className="bg-soft py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue">
            How it works
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Simple from start to finish
          </h2>
        </ScrollReveal>

        <div className="relative mt-12 lg:mt-16">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-brand-blue/25 lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, i) => (
              <ScrollReveal as="li" key={step.title} delay={i * 80}>
                <div className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border-4 border-white bg-brand-blue text-xl font-extrabold text-white shadow-card ring-1 ring-line lg:mx-auto">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink-muted lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
