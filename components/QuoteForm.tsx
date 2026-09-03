"use client";

import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon, CheckIcon, PhoneIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";

const SERVICE_OPTIONS = [
  "Emergency Plumbing",
  "Plumbing Repair",
  "Heating / Radiator",
  "Bathroom / Shower",
  "Tap / Kitchen Plumbing",
  "Leak / Drainage",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  postcode: string;
  service: string;
  message: string;
  contactTime: string;
  urgent: boolean;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  postcode: "",
  service: "",
  message: "",
  contactTime: "",
  urgent: false,
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail) {
        setForm((f) => ({ ...f, service: detail }));
        setErrors((e) => ({ ...e, service: undefined }));
      }
    };
    window.addEventListener("prestige:set-service", handler);
    return () =>
      window.removeEventListener("prestige:set-service", handler);
  }, []);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (key in errors) {
      setErrors((e) => ({ ...e, [key]: undefined }));
    }
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!/^[0-9+()\s-]{7,}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.service) next.service = "Please choose a service.";
    if (!form.message.trim()) {
      next.message = "Please describe the problem.";
    } else if (form.message.trim().length < 10) {
      next.message = "Please add a little more detail about the job.";
    }
    return next;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstError = event.currentTarget.querySelector<HTMLElement>(
        "[aria-invalid='true']"
      );
      firstError?.focus();
      return;
    }

    const message = [
      "Hi Prestige Plumbing Heating,",
      "",
      "I'd like to enquire about a job.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Postcode: ${form.postcode.trim() || "-"}`,
      `Service: ${form.service}`,
      `Urgent: ${form.urgent ? "Yes" : "No"}`,
      `Preferred contact time: ${form.contactTime.trim() || "-"}`,
      "",
      "Job details:",
      form.message.trim(),
      "",
      "Sent from the Prestige website.",
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  const inputClass = (invalid?: string) =>
    `w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-ink shadow-sm outline-none transition-colors placeholder:text-ink-muted/70 focus:ring-2 focus:ring-brand-blue/40 ${
      invalid
        ? "border-red-400 focus:border-red-400"
        : "border-line focus:border-brand-blue"
    }`;

  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <div className="container-site">
        <ScrollReveal className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-deep px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          {/* watermark */}
          <div
            className="pointer-events-none absolute -right-14 -bottom-14 text-white/10"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-80 w-80">
              <path d="M12 2.7S6 9.5 6 14a6 6 0 0 0 12 0c0-4.5-6-11.3-6-11.3z" />
            </svg>
          </div>

          <div className="relative grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
            Get a quote
          </p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tell us what you need
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            Send a few details and continue the conversation directly on
            WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 text-base font-semibold text-white transition-colors hover:text-white/90"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand-blue">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                Call us
                <span className="block text-sm font-normal text-white/80">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-base font-semibold text-white transition-colors hover:text-white/90"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-emerald-600">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span>
                WhatsApp us directly
                <span className="block text-sm font-normal text-white/80">
                  Quick messages welcome
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="overflow-hidden rounded-[24px] bg-white shadow-[0_24px_60px_-24px_rgba(8,20,40,0.5)]"
          >
            <div className="space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="q-name"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    id="q-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "q-name-error" : undefined}
                    placeholder="Your name"
                    className={inputClass(errors.name)}
                  />
                  {errors.name ? (
                    <p id="q-name-error" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="q-phone"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Phone number <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    id="q-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "q-phone-error" : undefined}
                    placeholder="e.g. 07700 900000"
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone ? (
                    <p id="q-phone-error" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="q-postcode"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Postcode <span className="text-ink-muted">(optional)</span>
                  </label>
                  <input
                    id="q-postcode"
                    name="postcode"
                    type="text"
                    autoComplete="postal-code"
                    value={form.postcode}
                    onChange={(e) => set("postcode", e.target.value)}
                    placeholder="e.g. EH26"
                    className={inputClass()}
                  />
                </div>

                <div>
                  <label
                    htmlFor="q-service"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Service required <span className="text-brand-orange">*</span>
                  </label>
                  <select
                    id="q-service"
                    name="service"
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "q-service-error" : undefined}
                    className={`${inputClass(errors.service)} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%236b6f76'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M6%209l6%206%206-6'/%3E%3C/svg%3E")] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service ? (
                    <p id="q-service-error" className="mt-1.5 text-sm text-red-600" role="alert">
                      {errors.service}
                    </p>
                  ) : null}
                </div>
              </div>

              <div>
                <label
                  htmlFor="q-message"
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  Describe the problem <span className="text-brand-orange">*</span>
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "q-message-error" : undefined}
                  placeholder="Tell us about the job or problem..."
                  className={`${inputClass(errors.message)} resize-y`}
                />
                {errors.message ? (
                  <p id="q-message-error" className="mt-1.5 text-sm text-red-600" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-5 sm:grid-cols-2 sm:items-end">
                <div>
                  <label
                    htmlFor="q-time"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Preferred contact time{" "}
                    <span className="text-ink-muted">(optional)</span>
                  </label>
                  <input
                    id="q-time"
                    name="contactTime"
                    type="text"
                    value={form.contactTime}
                    onChange={(e) => set("contactTime", e.target.value)}
                    placeholder="e.g. After 5pm"
                    className={inputClass()}
                  />
                </div>

                <label className="inline-flex cursor-pointer items-center gap-3 py-1">
                  <span className="relative inline-flex">
                    <input
                      type="checkbox"
                      checked={form.urgent}
                      onChange={(e) => set("urgent", e.target.checked)}
                      className="peer h-5 w-5 appearance-none rounded border border-black/20 bg-white transition-colors checked:border-brand-orange checked:bg-brand-orange"
                    />
                    <CheckIcon className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                  </span>
                  <span className="text-sm font-medium text-ink">
                    This is urgent
                  </span>
                </label>
              </div>
            </div>

            <div className="border-t border-line bg-soft px-6 py-5 sm:px-8">
              <button
                type="submit"
                className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 text-base font-bold text-white shadow-lg shadow-emerald-900/20 transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Send via WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-ink-muted">
                Sending opens WhatsApp with your details pre-filled — nothing
                is stored on this website.
              </p>
            </div>
          </form>
        </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
}
