import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const comite = [
  {
    name: "ESCINE",
    desc: "Una de las instituciones acad\u00e9micas m\u00e1s importantes de M\u00e9xico dedicada a la profesionalizaci\u00f3n cinematogr\u00e1fica.",
    img: "/images/comite/escine.png",
  },
  {
    name: "Juan Patricio Riveroll",
    desc: "Director, productor y novelista con una destacada trayectoria en la creaci\u00f3n audiovisual y la gesti\u00f3n p\u00fablica.",
    img: "/images/comite/juan-patricio-riveroll.jpg",
  },
  {
    name: "Alfredo Ruiz",
    desc: "Director de la Licenciatura en Cinematograf\u00eda en ESCINE. Cuenta con una s\u00f3lida trayectoria en formaci\u00f3n acad\u00e9mica y cr\u00edtica cinematogr\u00e1fica.",
    img: "/images/comite/alfredo-ruiz.jpeg",
  },
  {
    name: "Iv\u00e1n Carrillo",
    desc: "Periodista, conductor y productor independiente especializado en ciencia, salud y medio ambiente.",
    img: "/images/comite/ivan-carrillo.png",
  },
];

const aliadosLBI = [
  { name: "Ánima Village", logo: "/images/aliados-lbi/anima-village.png" },
  { name: "Arte Abierto", logo: "/images/aliados-lbi/arte-abierto.png" },
  { name: "Cine de Verano", logo: "/images/aliados-lbi/cine-de-verano.png" },
  { name: "Pólvora", logo: "/images/aliados-lbi/polvora.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados-lbi/instituto-cultura-cabos.png" },
];
const aliadosLBITrack = [...aliadosLBI, ...aliadosLBI];

const ruta = [
  "Tijuana", "Ensenada", "La Paz", "La Ventana", "Todos Santos", "Cabo San Lucas", "San Jos\u00e9 del Cabo",
];

const perfilesLBI = [
  { title: "Ella se queda (2025)", director: "Marinthia Gutiérrez", desc: "Tras su paso por Cannes, se posiciona como el nuevo referente del cine de género en México. Una propuesta de estética neón que hipnotiza con su visión de la frontera.", poster: "/images/posters/ella-se-queda.jpeg" },
  { title: "Solía buscar la luz allá afuera (2025)", director: "Diego Hernández", desc: "Ganador del Puma de Plata en FICUNAM. Un maestro del minimalismo capaz de capturar la poesía en la cotidianidad más pura.", poster: "/images/posters/solia-buscar-la-luz.jpg" },
  { title: "Inmensidades (2025)", director: "Ricardo Benet", desc: "Una factura visual impecable. Una experiencia inmersiva diseñada para los amantes de la fotografía cinematográfica de alto nivel.", poster: "/images/posters/inmensidades.png" },
  { title: "Aguasol (2025)", director: "Camila Pardo Cerezo", desc: "Narrativa poderosa sobre la corporalidad; un vínculo crudo entre el natural y los procesos del cuerpo femenino.", poster: "/images/posters/aguasol.jpg" },
  { title: "El desvelo (2025)", director: "Pau Ortiz Rosell", desc: "Referente del cine híbrido. Una observación profunda de la psicología humana en estados de crisis y vigilia.", poster: "/images/posters/el-desvelo.png" },
  { title: "Entre dos tierras (2025)", director: "Sebastián del Callejo", desc: "Una historia necesaria sobre el sentido de pertenencia y las contradicciones de los contextos fronterizos.", poster: "/images/posters/entre-dos-tierras.png" },
  { title: "Diana de Ayer | ¿Cómo procurar un jardín? (2025)", director: "", desc: "Una metáfora visual sobre el cuidado y la paciencia, nacida para mantener viva la memoria familiar a través del tiempo.", poster: "/images/posters/como-procurar-un-jardin.jpeg" },
  { title: "Entre actores (2025)", director: "José Paredes", desc: "Disección fascinante de la mente del actor. Una mirada a lo que ocurre cuando las luces se apagan y las cámaras del Golfo de California se dejan de rodar.", poster: "/images/posters/entre-actores.png" },
  { title: "El brillo de la luciérnaga (2025)", director: "Augusto Reyes", desc: "Uso magistral de la luz natural en una atmósfera que redefine el realismo mágico moderno.", poster: "/images/posters/el-brillo-de-la-luciernaga.png" },
  { title: "La Recua (2021)", director: "Dir. Darío Higuera & Trudi Angell", desc: "El gran hito de la identidad sudcaliforniana. Un viaje épico que rescató la memoria de los rancheros de la sierra.", poster: "/images/posters/la-recua.jpg" },
  { title: "Sea of Shadows (2019)", director: "Prod. Leonardo DiCaprio", desc: "El vínculo entre la industria global y la urgencia ambiental del Golfo de California. El cine como herramienta de incidencia real.", poster: "/images/posters/sea-of-shadows.jpg" },
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
          <h1 className="page-hero-title"><span style={{ color: "var(--color-cream)" }}>La Baja </span><span style={{ color: "var(--color-orange)" }}>Inspira</span></h1>
        </div>
      </section>

      {/* Descripción — Image left, text right */}
      <section style={{ padding: "5rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/lbi-logo.png" alt="La Baja Inspira" width={400} height={500} style={{ objectFit: "contain", width: "100%", maxWidth: 400, height: "auto" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, opacity: .75, marginBottom: "1.2rem" }}>
              La Baja Inspira es la plataforma del Festival Internacional de Cine de Los Cabos dise&ntilde;ada para impulsar el cine
              de no ficci&oacute;n que explora la biodiversidad, la memoria y el desarrollo de la regi&oacute;n. Posicionamos al destino
              como un referente global, vinculando la potencia del lenguaje cinematogr&aacute;fico con la investigaci&oacute;n cient&iacute;fica y
              la conciencia p&uacute;blica.
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, opacity: .75, marginBottom: "1rem" }}>
              Los proyectos seleccionados deber&aacute;n articular el lenguaje cinematogr&aacute;fico con al menos una de las siguientes &aacute;reas de conocimiento:
            </p>
            <ul style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#081722", lineHeight: 1.8, opacity: .75, paddingLeft: 0, listStyle: "none" }}>
              <li style={{ marginBottom: "1.2rem", display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#BDC957" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>
                <span><strong>Ciencias Naturales:</strong> Biolog&iacute;a Golfo de California, ecolog&iacute;a, cambio clim&aacute;tico y biodiversidad del desierto.</span>
              </li>
              <li style={{ marginBottom: "1.2rem", display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C47A3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M2 12h1"/><path d="M6 8v8"/><path d="M10 2v20"/><path d="M14 4v16"/><path d="M18 6v12"/><path d="M22 12h-1"/></svg>
                <span><strong>Historia y Sociedad:</strong> Antropolog&iacute;a, patrimonio cultural y la reconstrucci&oacute;n de la memoria hist&oacute;rica.</span>
              </li>
              <li style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4A7FBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>
                <span><strong>Desarrollo del Destino:</strong> Econom&iacute;a azul, pesca responsable y turismo sostenible.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Banner desierto — full width */}
      <section style={{ position: "relative", width: "100%", height: "40vh", minHeight: 300 }}>
        <Image
          src="/images/plataformas-impulso/desert.jpg"
          alt="Desierto de Baja California"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>

      {/* Convocatoria 2026 */}
      <section className="section-highlight">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", maxWidth: 1200, margin: "0 auto", padding: "5rem 2rem", alignItems: "center" }}>
          <div>
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
          <div style={{ position: "relative", width: "100%", height: "100%", minHeight: 500, borderRadius: 12, overflow: "hidden" }}>
            <Image
              src="/images/lbi-convocatoria.jpg"
              alt="Costa de Baja California"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
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
                <div className="profile-avatar" style={{ position: "relative", overflow: "hidden" }}>
                  <Image src={p.img} alt={p.name} fill style={{ objectFit: "cover" }} />
                </div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuito Peninsular */}
      <section style={{ background: "var(--color-acid)", color: "#1B3A2D" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", maxWidth: 1200, margin: "0 auto", padding: "5rem 2rem", alignItems: "center" }}>
          <div>
            <h2 className="section-heading" style={{ color: "#1B3A2D" }}>Circuito Peninsular</h2>
            <p style={{ color: "rgba(27,58,45,0.8)" }}>
              Un circuito anual de circulaci&oacute;n cultural que lleva las pel&iacute;culas seleccionadas a distintas ciudades de Baja California
              y Baja California Sur. Del 6 de noviembre al 15 de diciembre.
            </p>
            <p style={{ marginTop: "1.5rem", fontWeight: 600, color: "#1B3A2D", marginBottom: "0.75rem" }}>Ruta de Exhibici&oacute;n:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {ruta.map((city) => (
                <li key={city} style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "rgba(27,58,45,0.9)", fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1B3A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/lbi-mapa-sedes.png"
              alt="Mapa Circuito Peninsular - Sedes"
              width={500}
              height={600}
              style={{ objectFit: "contain", width: "100%", maxWidth: 500, height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* Legado La Baja Inspira */}
      <section className="section-highlight">
        <div className="section-highlight-inner">
          <h2 className="section-heading">Legado La Baja Inspira</h2>
          <p>
            Un registro de las obras y autores que, a trav&eacute;s de nuestras convocatorias anteriores, han transformado la riqueza del Pac&iacute;fico Sudcaliforniano en lenguaje cinematogr&aacute;fico con impacto global.
          </p>
          <div className="legado-grid">
            {perfilesLBI.map((p) => (
              <div key={p.title} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src={p.poster} alt={p.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="flip-card-back">
                    <h4>{p.title}</h4>
                    {p.director && <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{p.director}</p>}
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aliados */}
      <section className="aliados-plaque">
        <h3 className="aliados-plaque-title">Aliados</h3>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosLBITrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={a.name} width={240} height={120}
                  style={{ width: "auto", height: 120, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
