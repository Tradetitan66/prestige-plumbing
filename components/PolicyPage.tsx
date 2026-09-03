import Link from "next/link";

interface PolicyPageProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export default function PolicyPage({ title, updated, children }: PolicyPageProps) {
  return (
    <div className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
        >
          &larr; Back to home
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-muted">Last updated: {updated}</p>
        <div className="prose-policy mt-8 space-y-5 text-[15px] leading-relaxed text-ink/90">
          {children}
        </div>
      </div>
    </div>
  );
}
