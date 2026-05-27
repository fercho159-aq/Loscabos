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
  { name: "Tropicana Tapestry Collection by Hilton", logo: "/images/aliados-lbi/tropicana-hilton.png" },
];

const comite = [
  {
    name: "Juan Patricio Riveroll",
    desc: "Desde su rol en ESCINE como en su faceta de cineasta y escritor, conecta el cine con historias de profundidad social y cultural desde una visión sensible y contemporánea.",
    img: "/images/comite/juan-patricio-riveroll.jpg",
  },
  {
    name: "Iván Carrillo",
    desc: "Periodista, conductor y productor independiente que vincula ciencia, medio ambiente y cine documental desde una mirada accesible y contextual.",
    img: "/images/comite/ivan-carrillo.jpg",
  },
  {
    name: "Salvador Amores",
    desc: "Figura clave en la cultura cinematográfica contemporánea de México, destacándose principalmente como crítico, programador y cineasta.",
    img: "/images/comite/salvador-amores.png",
  },
];

const juradoEjes = [
  {
    eje: "01",
    titulo: "Biodiversidad y Naturaleza",
    members: [
      {
        name: "Alonso Rodríguez",
        nameUrl: "https://www.instagram.com/alonsordzp",
        desc: (
          <>
            Explorador, documentalista y fundador de{" "}
            <a href="https://www.instagram.com/maresdemexico/" target="_blank" rel="noopener noreferrer" className="lbi-jurado-link">Mares de México</a>
            : una iniciativa dedicada a la investigación, conservación y difusión de la vida marina. Explora el territorio a través de fotografía y video, creando narrativas visuales ligadas al mar, la exploración y los ecosistemas.
          </>
        ),
        img: "/images/jurado/alonso-rodriguez.jpg",
        imgPosition: "center 20%",
      },
      {
        name: "Hans Herrmann",
        nameUrl: "https://www.instagram.com/hans.herrmann__",
        desc: "Ecólogo marino y especialista en política pública ambiental con más de 40 años de experiencia liderando iniciativas de conservación y sostenibilidad en América Latina y Norteamérica. Su perfil une investigación, conservación y divulgación del mar de la mano de Azul Pacífico, crea una mirada ambiental enfocada en los ecosistemas marinos.",
        img: "/images/jurado/hans-herrmann.jpg",
      },
      {
        name: "Jerónimo Prieto",
        nameUrl: "https://www.instagram.com/jerochucho/",
        desc: (
          <>
            Fundador de{" "}
            <a href="https://www.instagram.com/pelagic_life/" target="_blank" rel="noopener noreferrer" className="lbi-jurado-link"><em>México Pelágico</em></a>
            , organización mexicana dedicada a la protección de la vida marina de mar abierto desde 2008. Entusiasta de la naturaleza enfocado en conservación marina, exploración y protección de ecosistemas.
          </>
        ),
        img: "/images/jurado/jeronimo-prieto.jpg",
      },
      {
        name: "Octavio Aburto",
        desc: "Investigador en Scripps Institution of Oceanography; especializado en ecosistemas marinos y conservación, con enfoque científico aplicado a políticas públicas.",
        img: null,
      },
    ],
  },
  {
    eje: "02",
    titulo: "Memoria Histórica",
    members: [
      {
        name: "Michelin Cariño",
        desc: "Investigadora y autora especializada en la historia de Baja California; su trabajo documenta la evolución territorial y social de la península desde una perspectiva académica sólida.",
        img: null,
      },
      {
        name: "Dolores Heredia",
        desc: "Actriz y promotora cultural originaria de La Paz; su trayectoria está vinculada a la construcción y difusión de la identidad sudcaliforniana.",
        img: null,
      },
      {
        name: "Alejandro Rivas",
        nameUrl: "https://www.instagram.com/alejandrorivasfoto",
        desc: (<>Cineasta de Baja California Sur, explora la relación entre territorio e identidad, director de fotografía del premiado documental <em>La Recua</em>.</>),
        img: "/images/jurado/alejandro-rivas.jpg",
      },
      {
        name: "Francisco Laresgoiti",
        desc: (<>Director del documental <em>Santuarios del infinito</em> y productor de <em>Atado de años</em>, sobre el making of del oscarizado <em>Centinelas del silencio</em> (1971).</>),
        img: "/images/jurado/francisco-laresgoiti.png",
      },
      {
        name: "Inti Cordera",
        desc: "Fundador y director de DocsMX, plataforma clave para el cine documental en México y América Latina.",
        img: "/images/jurado/inti-cordera.jpeg",
      },
    ],
  },
  {
    eje: "03",
    titulo: "Economía Sustentable",
    members: [
      {
        name: "Elena Fortes",
        desc: "Productora y gestora cultural; especializada en el desarrollo de plataformas que articulan cine, industria e impacto social con proyección internacional.",
        img: null,
      },
      {
        name: "Eleonora Isunza",
        desc: "Directora de Cinema Planeta; referente en curaduría de cine socioambiental, con experiencia en evaluar proyectos de impacto ambiental y social.",
        img: null,
      },
      {
        name: "Pablo Ferrer",
        desc: "Fundador de Pesca del Futuro; especializado en modelos de pesca sostenible y regeneración de ecosistemas marinos, con enfoque en innovación y desarrollo territorial.",
        img: null,
      },
      {
        name: "Gabriela Cámara",
        desc: "Chef y empresaria; referente en sostenibilidad alimentaria y economía regenerativa, con una visión integral sobre la relación entre gastronomía, comunidad y territorio.",
        img: null,
      },
    ],
  },
];

const aliadosLBI: { name: string; logo: string | null }[] = [
  { name: "ESCINE", logo: "/images/aliados-lbi/escine.png" },
  { name: "IMCINE", logo: "/images/aliados-lbi/imcine.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados-lbi/puerto-los-cabos.png" },
  { name: "Cine de Verano", logo: "/images/aliados-lbi/cine-de-verano.png" },
  { name: "Pólvora", logo: "/images/aliados-lbi/polvora.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados-lbi/instituto-cultura-cabos.png" },
  { name: "Centro Cultural Tijuana", logo: "/images/aliados-lbi/centro-cultural-tijuana.png" },
  { name: "Tropicana", logo: "/images/aliados-lbi/tropicana.png" },
  { name: "Baja Republic", logo: "/images/aliados-lbi/baja-republic.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados-lbi/hotel-el-ganzo.png" },
  { name: "Mares de México", logo: "/images/aliados-lbi/mares-de-mexico.png" },
  { name: "El Sudcaliforniano", logo: "/images/aliados-lbi/el-sudcaliforniano.png" },
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

      <PageHero
        lines={["La Baja", "Inspira"]}
        hideStrip
        short
        bgVideo={{
          mp4: "/images/lbi-hero.mp4",
          webm: "/images/lbi-hero.webm",
          poster: "/images/lbi-hero-poster.jpg",
        }}
      />

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
      <section
        className="lbi-conv-section relative w-full overflow-x-clip"
        style={{
          backgroundImage: "url('/images/lbi-convocatoria-bg-08.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-32" style={{ color: "#0A1C1F", fontFamily: "var(--font-inter)" }}>
          <div className="lbi-conv-grid">
            <h2 className="lbi-conv-title">
              {"Convocatoria 2026".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                  {word.split("").map((char, ci) => (
                    <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                  ))}
                </span>
              ))}
            </h2>

            {/* Columna izquierda */}
            <div data-anim="lbi-conv-col-left" className="lbi-conv-left">
              <h3 className="lbi-conv-subtitle">La convocatoria 2026 acepta exclusivamente:</h3>
              <ul className="lbi-conv-list">
                <li>— Largometrajes documentales terminados</li>
                <li>— Cortometrajes documentales terminados</li>
                <li>— Ensayos cinematográficos de no ficción finalizados</li>
                <li>— Documentales científicos concluidos</li>
              </ul>
            </div>

            {/* Columna derecha */}
            <div data-anim="lbi-conv-col-right" className="lbi-conv-right">
              <h3 className="lbi-conv-subtitle">Fechas Clave</h3>
              <div className="lbi-conv-dates">
                <p><strong>Apertura:</strong><span className="lbi-conv-date-hl">28 de mayo, 2026</span></p>
                <p><strong>Cierre:</strong><span className="lbi-conv-date-hl">14 de julio, 2026</span></p>
                <p><strong>Selección:</strong> 5 títulos que definen el pulso de la región</p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 flex justify-center">
            <SubscribeCTA
              source="la-baja-inspira"
              label="Sé el primero en recibir información"
              title="La Baja Inspira · Convocatoria 2026"
              description="Déjanos tus datos y recibe la información de la convocatoria en cuanto abra."
              className="lbi-conv-cta"
              dataAnim="lbi-conv-cta"
            />
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
          <h2 data-anim="lbi-comite-heading" className="section-heading" style={{ textTransform: "unset" }}>
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
        </div>
        <div className="lbi-comite-rows">
          {comite.map((p, idx) => (
            <div
              key={p.name}
              data-anim="lbi-comite-card"
              className={`lbi-comite-row${idx % 2 === 1 ? " lbi-comite-row--reverse" : ""}`}
            >
              <div className="lbi-comite-row__media">
                <Image src={p.img} alt={`${p.name}, miembro del comité de selección — La Baja Inspira FICC Los Cabos`} fill sizes="(max-width: 768px) 90vw, 480px" style={{ objectFit: "cover" }} />
              </div>
              <div className="lbi-comite-row__body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Jurado */}
      <section className="lbi-jurado-section overflow-x-clip">
        <div className="lbi-jurado-header">
          <span data-anim="lbi-jurado-eyebrow" className="lbi-jurado-eyebrow">Jurado</span>
          <h2 className="lbi-jurado-title">
            {"Jurado 2026".split(" ").map((word, wi) => (
              <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                {word.split("").map((char, ci) => (
                  <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </span>
            ))}
          </h2>
        </div>
        {juradoEjes.map((eje) => {
          const visibles = eje.members.filter((m) => m.img);
          if (visibles.length === 0) return null;
          return (
            <div key={eje.eje} className="lbi-jurado-eje">
              <div data-anim="lbi-jurado-eje-label" className="lbi-jurado-eje-label">
                <span className="lbi-jurado-eje-num">Eje {eje.eje}</span>
                <h3 className="lbi-jurado-eje-titulo">{eje.titulo}</h3>
              </div>
              <div className="lbi-jurado-rows">
                {visibles.map((m, idx) => (
                  <div
                    key={m.name}
                    data-anim="lbi-jurado-row"
                    className={`lbi-jurado-row${idx % 2 === 1 ? " lbi-jurado-row--reverse" : ""}`}
                  >
                    <div className="lbi-jurado-row__media">
                      <Image src={m.img!} alt={m.name} fill sizes="(max-width: 768px) 90vw, 480px" style={{ objectFit: "cover", objectPosition: (m as { imgPosition?: string }).imgPosition ?? "center" }} />
                    </div>
                    <div className="lbi-jurado-row__body">
                      <h4 className="lbi-jurado-name">
                        {m.nameUrl ? (
                          <a href={m.nameUrl} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${m.name}`} className="lbi-jurado-link">
                            {m.name}
                            <svg className="lbi-jurado-ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </a>
                        ) : (
                          m.name
                        )}
                      </h4>
                      <p className="lbi-jurado-desc">{m.desc}</p>
                    </div>
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
                {a.logo ? (
                  <Image src={a.logo} alt={`Logo de ${a.name}, aliado del FICC Los Cabos`} width={320} height={220} sizes="(max-width: 768px) 320px, 240px" loading="lazy"
                    style={{ width: "auto", maxHeight: 170, height: "auto", objectFit: "contain" }} />
                ) : (
                  <div aria-label={a.name} style={{ width: 240, height: 170 }} />
                )}
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
