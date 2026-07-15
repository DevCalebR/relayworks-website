import Link from "next/link";

export const metadata = { title: "Contact", description: "Start a conversation with Caleb Rogers about an AI application, automation, integration, or custom software project.", alternates: { canonical: "/contact/" } };

export default function ContactPage() {
  return <main id="main-content" className="legal-page studio-page contact-page">
    <header className="page-intro"><p className="eyebrow">Contact</p><h1>Start with the workflow, not a feature list.</h1><p>For the fastest useful response, share what happens today, which systems are involved, where the process breaks down, and what success would change for the business.</p></header>
    <section className="contact-panel">
      <div><p className="proof-label">A useful project brief includes</p><ol><li>The manual or unreliable process</li><li>The tools, APIs, or documents involved</li><li>The people who use or review the result</li><li>The desired timeline and business outcome</li></ol></div>
      <div><h2>Open a direct conversation</h2><p>GitHub is the current public contact channel. Send a message from the profile below and reference the project or workflow you want to discuss.</p><Link className="button primary" href="https://github.com/DevCalebR">Contact Caleb on GitHub ↗</Link></div>
    </section>
  </main>;
}
