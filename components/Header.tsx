import Link from "next/link";
import { BuyLink } from "@/components/BuyLink";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="RelayWorks home">
        <span className="brand-mark">R</span>
        <span>RelayWorks</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        <Link href="/document-processing-kit/">Product</Link>
        <Link href="/document-processing-kit/#features">Features</Link>
        <Link href="/document-processing-kit/#screenshots">Screenshots</Link>
        <Link href="/document-processing-kit/#faq">FAQ</Link>
        <BuyLink className="nav-buy">Buy Now</BuyLink>
      </nav>
    </header>
  );
}
