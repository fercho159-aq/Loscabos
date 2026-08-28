import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GPLGIConvocatoriaCTA from "@/components/GPLGIConvocatoriaCTA";
import GPLGIAnimations from "@/components/GPLGIAnimationsLazy";

export const metadata: Metadata = {
  title: "Guión para la Gran Industria | Convocatoria de Guion FICC Los Cabos",
  description:
    "Convocatoria especializada en guion cinematográfico de largometraje del FICC Los Cabos. Estímulo económico, taller de pulido y producción para guionistas.",
  alternates: { canonical: "/guion-para-la-gran-industria" },
  openGraph: {
    title: "Guión para la Gran Industria | Convocatoria de Guion FICC Los Cabos",
    description:
      "Convocatoria especializada en guion cinematográfico de largometraje del FICC Los Cabos. Estímulo económico, taller de pulido y producción para guionistas.",
    url: "/guion-para-la-gran-industria",
  },
};

// Aliados de la convocatoria (carrusel infinito, mismo patrón que FFGF).
const aliadosGPLGI = [
  { name: "Lemon Studios", logo: "/images/aliados/FICC_Logos_Aliados_2026-lemon-films.png" },
  { name: "Irreversible Pictures", logo: "/images/aliados/FICC_Logos_Aliados_2026-irreversible-pictures.png" },
  { name: "Filma Jalisco", logo: "/images/aliados/FICC_Logos_Aliados_2026-filma-jalisco.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
];
const aliadosGPLGITrack = [...aliadosGPLGI, ...aliadosGPLGI];

const datos = [
  { value: "$100,000", unit: "MXN", label: "Estímulo económico" },
  { value: "24", unit: "SEP", label: "Apertura de convocatoria" },
  { value: "2", unit: "casas", label: "Productoras que producen el proyecto" },
  { value: "1", unit: "guion", label: "Largometraje de ficción" },
];

// El primer beneficio se pinta como tarjeta destacada.
const beneficios = [
  { title: "Estímulo económico", desc: "$100,000 MXN para el guionista seleccionado.", featured: true },
  { title: "Taller de pulido", desc: "Sesiones de trabajo sobre el guion con Lemon Studios e Irreversible Pictures." },
  { title: "Producción", desc: "El proyecto se produce de la mano de las dos casas productoras." },
  { title: "Regalías", desc: "Vía SOGEM y derechos de autor." },
  { title: "Crédito como guionista", desc: "Con posible crédito compartido con un co-guionista de apoyo." },
  { title: "Visibilidad", desc: "Dentro del ecosistema del FICC Los Cabos 2026." },
];

export default function GuionParaLaGranIndustria() {
  return (
    <div className="gplgi-page">
      <Navbar />

      {/* ── HERO: video loop (ex-GIF 13.8 MB) + logo + datos clave ── */}
      <section className="gplgi-hero">
        <video
          aria-hidden="true"
          className="gplgi-hero__video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/gplgi-hero-poster.jpg"
        >
          <source src="/images/gplgi-hero.webm" type="video/webm" />
          <source src="/images/gplgi-hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="gplgi-hero__overlay" />

        <div className="gplgi-hero__inner">
          <span data-anim="gplgi-hero-item" className="gplgi-eyebrow gplgi-eyebrow--light">
            Convocatoria 2026 · Guion de largometraje de ficción
          </span>
          <h1 data-anim="gplgi-hero-logo" className="gplgi-hero__logo">
            <Image
              src="/images/Guion_Logo-02.png"
              alt="Guión para la Gran Industria"
              width={1927}
              height={814}
              sizes="(max-width: 768px) 92vw, 760px"
              priority
              fetchPriority="high"
              style={{ width: "100%", height: "auto" }}
            />
          </h1>
          <p data-anim="gplgi-hero-item" className="gplgi-hero__lede">
            Lemon Studios, Irreversible Pictures y Filma Jalisco, junto al FICC Los Cabos,
            buscan el próximo guion que llegue a la pantalla grande.
          </p>
          <div data-anim="gplgi-hero-item" className="gplgi-hero__actions">
            <a href="#gplgi-convocatoria" className="cta-button gplgi-cta">Conoce la convocatoria</a>
            <a href="#gplgi-beneficios" className="gplgi-link-arrow">
              Ver beneficios
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── DATOS CLAVE: banda amarilla del logo ── */}
      <section id="gplgi-datos" className="gplgi-stats" aria-label="Datos clave de la convocatoria">
        <div className="gplgi-stats__inner" data-anim="gplgi-stagger">
          {datos.map((d) => (
            <div key={d.label} className="gplgi-stat" data-anim="gplgi-stagger-item">
              <div className="gplgi-stat__value">
                {d.value}
                <span className="gplgi-stat__unit">{d.unit}</span>
              </div>
              <p className="gplgi-stat__label">{d.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACERCA ── */}
      <section id="gplgi-acerca" className="gplgi-section gplgi-section--white">
        <div className="gplgi-container gplgi-split">
          <div className="gplgi-split__head" data-anim="gplgi-reveal">
            <span className="gplgi-eyebrow">Acerca de la convocatoria</span>
            <h2 className="gplgi-h2">
              Del guion a la{" "}
              <span className="gplgi-mark" data-anim="gplgi-mark">pantalla grande</span>.
            </h2>
          </div>
          <div className="gplgi-split__body" data-anim="gplgi-reveal">
            <p className="gplgi-body gplgi-body--lg">
              Las casas productoras Lemon Studios e Irreversible Pictures, en alianza con Filma Jalisco y el
              Festival Internacional de Cine y Creatividad Los Cabos en su 14.ª edición, invitan a guionistas a
              participar en la convocatoria especializada en guion cinematográfico de largometraje: un programa
              para el desarrollo de proyectos cinematográficos de ficción.
            </p>
          </div>
        </div>
      </section>

      {/* ── VISIÓN Y OBJETIVOS ── */}
      <section id="gplgi-vision" className="gplgi-section gplgi-section--cream">
        <div className="gplgi-container gplgi-split">
          <div className="gplgi-split__head" data-anim="gplgi-reveal">
            <span className="gplgi-eyebrow">Visión y objetivos</span>
            <h2 className="gplgi-h2">Historias viables, sólidas y listas para producirse.</h2>
          </div>
          <div className="gplgi-split__body gplgi-objetivos" data-anim="gplgi-stagger">
            <div className="gplgi-objetivo" data-anim="gplgi-stagger-item">
              <span className="gplgi-num">01</span>
              <p className="gplgi-body">
                Impulsar el crecimiento profesional de creadores cinematográficos mediante estímulos económicos y
                asesorías especializadas que permitan consolidar historias con alto potencial de producción para
                el mercado nacional.
              </p>
            </div>
            <div className="gplgi-objetivo" data-anim="gplgi-stagger-item">
              <span className="gplgi-num">02</span>
              <p className="gplgi-body">
                Acompañar a los guionistas hasta la pantalla grande, de la mano de Lemon Studios, Irreversible
                Pictures y Filma Jalisco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS: sección oscura, grid de tarjetas ── */}
      <section id="gplgi-beneficios" className="gplgi-section gplgi-section--dark">
        <div className="gplgi-container">
          <div className="gplgi-dark-head" data-anim="gplgi-reveal">
            <span className="gplgi-eyebrow gplgi-eyebrow--light">Beneficios</span>
            <h2 className="gplgi-h2 gplgi-h2--light">Lo que recibe el guionista seleccionado</h2>
          </div>
          <ol className="gplgi-benefits" data-anim="gplgi-stagger">
            {beneficios.map((b, i) => (
              <li
                key={b.title}
                className={`gplgi-benefit${b.featured ? " gplgi-benefit--featured" : ""}`}
                data-anim="gplgi-stagger-item"
              >
                <span className="gplgi-benefit__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="gplgi-benefit__title">{b.title}</h3>
                <p className="gplgi-benefit__desc">{b.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CONVOCATORIA / CTA ── */}
      <section id="gplgi-convocatoria" className="gplgi-convocatoria">
        <div className="gplgi-container gplgi-convocatoria__inner" data-anim="gplgi-reveal">
          <span className="gplgi-eyebrow">Convocatoria 2026</span>
          <p className="gplgi-convocatoria__date">
            <span className="gplgi-convocatoria__date-label">Apertura</span>
            <span className="gplgi-convocatoria__date-value">24 de septiembre</span>
          </p>
          <p className="gplgi-body gplgi-convocatoria__copy">
            Prepara tu guion de largometraje de ficción. Las bases completas y el formulario de aplicación se
            publicarán en esta página.
          </p>
          <GPLGIConvocatoriaCTA />
        </div>
      </section>

      {/* ── ALIADOS: pleca + carrusel infinito (patrón del sitio) ── */}
      <section className="aliados-plaque">
        <p
          className="aliados-plaque-quote"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400 }}
        >
          Con el apoyo de aliados estratégicos que hacen posible impulsar el talento guionístico mexicano.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosGPLGITrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image
                  src={a.logo}
                  alt={`Logo de ${a.name}, aliado de Guión para la Gran Industria`}
                  width={320}
                  height={220}
                  sizes="(max-width: 768px) 320px, 240px"
                  loading="lazy"
                  style={{ width: "auto", maxHeight: 170, height: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <GPLGIAnimations />
    </div>
  );
}
