import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FFGFAnimations from "@/components/FFGFAnimationsLazy";
import SubscribeCTA from "@/components/SubscribeCTA";

export const metadata: Metadata = {
  title: "Fondo Fílmico Gabriel Figueroa | Financiamiento Cinematográfico",
  description:
    "El Fondo Fílmico Gabriel Figueroa apoya proyectos cinematográficos de la región de Baja California Sur. Financia tu próxima película en México.",
  keywords: [
    "Fondo Fílmico Gabriel Figueroa",
    "FFGF",
    "FFGF FICC",
    "Gabriel Figueroa",
    "Financiamiento cinematográfico",
    "Financiamiento de cine",
    "Financiamiento de películas",
    "Apoyo a cineastas",
    "Apoyo a productores",
    "Apoyo a proyectos cinematográficos",
    "Fondo para cine mexicano",
    "Fondo de cine",
    "Fondo cinematográfico",
    "Convocatoria FFGF",
    "Convocatoria FFGF 2026",
    "Convocatoria de cine 2026",
    "Convocatoria cinematográfica",
    "Convocatoria para cineastas",
    "Convocatoria post-producción",
    "Work in Progress",
    "Cine en desarrollo",
    "Desarrollo de proyectos cinematográficos",
    "Producción cinematográfica",
    "Post-producción de cine",
    "Cine Mexicano",
    "Cine Iberoamericano",
    "Cine Latinoamericano",
    "Cine independiente México",
    "Cine de autor",
    "Largometraje mexicano",
    "Largometrajes en desarrollo",
    "Documental mexicano",
    "Ficción mexicana",
    "Ópera prima",
    "Directores emergentes",
    "Productoras independientes",
    "Baja California Sur",
    "Los Cabos",
    "FICC Los Cabos",
    "Festival Internacional de Cine y Creatividad",
    "Premiación FFGF",
    "Ganadores FFGF",
    "Ganadora FFGF",
    "Selección Oficial FFGF",
    "La Camarista",
    "Tempestad",
    "Lila Avilés",
    "Tatiana Huezo",
    "Premios Ariel",
    "Premios Goya",
    "Berlinale",
    "IMCINE",
    "Cinéfilos México",
    "Industria del cine en México",
    "Apoyos al cine 2026",
    "Beyond The Screen",
  ],
  alternates: { canonical: "/ffgf" },
  openGraph: {
    title: "Fondo Fílmico Gabriel Figueroa | Financiamiento Cinematográfico",
    description:
      "El Fondo Fílmico Gabriel Figueroa apoya proyectos cinematográficos de la región de Baja California Sur. Financia tu próxima película en México.",
    url: "/ffgf",
  },
};

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
  { title: "Africa Express (2025)", director: "Emilio Guerrero", desc: "El registro de la colisión entre Damon Albarn (Blur/Gorillaz) y México. Un puente entre el britpop y los ritmos africanos en suelo azteca.", tag: "Selección Oficial", still: "/images/stills/africa-express.jpg" },
  { title: "El sinaloense (2025)", director: "Luis Kles", desc: "Más allá del folclore, una exploración de la identidad y el mito. Una búsqueda por desmitificar el estigma para encontrar la esencia del norte.", tag: "Selección Oficial", still: "/images/stills/el-sinaloense.jpg" },
  { title: "Casa de guerreras (2025)", director: "Alejandro Paredes", desc: "Un retrato de resiliencia femenina. Se aleja del drama convencional para enfocarse en la fuerza colectiva y el legado de lucha.", tag: "Selección Oficial", still: "/images/stills/casa-de-guerreras.jpg" },
  { title: "Al interior del fuego (2025)", director: "TaGolfo de California a Acuña", desc: "Cine de sensaciones. La dualidad entre destrucción y creación, usando el fuego como metáfora visual de la transformación personal.", tag: "Selección Oficial", still: "/images/stills/al-interior-del-fuego.jpg" },
  { title: "Un lugar para volver (2025)", director: "Amanda Pérez Contreras", desc: "Una búsqueda sobre el desarraigo y el paisaje irreconocible al volver a casa. Un tema universal tratado con una estética muy personal.", tag: "Selección Oficial", still: "/images/stills/un-lugar-para-volver.jpg" },
  { title: "La Camarista (2017)", director: "Lila Avilés", desc: "Ganadora del Fondo Fílmico Gabriel Figueroa. Representante de México en los Premios Oscar y Premios Goya.", tag: "Ganadora FFGF", still: "/images/stills/la-camarista.jpg" },
  { title: "Tempestad (2015)", director: "Tatiana Huezo", desc: "Impulsada en etapa de Work in Progress. Mención Especial en la Berlinale y ganadora de 3 Premios Ariel.", tag: "Ganadora FFGF", still: "/images/stills/tempestad.jpg" },
];

export default function FFGF() {
  return (
    <div className="ffgf-page">
      <style>{`html, body { background: #fff !important; }`}</style>
      <Navbar />

      <PageHero lines={["Fondo Fílmico", "Gabriel Figueroa"]} hideStrip short />

      {/* Descripción — Image left, text right (matches lbi-desc-grid pattern) */}
      <section id="ffgf-desc-section" style={{ minHeight: "auto", display: "flex", alignItems: "center", padding: "clamp(1.5rem, 3vw, 2rem)", maxWidth: 1200, margin: "0 auto", marginBottom: "clamp(1.5rem, 4vw, 3rem)" }}>
        <div className="lbi-desc-grid">
          <div data-anim="ffgf-image" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <Image src="/images/ffgf-logo.png" alt="Logo del Fondo Fílmico Gabriel Figueroa — FICC Los Cabos" width={500} height={400} priority sizes="(max-width: 768px) 90vw, 500px" style={{ objectFit: "contain", width: "100%", maxWidth: 500, height: "auto" }} />
          </div>
          <div>
            <p data-anim="ffgf-typewriter" style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.05rem, 1.8vw, 1.5rem)", color: "#000", lineHeight: 1.4, marginBottom: "1rem", fontWeight: 400 }}>
              Fortalece la industria audiovisual mexicana al generar una vinculaci&oacute;n efectiva entre cineastas y empresas
              estrat&eacute;gicas del sector. Mediante apoyos especializados, mentor&iacute;as y redes internacionales de colaboraci&oacute;n,
              el programa impulsa la finalizaci&oacute;n y circulaci&oacute;n global de nuevas obras.
            </p>
            <p data-anim="ffgf-typewriter" style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.05rem, 1.8vw, 1.5rem)", color: "#000", lineHeight: 1.4, marginBottom: "1rem", fontWeight: 400 }}>
              Esta iniciativa posiciona al FICCLosCabos como una plataforma activa de empoderamiento cinematogr&aacute;fico
              y conexi&oacute;n profesional entre M&eacute;xico y el mundo, proyectando el talento de M&eacute;xico a la escena internacional.
            </p>
            <div data-anim="ffgf-dates" className="section-dates">
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.05rem, 1.8vw, 1.5rem)", color: "#000", lineHeight: 1.4, fontWeight: 400, marginBottom: "1rem" }}>Apertura de convocatoria: Agosto 2026</p>
            </div>
            <SubscribeCTA
              source="ffgf"
              label="Sé el primero en recibir la información de la convocatoria"
              title="Fondo Fílmico Gabriel Figueroa 2026"
              description="Déjanos tus datos y recibe la información de la convocatoria FFGF en cuanto se abra."
              className="cta-button"
              dataAnim="ffgf-cta"
              style={{ marginTop: "1.5rem" }}
            />
          </div>
        </div>
      </section>


      {/* Legado FFGF — dark section pattern (matches la-baja-inspira legado) */}
      <section className="relative w-full flex flex-col overflow-hidden" style={{ background: "#0A1E23" }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plataformas-impulso/ffgf-bg.jpg"
            alt="Cine mexicano"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, .5)" }} />
        </div>

        <div className="relative z-10 shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[10rem] md:pl-[15rem]">
          <span data-anim="ffgf-legado-eyebrow" className="text-[20px] md:text-[26px] font-black tracking-[.05em] leading-tight text-white/60 mb-6 block">
            Historias que trascienden
          </span>
          <h2 className="text-[42px] md:text-[58px] font-black text-white leading-[1.0] max-w-[520px] mb-6">
            {"Ganadores de Ediciones Anteriores".split(" ").map((word, wi) => (
              <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                {word.split("").map((char, ci) => (
                  <span key={ci} data-anim="ffgf-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </span>
            ))}
          </h2>
          <p data-anim="ffgf-legado-desc" className="text-white/80 max-w-[820px] leading-[1.5]" style={{ fontSize: "clamp(1.3rem, 1.8vw, 1.75rem)", fontFamily: "var(--font-inter)" }}>
            Conoce algunas de las obras y ganadores que han proyectado el cine mexicano hacia el mercado global con el respaldo de FICCLosCabos.
          </p>
        </div>

        <div className="relative z-10" style={{ padding: "0 2rem 5rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div className="legado-grid">
            {perfiles.map((p) => (
              <div key={p.title} data-anim="ffgf-legado-card" className="flip-card ffgf-flip">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src={p.still} alt={`Still de ${p.title} — Fondo Fílmico Gabriel Figueroa, FICC Los Cabos`} fill sizes="(max-width: 768px) 50vw, 300px" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="flip-card-back">
                    <span className="ffgf-film-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    {p.director && <p style={{ fontWeight: 400, marginBottom: "0.5rem" }}>{p.director}</p>}
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aliados FFGF */}
      <section data-anim="ffgf-aliados" className="aliados-plaque">
        <p data-anim="ffgf-aliados-quote" className="aliados-plaque-quote" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400 }}>
          Gracias a nuestros patrocinadores y aliados, que hacen posible hacer del Fondo Gabriel Figueroa un motor de formación y financiamiento del cine mexicano.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosFFGFTrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={`Logo de ${a.name}, aliado del FICC Los Cabos`} width={320} height={220} sizes="(max-width: 768px) 320px, 240px" loading="lazy"
                  style={{ width: "auto", maxHeight: 170, height: "auto", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FFGFAnimations />
    </div>
  );
}
