import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TextureStrip from "@/components/TextureStrip";
import LBIAnimations from "@/components/LBIAnimations";

const comite = [
  {
    name: "ESCINE",
    desc: "Una de las instituciones acad\u00e9micas m\u00e1s importantes de M\u00e9xico dedicada a la profesionalizaci\u00f3n cinematogr\u00e1fica.",
    img: "/images/comite/escine.png",
  },
  {
    name: "Juan Patricio Riveroll",
    desc: "Director, productor y novelista con una destacada trayectoria en la creaci\u00f3n audiovisual y la gesti\u00f3n p\u00fablica.",
    img: "/images/comite/juan-patricio-riveroll.jpg",
  },
  {
    name: "Alfredo Ruiz",
    desc: "Director de la Licenciatura en Cinematograf\u00eda en ESCINE. Cuenta con una s\u00f3lida trayectoria en formaci\u00f3n acad\u00e9mica y cr\u00edtica cinematogr\u00e1fica.",
    img: "/images/comite/alfredo-ruiz.jpeg",
  },
  {
    name: "Iv\u00e1n Carrillo",
    desc: "Periodista, conductor y productor independiente especializado en ciencia, salud y medio ambiente.",
    img: "/images/comite/ivan-carrillo.png",
  },
];

const aliadosLBI = [
  { name: "Ánima Village", logo: "/images/aliados-lbi/anima-village.png" },
  { name: "Arte Abierto", logo: "/images/aliados-lbi/arte-abierto.png" },
  { name: "Cine de Verano", logo: "/images/aliados-lbi/cine-de-verano.png" },
  { name: "Pólvora", logo: "/images/aliados-lbi/polvora.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados-lbi/instituto-cultura-cabos.png" },
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

      <PageHero lines={["La Baja", "Inspira"]} />

      {/* Water banner */}
      <section className="relative w-full" style={{ height: "30vh", minHeight: 200 }}>
        <Image
          src="/images/water-bg.jpg"
          alt="Agua cristalina de Los Cabos"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>

      {/* Descripción — Image left, text right */}
      <section id="lbi-desc-section" style={{ minHeight: "70vh", display: "flex", alignItems: "center", padding: "2rem", maxWidth: 1200, margin: "0 auto", marginBottom: "3rem" }}>
        <div className="lbi-desc-grid">
          <div data-anim="lbi-image" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <Image src="/images/lbi-logo.png" alt="La Baja Inspira" width={400} height={500} style={{ objectFit: "contain", width: "100%", maxWidth: 400, height: "auto" }} />
          </div>
          <div>
            <p data-anim="lbi-typewriter" style={{ fontFamily: "var(--font-garamond)", fontSize: "1.5rem", color: "#081722", lineHeight: 1, marginBottom: "1rem", fontWeight: 500 }}>
              La Baja Inspira es la plataforma del Festival Internacional de Cine de Los Cabos diseñada para impulsar el cine de no ficción que explora la biodiversidad, la memoria y el desarrollo de la región. Posicionamos al destino como un referente global, vinculando la potencia del lenguaje cinematográfico con la investigación científica y la conciencia pública.
            </p>
            <p data-anim="lbi-typewriter" style={{ fontFamily: "var(--font-garamond)", fontSize: "1.5rem", color: "#081722", lineHeight: 1, marginBottom: "1rem", fontWeight: 500 }}>
              Los proyectos seleccionados deberán articular el lenguaje cinematográfico con al menos una de las siguientes áreas de conocimiento:
            </p>
            <ul style={{ fontFamily: "var(--font-garamond)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, paddingLeft: 0, listStyle: "none" }}>
              <li data-anim="lbi-list-item" style={{ marginBottom: "1.2rem", display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                <svg data-anim="lbi-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BDC957" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" /><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" /></svg>
                <span data-anim="lbi-stagger-text" style={{ fontWeight: 500 }}><strong>Ciencias Naturales:</strong> Biología Golfo de California, ecología, cambio climático y biodiversidad del desierto.</span>
              </li>
              <li data-anim="lbi-list-item" style={{ marginBottom: "1.2rem", display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                <svg data-anim="lbi-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F4A061" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M2 12h1" /><path d="M6 8v8" /><path d="M10 2v20" /><path d="M14 4v16" /><path d="M18 6v12" /><path d="M22 12h-1" /></svg>
                <span data-anim="lbi-stagger-text" style={{ fontWeight: 500 }}><strong>Historia y Sociedad:</strong> Antropología, patrimonio cultural y la reconstrucción de la memoria histórica.</span>
              </li>
              <li data-anim="lbi-list-item" style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                <svg data-anim="lbi-svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0088C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>
                <span data-anim="lbi-stagger-text" style={{ fontWeight: 500 }}><strong>Desarrollo del Destino:</strong> Economía azul, pesca responsable y turismo sostenible.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Divisor texture strip */}
      <div className="texture-strip-wrap w-full pointer-events-none relative z-10" style={{ height: 122, marginBottom: "-1rem", marginTop: -61 }}>
        <TextureStrip style={{ display: "block" }} />
      </div>

      {/* Convocatoria 2026 */}
      <section className="relative w-full bg-[#0A1E23] flex flex-col overflow-hidden">
        <div className="shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[15rem] md:pl-[15rem]">
          <span className="text-[13px] md:text-[14px] font-medium tracking-[.05em] leading-none text-white/40 mb-4 block">
            Convocatoria
          </span>
          <h2 className="text-[42px] md:text-[58px] font-black text-white leading-[1.0] max-w-[520px]">
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
            className="w-full flex max-md:flex-col items-end max-md:items-center justify-center gap-8 max-md:gap-6 min-h-[471px] max-md:min-h-0 max-md:py-10 px-8"
            style={{
              backgroundImage: "url('/images/cta-cactus.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Card izquierda — info convocatoria */}
            <div className="impulso-card-outer">
              <div
                data-anim="lbi-conv-card"
                className="relative overflow-hidden bg-[#EDE6DC]"
                style={{
                  width: 587,
                  maxWidth: "90vw",
                  backgroundImage: "url('/images/el-festival/Group 113.svg')",
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                  <h3 className="tracking-[-0.03em] leading-[.93] mb-6 text-[#0A1E21]" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900 }}>
                    La convocatoria 2026 acepta exclusivamente:
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "clamp(0.85rem, 1.2vw, 1rem)", lineHeight: 1.8, color: "#0A1E21", fontWeight: 900 }}>
                    <li style={{ marginBottom: "0.4rem" }}>— Largometrajes documentales terminados</li>
                    <li style={{ marginBottom: "0.4rem" }}>— Cortometrajes documentales terminados</li>
                    <li style={{ marginBottom: "0.4rem" }}>— Ensayos cinematográficos de no ficción finalizados</li>
                    <li>— Documentales científicos concluidos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card derecha — fechas + CTA */}
            <div className="impulso-card-outer">
              <div
                data-anim="lbi-conv-card"
                className="relative overflow-hidden bg-[#EDE6DC]"
                style={{
                  width: 587,
                  maxWidth: "90vw",
                  backgroundImage: "url('/images/el-festival/Group 115.svg')",
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "repeat",
                }}
              >
                <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                  <h3 className="tracking-[-0.03em] leading-[.93] mb-6 text-[#0A1E21]" style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 900 }}>
                    Fechas Clave
                  </h3>
                  <div style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)", lineHeight: 2, color: "#0A1E21", fontWeight: 900 }}>
                    <p><strong>Apertura:</strong> 05 de mayo, 2026</p>
                    <p><strong>Cierre:</strong> 30 de junio, 2026</p>
                    <p style={{ marginBottom: "1.5rem" }}><strong>Selección:</strong> 8 títulos que definen el pulso de la región</p>
                  </div>
                  <a
                    href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                  >
                    Sé el primero en recibir información
                  </a>
                </div>
              </div>
            </div>
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
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} />
                </div>
                <h4>{p.name}</h4>
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
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} />
                </div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Legado La Baja Inspira */}
      <section className="relative w-full flex flex-col overflow-hidden" style={{ background: "linear-gradient(to bottom, #0A1E23 66.66%, transparent 66.66%)" }}>
        {/* Background image for bottom 1/3 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 -z-0">
          <Image
            src="/images/lbi-hero-whale.jpg"
            alt="Ballena en Los Cabos"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative z-10 shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[10rem] md:pl-[15rem]">
          <span className="text-[13px] md:text-[14px] font-medium tracking-[.05em] leading-none text-white/40 mb-4 block">
            Legado
          </span>
          <h2 className="text-[42px] md:text-[58px] font-black text-white leading-[1.0] max-w-[520px] mb-6">
            {"Legado La Baja Inspira".split(" ").map((word, wi) => (
              <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                {word.split("").map((char, ci) => (
                  <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </span>
            ))}
          </h2>
          <p className="text-white/70 max-w-[600px] leading-[1.7]" style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}>
            Un registro de las obras y autores que, a través de nuestras convocatorias anteriores, han transformado la riqueza del Pacífico Sudcaliforniano en lenguaje cinematográfico con impacto global.
          </p>
        </div>
        <div className="relative z-10" style={{ padding: "0 2rem 5rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div className="legado-grid">
            {perfilesLBI.map((p) => (
              <div key={p.title} data-anim="lbi-legado-card" className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src={p.poster} alt={p.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="flip-card-back">
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

      {/* Aliados */}
      <section className="aliados-plaque">
        <span className="aliados-plaque-tag">Nuestros aliados y patrocinadores</span>
        <p className="aliados-plaque-quote">
          En 2026, FICCLosCabos se consolida como el hub creativo definitivo del destino a través de una red de más de 90 aliados locales e internacionales.<br />
          Juntos, proyectamos a la región dentro del circuito global de las industrias creativas, transformando a Los Cabos en el epicentro de la conversación audiovisual en México.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosLBITrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={a.name} width={240} height={120}
                  style={{ width: "auto", height: 120, objectFit: "contain" }} />
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
