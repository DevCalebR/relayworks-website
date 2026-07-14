import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">R</span>
          <span>RelayWorks</span>
        </Link>
        <p>AI automation, API integrations, and custom software for business operations.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/services/">Services</Link>
        <Link href="/work/">Work</Link>
        <Link href="/contact/">Contact</Link>
        <Link href="/privacy/">Privacy</Link>
        <Link href="/terms/">Terms</Link>
        <Link href="https://github.com/DevCalebR">GitHub</Link>
      </nav>
    </footer>
  );
}
