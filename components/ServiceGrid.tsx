"use client";

import { services } from "@/data/site";
import { ArrowRightIcon, serviceIcons } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-paper py-12 sm:py-16 lg:py-24">
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            How can we help?
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            From small repairs to full installations, we handle everyday
            plumbing and heating needs.
          </p>
        </ScrollReveal>

        <ul className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <ScrollReveal as="li" key={service.title} delay={(i % 3) * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative flex h-16 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue-soft to-brand-blue-soft/40 sm:h-20">
                    <span className="grid h-11 w-11 -translate-y-1 place-items-center rounded-full bg-brand-blue text-white shadow-sm transition-colors group-hover:bg-brand-orange">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                    <h3 className="text-[15px] font-bold text-ink">
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
                      className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-bold text-brand-blue transition-colors hover:text-brand-blue-dark"
                    >
                      Enquire
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
