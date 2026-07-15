"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Caleb Rogers home" onClick={closeMenu}>
        <span className="brand-mark">CR</span>
        <span className="brand-name">Caleb Rogers</span>
        <span className="brand-role">Software Engineer</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span className="menu-label">Menu</span>
        <span className="menu-icon" aria-hidden="true"><i /><i /></span>
      </button>
      <nav id="primary-navigation" className={`nav-links${open ? " is-open" : ""}`} aria-label="Primary navigation">
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/work/" onClick={closeMenu}>Work</Link>
        <Link href="/services/" onClick={closeMenu}>Services</Link>
        <Link href="/document-processing-kit/" onClick={closeMenu}>Product</Link>
        <Link href="/about/" onClick={closeMenu}>About</Link>
        <Link href="/resume/" onClick={closeMenu}>Resume</Link>
        <Link href="https://github.com/DevCalebR" onClick={closeMenu}>GitHub <span aria-hidden="true">↗</span></Link>
        <Link className="nav-buy" href="/contact/" onClick={closeMenu}>Discuss a Project</Link>
      </nav>
    </header>
  );
}
