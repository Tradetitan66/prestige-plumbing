import Image from "next/image";
import {
  GaugeIcon,
  ShieldIcon,
  ChatIcon,
  PinIcon,
} from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

const benefits = [
  {
    icon: GaugeIcon,
    title: "Fast Response",
    description: "Reliable local service when you need help.",
  },
  {
    icon: PinIcon,
    title: "Local Service",
    description: "Based here in Penicuik and the surrounding area.",
  },
  {
    icon: ShieldIcon,
    title: "Quality Workmanship",
    description: "Clean, professional installations and repairs.",
  },
  {
    icon: ChatIcon,
    title: "Clear Communication",
    description: "Straightforward advice from enquiry to completion.",
  },
];

export default function Benefits() {
  return (
    <section id="why-us" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div className="container-site">
        <ScrollReveal className="relative isolate overflow-hidden rounded-[32px] bg-brand-blue-soft/70 p-6 sm:p-10 lg:p-14">
          {/* watermark */}
          <div
            className="pointer-events-none absolute -right-10 -top-10 text-brand-blue/5"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-72 w-72">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue shadow-sm">
                Why Choose Prestige
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                Committed to your comfort &amp; safety
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                A dependable, local plumbing and heating team focused on doing
                the job right, first time.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <ScrollReveal as="li" key={benefit.title} delay={i * 60}>
                      <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-blue text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 text-base font-bold text-ink">
                          {benefit.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                          {benefit.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="/images/projects/after-5.jpg"
                  alt="Finished project work completed by Prestige Plumbing Heating"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-ink shadow-lg backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-brand-blue" aria-hidden="true" />
                Local &amp; reliable
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
