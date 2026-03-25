import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const perfiles = [
  { title: "Africa Express (2025)", director: "Emilio Guerrero", desc: "El registro de la colisión entre Damon Albarn (Blur/Gorillaz) y México. Un puente entre el britpop y los ritmos africanos en suelo azteca.", tag: "Selección Oficial", still: "/images/stills/africa-express.png" },
  { title: "El sinaloense (2025)", director: "Luis Kles", desc: "Más allá del folclore, una exploración de la identidad y el mito. Una búsqueda por desmitificar el estigma para encontrar la esencia del norte.", tag: "Selección Oficial", still: "/images/stills/el-sinaloense.png" },
  { title: "Casa de guerreras (2025)", director: "Alejandro Paredes", desc: "Un retrato de resiliencia femenina. Se aleja del drama convencional para enfocarse en la fuerza colectiva y el legado de lucha.", tag: "Selección Oficial", still: "/images/stills/casa-de-guerreras.png" },
  { title: "Al interior del fuego (2025)", director: "TaGolfo de California a Acuña", desc: "Cine de sensaciones. La dualidad entre destrucción y creación, usando el fuego como metáfora visual de la transformación personal.", tag: "Selección Oficial", still: "/images/stills/al-interior-del-fuego.png" },
  { title: "Un lugar para volver (2025)", director: "Amanda Pérez Contreras", desc: "Una búsqueda sobre el desarraigo y el paisaje irreconocible al volver a casa. Un tema universal tratado con una estética muy personal.", tag: "Selección Oficial", still: "/images/stills/un-lugar-para-volver.png" },
  { title: "La Camarista (2017)", director: "Lila Avilés", desc: "Ganadora del Fondo Gabriel Figueroa. Representante de México en los Premios Oscar y Premios Goya.", tag: "Ganadora FFGF", still: "/images/stills/la-camarista.jpg" },
  { title: "Tempestad (2015)", director: "Tatiana Huezo", desc: "Impulsada en etapa de Work in Progress. Mención Especial en la Berlinale y ganadora de 3 Premios Ariel.", tag: "Ganadora FFGF", still: "/images/stills/tempestad.png" },
];

export default function FFGF() {
  return (
    <div className="ffgf-page">
      <style>{`html, body { background: #fff !important; }`}</style>
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
        </div>
      </section>

      <section style={{ padding: "3rem 2rem", maxWidth: 1200, margin: "0 auto", background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/ffgf-logo.png" alt="Fondo Fílmico Gabriel Figueroa" width={500} height={400} style={{ objectFit: "contain", width: "100%", maxWidth: 500, height: "auto" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Fortalece la industria audiovisual mexicana al generar una vinculaci&oacute;n efectiva entre cineastas y empresas
              estrat&eacute;gicas del sector. Mediante apoyos especializados, mentor&iacute;as y redes internacionales de colaboraci&oacute;n,
              el programa impulsa la finalizaci&oacute;n y circulaci&oacute;n global de nuevas obras.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Esta iniciativa posiciona al FICCLosCabos como una plataforma activa de empoderamiento cinematogr&aacute;fico
              y conexi&oacute;n profesional entre M&eacute;xico y el mundo, proyectando el talento de M&eacute;xico a la escena internacional.
            </p>
            <div className="section-dates">
              <p><strong>Apertura de convocatoria:</strong> Agosto 2026</p>
            </div>
            <a href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginTop: "1.5rem" }}>
              S&eacute; el primero en recibir la informaci&oacute;n de la convocatoria
            </a>
          </div>
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
            <span className="ffgf-legado-eyebrow" style={{ color: "#fff" }}>Historias que trascienden</span>
            <h2 className="ffgf-legado-title" style={{ color: "#fff" }}>Legado FFGF</h2>
            <p className="ffgf-legado-desc" style={{ color: "rgba(255,255,255,0.85)" }}>
              Conoce algunas de las obras y ganadores que han proyectado el cine mexicano hacia el mercado global con el respaldo de FICCLosCabos.
            </p>
          </div>
          <div className="ffgf-legado-grid">
            {perfiles.map((p) => (
              <div key={p.title} className="ffgf-film-card">
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                  <Image src={p.still} alt={p.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                  <span className="ffgf-film-tag">{p.tag}</span>
                  <h4 className="ffgf-film-title">{p.title}</h4>
                  <p className="ffgf-film-director">{p.director}</p>
                  <p className="ffgf-film-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
