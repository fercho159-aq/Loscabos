import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoNLogo from "@/components/FoNLogo";
import FoNMisionDiagram from "@/components/FoNMisionDiagram";
import FoNConvocatoriaCTA from "@/components/FoNConvocatoriaCTA";
import FoNAnimations from "@/components/FoNAnimationsLazy";

/* Página pública desde el lanzamiento (22 sep 2026).
   Identidad visual: brandbook Frequencies_of_Now_2026 (ver FREQUENCIES-OF-NOW.md). */
const DESCRIPCION =
  "Frequencies of Now es la plataforma internacional de FICCLosCabos dedicada a construir un archivo documental de la cultura y el ecosistema contemporáneo de la música. Convocatoria 2026.";

export const metadata: Metadata = {
  title: "Frequencies of Now | Stories Behind the Sound",
  description: DESCRIPCION,
  alternates: { canonical: "/frequencies-of-now" },
  openGraph: {
    title: "Frequencies of Now | Stories Behind the Sound",
    description: DESCRIPCION,
    url: "/frequencies-of-now",
    images: [{ url: "/images/fon-hero.jpg", width: 1600, height: 900 }],
  },
};

/* Jurado confirmado en el documento vigente del Festival (octubre 2026). */
const MOSTRAR_JURADO = true;

const INSTAGRAM_URL = "https://www.instagram.com/frequenciesofnow";

const timeline = [
  { label: "Lanzamiento", date: "24 sep 2026" },
  { label: "Cierre", date: "30 oct 2026" },
  { label: "Evaluación", date: "Oct–Nov 2026" },
  { label: "Anuncio Selección Oficial", date: "20 nov 2026" },
  { label: "Exhibición y premiación", date: "9–13 dic 2026" },
];

/* Seis ejes de contenido y categorías: brandbook, sección El Archivo. */
const ejes = [
  { title: "Retratos de músicos", desc: "Músicos, compositores, productores, DJs o colectivos: dimensiones desconocidas más allá de la cronología profesional." },
  { title: "Historias desconocidas", desc: "Archivos recuperados, personajes invisibilizados, episodios que merecen ser documentados y preservados." },
  { title: "Música y territorio", desc: "Barrios, ciudades, estudios, clubes y escenas locales cuya identidad está vinculada a un sonido." },
  { title: "Música e identidad", desc: "Identidad, pertenencia, género, generaciones, migración, resistencia o transformación social." },
  { title: "El proceso creativo", desc: "Composición, producción, grabación y experimentación sonora: las relaciones humanas detrás de la obra." },
  { title: "Movimientos culturales", desc: "Géneros, escenas o contraculturas capaces de transformar una comunidad o representar un momento histórico." },
];
const categorias = [
  { tag: "Feature music documentary", range: "40–90 min", tone: "coral" },
  { tag: "Short music documentary", range: "5–39 min", tone: "lime" },
];

/* Jurado 2026, en el orden entregado. `img` en /images/comunidad
   (1:1). Sin `img` se pinta un monograma con iniciales (estilo brandbook);
   cuando llegue la foto solo hay que agregar la ruta. */
type Jurado = { name: string; role: string; ig: string; img?: string; desc: string };
const jurado: Jurado[] = [
  {
    name: "Juan Patricio Riveroll",
    role: "Director, productor y guionista",
    ig: "jpriveroll",
    img: "/images/comunidad/juan-patricio-riveroll.jpg",
    desc: "Director, productor y guionista. Actualmente es Director de Extensión Académica en la Escuela Superior de Cine (ESCINE), institución que acompaña la curaduría de las convocatorias, garantiza rigor profesional y consolida programas clave como La Baja Inspira, el Fondo Fílmico Gabriel Figueroa, la nueva Sección de Animación y Frequencies of now.",
  },
  {
    name: "Rodrigo Guardiola",
    role: "Cineasta, productor y baterista",
    ig: "rguardiola",
    desc: "Cineasta, productor y baterista de Zoé. Su trabajo audiovisual se nutre directamente de su experiencia como creador sonoro y escénico. Codirigió el largometraje de ficción El comediante (Ganador a Mejor Película en el FICG 2021) y el documental Zoé: Panoramas, con amplia trayectoria internacional. En Zoé: Memorex + Rexsexex y Más, captura la residencia de la banda en el Estadio GNP Seguros para construir un retrato cercano sobre la música, el público y la memoria compartida.",
  },
  {
    name: "Alejandro Tavares",
    role: "Comunicador, productor y gestor cultural",
    ig: "tavaresalaire",
    img: "/images/comunidad/alejandro-tavares.jpg",
    desc: "Comunicador, productor y gestor cultural con más de tres décadas de trayectoria en medios de comunicación, promoción musical y gestión cultural. Entre 2018 y 2024 fue Director General del Sistema Jalisciense de Radio y Televisión (SJRTV), desde donde impulsó la producción de contenidos culturales y documentales. En 2025 asumió la dirección de Filma Jalisco, desde donde trabaja en el fortalecimiento de la industria audiovisual y en la consolidación de Jalisco como destino para producciones nacionales e internacionales.",
  },
  {
    name: "Hermann Neudert",
    role: "Director",
    ig: "hermanneudert",
    desc: "Director nacido en Hermosillo, Sonora. De formación autodidacta, desarrolló su lenguaje audiovisual a través de la exploración en Internet, el cine y un constante proceso de prueba y error. En los últimos años se ha enfocado en la realización de videos musicales, que define como “cortometrajes musicales”, producidos bajo el sello de su casa productora Neuderts. Su trabajo se caracteriza por una dirección de ritmo marcado, donde la música funciona como eje central para construir narrativas y atmósferas visuales.",
  },
  {
    name: "Mario Escobar",
    role: "Mánager y ejecutivo de la industria musical",
    ig: "warioescobar",
    desc: "Mánager y ejecutivo de la industria musical en México. Actualmente forma parte de Global Talent Services (GTS), la división de management y booking de Universal Music Group. Es reconocido por su trabajo como mánager de Ed Maverick, acompañando el desarrollo estratégico de su carrera y proyectos. Ha participado en espacios como la Feria Internacional de la Música de Guadalajara (FIM GDL), donde ha compartido su perspectiva sobre el desarrollo de artistas, los procesos creativos y los retos de la industria musical frente a la transformación digital.",
  },
  {
    name: "Zunshu",
    role: "Creativo y diseñador industrial",
    ig: "zunshu",
    desc: "Creativo enfocado en la cultura contemporánea y las vanguardias de las industrias creativas. De formación en diseño industrial, desarrolla su trabajo alrededor del texto, la imagen y la moda. Forma parte de la dirección de Revista 192, además de participar en diversos proyectos vinculados a la cultura y la creación contemporánea. Su práctica se nutre de referentes que van de Demna, Lyn May, Mitzy y Mecano al cine de Rosemary’s Baby y Tár.",
  },
];

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function StaggerTitle({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
          {word.split("").map((char, ci) => (
            <span key={ci} data-anim="fon-stagger-char" style={{ display: "inline-block" }}>{char}</span>
          ))}
        </span>
      ))}
    </>
  );
}

function IgIcon() {
  return (
    <svg className="lbi-jurado-ig-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function FrequenciesOfNow() {
  return (
    <div className="fon-page">
      <Navbar />

      {/* Hero — logo del brandbook sobre el loop de video */}
      <section className="fon-hero">
        <video
          aria-hidden="true"
          className="fon-hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/fon-loop-poster.jpg"
        >
          <source src="/images/fon-loop.webm" type="video/webm" />
          <source src="/images/fon-loop.mp4" type="video/mp4" />
        </video>
        <div className="fon-hero-veil" aria-hidden="true" />
        <div className="fon-hero-inner">
          <h1 className="fon-hero-title">
            <FoNLogo variant="horizontal" />
          </h1>
          <p data-anim="fon-hero-text" className="fon-hero-tagline">Stories Behind the Sound.</p>
          <p data-anim="fon-hero-text" className="fon-hero-sub">El archivo vivo de la cultura de la industria musical</p>
          <span data-anim="fon-hero-text" className="fon-hero-hashtag">#BeyondTheScreen</span>
        </div>
      </section>

      {/* Intro — #BeyondTheScreen. Sección clara, imagen izq + texto der (lbi-desc-grid). */}
      <section id="fon-intro-section" className="fon-intro">
        <div className="lbi-desc-grid">
          <div data-anim="fon-image" className="fon-intro-media">
            <Image
              src="/images/fon-intro-dancer.jpg"
              alt="Silueta bailando entre dos pantallas sobre fondo naranja — Frequencies of Now, FICC Los Cabos"
              width={1000}
              height={666}
              priority
              sizes="(max-width: 768px) 90vw, 560px"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <span data-anim="fon-eyebrow" className="fon-eyebrow">Contexto y origen</span>
            <h2 className="fon-intro-title">#BeyondTheScreen: cuando el cine encuentra otros lenguajes</h2>
            <p data-anim="fon-typewriter" className="fon-body">
              El Festival Internacional de Cine y Creatividad de Los Cabos entiende al cine como un punto de partida para conectar
              disciplinas, industrias, territorios y nuevas formas de creación. Bajo la visión #BeyondTheScreen, el Festival articula
              cine, música, arte, tecnología y cultura contemporánea dentro de una misma plataforma. Así genera espacios donde las
              historias encuentran nuevas audiencias y donde los creadores se vinculan con otros ecosistemas culturales e
              industriales.
            </p>
            <p data-anim="fon-typewriter" className="fon-body">
              La música es una de las formas en las que una sociedad registra su tiempo. Detrás de una canción, un artista, una
              escena o un movimiento existen historias sobre identidad, territorio, memoria, comunidad y pertenencia que ayudan a
              entender no sólo cómo sonamos, sino quiénes somos.
            </p>
            <p data-anim="fon-quote" className="fon-quote">
              <mark>“La música no sólo acompaña una época: también la documenta.”</mark>
            </p>
            <p data-anim="fon-typewriter" className="fon-body">
              De esa convicción nace Frequencies of Now: A Living Archive of Music Culture, la plataforma internacional de
              FICCLosCabos dedicada al documental de la industria y el ecosistema de la música.
            </p>
          </div>
        </div>
      </section>

      {/* Misión — sección oscura con el pulso de frecuencia */}
      <section className="fon-mision overflow-x-clip">
        <div className="fon-mision-header">
          <span data-anim="fon-eyebrow" className="fon-eyebrow">La plataforma · Misión</span>
          <h2 data-anim="fon-title" className="fon-h2">
            <StaggerTitle text="Identificar, preservar y hacer circular las historias que existen detrás de la música" />
          </h2>
          <p data-anim="fon-desc" className="fon-lead">
            Las historias humanas, sociales y culturales que hacen posible la música: las personas, los lugares, los procesos
            creativos, las comunidades y los movimientos.
          </p>
        </div>

        <FoNMisionDiagram />

        <div className="fon-lenguajes">
          <div data-anim="fon-lenguaje" className="fon-lenguaje">
            <h3>Música</h3>
            <p>La expresión de una época.</p>
          </div>
          <div data-anim="fon-lenguaje" className="fon-lenguaje">
            <h3>Cine documental</h3>
            <p>Una forma de preservarla.</p>
          </div>
          <p data-anim="fon-lenguaje" className="fon-lenguajes-note">
            Frequencies of Now conecta así dos lenguajes capaces de documentar nuestro tiempo: la música como expresión de una
            época y el cine documental como una forma de preservarla.
          </p>
        </div>
      </section>

      {/* Convocatoria 2026 — sección oscura, timeline en tarjetas (brandbook) */}
      <section className="fon-convocatoria overflow-x-clip">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image src="/images/fon-hero.jpg" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="absolute inset-0" style={{ background: "rgba(14,27,35,.86)" }} />
        </div>

        <div className="relative z-10 fon-conv-header">
          <span data-anim="fon-eyebrow" className="fon-eyebrow">El archivo · Convocatoria internacional</span>
          <h2 data-anim="fon-title" className="fon-h2">
            <StaggerTitle text="Convocatoria 2026" />
          </h2>
          <p data-anim="fon-desc" className="fon-lead" style={{ maxWidth: 820 }}>
            A través de una convocatoria internacional, Frequencies of Now buscará documentales que trascienden la biografía o
            la fama para descubrir a las personas, los
            lugares, los procesos creativos, las comunidades y los movimientos culturales que hacen posible la música.
          </p>
          <p data-anim="fon-desc" className="fon-lead" style={{ maxWidth: 820, marginTop: "1rem" }}>
            Las películas seleccionadas cada año comenzarán a construir un archivo audiovisual vivo de la cultura musical
            contemporánea: un registro que crecerá edición tras edición y que utilizará al documental como herramienta de memoria,
            interpretación y preservación.
          </p>
        </div>

        <div className="relative z-10 fon-conv-body">
          <ol className="fon-timeline">
            {timeline.map((t, i) => (
              <li key={t.label} data-anim="fon-timeline-item" className={`fon-timeline-item${i === timeline.length - 1 ? " fon-timeline-item--last" : ""}`}>
                <span className="fon-timeline-date">{t.date}</span>
                <span className="fon-timeline-label">{t.label}</span>
              </li>
            ))}
          </ol>
          <FoNConvocatoriaCTA />

          <div className="fon-sub-header">
            <span data-anim="fon-eyebrow" className="fon-eyebrow">¿Qué historias buscamos?</span>
            <h3 data-anim="fon-desc" className="fon-h3">Seis ejes de contenido</h3>
          </div>
          <ol className="fon-ejes">
            {ejes.map((e, i) => (
              <li key={e.title} data-anim="fon-eje" className="fon-eje">
                <span className="fon-eje-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </li>
            ))}
          </ol>

          <div className="fon-sub-header">
            <span data-anim="fon-eyebrow" className="fon-eyebrow">Categorías</span>
            <h3 data-anim="fon-desc" className="fon-h3">Dos formatos, una convocatoria</h3>
          </div>
          <div className="fon-cats">
            {categorias.map((c) => (
              <div key={c.tag} data-anim="fon-cat" className={`fon-cat fon-cat--${c.tone}`}>
                <span className="fon-cat-tag">{c.tag}</span>
                <strong>{c.range}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurado confirmado — reutiliza lbi-jurado. */}
      {MOSTRAR_JURADO && (
      <section className="lbi-jurado-section fon-jurado overflow-x-clip">
        <div className="lbi-jurado-header">
          <span data-anim="fon-eyebrow" className="fon-eyebrow">Frequencies of Now 2026</span>
          <h2 data-anim="fon-title" className="lbi-jurado-title fon-h2"><StaggerTitle text="Jurado Frequencies of Now 2026" /></h2>
        </div>
        <div className="lbi-jurado-eje" style={{ borderTop: "none", paddingTop: 0 }}>
          <div className="lbi-jurado-rows">
            {jurado.map((m, idx) => (
              <div key={m.name} data-anim="fon-jurado-row" className={`lbi-jurado-row${idx % 2 === 1 ? " lbi-jurado-row--reverse" : ""}`}>
                <div className="lbi-jurado-row__media">
                  {m.img ? (
                    <Image src={m.img} alt={`${m.name} — Jurado de Frequencies of Now, FICC Los Cabos`} fill sizes="(max-width: 768px) 320px, 480px" style={{ objectFit: "cover" }} />
                  ) : (
                    <div className={`fon-jurado-placeholder${idx % 2 === 1 ? " fon-jurado-placeholder--lime" : ""}`} aria-hidden="true">
                      <span>{initials(m.name)}</span>
                    </div>
                  )}
                </div>
                <div className="lbi-jurado-row__body">
                  <h4 className="lbi-jurado-name">
                    <a href={`https://www.instagram.com/${m.ig}`} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${m.name}`} className="lbi-jurado-link">
                      {m.name}
                      <IgIcon />
                    </a>
                  </h4>
                  <p className="fon-jurado-role">{m.role}</p>
                  <p className="lbi-jurado-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Cierre — logo vertical + tagline + Instagram (brandbook, última lámina) */}
      <section className="fon-ig-band">
        <div data-anim="fon-ig">
          <FoNLogo variant="vertical" />
        </div>
        <p data-anim="fon-ig" className="fon-ig-tagline">Stories Behind the Sound.</p>
        <p data-anim="fon-ig" className="fon-ig-claim">Music tells us who we were. Documentary shows us who we are.</p>
        <a data-anim="fon-ig" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="fon-ig-link">
          <span className="fon-ig-kicker">Síguenos en Instagram</span>
          <span className="fon-ig-handle">@frequenciesofnow</span>
        </a>
        <span data-anim="fon-ig" className="fon-ig-hashtag">#BeyondTheScreen</span>
      </section>

      <Footer />
      <FoNAnimations />
    </div>
  );
}
