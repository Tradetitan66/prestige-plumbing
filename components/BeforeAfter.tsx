"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/site";

export default function BeforeAfter({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const [pos, setPos] = useState(50);

  return (
    <figure className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-mist">
      {/* AFTER (base layer) */}
      <Image
        src={project.after}
        alt={project.afterAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={priority}
        className="object-cover"
      />
      {/* BEFORE (clipped to left portion) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={project.before}
          alt={project.beforeAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        After
      </span>

      {/* Divider + handle line within the clipped region */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white"
        style={{ left: `${pos}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-10 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink shadow-lg"
        style={{ left: `${pos}%` }}
      >
        <span aria-hidden className="flex items-center gap-1 text-xs font-bold">
          <span className="scale-x-[-1]">‹</span>
          <span>›</span>
        </span>
      </div>

      {/* Range control (a11y + touch) */}
      <input
        type="range"
        aria-label={`Compare before and after - ${project.caption}`}
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />

      <figcaption className="sr-only">{project.caption}</figcaption>
    </figure>
  );
}
