import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon, SirenIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function EmergencyCTA() {
  return (
    <section className="bg-ink">
      <ScrollReveal className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark px-6 py-10 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-10 -top-10 opacity-10">
            <SirenIcon className="h-56 w-56" />
          </div>
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Plumbing emergency?
              </h2>
              <p className="mt-1.5 text-white/90">
                If something can&apos;t wait, call us directly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <PhoneIcon className="h-5 w-5 text-brand-orange" />
                Call {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
