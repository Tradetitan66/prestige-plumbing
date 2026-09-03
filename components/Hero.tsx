import Image from "next/image";
import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon, CheckIcon } from "@/components/Icons";

const TRUST = ["Local service", "Fast response", "Quality workmanship"];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 py-8 sm:py-10">
      <div className="container-site">
        <div className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-deep px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* subtle decorative plumbing icon */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 text-white/10"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-64 w-64">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 xl:col-span-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur sm:text-sm">
                Local Plumbing &amp; Heating · Penicuik &amp; Edinburgh
              </p>

              <h1 className="h1-display mt-6 text-[2.6rem] leading-[1.05] text-white sm:text-6xl lg:text-[4.25rem] xl:text-[4.6rem]">
                No problems.
                <br />
                Only solutions.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Reliable plumbing, heating, repairs and bathroom services across
                Penicuik, Edinburgh and surrounding areas.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-brand-blue shadow-lg shadow-blue-950/20 transition-transform hover:-translate-y-0.5"
                >
                  Get a Quote
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-brand-orange px-8 text-base font-bold text-white shadow-lg shadow-orange-900/30 transition-transform hover:-translate-y-0.5"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call Now
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/35 px-8 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-5 w-5 text-emerald-300" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2">
                {TRUST.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90"
                  >
                    <CheckIcon className="h-4 w-4 text-white" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 xl:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* main image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] ring-4 ring-white/20">
                  <Image
                    src="/images/projects/sample-2.jpg"
                    alt="Finished plumbing installation completed by Prestige Plumbing Heating"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                {/* floating small image top-left */}
                <div className="absolute -left-3 -top-5 hidden w-36 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white sm:block lg:-left-6 lg:w-44">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/projects/sample-1.jpg"
                      alt=""
                      fill
                      sizes="176px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* floating badge bottom */}
                <div className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-orange-soft text-brand-orange">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                      <path d="M4 4l2 2" />
                      <path d="M20 4L8 16" />
                      <path d="M20 9l-2.5 2.5" />
                      <path d="M14 3h3a3 3 0 0 1 0 6h-1.5" />
                    </svg>
                  </span>
                  <span className="pr-1 text-left text-sm font-semibold leading-tight text-ink">
                    Real project work,
                    <span className="block font-normal text-ink-muted">
                      done properly
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
