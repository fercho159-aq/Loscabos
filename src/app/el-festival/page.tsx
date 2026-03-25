import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer, { Newsletter } from "@/components/Footer";

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

      {/* Intro — Text left, image right */}
      <section style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, textTransform: "uppercase" as const, color: "#081722", lineHeight: 1.1, marginBottom: "2rem" }}>
              #BeyondTheScreen: El Pulso de la Creatividad en Los Cabos
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, marginBottom: "1rem" }}>
              Tras la expansi&oacute;n de nuestra visi&oacute;n en 2025, el Festival evoluciona. En nuestra 14&ordf; edici&oacute;n
              &mdash;del 9 al 13 de diciembre de 2026&mdash; nos consolidamos como la plataforma de vinculaci&oacute;n
              para la industria audiovisual en M&eacute;xico.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, marginBottom: "1rem" }}>
              Somos el punto de encuentro donde el cine converge con la m&uacute;sica, el arte digital y la
              animaci&oacute;n. Desde Los Cabos, conectamos el talento mexicano con el circuito internacional.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8 }}>
              A trav&eacute;s de un modelo multisede que integra naturaleza, hospitalidad y pensamiento
              creativo, generamos un entorno propicio para la circulaci&oacute;n de obras, el encuentro
              profesional y la construcci&oacute;n de redes internacionales.
            </p>
          </div>
          <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 8, overflow: "hidden" }}>
            <Image src="/images/plataforma-cultural/ocean.jpg" alt="Los Cabos" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* 4 Ejes — Alternating layout */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>

        {/* Eje 1 — Text left, icon right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "5rem" }}>
          <div style={{ background: "#3A4A1A", borderRadius: 12, padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 900, textTransform: "uppercase" as const, color: "#BDC957", marginBottom: "1rem" }}>PLATAFORMA CREATIVA ANCLADA EN LOS CABOS</h3>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#F6EDDB", lineHeight: 1.8, opacity: .85 }}>
              El entorno especial de Los Cabos es el origen de todo. Producto de la energ&iacute;a que emana del Golfo de
              California, surge este festival que, mediante alianzas estrat&eacute;gicas, fusiona la hospitalidad de Baja California
              Sur con un circuito creativo internacional sin precedentes.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/ejes/eje1-color.png" alt="Eje Plataforma Creativa" width={260} height={260} style={{ objectFit: "contain" }} />
          </div>
        </div>

        {/* Eje 2 — Icon left, text right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/ejes/eje2-color.png" alt="Eje Industria" width={260} height={260} style={{ objectFit: "contain" }} />
          </div>
          <div style={{ background: "#3A2510", borderRadius: 12, padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 900, textTransform: "uppercase" as const, color: "#C47A3D", marginBottom: "1rem" }}>IMPULSO A LA INDUSTRIA</h3>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#F6EDDB", lineHeight: 1.8, opacity: .85 }}>
              Nuestras plataformas reducen la brecha entre creaci&oacute;n, industria y audiencias. A trav&eacute;s de La Baja Inspira,
              el Fondo Gabriel Figueroa y Frequencies of Now, actuamos como un motor de formaci&oacute;n, financiamiento y exhibici&oacute;n.
              Dise&ntilde;adas para generar convergencia, estas plataformas fortalecen trayectorias creativas y construyen puentes
              reales entre el talento mexicano y el mercado internacional.
            </p>
          </div>
        </div>

        {/* Eje 3 — Text left, icon right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "5rem" }}>
          <div style={{ background: "#1A2540", borderRadius: 12, padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 900, textTransform: "uppercase" as const, color: "#7B8FBF", marginBottom: "1rem" }}>PROGRAMACI&Oacute;N CON PULSO GLOBAL</h3>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#F6EDDB", lineHeight: 1.8, opacity: .85 }}>
              Nuestra curadur&iacute;a descubre y posiciona las voces que definen el futuro del cine. Desde la Competencia
              Mexicana y su apuesta por el riesgo narrativo, hasta la consolidaci&oacute;n de la Animaci&oacute;n como un lenguaje
              cinematogr&aacute;fico mayor, el Festival dialoga permanentemente con el circuito internacional.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#F6EDDB", lineHeight: 1.8, opacity: .85, marginTop: "1rem" }}>
              #BeyondTheScreen es una plataforma de innovaci&oacute;n cultural. Integramos cine, m&uacute;sica y arte digital para
              responder a la transformaci&oacute;n de las industrias creativas, proyectando desde Los Cabos nuevas formas de
              crear y experimentar el cine.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/ejes/eje3-color.png" alt="Eje Programación" width={260} height={260} style={{ objectFit: "contain" }} />
          </div>
        </div>

        {/* Eje 4 — Icon left, text right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/ejes/eje4-color.png" alt="Eje Comunidad" width={260} height={260} style={{ objectFit: "contain" }} />
          </div>
          <div style={{ background: "#3A1525", borderRadius: 12, padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 900, textTransform: "uppercase" as const, color: "#E9B0BD", marginBottom: "1rem" }}>COMUNIDAD E INFLUENCIA</h3>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#F6EDDB", lineHeight: 1.8, opacity: .85 }}>
              Creamos un ecosistema que trasciende el evento. Activamos una red global de creadores, medios y
              plataformas para construir un ecosistema que se expande y empodera proyectos los 365 d&iacute;as del a&ntilde;o.
            </p>
          </div>
        </div>

      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
