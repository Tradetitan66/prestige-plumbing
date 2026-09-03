import Image from "next/image";
import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/projects/sample-2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-12 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur sm:text-sm">
            Local Plumbing &amp; Heating · Penicuik &amp; Edinburgh
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            No problems.
            <br />
            Only solutions.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Reliable plumbing, heating, repairs and bathroom services across
            Penicuik, Edinburgh and surrounding areas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-orange px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-900/30 transition-colors hover:bg-brand-orange-dark"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <WhatsAppIcon className="h-5 w-5 text-emerald-300" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/75">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Local service
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              Fast response
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              Quality workmanship
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
