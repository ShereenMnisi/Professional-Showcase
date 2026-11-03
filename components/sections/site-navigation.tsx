"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { useState } from "react";

const navigation = [
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
] as const;

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-navigation">
      <nav
        aria-label="Main navigation"
        className={`container site-navigation__inner${menuOpen ? " site-navigation__inner--menu-open" : ""}`}
      >
        <a
          aria-label="Shereen Mokone, home"
          className="site-navigation__brand"
          href="#top"
          onClick={closeMenu}
        >
          <span
            aria-hidden="true"
            className="contact__monogram site-navigation__monogram"
          >
            SM
          </span>
          <span>Shereen Mokone</span>
        </a>
        <ul className="site-navigation__links" id="site-navigation-links">
          {navigation.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="site-navigation__mobile-contact">
            <ButtonLink href="#contact" onClick={closeMenu} variant="primary">
              Contact
            </ButtonLink>
          </li>
        </ul>
        <ButtonLink
          className="site-navigation__contact"
          href="#contact"
          variant="primary"
        >
          Contact
        </ButtonLink>
        <button
          aria-controls="site-navigation-links"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="site-navigation__toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
