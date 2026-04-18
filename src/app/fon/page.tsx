import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export default function FON() {
  return (
    <div className="fon-page">
      <Navbar />

      <PageHero lines={["Frequencies", "of Now"]} />

      <section style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Laboratorio creativo donde el cine, la m&uacute;sica y la moda convergen para impulsar nuevas narrativas audiovisuales.
              A trav&eacute;s de procesos colaborativos y experiencias en vivo, el programa funciona como una radiograf&iacute;a de la
              sociedad mexicana, identificando a los protagonistas que explican el porqu&eacute; de lo que sucede hoy en nuestro
              entorno y el panorama musical de M&eacute;xico.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, marginBottom: "1.2rem" }}>
              Al observar las tendencias y c&oacute;mo estas trascienden, el programa se consolida como un espacio estrat&eacute;gico
              para entender la actualidad de estas industrias, fortaleciendo el rol del FICCLosCabos como una plataforma
              activa de producci&oacute;n audiovisual.
            </p>
            <a href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginTop: "2rem" }}>
              S&eacute; el primero en recibir informaci&oacute;n
            </a>
          </div>
          <div style={{ position: "relative", width: "100%", minHeight: 400, borderRadius: 12, overflow: "hidden" }}>
            <Image
              src="/images/fon-mixer.jpg"
              alt="Consola de audio del programa Frequencies of Now — FICC Los Cabos"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
