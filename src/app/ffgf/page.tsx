import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const perfiles = [
  { title: "Africa Express (2025)", director: "Emilio Guerrero", desc: "El registro de la colisi\u00f3n entre Damon Albarn (Blur/Gorillaz) y M\u00e9xico.", tag: "Selecci\u00f3n Oficial" },
  { title: "El sinaloense (2025)", director: "Luis Kles", desc: "M\u00e1s all\u00e1 del folclore, una exploraci\u00f3n de la identidad y el mito.", tag: "Selecci\u00f3n Oficial" },
  { title: "Casa de guerreras (2025)", director: "Alejandro Paredes", desc: "Un retrato de resiliencia femenina.", tag: "Selecci\u00f3n Oficial" },
  { title: "Al interior del fuego (2025)", director: "TaGolfo de California a Acu\u00f1a", desc: "Cine de sensaciones. La dualidad entre destrucci\u00f3n y creaci\u00f3n.", tag: "Selecci\u00f3n Oficial" },
  { title: "Un lugar para volver (2025)", director: "Amanda P\u00e9rez Contreras", desc: "Una b\u00fasqueda sobre el desarraigo y el paisaje irreconocible al volver a casa.", tag: "Selecci\u00f3n Oficial" },
  { title: "La Camarista (2017)", director: "Lila Avil\u00e9s", desc: "Ganadora del Fondo Gabriel Figueroa. Representante de M\u00e9xico en los Premios Oscar y Premios Goya.", tag: "Ganadora FFGF" },
  { title: "Tempestad (2015)", director: "Tatiana Huezo", desc: "Impulsada en etapa de Work in Progress. Menci\u00f3n Especial en la Berlinale.", tag: "Work in Progress" },
];

export default function FFGF() {
  return (
    <>
      <Navbar />

      <section className="page-hero" style={{ minHeight: "50vh" }}>
        <div className="page-hero-bg">
          <Image
            src="/images/plataformas-impulso/cinema-01.jpg"
            alt="Cinema"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <h1 className="page-hero-title">Fondo F&iacute;lmico<br />Gabriel Figueroa</h1>
          <p className="page-hero-subtitle">
            Fortalece la industria audiovisual mexicana
          </p>
        </div>
      </section>

      <section className="section-text">
        <div className="section-text-inner">
          <p>
            Fortalece la industria audiovisual mexicana al generar una vinculaci&oacute;n efectiva entre cineastas y empresas
            estrat&eacute;gicas del sector. Mediante apoyos especializados, mentor&iacute;as y redes internacionales de colaboraci&oacute;n,
            el programa impulsa la finalizaci&oacute;n y circulaci&oacute;n global de nuevas obras.
          </p>
          <p>
            Esta iniciativa posiciona al FICCLosCabos como una plataforma activa de empoderamiento cinematogr&aacute;fico
            y conexi&oacute;n profesional entre M&eacute;xico y el mundo.
          </p>
          <div className="section-dates">
            <p><strong>Apertura de convocatoria:</strong> Agosto 2026</p>
          </div>
          <Link href="/comunidad" className="cta-button" style={{ marginTop: "1.5rem" }}>
            S&eacute; el primero en recibir informaci&oacute;n
          </Link>
        </div>
      </section>

      {/* Legado FFGF — con fondo cinematográfico */}
      <section className="ffgf-legado">
        <div className="ffgf-legado-bg">
          <Image
            src="/images/plataformas-impulso/ffgf-bg.jpg"
            alt="Cine mexicano"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="ffgf-legado-overlay" />
        </div>
        <div className="ffgf-legado-inner">
          <div className="ffgf-legado-header">
            <span className="ffgf-legado-eyebrow">Historias que trascienden</span>
            <h2 className="ffgf-legado-title">Legado FFGF</h2>
            <p className="ffgf-legado-desc">
              Conoce algunas de las obras y ganadores que han proyectado el cine mexicano hacia el mercado global con el respaldo de FICCLosCabos.
            </p>
          </div>
          <div className="ffgf-legado-grid">
            {perfiles.map((p, i) => (
              <div key={p.title} className="ffgf-film-card">
                <div className="ffgf-film-number">{String(i + 1).padStart(2, "0")}</div>
                <span className="ffgf-film-tag">{p.tag}</span>
                <h4 className="ffgf-film-title">{p.title}</h4>
                <p className="ffgf-film-director">{p.director}</p>
                <p className="ffgf-film-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
