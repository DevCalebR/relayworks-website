import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caleb Rogers | Software Engineer — AI, Automation & Full-Stack Development",
  description: "Software engineer building AI applications, workflow automation, API integrations, native macOS software, and full-stack web applications.",
  alternates: { canonical: "/" },
};

const focus = [
  ["01", "AI applications", "Useful AI products built around reviewable workflows, structured inputs, and dependable outputs."],
  ["02", "Automation & APIs", "Background jobs, webhooks, third-party integrations, and operational systems that replace manual handoffs."],
  ["03", "Web & native software", "Full-stack Next.js applications and focused native macOS tools built with Swift and SwiftUI."],
];

const projects = [
  { number: "01", title: "RelayWorks AI Document Processing Kit", label: "Commercial source-code product", description: "A self-hosted FastAPI and Next.js system that turns PDFs into reviewable Markdown, HTML, JSON, text, images, reports, and ZIP packages.", stack: "Python · FastAPI · Next.js · background jobs", href: "/document-processing-kit/" },
  { number: "02", title: "Security Workflow IDE for macOS", label: "Native macOS application", description: "A SwiftUI engineering workspace with an integrated editor, terminal, plugin toolbox, workflow dashboard, project sessions, and Markdown reporting.", stack: "Swift · SwiftUI · Xcode · shell execution", href: "/work/#security-workflow-ide" },
  { number: "03", title: "CallbackCloser", label: "Communications automation", description: "A missed-call recovery workflow with SMS qualification, operator review, authentication, Stripe billing, and appointment-oriented lead handling.", stack: "Next.js · TypeScript · Twilio · Stripe", href: "https://github.com/DevCalebR/callbackcloser" },
  { number: "04", title: "Webhook Dashboard & Alerts", label: "API operations", description: "A webhook ingestion and monitoring application with signature verification, searchable events, retries, and alerting workflows.", stack: "Next.js · TypeScript · Prisma · webhooks", href: "https://github.com/DevCalebR/webhook-dashboard-alerts" },
  { number: "05", title: "AI Content Automation", label: "Architecture / code case study", description: "A documented workflow for structured briefs, AI-assisted drafting, human review, exports, and Google Docs delivery.", stack: "Next.js · OpenAI API · Google Docs · Prisma", href: "https://github.com/DevCalebR/ai-content-automation-app-google-docs-delivery" },
];

const stack = [
  ["Languages", "Python, Swift, TypeScript, JavaScript"],
  ["Frameworks", "FastAPI, Next.js, React, SwiftUI"],
  ["Engineering", "REST APIs, background jobs, authentication, webhooks, workflow automation, document processing"],
  ["Platforms", "GitHub, Git, Xcode, Cloudflare, Vercel, Stripe, Twilio"],
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="portfolio-hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="portfolio-hero-inner">
          <p className="eyebrow light hero-reveal">Software Engineering <span>•</span> AI <span>•</span> Automation</p>
          <h1 className="hero-reveal hero-reveal-delay">I Build Practical Software That Turns Complex Workflows Into Usable Products.</h1>
          <div className="hero-bottom hero-reveal hero-reveal-more">
            <p>I&apos;m Caleb Rogers, a software engineer building AI applications, document-processing systems, workflow automation, API integrations, dashboards, and native macOS software using Python, FastAPI, Next.js, React, TypeScript, Swift, and SwiftUI.</p>
            <div className="hero-actions">
              <Link className="button signal" href="/work/">View Selected Work <span aria-hidden="true">↘</span></Link>
              <Link className="text-action" href="https://github.com/DevCalebR">View GitHub <span aria-hidden="true">↗</span></Link>
              <a className="text-action" href="/resume/Caleb_Rogers_Software_Engineer_Resume.pdf" download>Download Resume <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
        <p className="hero-index" aria-hidden="true">CR / 2026</p>
      </section>

      <section className="portfolio-section focus-section" aria-labelledby="focus-title">
        <div className="section-kicker"><span>01</span><p>Engineering focus</p></div>
        <div className="editorial-heading"><h2 id="focus-title">Software designed around the work people actually need to finish.</h2><p>From backend architecture to the final interface, I focus on clear workflows, inspectable behavior, and maintainable implementation.</p></div>
        <div className="focus-list">
          {focus.map(([number, title, description]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="portfolio-section work-section" aria-labelledby="work-title">
        <div className="section-kicker"><span>02</span><p>Selected work</p></div>
        <div className="editorial-heading"><h2 id="work-title">Products, tools, and systems built to make complicated work legible.</h2><Link className="section-link" href="/work/">View all work <span aria-hidden="true">→</span></Link></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.title}>
              <span className="project-number">{project.number}</span>
              <div><p className="project-label">{project.label}</p><h3>{project.title}</h3></div>
              <div className="project-detail"><p>{project.description}</p><p className="stack-line">{project.stack}</p></div>
              <Link className="project-arrow" href={project.href} aria-label={`View ${project.title}`}>↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="product-showcase" aria-labelledby="product-title">
        <div className="product-showcase-copy">
          <p className="eyebrow light">Featured commercial product</p>
          <h2 id="product-title">Document processing infrastructure, ready to inspect and extend.</h2>
          <p>The RelayWorks AI Document Processing Kit packages a working PDF-to-structured-output workflow into a self-hosted FastAPI and Next.js codebase.</p>
          <div className="hero-actions"><Link className="button signal" href="/document-processing-kit/">Explore the Product <span aria-hidden="true">→</span></Link><Link className="text-action light-action" href="https://github.com/DevCalebR/relayworks-document-processing-showcase">Technical Showcase ↗</Link></div>
        </div>
        <figure className="product-visual">
          <div className="visual-bar"><span>RelayWorks / conversion complete</span><span>05</span></div>
          <Image src="/images/product/05-conversion-complete.png" alt="RelayWorks completion screen showing generated document outputs and package download" width={1440} height={810} />
          <figcaption>Authentic product interface</figcaption>
        </figure>
      </section>

      <section className="portfolio-section stack-section" aria-labelledby="stack-title">
        <div className="section-kicker"><span>03</span><p>Technology stack</p></div>
        <div className="stack-layout"><h2 id="stack-title">A pragmatic toolkit for shipping across the stack.</h2><div className="stack-table">{stack.map(([group, items]) => <div key={group}><h3>{group}</h3><p>{items}</p></div>)}</div></div>
      </section>

      <section className="portfolio-section services-home" aria-labelledby="services-title">
        <div className="section-kicker"><span>04</span><p>Services</p></div>
        <div className="service-pitch"><h2 id="services-title">Focused engineering for teams with a workflow to improve.</h2><div><p>I design and build AI-enabled workflows, API integrations, document-processing systems, internal tools, and full-stack applications with a clear operational purpose.</p><Link className="section-link" href="/services/">Explore services <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="about-band" aria-labelledby="about-title">
        <div className="about-monogram" aria-hidden="true">CR</div>
        <div className="about-copy"><p className="eyebrow">About Caleb</p><h2 id="about-title">Software engineer in Rocky Top, Tennessee, working across AI, web, and native platforms.</h2><p>I build practical software from architecture through interface, with an emphasis on systems that make complex or repetitive work easier to run and review.</p><Link className="section-link" href="/about/">More about me <span aria-hidden="true">→</span></Link></div>
      </section>

      <section className="portfolio-final" aria-labelledby="cta-title">
        <p className="eyebrow light">Have a project in mind?</p>
        <h2 id="cta-title">Let&apos;s turn the workflow into working software.</h2>
        <div className="final-actions"><Link className="button signal" href="/contact/">Discuss a Project <span aria-hidden="true">↗</span></Link><Link className="text-action light-action" href="/resume/">View Resume →</Link></div>
      </section>
    </main>
  );
}
