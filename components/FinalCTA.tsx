import Image from "next/image";
import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon, SirenIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container-site">
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-[32px] bg-ink">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/projects/after-3.jpg"
                alt=""
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
            </div>

            <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-20">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-lg shadow-orange-900/40">
                <SirenIcon className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Need help right now?
              </h2>
              <p className="mt-4 text-base text-white/85 sm:text-lg">
                Call Prestige Plumbing Heating.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-8 text-base font-bold text-white shadow-lg shadow-orange-900/30 transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call {site.phoneDisplay}
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-8 text-base font-bold text-white shadow-lg shadow-blue-950/40 transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp Prestige
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
