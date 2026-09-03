"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

const FAQS = [
  {
    q: "What areas do you cover?",
    a: "Based in Penicuik, we serve customers across Penicuik, Edinburgh, Midlothian and the surrounding areas.",
  },
  {
    q: "How do I get a quote?",
    a: "Send the quote form, give us a call or message us on WhatsApp. Tell us a little about the job and we'll get back to you.",
  },
  {
    q: "What happens after I send the form?",
    a: "The form opens WhatsApp with your details pre-filled, so the conversation continues directly with us — nothing is stored on the website.",
  },
  {
    q: "Can you help with emergencies?",
    a: "For urgent plumbing issues such as leaks or burst pipes, call us directly as soon as you can.",
  },
  {
    q: "Do you handle gas and heating work?",
    a: "Yes, heating and radiator work is one of our core services. Contact us to discuss your requirements.",
  },
  {
    q: "How do you arrange the work?",
    a: "We'll talk through the job and agree a convenient time that suits you.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-soft py-16 sm:py-20 lg:py-24">
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue">
            FAQ
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-10 max-w-3xl">
          <ul className="space-y-3">
            {FAQS.map((faq, i) => {
              const open = openIndex === i;
              return (
                <li
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-card transition-colors ${
                    open ? "border-brand-blue/40" : "border-line"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() =>
                      setOpenIndex(open ? null : i)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="text-base font-bold text-ink">
                      {faq.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-blue-soft text-brand-blue transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDownIcon className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
