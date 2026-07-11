import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark">R</span>
          <span>RelayWorks</span>
        </Link>
        <p>Self-hosted document processing tools for AI builders.</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/privacy/">Privacy</Link>
        <Link href="/terms/">Terms</Link>
        <Link href="https://github.com/DevCalebR/relayworks-website">GitHub</Link>
        <BuyLink className="footer-buy">Buy Now</BuyLink>
      </nav>
    </footer>
  );
}
