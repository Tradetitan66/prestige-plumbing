import Image from "next/image";
import { site } from "@/data/site";

interface LogoProps {
  /** Render on a dark background (white badge), or light (white badge). */
  onDark?: boolean;
  className?: string;
}

export default function Logo({ onDark = false, className }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className || ""}`}
      aria-label={`${site.name} logo`}
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-md bg-white ring-1 ring-black/10 sm:h-10 sm:w-10">
        <Image
          src="/images/projects/logo.jpg"
          alt=""
          width={80}
          height={80}
          className="h-full w-full object-cover"
          priority={onDark}
        />
      </span>
      {!onDark ? (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-bold tracking-tight text-ink sm:text-base">
            Prestige
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-muted sm:text-[11px]">
            Plumbing Heating Ltd
          </span>
        </span>
      ) : null}
    </span>
  );
}
