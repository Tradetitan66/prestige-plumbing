import Image from "next/image";
import { projects, sampleProjects } from "@/data/site";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectGallery() {
  return (
    <section id="our-work" className="scroll-mt-24 bg-paper py-16 sm:py-20 lg:py-28">
      <div className="container-site">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-brand-orange-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-orange">
            Our Work
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Real work. Real results.
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Take a look at some recent plumbing, heating and bathroom work.
            Drag the handle to compare before and after.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 3) * 60}>
              <BeforeAfter project={project} priority={i < 3} />
            </ScrollReveal>
          ))}
        </div>

        {sampleProjects.length > 0 ? (
          <ScrollReveal className="mt-14">
            <h3 className="text-xl font-bold text-ink">More recent work</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {sampleProjects.map((img) => (
                <div
                  key={img.src}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-white shadow-card"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
