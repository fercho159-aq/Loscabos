"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientBlobs } from "@/components/three";
import { ScrollContainer } from "@/components/ScrollAnimations";
import PageHero from "@/components/PageHero";

const convocatorias = [
  {
    status: "Abierta",
    title: "La Baja Inspira",
    deadline: "Cierre: 15 de junio, 2026",
    description:
      "Convocatoria dirigida a cineastas y creativos de Baja California Sur. Presenta tu proyecto y forma parte de un programa de formación, desarrollo y producción con alcance internacional.",
    href: "/convocatorias/la-baja-inspira",
    cta: "Inscríbete ahora",
    bg: "bg-lime",
    image: "/images/webpdf/img-025.jpg",
    accent: "#BDC957",
  },
  {
    status: "Abierta",
    title: "Fondo Fílmico Gabriel Figueroa",
    deadline: "Cierre: 30 de julio, 2026",
    description:
      "Postula tu largometraje latinoamericano en etapa de postproducción para recibir apoyo financiero y acompañamiento profesional del fondo más importante del festival.",
    href: "/convocatorias/abiertas",
    cta: "Postula tu proyecto",
    bg: "bg-lavender",
    image: "/images/webpdf/img-055.jpg",
    accent: "#6687C3",
  },
];

export default function Convocatorias() {
  return (
    <ScrollContainer>
      <Navbar />

      {/* Hero */}
      <PageHero lines={["Convocatorias"]} />

      {/* Timeline layout — unique to this page */}
      <section className="conv-timeline">
        <div className="conv-timeline-line gsap-line-reveal" />
        {convocatorias.map((c, i) => (
          <div key={c.title} className={`conv-timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
            {/* Timeline dot */}
            <div className="conv-timeline-dot gsap-scale-in" style={{ background: c.accent }} />

            {/* Image */}
            <div className={`conv-timeline-img gsap-clip-reveal`}>
              <Image
                src={c.image}
                alt={`${c.title} — convocatoria FICC Los Cabos`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Content card */}
            <div className={`conv-timeline-card ${c.bg} ${i % 2 === 0 ? "gsap-fade-left" : "gsap-fade-right"}`}>
              <div className="conv-color-header">
                <span className="conv-color-status">{c.status}</span>
                <span className="conv-color-deadline">{c.deadline}</span>
              </div>
              <h3 className="plat-title">{c.title}</h3>
              <p className="plat-desc">{c.description}</p>
              <Link href={c.href} className="plat-cta">
                {c.cta} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Archive link */}
      <section className="conv-archive" style={{ position: "relative", overflow: "hidden" }}>
        <GradientBlobs
          color1="#081722"
          color2="#081722"
          color3="#6687C3"
          speed={0.08}
        />
        <div className="conv-archive-inner" style={{ position: "relative", zIndex: 2 }}>
          <h2 className="conv-archive-title gsap-fade-up">Archivo / Ediciones Anteriores</h2>
          <p className="conv-archive-text gsap-fade-up">
            Consulta las convocatorias de ediciones pasadas, proyectos seleccionados
            y ganadores. Descubre la trayectoria de los talentos que han pasado por
            el FICC Los Cabos.
          </p>
          <Link href="/convocatorias/archivo" className="conv-archive-link gsap-fade-up">
            Ver archivo completo &rarr;
          </Link>
        </div>
      </section>

      {/* Bottom band */}
      <section className="hashtag-band-overlap">
        <h2>#BeyondTheScreen</h2>
        <p>Tu proyecto puede ser parte de la próxima edición</p>
      </section>

      <Footer />
    </ScrollContainer>
  );
}
