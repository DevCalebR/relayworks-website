import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for RelayWorks and RelayWorks AI Document Processing Kit.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="legal-page">
      <article>
        <div>
          <p className="eyebrow">{site.publisher}</p>
          <h1>Privacy</h1>
          <p>Last updated: July 11, 2026</p>
        </div>

        <section>
          <h2>Static website</h2>
          <p>
            This website is a static marketing website for RelayWorks and RelayWorks AI Document
            Processing Kit. It does not include customer accounts, authentication, databases, or
            hosted document processing.
          </p>
        </section>

        <section>
          <h2>Purchases</h2>
          <p>
            Purchase links point to Gumroad. Gumroad may process purchase, payment, tax, and account
            information according to Gumroad's own policies.
          </p>
        </section>

        <section>
          <h2>Product operation</h2>
          <p>
            RelayWorks AI Document Processing Kit is intended for local or self-hosted use. Documents
            processed inside a buyer's installation are handled by that local or self-hosted environment,
            not by this static marketing website.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Replace this placeholder with the official RelayWorks support contact before launch.</p>
        </section>
      </article>
    </main>
  );
}
