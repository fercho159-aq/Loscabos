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

const perfilesLBI = [
  { title: "Ella se queda (2025)", director: "Marinthia Guti\u00e9rrez", desc: "Tras su paso por Cannes, se posiciona como el nuevo referente del cine de g\u00e9nero en M\u00e9xico. Una propuesta de est\u00e9tica ne\u00f3n que hipnotiza con su visi\u00f3n de la frontera." },
  { title: "Sol\u00eda buscar la luz all\u00e1 afuera (2025)", director: "Diego Hern\u00e1ndez", desc: "Ganador del Puma de Plata en FICUNAM. Un maestro del minimalismo capaz de capturar la poes\u00eda en la cotidianidad m\u00e1s pura." },
  { title: "Inmensidades (2025)", director: "Ricardo Benet", desc: "Una factura visual impecable. Una experiencia inmersiva dise\u00f1ada para los amantes de la fotograf\u00eda cinematogr\u00e1fica de alto nivel." },
  { title: "Aguasol (2025)", director: "Camila Pardo Cerezo", desc: "Narrativa poderosa sobre la corporalidad; un v\u00ednculo crudo entre el natural y los procesos del cuerpo femenino." },
  { title: "El desvelo (2025)", director: "Pau Ortiz Rosell", desc: "Referente del cine h\u00edbrido. Una observaci\u00f3n profunda de la psicolog\u00eda humana en estados de crisis y vigilia." },
  { title: "Entre dos tierras (2025)", director: "Sebasti\u00e1n del Callejo", desc: "Una historia necesaria sobre el sentido de pertenencia y las contradicciones de los contextos fronterizos." },
  { title: "Diana de Ayer | \u00bfC\u00f3mo procurar un jard\u00edn? (2025)", director: "", desc: "Una met\u00e1fora visual sobre el cuidado y la paciencia, nacida para mantener viva la memoria familiar a trav\u00e9s del tiempo." },
  { title: "Entre actores (2025)", director: "Jos\u00e9 Paredes", desc: "Disecci\u00f3n fascinante de la mente del actor. Una mirada a lo que ocurre cuando las luces se apagan y las c\u00e1maras del Golfo de California se dejan de rodar." },
  { title: "El brillo de la luci\u00e9rnaga (2025)", director: "Augusto Reyes", desc: "Uso magistral de la luz natural en una atm\u00f3sfera que redefine el realismo m\u00e1gico moderno." },
  { title: "La Recua (2021)", director: "Dir. Dar\u00edo Higuera & Trudi Angell", desc: "El gran hito de la identidad sudcaliforniana. Un viaje \u00e9pico que rescat\u00f3 la memoria de los rancheros de la sierra." },
  { title: "Sea of Shadows (2019)", director: "Prod. Leonardo DiCaprio", desc: "El v\u00ednculo entre la industria global y la urgencia ambiental del Golfo de California. El cine como herramienta de incidencia real." },
];

export default function LaBajaInspira() {
  return (
    <div className="lbi-page">
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

      {/* Legado La Baja Inspira */}
      <section className="section-highlight">
        <div className="section-highlight-inner">
          <h2 className="section-heading">Legado La Baja Inspira</h2>
          <p>
            Un registro de las obras y autores que, a trav&eacute;s de nuestras convocatorias anteriores, han transformado la riqueza del Pac&iacute;fico Sudcaliforniano en lenguaje cinematogr&aacute;fico con impacto global.
          </p>
          <div className="profiles-grid">
            {perfilesLBI.map((p) => (
              <div key={p.title} className="profile-card">
                <div className="profile-avatar" />
                <h4>{p.title}</h4>
                {p.director && <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{p.director}</p>}
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
