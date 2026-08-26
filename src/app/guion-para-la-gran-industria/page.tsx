import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GPLGIConvocatoriaCTA from "@/components/GPLGIConvocatoriaCTA";

export const metadata: Metadata = {
  title: "Guión para la Gran Industria | Convocatoria de Guion FICC Los Cabos",
  description:
    "Convocatoria especializada en guion cinematográfico de largometraje del FICC Los Cabos. Estímulo económico, taller de pulido y producción para guionistas.",
  alternates: { canonical: "/guion-para-la-gran-industria" },
  openGraph: {
    title: "Guión para la Gran Industria | Convocatoria de Guion FICC Los Cabos",
    description:
      "Convocatoria especializada en guion cinematográfico de largometraje del FICC Los Cabos. Estímulo económico, taller de pulido y producción para guionistas.",
    url: "/guion-para-la-gran-industria",
  },
};

const aliadosGPLGI = [
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Filma Jalisco", logo: "/images/aliados/FICC_Logos_Aliados_2026-filma-jalisco.png" },
  { name: "Irreversible Pictures", logo: "/images/aliados/FICC_Logos_Aliados_2026-irreversible-pictures.png" },
  { name: "Lemon Studios", logo: "/images/aliados/FICC_Logos_Aliados_2026-lemon-films.png" },
];
const aliadosGPLGITrack = [...aliadosGPLGI, ...aliadosGPLGI];

const beneficios = [
  "Estímulo económico de $150,000 MXN",
  "Taller de pulido de guión con Lemon Studios e Irreversible Pictures",
  "Producción del proyecto por las dos productoras",
  "Bono adicional sujeto a desempeño en taquilla y ventas internacionales",
  "Regalías vía SOGEM y derechos de autor",
  "Crédito como guionista, con posible crédito compartido con un co-guionista de apoyo",
  "Visibilidad dentro del ecosistema del Festival Internacional de Cine y Creatividad de Los Cabos 2026",
];

export default function GuionParaLaGranIndustria() {
  return (
    <div className="gplgi-page" style={{ background: "#fff" }}>
      <Navbar />

      {/* Hero — GIF de fondo + logo */}
      <section className="relative w-full bg-[#0A1E23] overflow-hidden" style={{ minHeight: "70vh" }}>
        <Image
          src="/images/GPLGI_GIF_SinLogo.gif"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized
          priority
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ backgroundColor: "rgba(10, 30, 35, 0.45)" }}
        />
        <div className="relative z-10 flex items-center justify-center px-6 py-[8rem] md:py-[10rem]" style={{ minHeight: "70vh" }}>
          <div className="w-full max-w-[600px]">
            <Image
              src="/images/Guion_Logo-02.png"
              alt="Guión para la Gran Industria"
              width={1927}
              height={814}
              sizes="(max-width: 768px) 90vw, 600px"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="relative w-full" style={{ background: "#fff" }}>
        <div
          className="mx-auto px-6 py-[4rem] md:py-[6rem]"
          style={{ maxWidth: 1200 }}
        >
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2
                className="text-[32px] md:text-[48px] font-black leading-[1.05] mb-6"
                style={{ color: "#081722", textTransform: "uppercase" }}
              >
                Acerca de la convocatoria
              </h2>
            </div>
            <div>
              <p
                className="text-[clamp(1.05rem,1.8vw,1.5rem)] leading-[1.5] mb-6"
                style={{ color: "#081722", fontFamily: "var(--font-inter)" }}
              >
                Las casas productoras Lemon Studios e Irreversible Pictures en alianza con Filma Jalisco y el Festival Internacional de Cine y Creatividad Los Cabos en su 14.ª edición, invita a guionistas a participar en la convocatoria especializada en guion cinematográfico de largometraje, un programa para el desarrollo de proyectos cinematográficos de ficción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visión y objetivos */}
      <section className="relative w-full" style={{ background: "#F6EDDB" }}>
        <div
          className="mx-auto px-6 py-[4rem] md:py-[6rem]"
          style={{ maxWidth: 1200 }}
        >
          <h2
            className="text-[32px] md:text-[48px] font-black leading-[1.05] mb-8 md:mb-12"
            style={{ color: "#081722", textTransform: "uppercase" }}
          >
            Visión y objetivos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <p
              className="text-[clamp(1.05rem,1.8vw,1.5rem)] leading-[1.5]"
              style={{ color: "#081722", fontFamily: "var(--font-inter)" }}
            >
              El objetivo primordial es impulsar el crecimiento profesional de creadores cinematográficos mediante estímulos económicos y asesorías especializadas que permitan consolidar historias viables, sólidas y con un alto potencial de producción para el mercado nacional.
            </p>
            <p
              className="text-[clamp(1.05rem,1.8vw,1.5rem)] leading-[1.5]"
              style={{ color: "#081722", fontFamily: "var(--font-inter)" }}
            >
              Esta convocatoria apoya a los guionistas a llevar sus proyectos a la pantalla grande, de la mano de Lemon Studios, Irreversible Pictures y Filma Jalisco.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="relative w-full" style={{ background: "#fff" }}>
        <div
          className="mx-auto px-6 py-[4rem] md:py-[6rem]"
          style={{ maxWidth: 1200 }}
        >
          <h2
            className="text-[32px] md:text-[48px] font-black leading-[1.05] mb-8 md:mb-12"
            style={{ color: "#081722", textTransform: "uppercase" }}
          >
            Beneficios para guionistas
          </h2>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {beneficios.map((b, i) => (
              <li
                key={i}
                className="text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.5] pl-6 relative"
                style={{ color: "#081722", fontFamily: "var(--font-inter)" }}
              >
                <span
                  className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full"
                  style={{ background: "#FA6935" }}
                />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA de convocatoria */}
      <section className="relative w-full" style={{ background: "#0A1E23" }}>
        <div
          className="mx-auto px-6 py-[4rem] md:py-[6rem] text-center"
          style={{ maxWidth: 1200 }}
        >
          <h2
            className="text-[32px] md:text-[48px] font-black leading-[1.05] mb-6"
            style={{ color: "#F6EDDB", textTransform: "uppercase" }}
          >
            Convocatoria 2026
          </h2>
          <p
            className="text-[clamp(1.1rem,1.8vw,1.6rem)] leading-[1.5] mb-8"
            style={{ color: "#F6EDDB", fontFamily: "var(--font-inter)", opacity: 0.85 }}
          >
            Apertura de convocatoria: 24 de septiembre
          </p>
          <GPLGIConvocatoriaCTA />
        </div>
      </section>

      {/* Aliados */}
      <section className="aliados-plaque">
        <p
          className="aliados-plaque-quote"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400 }}
        >
          Con el apoyo de aliados estratégicos que hacen posible impulsar el talento guionístico mexicano.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosGPLGITrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image
                  src={a.logo}
                  alt={`Logo de ${a.name}, aliado de Guión para la Gran Industria`}
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
    </div>
  );
}
