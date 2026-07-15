import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Selected AI, automation, native macOS, API, communications, and document-processing work by Caleb Rogers.",
  alternates: { canonical: "/work/" },
};

const work = [
  { id: "document-processing", title: "RelayWorks AI Document Processing Kit", type: "Commercial source-code product", outcome: "Self-hosted PDF conversion with reviewable, AI-ready output packages.", detail: "A FastAPI and Next.js application that processes PDFs in background jobs and produces Markdown, HTML, structured JSON, text, extracted images, reports, and downloadable ZIP packages.", stack: "Python · FastAPI · Next.js · background jobs", href: "/document-processing-kit/", action: "Explore product" },
  { id: "security-workflow-ide", title: "Security Workflow IDE for macOS", type: "Native macOS application", outcome: "A multi-pane workspace for running and reviewing security-oriented developer workflows.", detail: "Built with Swift and SwiftUI, with an integrated editor, interactive terminal, plugin toolbox, workflow dashboard, persistent project sessions, execution metrics, and Markdown report generation.", stack: "Swift · SwiftUI · Xcode · Python and shell execution" },
  { id: "callbackcloser", title: "CallbackCloser", type: "Communications automation", outcome: "Missed-call recovery, SMS qualification, and operator review in one workflow.", detail: "A Next.js application with Twilio voice and messaging webhooks, lead qualification, protected dashboards, Stripe subscription handling, and appointment-oriented intake workflows.", stack: "Next.js · TypeScript · Prisma · Twilio · Stripe", href: "https://github.com/DevCalebR/callbackcloser", action: "Inspect repository" },
  { id: "webhook-dashboard", title: "Webhook Dashboard & Alerts", type: "API operations", outcome: "Signed webhook ingestion, searchable event review, retry operations, and alerts.", detail: "A documented application for receiving and validating webhooks, tracing delivery events, reviewing payloads, and managing operational failures.", stack: "Next.js · TypeScript · Prisma · webhooks", href: "https://github.com/DevCalebR/webhook-dashboard-alerts", action: "Inspect repository" },
  { id: "ai-content-automation", title: "AI Content Automation", type: "Architecture / code case study", outcome: "Structured briefs, AI-assisted drafting, human review, exports, and Google Docs delivery.", detail: "Presented as an inspectable architecture and code case study. The repository documents the workflow, implementation choices, setup, and explicit limitations.", stack: "Next.js · OpenAI API · Google Docs · Prisma", href: "https://github.com/DevCalebR/ai-content-automation-app-google-docs-delivery", action: "Inspect case study" },
];

export default function WorkPage() {
  return (
    <main id="main-content" className="inner-page work-page">
      <header className="inner-hero"><p className="eyebrow light">Selected work</p><h1>Systems built to be used, reviewed, and understood.</h1><p>A selection of commercial products, native applications, and inspectable engineering projects across AI, automation, APIs, and full-stack development.</p></header>
      <section className="case-study-list" aria-label="Project case studies">
        {work.map((project, index) => (
          <article id={project.id} key={project.id}>
            <div className="case-index"><span>{String(index + 1).padStart(2, "0")}</span><p>{project.type}</p></div>
            <div className="case-title"><h2>{project.title}</h2><p>{project.outcome}</p></div>
            <div className="case-detail"><p>{project.detail}</p><p className="stack-line">{project.stack}</p>{project.href ? <Link href={project.href}>{project.action} <span aria-hidden="true">↗</span></Link> : <span className="availability-note">Project overview — public repository unavailable</span>}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
