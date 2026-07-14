import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="RelayWorks home">
        <span className="brand-mark">R</span>
        <span>RelayWorks</span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        <Link href="/services/">Services</Link>
        <Link href="/work/">Work</Link>
        <Link href="/document-processing-kit/">Product</Link>
        <Link className="nav-buy" href="/contact/">Discuss a project</Link>
      </nav>
    </header>
  );
}
