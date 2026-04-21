"use client";

import Link from "next/link";
import { useState } from "react";
import SubscribeCTA from "./SubscribeCTA";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "El Festival", href: "/el-festival" },
  { label: "La Baja Inspira", href: "/la-baja-inspira" },
  { label: "Fondo F\u00edlmico Gabriel Figueroa", href: "/ffgf" },
  { label: "Programaci\u00f3n", href: "/programacion" },
  { label: "Prensa", href: "/prensa" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <nav className="site-nav" aria-label="Navegación principal">
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo-nav.svg"
          alt="FICC Los Cabos — Festival Internacional de Cine y Creatividad"
          width={152}
          height={72}
          decoding="async"
          style={{ height: "clamp(40px, 12vw, 58px)", width: "auto" }}
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="nav-links hidden lg:flex">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`nav-item ${item.children ? "has-dropdown" : ""}`}
          >
            <Link href={item.href}>{item.label}</Link>
            {item.children && (
              <div className="nav-dropdown">
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="nav-dropdown-link"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <SubscribeCTA
        source="comunidad"
        label="Únete a la comunidad"
        title="Únete a la comunidad"
        description="Recibe noticias, programación y novedades del FICC Los Cabos."
        className="nav-cta hidden lg:inline-flex"
      />

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={mobileOpen}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            width: 24, height: 2, background: "rgba(255,255,255,.85)", display: "block",
            transition: "transform .2s",
            transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}
        />
        <span
          style={{
            width: 24, height: 2, background: "rgba(255,255,255,.85)", display: "block",
            transition: "opacity .2s",
            opacity: mobileOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 24, height: 2, background: "rgba(255,255,255,.85)", display: "block",
            transition: "transform .2s",
            transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute", top: 70, left: 0, right: 0,
            background: "#0A1E23", padding: "1rem clamp(1rem, 3vw, 1.5rem)",
            borderTop: "1px solid rgba(255,255,255,.06)",
            zIndex: 200,
          }}
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileDropdown(!mobileDropdown)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", padding: "1rem 0",
                    fontFamily: "var(--font-inter)", fontWeight: 900,
                    fontSize: "1.6rem", textTransform: "uppercase", color: "rgba(255,255,255,.85)",
                    letterSpacing: "0.02em", background: "none", border: "none",
                    borderBottom: "1px solid rgba(255,255,255,.06)", cursor: "pointer",
                  }}
                >
                  {item.label}
                  <span style={{
                    transition: "transform .2s",
                    transform: mobileDropdown ? "rotate(180deg)" : "none",
                    fontSize: "0.7rem",
                  }}>&#9660;</span>
                </button>
                {mobileDropdown && item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block", padding: "0.8rem 0 0.8rem 1.25rem",
                      fontFamily: "var(--font-inter)", fontWeight: 900,
                      fontSize: "1.3rem", textTransform: "uppercase", color: "rgba(255,255,255,.7)",
                      letterSpacing: "0.02em", textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,.04)",
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block", padding: "1rem 0",
                  fontFamily: "var(--font-inter)", fontWeight: 900,
                  fontSize: "1.6rem", textTransform: "uppercase", color: "rgba(255,255,255,.85)",
                  letterSpacing: "0.02em", textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,.06)",
                }}
              >
                {item.label}
              </Link>
            )
          )}
          <SubscribeCTA
            source="comunidad"
            label="Únete a la comunidad"
            title="Únete a la comunidad"
            description="Recibe noticias, programación y novedades del FICC Los Cabos."
            onOpen={() => setMobileOpen(false)}
            style={{
              display: "block", marginTop: "1.25rem", padding: "0.9rem 1.5rem",
              background: "transparent", border: "1.5px solid #C47A3D", color: "#ffffff",
              textAlign: "center", width: "100%",
              fontSize: "1.2rem", fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "0.06em", cursor: "pointer",
              fontFamily: "var(--font-inter)",
            }}
          />
        </div>
      )}
    </nav>
  );
}
