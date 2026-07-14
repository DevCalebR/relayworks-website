import Link from "next/link";

export const metadata = { title: "Selected Work", description: "Selected AI automation, FastAPI, Next.js, webhook, communications, and document-processing projects." };

const work = [
  ["CallbackCloser", "Missed-call recovery and SMS lead qualification", "Next.js · FastAPI-style API workflows · Twilio · Prisma", "https://github.com/DevCalebR/callbackcloser"],
  ["AI Content Automation", "AI-assisted drafting, human review, and Google Docs delivery", "Next.js · OpenAI · Google Docs · Prisma", "https://github.com/DevCalebR/ai-content-automation-app-google-docs-delivery"],
  ["Document Processing Showcase", "Self-hosted PDF conversion with structured, AI-ready outputs", "FastAPI · Next.js · Python · background jobs", "https://github.com/DevCalebR/relayworks-document-processing-showcase"],
  ["Webhook Dashboard & Alerts", "Signed webhook ingestion, event review, retry, and alert operations", "Next.js · TypeScript · Prisma · webhooks", "https://github.com/DevCalebR/webhook-dashboard-alerts"],
];

export default function WorkPage() {
  return <main className="legal-page studio-page">
    <header className="page-intro"><p className="eyebrow">Selected work</p><h1>Working systems with inspectable tradeoffs.</h1><p>These repositories are presented as engineering evidence: each explains the business problem, architecture, setup, validation path, and known limitations.</p></header>
    <div className="portfolio-index">{work.map(([title, outcome, stack, href], index) => <article key={title}><p className="project-label">Case study 0{index + 1}</p><h2>{title}</h2><p>{outcome}</p><p className="stack-line">{stack}</p><Link href={href}>Inspect repository ↗</Link></article>)}</div>
  </main>;
}
