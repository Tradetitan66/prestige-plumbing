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
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Getting help is simple
          </h2>
        </ScrollReveal>

        <ol className="mt-10 grid gap-8 sm:grid-cols-3 lg:mt-12">
          {steps.map((step, i) => (
            <ScrollReveal as="li" key={step.title} delay={i * 80}>
              <div className="flex flex-col items-center text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-blue-soft text-lg font-bold text-brand-blue">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
