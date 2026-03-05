"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "El Festival",
    href: "/el-festival",
    children: ["Acerca de", "Historia", "Equipo"],
  },
  {
    label: "Programación",
    href: "#",
    children: ["Selección Oficial", "Galas", "Secciones Especiales"],
  },
  {
    label: "Industria",
    href: "#",
    children: ["Gabriel Figueroa Film Fund", "Cabos in Progress", "Blood Window"],
  },
  {
    label: "Comunidad",
    href: "#",
    children: ["Prensa", "Patrocinadores", "Voluntarios"],
  },
  {
    label: "Convocatorias",
    href: "#",
    children: ["Cortometrajes", "Largometrajes", "Industria"],
  },
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
            <Link href={item.href}>
              {item.label} ▾
            </Link>
            <div className="nav-dropdown">
              {item.children.map((child) => (
                <Link key={child} href="#">
                  {child}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>

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
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
