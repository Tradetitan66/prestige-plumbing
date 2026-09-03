import { site } from "@/data/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function TopBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2.5 text-center sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <p className="flex items-center justify-center gap-2 text-sm font-medium">
          <PhoneIcon className="h-4 w-4 shrink-0 text-brand-orange" />
          <span>
            Need a plumber urgently? Call{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {site.phoneDisplay}
            </a>
          </span>
        </p>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 text-sm font-medium text-white/90 transition-colors hover:text-white sm:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4 text-brand-orange" />
          WhatsApp us
        </a>
      </div>
    </div>
  );
}
