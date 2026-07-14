import Link from "next/link";
import { ScreenshotFrame } from "@/components/ScreenshotFrame";

const services = [
  ["AI and workflow automation", "Turn repetitive document, content, and operations work into reviewable software workflows."],
  ["APIs and integrations", "Connect business systems with FastAPI services, webhooks, third-party APIs, and reliable delivery logic."],
  ["Full-stack internal tools", "Build focused Next.js dashboards and operational tools around the work your team already performs."],
];

const projects = [
  {
    title: "CallbackCloser",
    label: "Communications automation",
    description: "A missed-call recovery workflow that captures a lead, starts an SMS conversation, qualifies intent, and gives an operator a reviewable dashboard.",
    href: "https://github.com/DevCalebR/callbackcloser",
  },
  {
    title: "AI Content Automation",
    label: "Content operations",
    description: "A production-minded workflow for drafting content with AI, reviewing the result, and delivering approved documents to Google Docs.",
    href: "https://github.com/DevCalebR/ai-content-automation-app-google-docs-delivery",
  },
  {
    title: "Webhook Dashboard & Alerts",
    label: "API operations",
    description: "A webhook ingestion and monitoring application with signature verification, searchable events, retries, and alerting workflows.",
    href: "https://github.com/DevCalebR/webhook-dashboard-alerts",
  },
];

export default function Home() {
  return (
    <main>
      <section className="studio-hero">
        <div className="studio-hero-inner">
          <div className="studio-hero-copy">
            <p className="eyebrow light">Automation engineering for growing teams</p>
            <h1>Software that removes operational drag.</h1>
            <p>
              RelayWorks designs AI automations, API integrations, document workflows, and
              focused internal tools for businesses that have outgrown manual work.
            </p>
            <div className="cta-row">
              <Link className="button studio-primary" href="/contact/">Discuss a project</Link>
              <Link className="button studio-secondary" href="/work/">Review selected work</Link>
            </div>
          </div>
          <div className="proof-panel" aria-label="RelayWorks capabilities">
            <p className="proof-label">What the portfolio demonstrates</p>
            <div><span>01</span><strong>Python and FastAPI backends</strong></div>
            <div><span>02</span><strong>Next.js applications and dashboards</strong></div>
            <div><span>03</span><strong>AI, webhooks, SMS, and document systems</strong></div>
          </div>
        </div>
      </section>

      <section className="section studio-section" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">Services</p><h2>Practical engineering for real business workflows.</h2></div>
          <p>Engagements are scoped around a measurable operational problem: reduce manual handling, connect disconnected systems, or make important work easier to monitor.</p>
        </div>
        <div className="service-list">
          {services.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section studio-section" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Evidence, not capability claims.</h2></div>
          <p>Each project is a working codebase with documented architecture, setup steps, validation commands, and explicit limitations.</p>
        </div>
        <div className="work-list">
          {projects.map((project) => (
            <article key={project.title}>
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link href={project.href}>Inspect the repository <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section studio-section">
        <div className="product-feature">
          <div className="product-feature-copy">
            <p className="eyebrow light">Featured source-code product</p>
            <h2>RelayWorks AI Document Processing Kit</h2>
            <p>A self-hosted FastAPI and Next.js application that converts PDFs into reviewable, AI-ready outputs and downloadable packages.</p>
            <div className="cta-row">
              <Link className="button studio-primary" href="/document-processing-kit/">Explore the product</Link>
              <Link className="text-link" href="https://github.com/DevCalebR/relayworks-document-processing-showcase">View technical showcase ↗</Link>
            </div>
          </div>
          <ScreenshotFrame src="/images/product/05-conversion-complete.png" alt="RelayWorks document processing completion screen" title="Reviewable output" caption="An actual product screen showing generated output tabs and package download." />
        </div>
      </section>

      <section className="section studio-section">
        <div className="final-cta studio-cta">
          <p className="eyebrow light">Work with RelayWorks</p>
          <h2>Bring the workflow that is costing your team time.</h2>
          <p>Share the current process, the systems involved, and the outcome you need. You will get a direct engineering assessment—not a generic discovery pitch.</p>
          <div className="cta-row"><Link className="button studio-primary" href="/contact/">Start the conversation</Link></div>
        </div>
      </section>
    </main>
  );
}
