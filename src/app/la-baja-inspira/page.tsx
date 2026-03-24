import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comite = [
  {
    name: "ESCINE",
    desc: "Una de las instituciones acad\u00e9micas m\u00e1s importantes de M\u00e9xico dedicada a la profesionalizaci\u00f3n cinematogr\u00e1fica.",
  },
  {
    name: "Juan Patricio Riveroll",
    desc: "Director, productor y novelista con una destacada trayectoria en la creaci\u00f3n audiovisual y la gesti\u00f3n p\u00fablica.",
  },
  {
    name: "Alfredo Ruiz",
    desc: "Director de la Licenciatura en Cinematograf\u00eda en ESCINE. Cuenta con una s\u00f3lida trayectoria en formaci\u00f3n acad\u00e9mica y cr\u00edtica cinematogr\u00e1fica.",
  },
  {
    name: "Iv\u00e1n Carrillo",
    desc: "Periodista, conductor y productor independiente especializado en ciencia, salud y medio ambiente.",
  },
];

const ruta = [
  "Tijuana", "Ensenada", "La Paz", "La Ventana", "Todos Santos", "Cabo San Lucas", "San Jos\u00e9 del Cabo",
];

export default function LaBajaInspira() {
  return (
    <>
      <Navbar />

      <section className="page-hero" style={{ minHeight: "50vh" }}>
        <div className="page-hero-bg">
          <Image
            src="/images/plataformas-impulso/underwater.jpg"
            alt="Golfo de California"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <h1 className="page-hero-title">La Baja Inspira</h1>
          <p className="page-hero-subtitle">
            Plataforma de proyecci&oacute;n del cine documental peninsular
          </p>
        </div>
      </section>

      {/* Descripción */}
      <section className="section-text">
        <div className="section-text-inner">
          <p>
            La Baja Inspira es la plataforma del Festival Internacional de Cine de Los Cabos dise&ntilde;ada para impulsar el cine
            de no ficci&oacute;n que explora la biodiversidad, la memoria y el desarrollo de la regi&oacute;n. Posicionamos al destino
            como un referente global, vinculando la potencia del lenguaje cinematogr&aacute;fico con la investigaci&oacute;n cient&iacute;fica y
            la conciencia p&uacute;blica.
          </p>
          <p>
            Los proyectos seleccionados deber&aacute;n articular el lenguaje cinematogr&aacute;fico con al menos una de las siguientes &aacute;reas de conocimiento:
          </p>
          <ul className="section-list">
            <li><strong>Ciencias Naturales:</strong> Biolog&iacute;a Golfo de California, ecolog&iacute;a, cambio clim&aacute;tico y biodiversidad del desierto.</li>
            <li><strong>Historia y Sociedad:</strong> Antropolog&iacute;a, patrimonio cultural y la reconstrucci&oacute;n de la memoria hist&oacute;rica.</li>
            <li><strong>Desarrollo del Destino:</strong> Econom&iacute;a azul, pesca responsable y turismo sostenible.</li>
          </ul>
        </div>
      </section>

      {/* Image break */}
      <section style={{ position: "relative", height: "45vh", overflow: "hidden" }}>
        <Image
          src="/images/plataformas-impulso/desert.jpg"
          alt="Desierto de Baja California"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>

      {/* Convocatoria 2026 */}
      <section className="section-highlight">
        <div className="section-highlight-inner">
          <h2 className="section-heading">Convocatoria 2026</h2>
          <p>La convocatoria 2026 acepta exclusivamente:</p>
          <ul className="section-list">
            <li>Largometrajes documentales terminados</li>
            <li>Cortometrajes documentales terminados</li>
            <li>Ensayos cinematogr&aacute;ficos de no ficci&oacute;n finalizados</li>
            <li>Documentales cient&iacute;ficos concluidos</li>
          </ul>
          <div className="section-dates">
            <p><strong>Apertura:</strong> 05 de mayo, 2026</p>
            <p><strong>Cierre:</strong> 30 de junio, 2026</p>
            <p><strong>Selecci&oacute;n:</strong> 8 t&iacute;tulos que definen el pulso de la regi&oacute;n</p>
          </div>
          <Link href="/comunidad" className="cta-button" style={{ marginTop: "1.5rem" }}>
            S&eacute; el primero en recibir informaci&oacute;n
          </Link>
        </div>
      </section>

      {/* Comité de selección */}
      <section className="section-text">
        <div className="section-text-inner">
          <h2 className="section-heading">Comit&eacute; de Selecci&oacute;n</h2>
          <p>
            Nuestra selecci&oacute;n es validada por un comit&eacute; de expertos en alianza con ESCINE y el periodismo cient&iacute;fico de alto nivel.
          </p>
          <div className="profiles-grid">
            {comite.map((p) => (
              <div key={p.name} className="profile-card">
                <div className="profile-avatar" />
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuito Peninsular */}
      <section className="section-highlight">
        <div className="section-highlight-inner">
          <h2 className="section-heading">Circuito Peninsular</h2>
          <p>
            Un circuito anual de circulaci&oacute;n cultural que lleva las pel&iacute;culas seleccionadas a distintas ciudades de Baja California
            y Baja California Sur. Del 6 de noviembre al 15 de diciembre.
          </p>
          <p style={{ marginTop: "1rem", fontWeight: 600 }}>Ruta de Exhibici&oacute;n:</p>
          <p className="ruta-cities">{ruta.join(" \u2022 ")}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
