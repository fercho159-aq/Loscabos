import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "El Festival | Historia y Misión",
  description:
    "Conoce la historia, misión y visión del Festival Internacional de Cine y Creatividad de Los Cabos. 14 años impulsando el cine iberoamericano.",
  alternates: { canonical: "/el-festival" },
  openGraph: {
    title: "El Festival | Historia y Misión",
    description:
      "Conoce la historia, misión y visión del Festival Internacional de Cine y Creatividad de Los Cabos. 14 años impulsando el cine iberoamericano.",
    url: "/el-festival",
  },
};

const aliados = [
  { name: "Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "IMCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro", logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Art Kingdom", logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "CTT Exp & Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Shalala", logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "Artegios", logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Chemistry", logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
  { name: "CineNet", logo: "/images/aliados/FICC_Logos_Aliados_2026-11.png" },
  { name: "Ánima Village", logo: "/images/aliados/FICC_Logos_Aliados_2026-12.png" },
  { name: "Arte Abierto", logo: "/images/aliados/FICC_Logos_Aliados_2026-13.png" },
  { name: "Cine de Verano", logo: "/images/aliados/FICC_Logos_Aliados_2026-14.png" },
  { name: "Pólvora", logo: "/images/aliados/FICC_Logos_Aliados_2026-15.png" },
  { name: "Instituto de la Cultura y las Artes", logo: "/images/aliados/FICC_Logos_Aliados_2026-16.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-17.png" },
  { name: "Secrets Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-18.png" },
  { name: "Tropicana", logo: "/images/aliados/FICC_Logos_Aliados_2026-19.png" },
  { name: "Krystal Grand Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-20.png" },
  { name: "Veleros Beach Club", logo: "/images/aliados/FICC_Logos_Aliados_2026-21.png" },
  { name: "Crania", logo: "/images/aliados/FICC_Logos_Aliados_2026-22.png" },
  { name: "Casa Ballena", logo: "/images/aliados/FICC_Logos_Aliados_2026-23.png" },
  { name: "Suelo Sur", logo: "/images/aliados/FICC_Logos_Aliados_2026-24.png" },
  { name: "Sage", logo: "/images/aliados/FICC_Logos_Aliados_2026-25.png" },
  { name: "Baja Republic", logo: "/images/aliados/FICC_Logos_Aliados_2026-26.png" },
  { name: "Dobel 50", logo: "/images/aliados/FICC_Logos_Aliados_2026-27.png" },
  { name: "Grupo Aeroportuario del Pacífico", logo: "/images/aliados/FICC_Logos_Aliados_2026-28.png" },
  { name: "Aeromexico", logo: "/images/aliados/FICC_Logos_Aliados_2026-29.png" },
  { name: "YAYA Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-30.png" },
  { name: "Zadún, A Ritz-Carlton Reserve", logo: "/images/aliados/FICC_Logos_Aliados_2026-31.png" },
  { name: "The Cape, A Thompson Hotel", logo: "/images/aliados/FICC_Logos_Aliados_2026-32.png" },
];
const aliadosTrack = [...aliados, ...aliados];
import PageHero from "@/components/PageHero";
import ElFestivalIntroScroll from "@/components/ElFestivalIntroScroll";
import ElFestivalEjeSection from "@/components/ElFestivalEjeSection";

export default function ElFestival() {
  return (
    <>
      <Navbar />

      <div className="ef-page">

        {/* ── HERO ── */}
        <PageHero lines={["El Festival"]} />

        {/* ── INTRO: #BeyondTheScreen ── */}
        <ElFestivalIntroScroll />

        {/* ── EJE 1: Plataforma Cultural Anclada en Los Cabos ── */}
        <ElFestivalEjeSection
          ejeNum={1}
          heroSvg="/images/el-festival/PlataformaCreativa.svg"
          heroTitleLines={["Plataforma Cultural", "Anclada en Los Cabos"]}
          heroImage={{
            src: "/images/el-festival/Cactus.png",
            alt: "Plataforma Cultural anclada en Los Cabos",
          }}
          iconReveal="wipe-up"
        >
          <p data-anim="eje-para">
            El entorno especial de Los Cabos es el origen de todo. Producto de la energía que emana del Golfo de California, surge este festival que, mediante alianzas estratégicas, fusiona la hospitalidad de Baja California Sur con un circuito creativo internacional sin precedentes.
          </p>
        </ElFestivalEjeSection>

        {/* ── EJE 2: Impulso a la Industria ── */}
        <ElFestivalEjeSection
          ejeNum={2}
          heroSvg="/images/el-festival/FICCLosCabos_2026_Brandbook.svg"
          heroTitleLines={["Plataformas de", "Impulso a la", "Industria del Cine"]}
          heroImage={{
            src: "/images/el-festival/rendy-novantino-lNzyXvBkZXQ-unsplash.jpg",
            alt: "Plataformas de Impulso a la Industria del Cine",
          }}
          row1Split="1/2"
          entitiesLabel="Plataformas"
          entities={[
            { label: "La Baja Inspira" },
            { label: "Fondo Fílmico Gabriel Figueroa" },
          ]}
          iconReveal="scale-fade"
        >
          <p data-anim="eje-para" className="mb-6 md:mb-7">
            Nuestras plataformas reducen la brecha entre creación, industria y audiencias. A través de <span className="ef-accent">La Baja Inspira</span> y el <span className="ef-accent">Fondo Fílmico Gabriel Figueroa</span>, actuamos como un motor de formación, financiamiento y exhibición.
          </p>
          <p data-anim="eje-para">
            Diseñadas para generar convergencia, estas plataformas fortalecen trayectorias creativas y construyen puentes reales entre el talento mexicano y el mercado internacional.
          </p>
        </ElFestivalEjeSection>

        {/* ── EJE 3: Programación con Pulso Global ── */}
        <ElFestivalEjeSection
          ejeNum={3}
          heroSvg="/images/el-festival/ProgramaciónconPulsoGlobal.svg"
          heroTitleLines={["Programación", "con Pulso Global"]}
          heroImage={{
            src: "/images/el-festival/DTS_Daniel_Faro_Travel_Together_001 (1).png",
            alt: "Programación con Pulso Global",
          }}
          entitiesLabel="Programación"
          entities={[
            { label: "Competencia Mexicana" },
            { label: "Animación" },
            { label: "Marejada" },
            { label: "#BeyondTheScreen" },
          ]}
          iconReveal="wipe-right"
        >
          <p data-anim="eje-para" className="mb-6 md:mb-7">
            Nuestra curaduría descubre y posiciona las voces que definen el futuro del cine. Desde la <span className="ef-accent">Competencia Mexicana</span> y su apuesta por el riesgo narrativo, hasta la consolidación de la <span className="ef-accent">Animación</span> como un lenguaje cinematográfico mayor y <span className="ef-accent">Marejada</span>, nuestra muestra Internacional  como nuestra vitrina de los grandes circuitos y festivales, el Festival dialoga permanentemente con el circuito de festivales internacional.
          </p>
          {/* TODO(cliente): este párrafo #BeyondTheScreen se repite verbatim en eje 4. Cliente debe decidir si eliminar de aquí, de eje 4, o reescribir uno de los dos. */}
          <p data-anim="eje-para">
            <span className="ef-accent">#BeyondTheScreen</span> es una plataforma de innovación cultural. Integramos <span className="ef-kw-cine">cine</span>, <span className="ef-kw-musica">música</span> y <span className="ef-kw-arte-digital">arte digital</span> para responder a la transformación de las industrias creativas, proyectando desde Los Cabos nuevas formas de crear y experimentar el cine.
          </p>
        </ElFestivalEjeSection>

        {/* ── EJE 4: Comunidad Creativa y Ecosistema de Influencia ── */}
        <ElFestivalEjeSection
          ejeNum={4}
          heroSvg="/images/el-festival/ComunidadCreativayEcosistemade Influencia.svg"
          heroTitleLines={["Comunidad Creativa y", "Ecosistema de Influencia"]}
          heroImage={{
            src: "/images/el-festival/IMG_4061.png",
            alt: "Comunidad Creativa y Ecosistema de Influencia",
          }}
          numericAnchor={{ num: "365", label: "Días al año" }}
          iconReveal="scale-rotate"
        >
          <p data-anim="eje-para" className="mb-6 md:mb-7">
            Creamos un ecosistema que trasciende el evento. Activamos una red global de creadores, medios y plataformas para construir un ecosistema que se expande y empodera proyectos <span className="ef-accent">los 365 días del año</span>.
          </p>
          {/* TODO(cliente): este párrafo #BeyondTheScreen se repite verbatim en eje 3. Cliente debe decidir si eliminar de aquí, de eje 3, o reescribir uno de los dos. */}
          <p data-anim="eje-para">
            <span className="ef-accent">#BeyondTheScreen</span> es una plataforma de innovación cultural. Integramos <span className="ef-kw-cine">cine</span>, <span className="ef-kw-musica">música</span> y <span className="ef-kw-arte-digital">arte digital</span> para responder a la transformación de las industrias creativas, proyectando desde Los Cabos nuevas formas de crear y experimentar el cine.
          </p>
        </ElFestivalEjeSection>

      </div>


      {/* ── ALIADOS ── */}
      <section id="aliados-section" data-anim="aliados-marquee" className="aliados-plaque">
        <span data-anim="aliados-tag" className="aliados-plaque-tag">Nuestros aliados y patrocinadores</span>
        <p data-anim="aliados-quote" className="aliados-plaque-quote">
          Juntos, proyectamos al Festival Internacional de Cine y Creatividad de Los Cabos a nivel internacional.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosTrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image
                  src={a.logo}
                  alt={`Logo de ${a.name}, aliado del FICC Los Cabos`}
                  width={320}
                  height={220}
                  sizes="(max-width: 768px) 320px, 240px"
                  loading="lazy"
                  style={{ width: "auto", maxHeight: 170, height: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
