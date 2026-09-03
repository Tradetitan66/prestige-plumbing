import { site } from "@/data/site";
import { WhatsAppIcon, PinIcon, CheckIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceArea() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-site">
        <ScrollReveal className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-deep px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="pointer-events-none absolute -left-16 -top-16 text-white/10"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-64 w-64">
              <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
              <PinIcon className="h-4 w-4" />
              Service area
            </p>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Need a plumber in your area?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
              Serving Penicuik, Edinburgh, Midlothian and surrounding areas.
            </p>

            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {site.areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90"
                >
                  <CheckIcon className="h-4 w-4 text-white" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-brand-blue shadow-lg shadow-blue-950/20 transition-transform hover:-translate-y-0.5"
              >
                Check Availability
              </a>
              <a
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 text-base font-bold text-white shadow-lg shadow-emerald-900/30 transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
