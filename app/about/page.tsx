import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Caleb Rogers, a software engineer building AI applications, workflow automation, full-stack web applications, and native macOS software.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="inner-page">
      <header className="inner-hero">
        <p className="eyebrow light">About Caleb</p>
        <h1>Engineering the path from complicated process to usable product.</h1>
        <p>I&apos;m Caleb Rogers, a software engineer in Rocky Top, Tennessee. I work across AI applications, workflow automation, APIs, full-stack web development, and native macOS software.</p>
      </header>
      <section className="about-editorial">
        <div className="about-monogram dark-monogram" aria-hidden="true">CR</div>
        <div>
          <p className="page-lede">My work centers on software that gives structure to manual, document-heavy, or disconnected workflows.</p>
          <p>I build backend services and interfaces together so a system is not only technically sound, but clear to operate. Current projects span FastAPI document processing, Next.js dashboards, webhook and communications workflows, and SwiftUI developer tooling.</p>
          <p>RelayWorks is the product and engineering practice through which I publish this work, including the commercial AI Document Processing Kit.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/work/">View Selected Work</Link>
            <Link className="text-action" href="/resume/">View Resume →</Link>
          </div>
        </div>
      </section>
      <section className="principles" aria-labelledby="principles-title">
        <div className="section-kicker"><span>01</span><p>Working principles</p></div>
        <h2 id="principles-title">Clear scope. Inspectable systems. Useful interfaces.</h2>
        <div className="focus-list">
          <article><span>01</span><h3>Start with the workflow</h3><p>Understand the inputs, decisions, handoffs, and desired outcome before choosing the implementation.</p></article>
          <article><span>02</span><h3>Make behavior visible</h3><p>Build review, status, history, and failure states into the product so operators can trust what it does.</p></article>
          <article><span>03</span><h3>Ship the whole path</h3><p>Connect architecture, backend behavior, and interface details into one coherent experience.</p></article>
        </div>
      </section>
    </main>
  );
}
