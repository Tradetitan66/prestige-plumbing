import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Prestige Plumbing Heating Ltd",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy Policy" updated="3 September 2026">
      <p>
        Prestige Plumbing Heating Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
        &ldquo;us&rdquo;) respects your privacy. This policy explains how we
        handle information when you use this website.
      </p>
      <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
      <p>
        This website does not store your personal details in a database. The
        quote form is designed to open WhatsApp with your message pre-filled,
        which means your details are sent directly to us through WhatsApp
        rather than stored on this site.
      </p>
      <p>
        If you contact us by phone, WhatsApp, email or social media, we may
        keep a record of that conversation so we can respond to your enquiry.
      </p>
      <h2 className="text-xl font-semibold text-ink">How we use your information</h2>
      <p>
        We use the information you provide only to respond to your enquiry,
        arrange a visit and carry out the work you have asked about. We do not
        sell or share your personal information with third parties for
        marketing purposes.
      </p>
      <h2 className="text-xl font-semibold text-ink">Contact</h2>
      <p>
        If you have any questions about this policy, you can contact us at{" "}
        <a href="mailto:prestigequery@outlook.com" className="text-brand-blue underline">
          prestigequery@outlook.com
        </a>
        .
      </p>
    </PolicyPage>
  );
}
