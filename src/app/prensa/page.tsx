import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quotes = [
  { medio: "El Universal", quote: "El Festival de Cine de Los Cabos vuelve en 2025 para recordarle al mundo que el cine mexicano sigue vivo, evoluciona y tiene mucho que contar.", url: "https://www.eluniversal.com.mx/espectaculos/el-festival-de-cine-de-los-cabos-vuelve-en-2025-el-cine-mexicano-sigue-vivo-y-evoluciona/" },
  { medio: "El Financiero", quote: "El cine trasciende la pantalla y convierte a Puerto Los Cabos en un escenario donde cine, m\u00fasica, arte y naturaleza se entrelazan... transformando un destino en un referente cultural de alcance internacional.", url: "https://www.elfinanciero.com.mx/mundo-empresa/2025/11/17/ficloscabos-2025-el-cine-trasciende-la-pantalla-y-convierte-a-puerto-los-cabos-en-un-ecosistema-creativo/" },
  { medio: "Qui\u00e9n", quote: "No es solo un evento, es el lugar donde las historias se desbordan, se viven, se celebran y se convierten en magia... una propuesta donde la pantalla no es el l\u00edmite, sino el punto de partida.", url: "https://www.quien.com/cultura/2025/12/08/ficloscabos-2025-el-festival-que-llega-mas-alla-de-la-pantalla" },
  { medio: "The Walk", quote: "El festival vuelve a recordarnos que el cine tambi\u00e9n puede ser eso: una pausa elegante, una conversaci\u00f3n bien dicha, una historia que se ve mejor con el sonido del mar de fondo.", url: "https://thewalkpaper.com/noticias/463/FIC_los_cabos_2025" },
  { medio: "Time Out M\u00e9xico", quote: "Una propuesta que apuesta por ser distinta... convirtiendo al FIC Los Cabos en un campus cultural donde el cine dialogue con el desierto, el mar y la creatividad local.", url: "https://www.timeoutmexico.mx/ciudad-de-mexico/cine/festival-internacional-de-cine-de-los-cabos-2025-fechas-y-temas" },
  { medio: "Chilango", quote: "La 13a edici\u00f3n demostr\u00f3 que el s\u00e9ptimo arte sigue buscando espacios para diversificarse. La producci\u00f3n cinematogr\u00e1fica fuera de la CDMX existe y sigue levantando la mano para mostrar el talento que hace falta visibilizar.", url: "https://www.chilango.com/cine-y-tv/peliculas/ganadores-de-fic-los-cabos-2025/" },
  { medio: "Travel + Leisure", quote: "M\u00e1s que un escaparate de estrenos, es un espacio donde el cine se piensa, se acompa\u00f1a y, en muchos casos, se termina de construir.", url: "https://travelandleisure-es.com/destinos/festival-internacional-de-cine-de-los-cabos-2025-cine-emergente-musica-y-nuevas-narrativas/" },
];

export default function Prensa() {
  return (
    <div className="prensa-page">
      <Navbar />

      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="page-hero-bg">
          <Image
            src="/images/plataforma-cultural/landscape.jpg"
            alt="Los Cabos"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <h1 className="page-hero-title">Prensa</h1>
        </div>
      </section>

      <section className="section-text">
        <div className="section-text-inner">
          <h2 className="section-heading">Descarga el Deck</h2>
          <p>
            Accede a nuestro kit de prensa con informaci&oacute;n actualizada del festival,
            logos, im&aacute;genes en alta resoluci&oacute;n y datos clave de la 14&ordf; edici&oacute;n.
          </p>
          <Link href="#" className="cta-button" style={{ marginTop: "1.5rem" }}>
            Descargar Kit de Prensa
          </Link>
        </div>
      </section>

      <section className="section-highlight">
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-heading">Lo que dicen de nosotros</h2>
          <div className="profiles-grid" style={{ marginTop: "2rem" }}>
            {quotes.map((q) => (
              <div key={q.medio} className="profile-card" style={{ textAlign: "center" }}>
                <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{q.quote}&rdquo;</p>
                <p style={{ fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-navy)" }}>&mdash; {q.medio}</p>
                <a href={q.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-acid)", fontSize: ".8rem", textDecoration: "underline" }}>
                  Ver nota
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
