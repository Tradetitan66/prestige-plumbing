import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon, SirenIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function EmergencyCTA() {
  return (
    <section className="py-6">
      <div className="container-site">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-orange to-brand-orange-dark px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-10 -top-10 text-white/10">
              <SirenIcon className="h-56 w-56" />
            </div>
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Plumbing emergency?
                </h2>
                <p className="mt-1.5 text-white/90">
                  If something can&apos;t wait, call us directly.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  <PhoneIcon className="h-5 w-5 text-brand-orange" />
                  Call {site.phoneDisplay}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
