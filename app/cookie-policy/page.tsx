import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Prestige Plumbing Heating Ltd",
};

export default function CookiePolicyPage() {
  return (
    <PolicyPage title="Cookie Policy" updated="3 September 2026">
      <p>
        This website is designed to be lightweight and does not use tracking
        cookies to identify you or build advertising profiles.
      </p>
      <h2 className="text-xl font-semibold text-ink">What are cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. Some are necessary for a site to work, while others are used
        for analytics or advertising.
      </p>
      <h2 className="text-xl font-semibold text-ink">Cookies we use</h2>
      <p>
        We may use a small number of strictly necessary cookies to keep the
        site functioning. We do not set advertising or cross-site tracking
        cookies on this page.
      </p>
      <h2 className="text-xl font-semibold text-ink">Managing cookies</h2>
      <p>
        You can control or delete cookies through your browser settings at any
        time. For more guidance, visit your browser&apos;s help pages.
      </p>
      <p>
        If you have questions about this policy, contact us at{" "}
        <a href="mailto:prestigequery@outlook.com" className="text-brand-blue underline">
          prestigequery@outlook.com
        </a>
        .
      </p>
    </PolicyPage>
  );
}
