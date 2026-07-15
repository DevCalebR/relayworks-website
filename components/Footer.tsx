import Link from "next/link";
import resumeData from "@/resume/resume.json";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">CR</span>
          <span className="brand-name">Caleb Rogers</span>
        </Link>
        <p>Software engineering across AI, automation, web, and native macOS.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/work/">Work</Link>
        <Link href="/services/">Services</Link>
        <Link href="/about/">About</Link>
        <Link href="/resume/">Resume</Link>
        <Link href="/document-processing-kit/">Product</Link>
        <Link href="/privacy/">Privacy</Link>
        <Link href="/terms/">Terms</Link>
        <Link href={resumeData.contact.github}>GitHub</Link>
        <Link href={resumeData.contact.linkedin}>LinkedIn</Link>
      </nav>
    </footer>
  );
}
