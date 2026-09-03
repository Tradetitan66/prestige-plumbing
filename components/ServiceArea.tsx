import { site } from "@/data/site";
import { PinIcon, CheckIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServiceArea() {
  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Local plumbing &amp; heating
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Based in Penicuik and serving customers across Edinburgh,
            Midlothian and surrounding areas. A local, personal service — no
            call centres, no fuss.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {site.areas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-blue-soft text-brand-blue">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {area}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div
            className="relative overflow-hidden rounded-2xl border border-black/8 bg-mist p-6 sm:p-8"
            role="img"
            aria-label="Map of the service area around Penicuik, with Edinburgh, Midlothian and surrounding areas marked"
          >
            <svg
              viewBox="0 0 400 300"
              className="h-auto w-full text-brand-blue"
              aria-hidden="true"
            >
              {/* stylised roads */}
              <path
                d="M-20 60 C 90 70 160 90 250 120 S 400 130 440 160"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="10"
                fill="none"
              />
              <path
                d="M40 -20 C 60 70 110 140 180 200 S 260 300 300 330"
                stroke="currentColor"
                strokeOpacity="0.18"
                strokeWidth="10"
                fill="none"
              />
              <path
                d="M180 200 C 220 220 300 230 420 240"
                stroke="currentColor"
                strokeOpacity="0.12"
                strokeWidth="6"
                fill="none"
              />
              {/* dotted outline area */}
              <path
                d="M120 60 C 300 30 380 120 360 230 C 340 330 180 330 90 260 C 20 200 40 110 120 60 Z"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeDasharray="5 6"
                strokeWidth="2"
                fill="currentColor"
                fillOpacity="0.04"
              />
              {/* pins */}
              <circle cx="150" cy="150" r="7" fill="#e96a1f" />
              <circle cx="150" cy="150" r="14" fill="#e96a1f" fillOpacity="0.25" />
              <circle cx="300" cy="90" r="5" fill="#1d5fbf" />
              <circle cx="300" cy="90" r="12" fill="#1d5fbf" fillOpacity="0.2" />
              <circle cx="90" cy="250" r="5" fill="#1d5fbf" />
              <circle cx="90" cy="250" r="12" fill="#1d5fbf" fillOpacity="0.2" />
              <circle cx="320" cy="210" r="5" fill="#1d5fbf" />
              <circle cx="320" cy="210" r="12" fill="#1d5fbf" fillOpacity="0.2" />
            </svg>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-ink">
              <PinIcon className="h-5 w-5 text-brand-orange" />
              Penicuik, Midlothian
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
