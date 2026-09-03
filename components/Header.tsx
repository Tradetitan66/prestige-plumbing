"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import Logo from "@/components/Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled || open
          ? "border-b border-line bg-white/95 shadow-[0_4px_20px_-12px_rgba(16,24,40,0.15)] backdrop-blur"
          : "border-b border-transparent bg-white"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-site flex h-16 items-center justify-between gap-4 sm:h-[72px]"
      >
        <a href="#home" className="shrink-0" aria-label="Prestige Plumbing Heating Ltd home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-soft hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2.5 pr-1 text-sm font-semibold text-ink transition-colors hover:text-brand-blue xl:inline-flex"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-blue-soft text-brand-blue">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span>
              Call us
              <span className="block text-xs font-medium text-ink-muted">
                {site.phoneDisplay}
              </span>
            </span>
          </a>
          <a
            href={site.phoneHref}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-soft lg:hidden xl:hidden"
            aria-label={`Call ${site.name} on ${site.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-brand-orange px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark lg:inline-flex"
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-soft lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <div className="container-site py-3">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink/90 transition-colors hover:bg-soft"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-brand-orange px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-orange-dark"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}
