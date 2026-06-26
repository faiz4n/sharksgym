'use client';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Hours', href: '#hours' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape key closes menu
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Use a data attribute instead of inline style padding so CSS media queries win */}
      <nav
        className="sg-nav"
        data-scrolled={scrolled ? 'true' : 'false'}
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.97)'
            : 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)',
        }}
      >
        <a href="#" className="sg-logo" onClick={closeMenu}>
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M4 24 L16 8 L28 24" stroke="#E8001D" strokeWidth="3"
              strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M9 24 L16 14 L23 24" stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          SHARKS<span>GYM</span>
        </a>

        {/* Desktop links */}
        <ul className="sg-nav-links">
          {navLinks.map((l) => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <button className="sg-nav-cta">Join Now</button>

        {/* Hamburger toggle */}
        <button
          className={`sg-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile full-screen drawer */}
      <div className={`sg-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="sg-mobile-menu-accent" />
        <ul>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={closeMenu}>{l.label}</a>
            </li>
          ))}
        </ul>
        <button className="sg-nav-cta" onClick={closeMenu}>Join Now</button>
      </div>
    </>
  );
}
