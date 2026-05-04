import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LBIAnimations from "@/components/LBIAnimationsLazy";
import SubscribeCTA from "@/components/SubscribeCTA";

export const metadata: Metadata = {
  title: "La Baja Inspira | Plataforma de la Industria Cinematográfica",
  description:
    "La Baja Inspira es la plataforma de impulso a la industria del cine del FICC Los Cabos. Talleres, pitching, coproducción y desarrollo de proyectos.",
  keywords: [
    "La Baja Inspira",
    "LBI",
    "La Baja Inspira FICC",
    "Plataforma de impulso",
    "Plataforma de la industria cinematográfica",
    "Plataforma de cine",
    "Industria cinematográfica",
    "Industria del cine en México",
    "Industria audiovisual",
    "Profesionalización cinematográfica",
    "Formación cinematográfica",
    "Educación en cine",
    "Talleres de cine",
    "Talleres FICC",
    "Masterclass cine",
    "Mentorías cinematográficas",
    "Pitching",
    "Pitching de proyectos",
    "Sesiones de pitching",
    "Coproducción",
    "Coproducción internacional",
    "Coproducción Iberoamericana",
    "Desarrollo de proyectos",
    "Desarrollo de guion",
    "Work in Progress",
    "Convocatorias",
    "Convocatorias FICC",
    "Convocatorias de cine 2026",
    "Plataformas de impulso",
    "FICC Los Cabos",
    "Festival Internacional de Cine y Creatividad",
    "Comité de la industria",
    "Comité curatorial",
    "ESCINE",
    "IMCINE",
    "Aliados de la industria",
    "Cineastas emergentes",
    "Productores emergentes",
    "Guionistas mexicanos",
    "Directoras mexicanas",
    "Directores mexicanos",
    "Talento iberoamericano",
    "Networking cine",
    "Encuentros de industria",
    "Mercado de cine",
    "Foros de coproducción",
    "Cine Mexicano",
    "Cine Iberoamericano",
    "Cine Latinoamericano",
    "Baja California Sur",
    "Los Cabos",
    "Fondo Fílmico Gabriel Figueroa",
    "FFGF",
    "Beyond The Screen",
    "Diciembre 2026",
    "Edición 2026 FICC",
  ],
  alternates: { canonical: "/la-baja-inspira" },
  openGraph: {
    title: "La Baja Inspira | Plataforma de la Industria Cinematográfica",
    description:
      "La Baja Inspira es la plataforma de impulso a la industria del cine del FICC Los Cabos. Talleres, pitching, coproducción y desarrollo de proyectos.",
    url: "/la-baja-inspira",
  },
};

const aliadosInstitucionales = [
  { name: "ESCINE", logo: "/images/aliados-lbi/escine.png" },
  { name: "IMCINE / Cultura", logo: "/images/aliados-lbi/imcine.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados-lbi/puerto-los-cabos.png" },
];

const comite = [
  {
    name: "Juan Patricio Riveroll",
    desc: "Director, productor y novelista con una destacada trayectoria en la creaci\u00f3n audiovisual y la gesti\u00f3n p\u00fablica.",
    img: "/images/comite/juan-patricio-riveroll.jpg",
  },
  {
    name: "Iv\u00e1n Carrillo",
    desc: "Periodista, conductor y productor independiente especializado en ciencia, salud y medio ambiente.",
    img: "/images/comite/ivan-carrillo.jpg",
  },
];

const juradoEjes = [
  {
    eje: "01",
    titulo: "Biodiversidad y Naturaleza",
    members: [
      {
        name: "Alonso Rodr\u00edguez",
        nameUrl: "https://www.instagram.com/alonsordzp",
        desc: (
          <>
            Explorador, documentalista y fundador de{" "}
            <a href="https://www.instagram.com/maresdemexico/" target="_blank" rel="noopener noreferrer" className="lbi-jurado-link">Mares de M\u00e9xico</a>
            : una iniciativa dedicada a la investigaci\u00f3n, conservaci\u00f3n y difusi\u00f3n de la vida marina. Su trabajo se ha desarrollado principalmente en los oc\u00e9anos de M\u00e9xico, donde ha logrado posicionarse como una voz activa en la protecci\u00f3n de ecosistemas marinos a trav\u00e9s de la ciencia, la narrativa audiovisual y la experiencia directa en campo.
          </>
        ),
        img: "/images/jurado/alonso-rodriguez.jpg",
        imgPosition: "center 20%",
      },
      {
        name: "Hans Herrmann",
        nameUrl: "https://www.instagram.com/hans.herrmann__",
        desc: "Explorador y desarrollador de proyectos en el Pac\u00edfico mexicano; enfocado en la protecci\u00f3n de especies y h\u00e1bitats, con experiencia en conservaci\u00f3n marina aplicada.",
        img: "/images/jurado/hans-herrmann.jpg",
      },
      {
        name: "Jer\u00f3nimo Prieto",
        nameUrl: "https://www.instagram.com/jerochucho/",
        desc: (
          <>
            Fundador de{" "}
            <a href="https://www.instagram.com/pelagic_life/" target="_blank" rel="noopener noreferrer" className="lbi-jurado-link"><em>M\u00e9xico Pel\u00e1gico</em></a>
            , organizaci\u00f3n mexicana dedicada a la protecci\u00f3n de la vida marina de mar abierto desde 2008. Es cineasta y explorador, ha colaborado con National Geographic, BBC y Discovery Channel. Dirigi\u00f3 el documental premiado <em>M\u00e9xico Pel\u00e1gico</em> y produce su secuela.
          </>
        ),
        img: "/images/jurado/jeronimo-prieto.jpg",
      },
      {
        name: "Octavio Aburto",
        desc: "Investigador en Scripps Institution of Oceanography; especializado en ecosistemas marinos y conservaci\u00f3n, con enfoque cient\u00edfico aplicado a pol\u00edticas p\u00fablicas.",
        img: null,
      },
    ],
  },
  {
    eje: "02",
    titulo: "Memoria Hist\u00f3rica",
    members: [
      {
        name: "Michelin Cari\u00f1o",
        desc: "Investigadora y autora especializada en la historia de Baja California; su trabajo documenta la evoluci\u00f3n territorial y social de la pen\u00ednsula desde una perspectiva acad\u00e9mica s\u00f3lida.",
        img: null,
      },
      {
        name: "Dolores Heredia",
        desc: "Actriz y promotora cultural originaria de La Paz; su trayectoria est\u00e1 vinculada a la construcci\u00f3n y difusi\u00f3n de la identidad sudcaliforniana.",
        img: null,
      },
      {
        name: "Francisco Laresgoiti",
        desc: (<>Director de <em>Los Otros Californios</em>; su obra documenta la vida ranchera y la preservaci\u00f3n de tradiciones en el desierto de Baja California Sur.</>),
        img: null,
      },
      {
        name: "Alejandro Rivas",
        nameUrl: "https://www.instagram.com/alejandrorivasfoto",
        desc: (<>Fot\u00f3grafo de <em>La Recua</em>; su mirada visual explora el tiempo, el territorio y la permanencia de las pr\u00e1cticas culturales en la pen\u00ednsula.</>),
        img: "/images/jurado/alejandro-rivas.jpg",
      },
    ],
  },
  {
    eje: "03",
    titulo: "Econom\u00eda Sustentable",
    members: [
      {
        name: "Elena Fortes",
        desc: "Productora y gestora cultural; especializada en el desarrollo de plataformas que articulan cine, industria e impacto social con proyecci\u00f3n internacional.",
        img: null,
      },
      {
        name: "Eleonora Isunza",
        desc: "Directora de Cinema Planeta; referente en curadur\u00eda de cine socioambiental, con experiencia en evaluar proyectos de impacto ambiental y social.",
        img: null,
      },
      {
        name: "Inti Cordera",
        desc: "Director de DocsMX; su visi\u00f3n estrat\u00e9gica del documental permite evaluar el potencial de proyectos para su circulaci\u00f3n internacional.",
        img: null,
      },
      {
        name: "Pablo Ferrer",
        desc: "Fundador de Pesca del Futuro; especializado en modelos de pesca sostenible y regeneraci\u00f3n de ecosistemas marinos, con enfoque en innovaci\u00f3n y desarrollo territorial.",
        img: null,
      },
      {
        name: "Gabriela C\u00e1mara",
        desc: "Chef y empresaria; referente en sostenibilidad alimentaria y econom\u00eda regenerativa, con una visi\u00f3n integral sobre la relaci\u00f3n entre gastronom\u00eda, comunidad y territorio.",
        img: null,
      },
    ],
  },
];

const aliadosLBI = [
  { name: "Ánima Village", logo: "/images/aliados-lbi/anima-village.png" },
  { name: "Arte Abierto", logo: "/images/aliados-lbi/arte-abierto.png" },
  { name: "Cine de Verano", logo: "/images/aliados-lbi/cine-de-verano.png" },
  { name: "Pólvora", logo: "/images/aliados-lbi/polvora.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados-lbi/instituto-cultura-cabos.png" },
  { name: "Tropicana", logo: "/images/aliados-lbi/tropicana.png" },
  { name: "Baja Republic", logo: "/images/aliados-lbi/baja-republic.png" },
];
const aliadosLBITrack = [...aliadosLBI, ...aliadosLBI];


const perfilesLBI = [
  { title: "Ella se queda (2025)", director: "Marinthia Gutiérrez", desc: "Tras su paso por Cannes, se posiciona como el nuevo referente del cine de género en México. Una propuesta de estética neón que hipnotiza con su visión de la frontera.", poster: "/images/posters/ella-se-queda.jpeg" },
  { title: "Solía buscar la luz allá afuera (2025)", director: "Diego Hernández", desc: "Ganador del Puma de Plata en FICUNAM. Un maestro del minimalismo capaz de capturar la poesía en la cotidianidad más pura.", poster: "/images/posters/solia-buscar-la-luz.jpg" },
  { title: "Inmensidades (2025)", director: "Ricardo Benet", desc: "Una factura visual impecable. Una experiencia inmersiva diseñada para los amantes de la fotografía cinematográfica de alto nivel.", poster: "/images/posters/inmensidades.png" },
  { title: "Aguasol (2025)", director: "Camila Pardo Cerezo", desc: "Narrativa poderosa sobre la corporalidad; un vínculo crudo entre el natural y los procesos del cuerpo femenino.", poster: "/images/posters/aguasol.jpg" },
  { title: "El desvelo (2025)", director: "Pau Ortiz Rosell", desc: "Referente del cine híbrido. Una observación profunda de la psicología humana en estados de crisis y vigilia.", poster: "/images/posters/el-desvelo.png" },
  { title: "Entre dos tierras (2025)", director: "Sebastián del Callejo", desc: "Una historia necesaria sobre el sentido de pertenencia y las contradicciones de los contextos fronterizos.", poster: "/images/posters/entre-dos-tierras.png" },
  { title: "Diana de Ayer | ¿Cómo procurar un jardín? (2025)", director: "", desc: "Una metáfora visual sobre el cuidado y la paciencia, nacida para mantener viva la memoria familiar a través del tiempo.", poster: "/images/posters/como-procurar-un-jardin.jpeg" },
  { title: "Entre actores (2025)", director: "José Paredes", desc: "Disección fascinante de la mente del actor. Una mirada a lo que ocurre cuando las luces se apagan y las cámaras del Golfo de California se dejan de rodar.", poster: "/images/posters/entre-actores.png" },
  { title: "El brillo de la luciérnaga (2025)", director: "Augusto Reyes", desc: "Uso magistral de la luz natural en una atmósfera que redefine el realismo mágico moderno.", poster: "/images/posters/el-brillo-de-la-luciernaga.png" },
  { title: "La Recua (2021)", director: "Dir. Darío Higuera & Trudi Angell", desc: "El gran hito de la identidad sudcaliforniana. Un viaje épico que rescató la memoria de los rancheros de la sierra.", poster: "/images/posters/la-recua.jpg" },
  { title: "Sea of Shadows (2019)", director: "Prod. Leonardo DiCaprio", desc: "El vínculo entre la industria global y la urgencia ambiental del Golfo de California. El cine como herramienta de incidencia real.", poster: "/images/posters/sea-of-shadows.jpg" },
];

export default function LaBajaInspira() {
  return (
    <div className="lbi-page">
      <Navbar />

      <PageHero lines={["La Baja", "Inspira"]} hideStrip short />

      {/* Water banner */}
      <section className="relative w-full" style={{ height: "30vh", minHeight: 200 }}>
        <Image
          src="/images/cactus-sunset-bg.jpg"
          alt="Atardecer entre cactus en Baja California Sur — FICC Los Cabos"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </section>

      {/* Descripción — Logo left, content right */}
      <section id="lbi-desc-section" className="lbi-intro">
        <div className="lbi-intro-grid">
          <div data-anim="lbi-image" className="lbi-intro-logo-wrap">
            <Image src="/images/lbi-logo.png" alt="Logo de La Baja Inspira — programa de exhibición de cine documental, FICC Los Cabos" width={700} height={875} style={{ objectFit: "contain", width: "100%", maxWidth: 700, height: "auto" }} />
          </div>
          <div>
            <h2 data-anim="lbi-typewriter" className="lbi-intro-title">
              <span className="lbi-accent-underline">La Baja Inspira</span>
            </h2>
            <p data-anim="lbi-typewriter" className="lbi-intro-lead">
              La Baja Inspira es un espacio estratégico de exhibición, proyección e incidencia cultural que articula el lenguaje cinematográfico con la investigación científica, las ciencias sociales y los estudios sobre desarrollo territorial.
            </p>
            <p data-anim="lbi-typewriter" className="lbi-intro-lead">
              Su propósito es posicionar a la región como un referente internacional en documental ambiental y territorial, integrando industria audiovisual, conocimiento y conservación con una visión de futuro sostenible.
            </p>
            <div data-anim="lbi-typewriter" className="lbi-intro-apertura" role="group" aria-label="Apertura de convocatoria: 28 de mayo de 2026">
              <span className="lbi-intro-apertura-line">
                <span className="lbi-intro-apertura-dot" aria-hidden="true" style={{ display: "inline-block", verticalAlign: "middle", marginRight: "0.5rem" }} />
                Apertura de convocatoria
              </span>
              <span className="lbi-intro-apertura-line"> - 28 de mayo de 2026</span>
            </div>
            <p data-anim="lbi-typewriter" className="lbi-intro-closer">
              El rigor cinematográfico es nuestra base. Buscamos obras donde la calidad narrativa y la investigación profunda se encuentran para definir el futuro de la región.
            </p>
          </div>
        </div>
      </section>

      {/* Categorías — 3 columnas con números grandes delineados, full-width */}
      <section className="lbi-cats">
          <ol className="lbi-cats-grid" aria-label="Áreas temáticas La Baja Inspira">
            <li data-anim="lbi-list-item" className="lbi-cat-col">
              <span className="lbi-cat-num" aria-hidden="true">
                <Image src="/images/lbi-numbers/01.svg" alt="" width={260} height={260} />
              </span>
              <div data-anim="lbi-stagger-text" className="lbi-cat-body">
                <h3 className="lbi-cat-title">Biodiversidad<br />y Naturaleza</h3>
                <ul className="lbi-cat-items">
                  <li>Biología marina</li>
                  <li>Ecología y conservación</li>
                  <li>Cambio climático</li>
                  <li>Estudios del desierto y biodiversidad</li>
                </ul>
              </div>
            </li>
            <li data-anim="lbi-list-item" className="lbi-cat-col">
              <span className="lbi-cat-num" aria-hidden="true">
                <Image src="/images/lbi-numbers/02.svg" alt="" width={260} height={260} />
              </span>
              <div data-anim="lbi-stagger-text" className="lbi-cat-body">
                <h3 className="lbi-cat-title">Memoria<br />Histórica</h3>
                <ul className="lbi-cat-items">
                  <li>Historia regional</li>
                  <li>Antropología</li>
                  <li>Patrimonio cultural</li>
                  <li>Estudios comunitarios</li>
                  <li>Memoria histórica</li>
                </ul>
              </div>
            </li>
            <li data-anim="lbi-list-item" className="lbi-cat-col">
              <span className="lbi-cat-num" aria-hidden="true">
                <Image src="/images/lbi-numbers/03.svg" alt="" width={260} height={260} />
              </span>
              <div data-anim="lbi-stagger-text" className="lbi-cat-body">
                <h3 className="lbi-cat-title">Economía<br />Sustentable</h3>
                <ul className="lbi-cat-items">
                  <li>Economía azul</li>
                  <li>Seguridad alimentaria</li>
                  <li>Pesca responsable</li>
                  <li>Turismo sostenible</li>
                  <li>Planeación y desarrollo territorial</li>
                </ul>
              </div>
            </li>
          </ol>
      </section>


      {/* Convocatoria 2026 */}
      <section className="relative w-full bg-[#0A1E23] flex flex-col overflow-hidden">
        <div className="shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[15rem] md:pl-[15rem]">

          <h2 className="text-[42px] md:text-[58px] font-black leading-[1.0] max-w-[520px]" style={{ color: "var(--color-cream)" }}>
            {"Convocatoria 2026".split(" ").map((word, wi) => (
              <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                {word.split("").map((char, ci) => (
                  <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </span>
            ))}
          </h2>
        </div>

        <div>
          <div
            className="relative w-full flex max-md:flex-col items-end max-md:items-center justify-center gap-8 max-md:gap-6 min-h-[471px] max-md:min-h-0 max-md:py-10 px-8"
          >
            <Image
              src="/images/lbi-convocatoria-bg.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover -z-10 select-none pointer-events-none"
            />
            {/* Card izquierda — info convocatoria */}
            <div className="impulso-card-outer">
              <div
                className="relative overflow-hidden"
                style={{
                  width: 587,
                  maxWidth: "calc(100vw - 2rem)",
                  backgroundImage: "url('/images/lbi-gradient-warm.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                  <h3 className="tracking-[-0.03em] leading-[.93] mb-6" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900, color: "#163218" }}>
                    La convocatoria 2026 acepta exclusivamente:
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "var(--font-inter)", fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", lineHeight: 1.6, color: "#163218", fontWeight: 400 }}>
                    <li style={{ marginBottom: "0.4rem" }}>— Largometrajes documentales terminados</li>
                    <li style={{ marginBottom: "0.4rem" }}>— Cortometrajes documentales terminados</li>
                    <li style={{ marginBottom: "0.4rem" }}>— Ensayos cinematográficos de no ficción finalizados</li>
                    <li>— Documentales científicos concluidos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card derecha — fechas + CTA */}
            <div className="impulso-card-outer" style={{ textAlign: "center" }}>
              <div
                className="relative overflow-hidden"
                style={{
                  width: 587,
                  maxWidth: "calc(100vw - 2rem)",
                  backgroundImage: "url('/images/lbi-gradient-cool.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                  <h3 className="tracking-[-0.03em] leading-[.93] mb-6" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900, color: "#163218" }}>
                    Fechas Clave
                  </h3>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)", lineHeight: 1.8, color: "#163218", fontWeight: 400 }}>
                    <p><strong>Apertura:</strong> 28 de mayo, 2026</p>
                    <p><strong>Cierre:</strong> 14 de julio, 2026</p>
                    <p><strong>Selección:</strong> 8 títulos que definen el pulso de la región</p>
                  </div>
                </div>
              </div>
              <SubscribeCTA
                source="la-baja-inspira"
                label="Sé el primero en recibir información"
                title="La Baja Inspira · Convocatoria 2026"
                description="Déjanos tus datos y recibe la información de la convocatoria en cuanto abra."
                className="cta-button"
                style={{ marginTop: "1.5rem", display: "inline-block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aliados Institucionales */}
      <section className="lbi-aliados-inst">
        <div className="lbi-aliados-inst-inner">
          <span className="lbi-aliados-inst-tag">Aliados Institucionales</span>
          <div className="lbi-aliados-inst-logos">
            {aliadosInstitucionales.map((a) => (
              <div key={a.name} className="lbi-aliados-inst-item">
                <div className="lbi-aliados-inst-circle">
                  <Image
                    src={a.logo}
                    alt={`Logo ${a.name}`}
                    fill
                    sizes="260px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comité de selección */}
      <section className="section-text overflow-x-clip" id="lbi-comite-section">
        <div className="section-text-inner">
          <h2 data-anim="lbi-comite-heading" className="section-heading">
            {"Comité de Selección".split(" ").map((word, wi) => (
              <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                {word.split("").map((char, ci) => (
                  <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </span>
            ))}
          </h2>
          <p data-anim="lbi-comite-desc">
            Nuestra selecci&oacute;n es validada por un comit&eacute; de expertos en alianza con ESCINE y el periodismo cient&iacute;fico de alto nivel.
          </p>
          {/* Desktop grid */}
          <div className="profiles-grid lbi-comite-desktop">
            {comite.map((p) => (
              <div key={p.name} data-anim="lbi-comite-card" className="profile-card">
                <div className="profile-avatar" style={{ position: "relative", overflow: "hidden" }}>
                  <Image src={p.img} alt={`${p.name}, miembro del comité de selección — La Baja Inspira FICC Los Cabos`} fill sizes="(max-width: 768px) 50vw, 220px" style={{ objectFit: "cover" }} />
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile carousel */}
        <div className="comite-carousel lbi-comite-mobile">
          <div className="comite-track">
            {[...comite, ...comite].map((p, i) => (
              <div key={`${p.name}-${i}`} className="comite-slide">
                <div className="profile-avatar" style={{ position: "relative", overflow: "hidden" }}>
                  <Image src={p.img} alt={`${p.name}, miembro del comité de selección — La Baja Inspira FICC Los Cabos`} fill sizes="(max-width: 768px) 60vw, 220px" style={{ objectFit: "cover" }} />
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Jurado */}
      <section className="lbi-jurado-section">
        <div className="lbi-jurado-header">
          <span className="lbi-jurado-eyebrow">Jurado</span>
          <h2 className="lbi-jurado-title">Jurado 2026</h2>
        </div>
        {juradoEjes.map((eje) => {
          const visibles = eje.members.filter((m) => m.img);
          if (visibles.length === 0) return null;
          return (
            <div key={eje.eje} className="lbi-jurado-eje">
              <div className="lbi-jurado-eje-label">
                <span className="lbi-jurado-eje-num">Eje {eje.eje}</span>
                <h3 className="lbi-jurado-eje-titulo">{eje.titulo}</h3>
              </div>
              <div className="lbi-jurado-grid">
                {visibles.map((m) => (
                  <div key={m.name} className="lbi-jurado-card">
                    <div className="lbi-jurado-avatar">
                      <Image src={m.img!} alt={m.name} fill sizes="120px" style={{ objectFit: "cover", objectPosition: m.imgPosition ?? "center" }} />
                    </div>
                    <h4 className="lbi-jurado-name">
                      {m.nameUrl ? (
                        <a href={m.nameUrl} target="_blank" rel="noopener noreferrer" className="lbi-jurado-link">{m.name}</a>
                      ) : (
                        m.name
                      )}
                    </h4>
                    <p className="lbi-jurado-desc">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Legado La Baja Inspira */}
      <section className="relative w-full flex flex-col overflow-hidden" style={{ background: "linear-gradient(to bottom, #0A1E23 66.66%, transparent 66.66%)" }}>
        {/* Background image for bottom 1/3 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 -z-0">
          <Image
            src="/images/lbi-hero-whale.jpg"
            alt="Ballena en el Mar de Cortés — Legado La Baja Inspira, FICC Los Cabos"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[10rem] md:pl-[15rem]">
          <h2 className="text-[42px] md:text-[58px] font-black leading-[1.0] max-w-[520px] mb-6" style={{ color: "var(--color-cream)" }}>
            <span style={{ display: "block" }}>
              {"Legado".split("").map((char, ci) => (
                <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
              ))}
            </span>
            <span style={{ display: "block" }}>
              {"La Baja Inspira".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                  {word.split("").map((char, ci) => (
                    <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                  ))}
                </span>
              ))}
            </span>
          </h2>
          <p className="max-w-[820px] leading-[1.5]" style={{ fontSize: "clamp(1.3rem, 1.8vw, 1.75rem)", fontFamily: "var(--font-inter)", color: "var(--color-cream)", opacity: 0.8 }}>
            Un registro de las obras y autores que, a través de nuestras convocatorias anteriores, han transformado la riqueza del Pacífico Sudcaliforniano en lenguaje cinematográfico con impacto global.
          </p>
        </div>
        <div className="relative z-10" style={{ padding: "0 2rem 5rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div className="legado-grid">
            {perfilesLBI.map((p) => (
              <div key={p.title} data-anim="lbi-legado-card" className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src={p.poster} alt={`Poster de ${p.title} — Legado La Baja Inspira FICC Los Cabos`} fill sizes="(max-width: 768px) 50vw, 300px" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="flip-card-back">
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

      {/* Aliados */}
      <section className="aliados-plaque">
        <p className="aliados-plaque-quote" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400 }}>
          Gracias a nuestros patrocinadores y aliados, que hacen posible hacer de La Baja Inspira un motor de exhibición del cine documental.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosLBITrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={`Logo de ${a.name}, aliado del FICC Los Cabos`} width={320} height={220} sizes="(max-width: 768px) 320px, 240px" loading="lazy"
                  style={{ width: "auto", maxHeight: 170, height: "auto", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <LBIAnimations />
    </div>
  );
}
