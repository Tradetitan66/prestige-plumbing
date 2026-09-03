import {
  ClockIcon,
  ShieldIcon,
  ChatIcon,
  PinIcon,
} from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

const benefits = [
  {
    icon: ClockIcon,
    title: "Fast Response",
    description:
      "Reliable local service when you need help.",
  },
  {
    icon: ShieldIcon,
    title: "Quality Workmanship",
    description:
      "Clean, professional installations and repairs.",
  },
  {
    icon: ChatIcon,
    title: "Clear Communication",
    description:
      "Straightforward advice from enquiry to completion.",
  },
  {
    icon: PinIcon,
    title: "Local & Personal",
    description:
      "Serving Penicuik, Edinburgh and surrounding areas.",
  },
];

export default function Benefits() {
  return (
    <section id="why-us" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why homeowners choose Prestige
          </h2>
        </ScrollReveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal as="li" key={benefit.title} delay={i * 60}>
                <div className="flex flex-col items-start">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-ink text-brand-orange">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
