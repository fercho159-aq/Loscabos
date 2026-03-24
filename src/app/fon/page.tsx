import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FON() {
  return (
    <div className="fon-page">
      <Navbar />

      <section className="page-hero" style={{ minHeight: "50vh" }}>
        <div className="page-hero-bg">
          <Image
            src="/images/plataformas-impulso/production.jpg"
            alt="Production"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <h1 className="page-hero-title">Frequencies of Now</h1>
        </div>
      </section>

      <section className="section-text">
        <div className="section-text-inner">
          <p>
            Laboratorio creativo donde el cine, la m&uacute;sica y la moda convergen para impulsar nuevas narrativas audiovisuales.
            A trav&eacute;s de procesos colaborativos y experiencias en vivo, el programa funciona como una radiograf&iacute;a de la
            sociedad mexicana, identificando a los protagonistas que explican el porqu&eacute; de lo que sucede hoy en nuestro
            entorno y el panorama musical de M&eacute;xico.
          </p>
          <p>
            Al observar las tendencias y c&oacute;mo estas trascienden, el programa se consolida como un espacio estrat&eacute;gico
            para entender la actualidad de estas industrias, fortaleciendo el rol del FICCLosCabos como una plataforma
            activa de producci&oacute;n audiovisual.
          </p>
          <Link href="/comunidad" className="cta-button" style={{ marginTop: "2rem" }}>
            S&eacute; el primero en recibir informaci&oacute;n
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
