import type { Metadata } from "next";
import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";
import { VideoSection } from "@/components/VideoSection";

export const metadata: Metadata = {
  title: "RelayWorks AI Document Processing Kit",
  description:
    "A self-hosted FastAPI + Next.js PDF processing kit for AI-ready Markdown, HTML, JSON, text, extracted images, reports, and ZIP packages.",
  alternates: { canonical: "/document-processing-kit/" },
};

const outputs = ["Markdown", "HTML", "JSON", "Text", "Images", "Processing Report", "ZIP Package"];

const faqs = [
  ["What does RelayWorks process?", "The current product workflow is PDF-focused."],
  ["Is RelayWorks a hosted SaaS?", "No. RelayWorks is a self-hosted source-code product."],
  ["Does it include source code?", "Yes. The FastAPI backend and Next.js frontend source are included."],
  ["Does it include Marker?", "No. Marker must be installed separately and available through the configured marker_single command."],
  ["Does it include model weights?", "No. The kit does not distribute Marker model weights."],
  ["What outputs are generated?", "Markdown, HTML, structured JSON, plain text, extracted images when available, processing reports, and ZIP packages."],
  ["Can it process batches?", "Yes. The current app includes a batch PDF workflow."],
  ["Does it run background jobs?", "Yes. Single PDF conversion uses background job processing."],
  ["Does it do OCR?", "Do not assume OCR beyond what the separately installed Marker workflow supports in your environment."],
  ["Can I deploy it locally?", "Yes. The product is designed for local or self-hosted operation."],
  ["Is an API key required?", "No API key is required for the current local workflow."],
  ["Who is it for?", "AI engineers, technical founders, internal tools teams, and agencies building document-heavy workflows."],
  ["What are the main requirements?", "Python, Node.js, npm, and Marker installed separately."],
  ["Can I customize it?", "Yes. The product includes source code intended for buyer modification within the purchased license terms."],
  ["Will every PDF convert perfectly?", "No. Extraction quality depends on the source PDF, document quality, Marker behavior, and local setup."],
];

export default function ProductPage() {
  return (
    <main id="main-content">
      <section className="hero product-hero">
        <div>
          <p className="eyebrow">RelayWorks AI Document Processing Kit</p>
          <h1>Start Building Instead of Integrating.</h1>
          <p>
            A self-hosted FastAPI + Next.js application that turns PDFs into AI-ready output
            packages while keeping processing on your own infrastructure.
          </p>
          <div className="cta-row">
            <BuyLink>Buy Now</BuyLink>
            <Link className="button secondary" href="#screenshots">
              View screenshots
            </Link>
          </div>
        </div>
        <ScreenshotFrame
          src="/images/product/02-goal-selection.png"
          alt="RelayWorks goal selection screen"
          title="Choose the output goal"
          caption="Select a workflow, upload PDFs, process locally, and download packaged outputs."
          priority
        />
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Developers waste days assembling document ingestion pipelines.</h2>
          <p>
            PDF upload handling, subprocess execution, background state, output review, error
            handling, and ZIP packaging all have to work together before the AI work can begin.
          </p>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <h2>Why RelayWorks</h2>
          <p>A practical application foundation for local document processing workflows.</p>
        </div>
        <div className="card-grid">
          {[
            ["Local processing", "Keep sensitive PDFs on infrastructure you control."],
            ["Complete workflow", "Upload, process, inspect outputs, and download packages in one app."],
            ["Implementation foundation", "Start from FastAPI, Next.js, background jobs, and bounded local uploads."],
            ["Source code ownership", "Modify the implementation instead of relying on a black-box hosted tool."],
          ].map(([title, description]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>How it works</h2>
          <p>Three steps from local PDF upload to downloadable AI-ready package.</p>
        </div>
        <div className="steps">
          {["Upload PDFs", "Process", "Download complete package"].map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Outputs</h2>
          <p>Generate files that are easier to inspect, package, and use in AI workflows.</p>
        </div>
        <div className="outputs-grid">
          {outputs.map((output) => (
            <article className="mini-card" key={output}>
              <h3>{output}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="split-section">
          <div className="split-copy">
            <p className="eyebrow">Privacy</p>
            <h2>Processing happens locally.</h2>
            <p>
              RelayWorks is designed for local or self-hosted operation. Uploads, generated outputs,
              job metadata, and downloadable packages stay in the local project storage paths you configure.
            </p>
          </div>
          <ScreenshotFrame
            src="/images/product/11-download-package.png"
            alt="RelayWorks download package screen"
            title="Download complete package"
            caption="Collect generated outputs without sending documents to a hosted conversion service."
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Who it is for</h2>
          <p>Technical buyers who need document processing infrastructure for AI workflows.</p>
        </div>
        <div className="who-grid">
          {["AI engineers", "Technical founders", "Internal tools teams", "Agencies", "Document-heavy RAG teams"].map((item) => (
            <article className="mini-card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Requirements and known limitations</h2>
          <p>Clear setup expectations before purchase.</p>
        </div>
        <div className="limits-grid">
          {[
            ["Python", "Required for the FastAPI backend."],
            ["Node.js", "Required for the Next.js frontend."],
            ["Marker installed separately", "The backend invokes marker_single as an external CLI."],
            ["PDF-focused", "This release supports the existing PDF workflow."],
            ["Local setup required", "This is not a hosted SaaS."],
          ].map(([title, description]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="screenshots">
        <div className="section-heading">
          <h2>Screenshots</h2>
          <p>Real screens from the current product.</p>
        </div>
        <div className="screenshot-grid">
          <ScreenshotFrame src="/images/product/01-homepage.png" alt="RelayWorks homepage" title="Homepage" />
          <ScreenshotFrame src="/images/product/02-goal-selection.png" alt="RelayWorks goal selection" title="Goal selection" />
          <ScreenshotFrame src="/images/product/05-conversion-complete.png" alt="RelayWorks conversion complete" title="Conversion complete" />
          <ScreenshotFrame src="/images/product/06-markdown-output.png" alt="RelayWorks Markdown output" title="Markdown output" />
          <ScreenshotFrame src="/images/product/08-structured-json.png" alt="RelayWorks structured JSON output" title="Structured JSON" />
          <ScreenshotFrame src="/images/product/11-download-package.png" alt="RelayWorks package download" title="Download package" />
        </div>
      </section>

      <VideoSection />

      <section className="section" id="faq">
        <div className="section-heading">
          <h2>FAQ</h2>
          <p>Practical answers for developers evaluating the kit.</p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="pricing-grid">
          <div className="split-copy">
            <p className="eyebrow">Pricing</p>
            <h2>One source-code kit for local PDF processing workflows.</h2>
            <p>Buy once through Gumroad and use the included setup documentation to run locally.</p>
          </div>
          <article className="pricing-card">
            <h3>RelayWorks AI Document Processing Kit</h3>
            <div className="price">$79</div>
            <p>FastAPI backend, Next.js frontend, local processing workflow, and AI-ready output packaging.</p>
            <div className="cta-row">
              <BuyLink>Buy Now</BuyLink>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="final-cta">
          <p className="eyebrow">Final CTA</p>
          <h2>Start Building Instead of Integrating</h2>
          <p>
            Use RelayWorks when you need a working local document processing foundation for AI
            workflows without building every integration layer yourself.
          </p>
          <div className="cta-row">
            <BuyLink>Buy Now</BuyLink>
          </div>
        </div>
      </section>
    </main>
  );
}
