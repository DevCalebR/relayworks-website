import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms information for RelayWorks and RelayWorks AI Document Processing Kit.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <article>
        <div>
          <p className="eyebrow">{site.publisher}</p>
          <h1>Terms</h1>
          <p>Last updated: July 11, 2026</p>
        </div>

        <section>
          <h2>Product</h2>
          <p>
            RelayWorks AI Document Processing Kit is sold as a downloadable source-code product for
            local or self-hosted PDF processing workflows.
          </p>
        </section>

        <section>
          <h2>Capabilities</h2>
          <p>
            The product includes a FastAPI backend, Next.js frontend, Marker integration through a
            separately installed marker_single CLI, single and batch PDF workflows, background job
            processing, exports, processing reports, extracted images when available, and downloadable
            ZIP packages.
          </p>
        </section>

        <section>
          <h2>Limitations</h2>
          <ul>
            <li>The product is PDF-focused.</li>
            <li>Marker must be installed separately.</li>
            <li>Extraction quality depends on document quality, local setup, and Marker behavior.</li>
            <li>The product is not a hosted SaaS and does not include customer accounts.</li>
          </ul>
        </section>

        <section>
          <h2>License and support</h2>
          <p>
            Buyers should review the license file included with the purchased archive. Replace this
            placeholder with final commercial terms and support contact details before launch.
          </p>
        </section>
      </article>
    </main>
  );
}
