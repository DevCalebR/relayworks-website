import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { VideoSection } from "@/components/VideoSection";

const benefits = [
  ["Save Development Time", "Stop wiring together multiple open-source tools."],
  ["Runs Completely Locally", "Keep sensitive documents on your own infrastructure."],
  ["AI-Ready Outputs", "Generate Markdown, HTML, JSON, text, extracted images, reports, and packages."],
  ["Source Code Included", "Customize and extend the application."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">RelayWorks</p>
            <h1>Prepare Documents for AI in Minutes, Not Days.</h1>
            <p>
              A self-hosted FastAPI + Next.js application for transforming PDFs into AI-ready
              Markdown, HTML, JSON, text, extracted images, processing reports, and downloadable packages.
            </p>
            <div className="cta-row">
              <BuyLink>Buy Now</BuyLink>
              <Link className="button secondary" href="#demo">
                Watch Demo
              </Link>
            </div>
            <div className="offer-summary">
              <p className="offer-price">Launch price: $79 — one-time payment</p>
              <p>
                Includes the complete FastAPI + Next.js source-code project, documentation, local
                processing workflow, structured output exports, and downloadable package generation.
              </p>
            </div>
            <div className="feature-strip" aria-label="Product highlights">
              <span>Source code</span>
              <span>Local processing</span>
              <span>AI-ready outputs</span>
            </div>
          </div>
          <ScreenshotFrame
            src="/images/product/01-homepage.png"
            alt="RelayWorks AI Document Processing Kit homepage"
            title="RelayWorks AI Document Processing Kit"
            caption="A local PDF processing workflow with reviewable outputs and downloadable packages."
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="featured-product">
          <div>
            <p className="eyebrow">Featured Product</p>
            <h2>RelayWorks AI Document Processing Kit</h2>
            <p>
              A source-code product for developers who need a practical PDF ingestion foundation
              without assembling the backend, frontend, background jobs, and output packaging from scratch.
            </p>
          </div>
          <div className="card-grid">
            <article className="mini-card">
              <h3>Source code</h3>
              <p>FastAPI backend and Next.js frontend included.</p>
            </article>
            <article className="mini-card">
              <h3>Local processing</h3>
              <p>Run the workflow on your own machine or self-hosted infrastructure.</p>
            </article>
            <article className="mini-card">
              <h3>AI-ready outputs</h3>
              <p>Generate files that are easier to inspect, package, and feed into AI workflows.</p>
            </article>
            <article className="mini-card">
              <h3>PDF-focused</h3>
              <p>Built around existing PDF upload and conversion workflows.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <h2>Built for developers shipping document-heavy AI tools.</h2>
          <p>RelayWorks gives you the working application layer around local PDF conversion.</p>
        </div>
        <div className="card-grid">
          {benefits.map(([title, description]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="screenshots">
        <div className="section-heading">
          <h2>Screenshot preview</h2>
          <p>Actual product screens from the current RelayWorks AI Document Processing Kit.</p>
        </div>
        <ScreenshotFrame
          src="/images/product/05-conversion-complete.png"
          alt="RelayWorks conversion complete screen"
          title="Conversion complete"
          caption="Review metadata, output tabs, and download the generated package."
        />
      </section>

      <VideoSection />

      <section className="section">
        <div className="final-cta">
          <p className="eyebrow">Launch offer</p>
          <h2>Buy the source-code kit and start from a working local PDF pipeline.</h2>
          <p>
            Use RelayWorks when you want the application foundation, local processing workflow, and
            AI-ready output package without turning document ingestion into a separate project.
          </p>
          <div className="offer-details">
            <p className="offer-price">Launch price: $79 — one-time payment</p>
            <p>
              Includes the complete FastAPI + Next.js source-code project, documentation, local
              processing workflow, structured output exports, and downloadable package generation.
            </p>
            <p className="offer-note">
              Recommended for developers using macOS or Linux with Python 3.11, Node.js 20 or 22,
              npm, and Marker installed separately.
            </p>
            <p className="offer-note">
              Documents are processed on your own machine or self-hosted infrastructure rather than
              requiring upload to a third-party document-processing service.
            </p>
          </div>
          <div className="cta-row">
            <BuyLink>Buy Now</BuyLink>
            <Link className="button secondary" href="/document-processing-kit/">
              Product details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
