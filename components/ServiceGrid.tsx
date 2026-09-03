"use client";

import { services } from "@/data/site";
import { ArrowRightIcon, serviceIcons } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceGrid() {
  return (
    <section id="services" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How can we help?
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            From small repairs to full installations, we handle everyday
            plumbing and heating needs.
          </p>
        </ScrollReveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <ScrollReveal as="li" key={service.title} delay={(i % 3) * 60}>
                <article className="group flex h-full flex-col rounded-xl border border-black/8 bg-white p-6 transition-colors hover:border-brand-blue/40 hover:shadow-lg hover:shadow-black/5">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-blue-soft text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(
                        new CustomEvent("prestige:set-service", {
                          detail: service.title,
                        })
                      );
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                  >
                    Enquire
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </article>
              </ScrollReveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
