import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services", description: "AI applications, workflow automation, API integration, document processing, and full-stack software engineering services from Caleb Rogers.", alternates: { canonical: "/services/" } };

const services = [
  ["AI and business workflow automation", "Design reliable, reviewable workflows around document handling, content operations, lead follow-up, and repetitive internal processes.", "Useful when a process depends on copy-and-paste work, repeated decisions, or information moving between systems."],
  ["API integrations and webhooks", "Build FastAPI services, webhook receivers, third-party integrations, retry logic, event histories, and operational safeguards.", "Useful when tools do not communicate cleanly or important events are difficult to trace."],
  ["Next.js applications and internal tools", "Create focused dashboards, review queues, operational consoles, and client-facing web applications backed by maintainable APIs.", "Useful when spreadsheets and disconnected admin screens no longer support the team."],
  ["Document-processing systems", "Implement ingestion, extraction, structured output, validation, and delivery workflows for PDFs and business documents.", "Useful when document volume creates delays, rework, or inconsistent data."],
];

export default function ServicesPage() {
  return <main id="main-content" className="legal-page studio-page">
    <header className="page-intro"><p className="eyebrow">Services</p><h1>Engineering scoped around the bottleneck.</h1><p>RelayWorks takes on focused automation and software projects where the business outcome is clear and the implementation needs to be dependable.</p></header>
    <div className="service-detail-list">
      {services.map(([title, description, fit], index) => <article key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{description}</p><p className="fit-note">{fit}</p></div></article>)}
    </div>
    <section className="page-cta"><h2>Have a process in mind?</h2><p>Describe the current workflow, the systems involved, and what a successful outcome looks like.</p><Link className="button primary" href="/contact/">Discuss the project</Link></section>
  </main>;
}
