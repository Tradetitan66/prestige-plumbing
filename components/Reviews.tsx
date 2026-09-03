import { site } from "@/data/site";
import { StarIcon, ArrowRightIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

// Add real, verified testimonials here as they become available.
// Example entry:
//   { id: "1", name: "Jamie M.", location: "Penicuik", quote: "..." }
const liveReviews: {
  id: string;
  name: string;
  location: string;
  quote: string;
}[] = [];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-mist py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Trusted by local customers
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Highly rated by local customers across Penicuik, Edinburgh and
            surrounding areas.
          </p>
          <a
            href={site.socials.yell}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
          >
            See our reviews
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </ScrollReveal>

        {liveReviews.length > 0 ? (
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {liveReviews.map((review, i) => (
              <ScrollReveal as="li" key={review.id} delay={i * 60}>
                <blockquote className="flex h-full flex-col rounded-xl border border-black/8 bg-white p-6">
                  <div className="flex items-center gap-1 text-brand-orange">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/90">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="mt-4 text-sm font-semibold text-ink">
                    {review.name}
                    <span className="block text-xs font-normal text-ink-muted">
                      {review.location}
                    </span>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
