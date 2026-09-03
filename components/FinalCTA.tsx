import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="bg-ink">
      <ScrollReveal className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Got a plumbing or heating job?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          Tell us what you need and we&apos;ll take it from there.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-900/30 transition-colors hover:bg-brand-orange-dark sm:w-auto"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {site.phoneDisplay}
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-950/40 transition-colors hover:bg-brand-blue-dark sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp Prestige
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
