import Image from "next/image";
import { site } from "@/data/site";
import { CheckIcon, ArrowRightIcon, PhoneIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

const BULLETS = [
  "Local service",
  "Quality workmanship",
  "Fast communication",
  "Plumbing & heating support",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div className="container-site">
        <ScrollReveal className="relative isolate overflow-hidden rounded-[32px] bg-soft p-6 sm:p-10 lg:p-14">
          {/* soft decorative watermark */}
          <div
            className="pointer-events-none absolute -left-14 -bottom-14 text-brand-blue/[0.06]"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-72 w-72">
              <path d="M12 2.7S6 9.5 6 14a6 6 0 0 0 12 0c0-4.5-6-11.3-6-11.3z" />
            </svg>
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
                <Image
                  src="/images/projects/sample-1.jpg"
                  alt="Finished plumbing installation completed by Prestige Plumbing Heating"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden w-44 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:block">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/projects/sample-3.jpg"
                    alt=""
                    fill
                    sizes="176px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue sm:text-sm">
                Local Plumbing &amp; Heating
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                Reliable solutions for your home
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                Prestige Plumbing Heating gives you straightforward, dependable
                plumbing and heating help. Real work, done properly — and
                friendly communication from start to finish.
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {BULLETS.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2.5 text-sm font-semibold text-ink"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-blue text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-blue px-7 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Get a free quote
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-white px-7 text-base font-semibold text-ink transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
