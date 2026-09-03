interface IconProps {
  className?: string;
}

function base(className?: string) {
  return {
    className: className || "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg {...(className ? { className } : {})} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm5.83 14.13c-.25.7-1.45 1.33-2 1.38-.51.05-1.15.24-3.87-.81-3.27-1.26-5.35-4.55-5.51-4.76-.16-.21-1.32-1.76-1.32-3.36 0-1.6.84-2.39 1.14-2.72.3-.33.65-.41.87-.41h.63c.2 0 .47-.08.73.56.27.64.9 2.2.98 2.36.08.16.13.35.03.56-.1.21-.15.34-.3.53-.15.19-.32.42-.45.56-.15.16-.31.33-.13.65.18.32.78 1.29 1.68 2.09 1.16 1.03 2.13 1.35 2.44 1.5.3.16.48.13.66-.08.18-.21.76-.88.96-1.18.2-.3.4-.25.68-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.08.13.08.74-.17 1.44z"/>
    </svg>
  );
}

export function SirenIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M3 21h18" />
      <path d="M6 21V10a6 6 0 0 1 12 0v11" />
      <path d="M12 4V2" />
      <path d="M12 7a3 3 0 0 1 3 3" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function RadiatorIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="7.5" y="7.5" width="9" height="9" rx="1" />
      <path d="M12 7.5V16.5" />
      <path d="M7.5 12h9" />
    </svg>
  );
}

export function ShowerIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 4l2 2" />
      <path d="M20 4L8 16" />
      <path d="M20 9l-2.5 2.5" />
      <path d="M5 19c0-1.5 1-2 1-3.5" />
      <path d="M8.5 19c0-1.5 1-2 1-3.5" />
      <path d="M3 19h8" />
      <path d="M14 3h3a3 3 0 0 1 0 6h-1.5" />
    </svg>
  );
}

export function TapIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M17 2a1 1 0 0 1 1 1c0 .5-.5 1-1 1h-2a1 1 0 0 1-1-1c0-.5.5-1 1-1h2z" />
      <path d="M7 10c0-1.5 1.5-2 1.5-4" />
      <path d="M4 10h5a2.5 2.5 0 0 1 5 0c0 1.1-.9 2-2 2h-1.5V21" />
      <path d="M12 21h-2" />
      <path d="M13 12h2" />
    </svg>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 2.7S6 9.5 6 14a6 6 0 0 0 12 0c0-4.5-6-11.3-6-11.3z" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8v0z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg {...(className ? { className } : {})} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9L12 2.5z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M14 8h3V5h-3a3 3 0 0 0-3 3v2H8v3h3v6h3v-6h3l1-3h-4V8z" />
    </svg>
  );
}

export function YellIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export const serviceIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  siren: SirenIcon,
  wrench: WrenchIcon,
  radiator: RadiatorIcon,
  shower: ShowerIcon,
  tap: TapIcon,
  droplet: DropletIcon,
};
