import { site } from "@/data/site";
import { WhatsAppIcon } from "@/components/Icons";

export default function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="container-site flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-center sm:justify-between sm:text-left">
        <p className="flex items-center justify-center gap-2 text-xs font-medium text-white/85 sm:text-sm">
          <span className="hidden h-2 w-2 rounded-full bg-emerald-400 sm:inline-block" aria-hidden="true" />
          Need help urgently?{" "}
          <a
            href={site.phoneHref}
            className="font-bold text-white underline-offset-2 hover:underline"
          >
            {site.phoneDisplay}
          </a>
        </p>
        <a
          href="#contact"
          className="hidden items-center gap-1.5 text-xs font-medium text-white/85 transition-colors hover:text-white sm:inline-flex sm:text-sm"
        >
          <WhatsAppIcon className="h-4 w-4 text-brand-orange" />
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
