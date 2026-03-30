import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aliadosFFGF = [
  { name: "Aliado FFGF 1", logo: "/images/aliados-ffgf/aliado-ffgf-13.png" },
  { name: "Aliado FFGF 2", logo: "/images/aliados-ffgf/aliado-ffgf-14.png" },
  { name: "Aliado FFGF 3", logo: "/images/aliados-ffgf/aliado-ffgf-15.png" },
  { name: "Aliado FFGF 4", logo: "/images/aliados-ffgf/aliado-ffgf-16.png" },
  { name: "Aliado FFGF 5", logo: "/images/aliados-ffgf/aliado-ffgf-17.png" },
  { name: "Aliado FFGF 6", logo: "/images/aliados-ffgf/aliado-ffgf-18.png" },
];
const aliadosFFGFTrack = [...aliadosFFGF, ...aliadosFFGF];

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
            <h2 className="ffgf-legado-title" style={{ color: "#fff" }}>GANADORES DE EDICIONES ANTERIORES</h2>
            <p className="ffgf-legado-desc" style={{ color: "rgba(255,255,255,0.85)" }}>
              Conoce algunas de las obras y ganadores que han proyectado el cine mexicano hacia el mercado global con el respaldo de FICCLosCabos.
            </p>
          </div>
          <div className="legado-grid">
            {perfiles.map((p) => (
              <div key={p.title} className="flip-card ffgf-flip">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src={p.still} alt={p.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="flip-card-back">
                    <span className="ffgf-film-tag">{p.tag}</span>
                    <h4>{p.title}</h4>
                    {p.director && <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{p.director}</p>}
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aliados FFGF */}
      <section className="aliados-plaque">
        <h3 className="aliados-plaque-title">Aliados Fondo Filmico Gabriel Figueroa</h3>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosFFGFTrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={a.name} width={240} height={120}
                  style={{ width: "auto", height: 120, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
