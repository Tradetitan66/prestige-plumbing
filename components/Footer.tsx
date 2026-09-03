import Image from "next/image";
import { site } from "@/data/site";
import {
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  YellIcon,
  MailIcon,
} from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 lg:px-8 lg:pb-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-md bg-white ring-1 ring-white/15">
                <Image
                  src="/images/projects/logo.jpg"
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold">Prestige</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                  Plumbing Heating Ltd
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              {site.tagline}
            </p>
            <p className="mt-2 text-sm text-white/70">{site.baseLocation}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Emergency Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Plumbing Repairs
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Heating &amp; Radiators
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-white">
                  Bathrooms &amp; Showers
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-brand-orange"
                >
                  <PhoneIcon className="h-4 w-4 text-brand-orange" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4 text-brand-orange" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-300" />
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Find us online
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prestige Plumbing Heating on Instagram"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prestige Plumbing Heating on Facebook"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={site.socials.yell}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prestige Plumbing Heating on Yell"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white/80 transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                <YellIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© {year} {site.name}</p>
          <div className="flex items-center gap-5">
            <a href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="transition-colors hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
