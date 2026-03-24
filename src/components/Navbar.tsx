"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "El Festival", href: "/el-festival" },
  { label: "La Baja Inspira", href: "/la-baja-inspira" },
  { label: "FFGF", href: "/ffgf" },
  { label: "FON", href: "/fon" },
  { label: "Programación", href: "/programacion" },
  { label: "Aliados", href: "/aliados" },
  { label: "Prensa", href: "/prensa" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="site-nav">
      <Link href="/" className="nav-logo">
        <Image
          src="/images/logo-header.png"
          alt="FICC Los Cabos"
          width={36}
          height={32}
          style={{ height: 32, width: "auto" }}
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="nav-links hidden lg:flex">
        {navItems.map((item) => (
          <li key={item.label} className="nav-item">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href="/comunidad" className="nav-cta hidden lg:inline-flex">
        Únete a la comunidad
      </Link>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            width: 24, height: 2, background: "#0D1520", display: "block",
            transition: "transform .2s",
            transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}
        />
        <span
          style={{
            width: 24, height: 2, background: "#0D1520", display: "block",
            transition: "opacity .2s",
            opacity: mobileOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 24, height: 2, background: "#0D1520", display: "block",
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
            position: "absolute", top: 60, left: 0, right: 0,
            background: "#F4EFE3", padding: "1rem 1.5rem",
            borderTop: "1px solid rgba(0,0,0,.08)",
            zIndex: 200,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", padding: "0.75rem 0",
                fontFamily: "var(--font-inter)", fontWeight: 600,
                fontSize: "0.95rem", textTransform: "uppercase", color: "#0D1520",
                letterSpacing: "0.04em", textDecoration: "none",
                borderBottom: "1px solid rgba(0,0,0,.06)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/comunidad"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block", marginTop: "1rem", padding: "0.75rem 1.5rem",
              background: "#0D1520", color: "#F4EFE3", textAlign: "center",
              fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase",
              letterSpacing: "0.05em", textDecoration: "none",
            }}
          >
            Únete a la comunidad
          </Link>
        </div>
      )}
    </nav>
  );
}
