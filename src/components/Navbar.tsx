"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "El Festival",
    href: "/el-festival",
    children: [
      { label: "Sobre el Festival", href: "/el-festival" },
      { label: "#BeyondTheScreen", href: "/el-festival/beyond-the-screen" },
      { label: "Ediciones anteriores", href: "/el-festival/ediciones-anteriores" },
      { label: "Ecosistema", href: "/el-festival/ecosistema" },
      { label: "Aliados y partners de destino", href: "/el-festival/aliados" },
    ],
  },
  {
    label: "Plataformas de impulso",
    href: "/plataformas-de-impulso",
    children: [
      { label: "La Baja Inspira", href: "/plataformas-de-impulso/la-baja-inspira" },
      { label: "Fondo Fílmico Gabriel Figueroa", href: "/plataformas-de-impulso/fondo-filmico-gabriel-figueroa" },
      { label: "Frequencies of Now", href: "/plataformas-de-impulso/frequencies-of-now" },
      { label: "Semillas del desierto – Emerging Film Makers", href: "/plataformas-de-impulso/semillas-del-desierto" },
      { label: "Miradas al sur", href: "/plataformas-de-impulso/miradas-al-sur" },
    ],
  },
  {
    label: "Programación",
    href: "/programacion",
    children: [
      { label: "Selección oficial 2026", href: "/programacion/seleccion-oficial" },
      { label: "#BeyondTheScreen Arte Digital, Música y Animación", href: "/programacion/beyond-the-screen" },
    ],
  },
  {
    label: "Comunidad",
    href: "/comunidad",
    children: [
      { label: "Comunidad creativa", href: "/comunidad/comunidad-creativa" },
      { label: "Aliados y partners", href: "/comunidad/aliados-y-partners" },
      { label: "Embajadores", href: "/comunidad/embajadores" },
      { label: "Suscripción a Newsletter", href: "/comunidad/newsletter" },
    ],
  },
  {
    label: "Convocatorias",
    href: "/convocatorias",
    children: [
      { label: "Abiertas", href: "/convocatorias/abiertas" },
      { label: "La Baja Inspira", href: "/convocatorias/la-baja-inspira" },
      { label: "Archivo / ediciones anteriores", href: "/convocatorias/archivo" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
                <Link key={child.label} href={child.href}>
                  {child.label}
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
            zIndex: 200,
          }}
        >
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: "1px solid rgba(0,0,0,.06)" }}>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  width: "100%", padding: "0.75rem 0", background: "none", border: "none",
                  cursor: "pointer", fontFamily: "var(--font-barlow)", fontWeight: 600,
                  fontSize: "0.95rem", textTransform: "uppercase", color: "#0D1520",
                  letterSpacing: "0.04em",
                }}
              >
                {item.label}
                <span style={{
                  transition: "transform .2s",
                  transform: mobileExpanded === item.label ? "rotate(180deg)" : "none",
                  fontSize: "0.75rem",
                }}>▾</span>
              </button>
              {mobileExpanded === item.label && (
                <div style={{ paddingLeft: "1rem", paddingBottom: "0.5rem" }}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                      style={{
                        display: "block", padding: "0.4rem 0", fontSize: "0.85rem",
                        color: "#0D1520", textDecoration: "none",
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
