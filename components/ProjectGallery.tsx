import Image from "next/image";
import { projects, sampleProjects } from "@/data/site";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectGallery() {
  return (
    <section id="our-work" className="bg-mist py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Real work. Real results.
          </h2>
          <p className="mt-3 text-base text-ink-muted sm:text-lg">
            Take a look at some recent plumbing, heating and bathroom work.
            Drag the handle to compare before and after.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 3) * 60}>
              <BeforeAfter project={project} priority={i < 3} />
            </ScrollReveal>
          ))}
        </div>

        {sampleProjects.length > 0 ? (
          <ScrollReveal className="mt-12">
            <h3 className="text-xl font-semibold text-ink">
              More recent work
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {sampleProjects.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 hover:scale-105"
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
