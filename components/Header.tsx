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
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled || open
          ? "border-black/5 bg-white/95 backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8"
      >
        <a href="#home" className="shrink-0" aria-label="Prestige Plumbing Heating Ltd home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-mist hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="grid h-11 w-11 place-items-center rounded-lg border border-black/10 text-ink transition-colors hover:bg-mist lg:hidden"
            aria-label={`Call ${site.name} on ${site.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-lg bg-brand-orange px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-orange-dark lg:inline-flex"
          >
            Get a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-black/10 text-ink transition-colors hover:bg-mist lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-black/5 bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink/90 transition-colors hover:bg-mist"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-brand-orange px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-orange-dark"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
