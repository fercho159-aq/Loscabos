import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const medios = [
  "Variety", "The Hollywood Reporter", "Screen Daily", "Cineuropa",
  "El Pa\u00eds", "Reforma", "Proceso", "Milenio",
];

export default function Prensa() {
  return (
    <>
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
          <p className="page-hero-subtitle">
            Recursos para medios de comunicaci&oacute;n
          </p>
        </div>
      </section>

      <section className="section-text">
        <div className="section-text-inner" style={{ textAlign: "center" }}>
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
        <div className="section-highlight-inner" style={{ textAlign: "center" }}>
          <h2 className="section-heading">Medios</h2>
          <div className="medios-grid">
            {medios.map((m) => (
              <div key={m} className="medio-card">
                <p>{m}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
