"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SubscribeCTA from "@/components/SubscribeCTA";

const quotes = [
  { medio: "El Universal", logo: "/images/prensa/Logos Medios/ElUniversal.png", quote: "El Festival de Cine de Los Cabos vuelve en 2025 para recordarle al mundo que el cine mexicano sigue vivo, evoluciona y tiene mucho que contar.", url: "https://www.eluniversal.com.mx/espectaculos/el-festival-de-cine-de-los-cabos-vuelve-en-2025-el-cine-mexicano-sigue-vivo-y-evoluciona/" },
  { medio: "El Financiero", logo: "/images/prensa/Logos Medios/ElFinanciero.png", quote: "El cine trasciende la pantalla y convierte a Puerto Los Cabos en un escenario donde cine, música, arte y naturaleza se entrelazan... transformando un destino en un referente cultural de alcance internacional.", url: "https://www.elfinanciero.com.mx/mundo-empresa/2025/11/17/ficloscabos-2025-el-cine-trasciende-la-pantalla-y-convierte-a-puerto-los-cabos-en-un-ecosistema-creativo/" },
  { medio: "Quién", logo: "/images/prensa/Logos Medios/Quien.png", quote: "No es solo un evento, es el lugar donde las historias se desbordan, se viven, se celebran y se convierten en magia... una propuesta donde la pantalla no es el límite, sino el punto de partida.", url: "https://www.quien.com/cultura/2025/12/08/ficloscabos-2025-el-festival-que-llega-mas-alla-de-la-pantalla" },
  { medio: "The Walk", logo: "/images/prensa/Logos Medios/TheWalk.png", quote: "El festival vuelve a recordarnos que el cine también puede ser eso: una pausa elegante, una conversación bien dicha, una historia que se ve mejor con el sonido del mar de fondo.", url: "https://thewalkpaper.com/noticias/463/FIC_los_cabos_2025" },
  { medio: "Time Out México", logo: "/images/prensa/Logos Medios/TimeOut.png", quote: "Una propuesta que apuesta por ser distinta... convirtiendo al FICCLosCabos en un campus cultural donde el cine dialogue con el desierto, el mar y la creatividad local.", url: "https://www.timeoutmexico.mx/ciudad-de-mexico/cine/festival-internacional-de-cine-de-los-cabos-2025-fechas-y-temas" },
  { medio: "Chilango", logo: "/images/prensa/Logos Medios/Chilango.png", quote: "La 13a edición demostró que el séptimo arte sigue buscando espacios para diversificarse. La producción cinematográfica fuera de la CDMX existe y sigue levantando la mano para mostrar el talento que hace falta visibilizar.", url: "https://www.chilango.com/cine-y-tv/peliculas/ganadores-de-fic-los-cabos-2025/" },
  { medio: "Travel + Leisure", logo: "/images/prensa/Logos Medios/TravelLeisure.png", quote: "Más que un escaparate de estrenos, es un espacio donde el cine se piensa, se acompaña y, en muchos casos, se termina de construir.", url: "https://travelandleisure-es.com/destinos/festival-internacional-de-cine-de-los-cabos-2025-cine-emergente-musica-y-nuevas-narrativas/" },
];

// Build pairs for the carousel (2 cards per slide)
const pairs: (typeof quotes)[] = [];
for (let i = 0; i < quotes.length; i += 2) {
  pairs.push(quotes.slice(i, i + 2));
}

const accentClass = (idx: number) =>
  idx % 3 === 0 ? "accent-teal" : idx % 3 === 1 ? "accent-acid" : "accent-wine";

function QuoteCard({ q, globalIndex }: { q: (typeof quotes)[number]; globalIndex: number }) {
  return (
    <article className={`prensa-quote-card prensa-quote-card--${accentClass(globalIndex)}`}>
      <div className="prensa-quote-logo">
        <Image src={q.logo} alt={`Logo de ${q.medio} — prensa que cubre el FICC Los Cabos`} width={240} height={72} style={{ objectFit: "contain", maxHeight: 72, height: "auto", width: "auto", maxWidth: "100%" }} />
      </div>
      <blockquote className="prensa-quote-text">
        {q.quote}
      </blockquote>
      <div className="prensa-quote-footer">
        <div className="prensa-quote-source">
          <span className="prensa-quote-dash"></span>
          <span className="prensa-quote-medio">{q.medio}</span>
        </div>
        <a href={q.url} target="_blank" rel="noopener noreferrer" className="prensa-quote-link">
          Leer nota
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function Prensa() {
  // Repeat pairs 3x for seamless infinite loop
  const repeatedPairs = [...pairs, ...pairs, ...pairs];

  return (
    <div className="prensa-page">
      <Navbar />

      <PageHero lines={["Prensa"]}>
        <SubscribeCTA
          source="prensa"
          label="Registro de prensa"
          title="Registro de prensa · FICC 2026"
          description="Completa tus datos para recibir información oficial del festival."
          className="cta-button"
        />
      </PageHero>

      <section className="prensa-quotes-section">
        <div className="prensa-quotes-header">
          <p className="prensa-quotes-label">Prensa</p>
          <h2 className="prensa-quotes-title">Lo que dicen de nosotros</h2>
          <p className="prensa-quotes-subtitle">
            La prensa nacional e internacional reconoce al FICCLosCabos como uno de los festivales de cine más relevantes de Latinoamérica.
          </p>
        </div>

        <div className="prensa-carousel-wrapper">
          <div className="prensa-carousel-track">
            {repeatedPairs.map((pair, pairIdx) => (
              <div className="prensa-carousel-slide" key={pairIdx}>
                {pair.map((q, cardIdx) => (
                  <QuoteCard
                    key={`${pairIdx}-${cardIdx}`}
                    q={q}
                    globalIndex={pairIdx * 2 + cardIdx}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
