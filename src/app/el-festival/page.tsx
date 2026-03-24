import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ElFestival() {
  return (
    <>
      <Navbar />

      <section className="page-hero" style={{ minHeight: "50vh" }}>
        <div className="page-hero-bg">
          <Image
            src="/images/plataforma-cultural/aerial.jpg"
            alt="Los Cabos aerial"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <h1 className="page-hero-title">El Festival</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-text">
        <div className="section-text-inner">
          <h2 className="section-heading">#BeyondTheScreen: El Pulso de la Creatividad en Los Cabos</h2>
          <p>
            Tras la expansi&oacute;n de nuestra visi&oacute;n en 2025, el Festival evoluciona. En nuestra 14&ordf; edici&oacute;n
            &mdash;del 9 al 13 de diciembre de 2026&mdash; nos consolidamos como la plataforma de vinculaci&oacute;n
            para la industria audiovisual en M&eacute;xico.
          </p>
          <p>
            Somos el punto de encuentro donde el cine converge con la m&uacute;sica, el arte digital y la
            animaci&oacute;n. Desde Los Cabos, conectamos el talento mexicano con el circuito internacional.
          </p>
          <p>
            A trav&eacute;s de un modelo multisede que integra naturaleza, hospitalidad y pensamiento
            creativo, generamos un entorno propicio para la circulaci&oacute;n de obras, el encuentro
            profesional y la construcci&oacute;n de redes internacionales.
          </p>
        </div>
      </section>

      {/* Image break */}
      <section style={{ position: "relative", height: "40vh", overflow: "hidden" }}>
        <Image
          src="/images/plataforma-cultural/ocean.jpg"
          alt="Oc&eacute;ano Pac&iacute;fico"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>

      {/* 4 Ejes */}
      <section className="quad-grid">
        <div className="quad-cell cell-blue">
          <h3>Plataforma Creativa<br />Anclada en<br />Los Cabos</h3>
          <p>
            El entorno especial de Los Cabos es el origen de todo. Producto de la energ&iacute;a que emana del Golfo de
            California, surge este festival que, mediante alianzas estrat&eacute;gicas, fusiona la hospitalidad de Baja California
            Sur con un circuito creativo internacional sin precedentes.
          </p>
        </div>
        <div className="quad-cell cell-lime">
          <h3>Impulso<br />a la<br />Industria</h3>
          <p>
            Nuestras plataformas reducen la brecha entre creaci&oacute;n, industria y audiencias. A trav&eacute;s de La Baja Inspira,
            el Fondo Gabriel Figueroa y Frequencies of Now, actuamos como un motor de formaci&oacute;n, financiamiento y exhibici&oacute;n.
          </p>
        </div>
        <div className="quad-cell cell-peach">
          <h3>Programaci&oacute;n<br />con Pulso<br />Global</h3>
          <p>
            Nuestra curadur&iacute;a descubre y posiciona las voces que definen el futuro del cine. Desde la Competencia
            Mexicana hasta la consolidaci&oacute;n de la Animaci&oacute;n, el Festival dialoga permanentemente con el circuito
            de festivales internacional.
          </p>
        </div>
        <div className="quad-cell cell-blush">
          <h3>Comunidad<br />e<br />Influencia</h3>
          <p>
            Creamos un ecosistema que trasciende el evento. Activamos una red global de creadores, medios y
            plataformas para construir un ecosistema que se expande y empodera proyectos los 365 d&iacute;as del a&ntilde;o.
          </p>
        </div>
      </section>

      {/* Landscape */}
      <section style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
        <Image
          src="/images/plataforma-cultural/nature.jpg"
          alt="Naturaleza de Baja California Sur"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>

      <Footer />
    </>
  );
}
