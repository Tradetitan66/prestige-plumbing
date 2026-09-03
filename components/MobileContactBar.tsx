"use client";

import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function MobileContactBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 backdrop-blur lg:hidden"
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5 pb-[calc(env(safe-area-inset-bottom)+0.625rem)]">
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark"
        >
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
