import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import TextureStrip from "@/components/TextureStrip";
import FFGFAnimations from "@/components/FFGFAnimations";

const aliadosFFGF = [
  { name: "Aliado FFGF 1", logo: "/images/aliados-ffgf/aliado-ffgf-13.png" },
  { name: "Aliado FFGF 2", logo: "/images/aliados-ffgf/aliado-ffgf-14.png" },
  { name: "Aliado FFGF 3", logo: "/images/aliados-ffgf/aliado-ffgf-15.png" },
  { name: "Aliado FFGF 4", logo: "/images/aliados-ffgf/aliado-ffgf-16.png" },
  { name: "Aliado FFGF 5", logo: "/images/aliados-ffgf/aliado-ffgf-17.png" },
  { name: "Aliado FFGF 6", logo: "/images/aliados-ffgf/aliado-ffgf-18.png" },
];
const aliadosFFGFTrack = [...aliadosFFGF, ...aliadosFFGF];

const perfiles = [
  { title: "Africa Express (2025)", director: "Emilio Guerrero", desc: "El registro de la colisión entre Damon Albarn (Blur/Gorillaz) y México. Un puente entre el britpop y los ritmos africanos en suelo azteca.", tag: "Selección Oficial", still: "/images/stills/africa-express.png" },
  { title: "El sinaloense (2025)", director: "Luis Kles", desc: "Más allá del folclore, una exploración de la identidad y el mito. Una búsqueda por desmitificar el estigma para encontrar la esencia del norte.", tag: "Selección Oficial", still: "/images/stills/el-sinaloense.png" },
  { title: "Casa de guerreras (2025)", director: "Alejandro Paredes", desc: "Un retrato de resiliencia femenina. Se aleja del drama convencional para enfocarse en la fuerza colectiva y el legado de lucha.", tag: "Selección Oficial", still: "/images/stills/casa-de-guerreras.png" },
  { title: "Al interior del fuego (2025)", director: "TaGolfo de California a Acuña", desc: "Cine de sensaciones. La dualidad entre destrucción y creación, usando el fuego como metáfora visual de la transformación personal.", tag: "Selección Oficial", still: "/images/stills/al-interior-del-fuego.png" },
  { title: "Un lugar para volver (2025)", director: "Amanda Pérez Contreras", desc: "Una búsqueda sobre el desarraigo y el paisaje irreconocible al volver a casa. Un tema universal tratado con una estética muy personal.", tag: "Selección Oficial", still: "/images/stills/un-lugar-para-volver.png" },
  { title: "La Camarista (2017)", director: "Lila Avilés", desc: "Ganadora del Fondo Fílmico Gabriel Figueroa. Representante de México en los Premios Oscar y Premios Goya.", tag: "Ganadora FFGF", still: "/images/stills/la-camarista.jpg" },
  { title: "Tempestad (2015)", director: "Tatiana Huezo", desc: "Impulsada en etapa de Work in Progress. Mención Especial en la Berlinale y ganadora de 3 Premios Ariel.", tag: "Ganadora FFGF", still: "/images/stills/tempestad.png" },
];

export default function FFGF() {
  return (
    <div className="ffgf-page">
      <style>{`html, body { background: #fff !important; }`}</style>
      <Navbar />

      <PageHero lines={["Fondo Fílmico", "Gabriel Figueroa"]} />

      {/* Descripción — Image left, text right (matches lbi-desc-grid pattern) */}
      <section id="ffgf-desc-section" style={{ minHeight: "70vh", display: "flex", alignItems: "center", padding: "2rem", maxWidth: 1200, margin: "0 auto", marginBottom: "3rem" }}>
        <div className="lbi-desc-grid">
          <div data-anim="ffgf-image" style={{ display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <Image src="/images/ffgf-logo.png" alt="Fondo Fílmico Gabriel Figueroa" width={500} height={400} style={{ objectFit: "contain", width: "100%", maxWidth: 500, height: "auto" }} />
          </div>
          <div>
            <p data-anim="ffgf-typewriter" style={{ fontFamily: "var(--font-garamond)", fontSize: "1.5rem", color: "#000", lineHeight: 1.3, marginBottom: "1rem", fontWeight: 400 }}>
              Fortalece la industria audiovisual mexicana al generar una vinculaci&oacute;n efectiva entre cineastas y empresas
              estrat&eacute;gicas del sector. Mediante apoyos especializados, mentor&iacute;as y redes internacionales de colaboraci&oacute;n,
              el programa impulsa la finalizaci&oacute;n y circulaci&oacute;n global de nuevas obras.
            </p>
            <p data-anim="ffgf-typewriter" style={{ fontFamily: "var(--font-garamond)", fontSize: "1.5rem", color: "#000", lineHeight: 1.3, marginBottom: "1rem", fontWeight: 400 }}>
              Esta iniciativa posiciona al FICCLosCabos como una plataforma activa de empoderamiento cinematogr&aacute;fico
              y conexi&oacute;n profesional entre M&eacute;xico y el mundo, proyectando el talento de M&eacute;xico a la escena internacional.
            </p>
            <div data-anim="ffgf-dates" className="section-dates">
              <p style={{ fontFamily: "var(--font-garamond)", fontSize: "1.5rem", color: "#000", lineHeight: 1.3, fontWeight: 400, marginBottom: "1rem" }}>Apertura de convocatoria: Agosto 2026</p>
            </div>
            <a data-anim="ffgf-cta" href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginTop: "1.5rem" }}>
              S&eacute; el primero en recibir la informaci&oacute;n de la convocatoria
            </a>
          </div>
        </div>
      </section>

      {/* Divisor texture strip */}
      <div className="texture-strip-wrap w-full pointer-events-none relative z-10" style={{ height: 122, marginBottom: "-1rem", marginTop: -61 }}>
        <TextureStrip style={{ display: "block" }} />
      </div>

      {/* Legado FFGF — dark section pattern (matches la-baja-inspira legado) */}
      <section className="relative w-full flex flex-col overflow-hidden" style={{ background: "#0A1E23" }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plataformas-impulso/ffgf-bg.jpg"
            alt="Cine mexicano"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, .5)" }} />
        </div>

        <div className="relative z-10 shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[10rem] md:pl-[15rem]">
          <span data-anim="ffgf-legado-eyebrow" className="text-[20px] md:text-[26px] font-medium tracking-[.05em] leading-tight text-white/60 mb-6 block">
            Historias que trascienden
          </span>
          <h2 className="text-[42px] md:text-[58px] font-black text-white leading-[1.0] max-w-[520px] mb-6">
            {"Ganadores de Ediciones Anteriores".split(" ").map((word, wi) => (
              <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                {word.split("").map((char, ci) => (
                  <span key={ci} data-anim="ffgf-stagger-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </span>
            ))}
          </h2>
          <p data-anim="ffgf-legado-desc" className="text-white/80 max-w-[820px] leading-[1.5]" style={{ fontSize: "clamp(1.3rem, 1.8vw, 1.75rem)", fontFamily: "var(--font-garamond)" }}>
            Conoce algunas de las obras y ganadores que han proyectado el cine mexicano hacia el mercado global con el respaldo de FICCLosCabos.
          </p>
        </div>

        <div className="relative z-10" style={{ padding: "0 2rem 5rem", maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div className="legado-grid">
            {perfiles.map((p) => (
              <div key={p.title} data-anim="ffgf-legado-card" className="flip-card ffgf-flip">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Image src={p.still} alt={p.title} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div className="flip-card-back">
                    <span className="ffgf-film-tag">{p.tag}</span>
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

      {/* Aliados FFGF */}
      <section data-anim="ffgf-aliados" className="aliados-plaque">
        <p data-anim="ffgf-aliados-quote" className="aliados-plaque-quote" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
          Gracias a nuestros patrocinadores y aliados, que hacen posible hacer del Fondo Gabriel Figueroa un motor de formación y financiamiento del cine mexicano.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosFFGFTrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={a.name} width={320} height={170}
                  style={{ width: "auto", height: 170, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FFGFAnimations />
    </div>
  );
}
