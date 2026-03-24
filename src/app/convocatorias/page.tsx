"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingParticles, GradientBlobs } from "@/components/three";
import { ScrollContainer } from "@/components/ScrollAnimations";

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
    image: "/images/webpdf/img-025.png",
    accent: "#C5D44A",
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
    image: "/images/webpdf/img-055.png",
    accent: "#7B8FBF",
  },
  {
    status: "Abierta",
    title: "Frequencies of Now",
    deadline: "Cierre: 30 de agosto, 2026",
    description:
      "Buscamos propuestas que fusionen cine, música y arte digital. Si tu proyecto desafía los formatos tradicionales, esta convocatoria es para ti.",
    href: "/convocatorias/abiertas",
    cta: "Envía tu propuesta",
    bg: "bg-peach",
    image: "/images/webpdf/img-040.png",
    accent: "#E8A070",
  },
];

export default function Convocatorias() {
  return (
    <ScrollContainer>
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="/images/webpdf/img-005.png"
            alt="Convocatorias FICC Los Cabos"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <FloatingParticles count={50} color="#C5D44A" size={2} speed={0.05} />
        <div className="page-hero-content">
          <p className="page-hero-label">FICC Los Cabos 2026</p>
          <h1 className="page-hero-title">Convocatorias</h1>
          <p className="page-hero-subtitle">
            Inscribe tu proyecto y forma parte de la 14&ordf; edición del festival
          </p>
        </div>
      </section>

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
                alt={c.title}
                fill
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
          color2="#162840"
          color3="#1a3050"
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
