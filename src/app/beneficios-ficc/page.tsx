import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Beneficios FICC | Reserva con nuestra red de aliados",
  description:
    "Tarifas especiales y descuentos de los aliados de FICCLosCabos en hospedaje y servicios para quienes asisten al Festival, del 9 al 13 de diciembre de 2026.",
  alternates: { canonical: "/beneficios-ficc" },
  openGraph: {
    title: "Beneficios FICC | Reserva con nuestra red de aliados",
    description: "Tarifas especiales y descuentos de los aliados de FICCLosCabos 2026.",
    url: "/beneficios-ficc",
  },
};

// National Car Rental pendiente: el doc aún trae placeholders ([BENEFICIO], [LINK DE RESERVA], [CONDICIONES]).
const aliados: { name: string; tagline?: string; body: ReactNode }[] = [
  {
    name: "JW Marriott Los Cabos, ubicado en Puerto Los Cabos",
    body: (
      <>
        <p>
          JW Marriott Los Cabos forma parte de la red de aliados que hacen posible la 14° edición de FICCLosCabos
          recibiendo a invitados, creadores, profesionales de la industria y encuentros vinculados con la
          experiencia de FICCLosCabos.
        </p>
        <p>
          A lo largo de los años, su presencia se ha convertido en parte de los encuentros que hacen de
          FICCLosCabos una experiencia donde el cine convive con el arte y la comunidad.
        </p>
        <h3>Beneficio</h3>
        <p>
          Tarifa especial de <strong>215 USD la noche más impuestos</strong> en la categoría base: Habitación
          de lujo Resort View. En caso de agotarse la categoría base, la siguiente categoría disponible es
          Habitación de Lujo Vista Panorámica al Mar en 270 USD la noche más impuestos.
        </p>
        <p>
          Esta tarifa será aplicable para cualquier persona que se comunique directamente con el Departamento
          de Reservaciones de JW Marriott Los Cabos, únicamente para las fechas del 9 al 14 de diciembre.
        </p>
        <p>
          La promoción conlleva una política de cancelación de 14 días antes de la llegada. En caso de cancelar
          dentro de los 14 días previos, aplicará una penalidad equivalente a 1 noche.
        </p>
        <h3>Cómo reservar</h3>
        <p>
          Por correo electrónico:{" "}
          <a href="mailto:jwlc.reservaciones1@grupodiestra.com">jwlc.reservaciones1@grupodiestra.com</a> o{" "}
          <a href="mailto:jwlc.reservaciones2@grupodiestra.com">jwlc.reservaciones2@grupodiestra.com</a>, o por
          teléfono al <a href="tel:+526241637600">624 163 7600</a> ext. 2133.
        </p>
        <p className="opacity-70">Tarifa sujeta a disponibilidad.</p>
      </>
    ),
  },
  {
    name: "Flamboyán Hotel & Residences",
    tagline: "Una estancia a la medida",
    body: (
      <>
        <p>
          Para hacer que tu estancia sea inolvidable, hemos organizado una ventana de viaje flexible del{" "}
          <strong>6 al 16 de diciembre de 2026</strong>, lo que te permitirá llegar antes o extender tu visita
          para disfrutar de más momentos extraordinarios en Los Cabos.
        </p>
        <h3>Tu beneficio especial</h3>
        <p>
          Disfruta de un <strong>15% de descuento</strong> adicional sobre las mejores tarifas promocionales
          disponibles en línea al momento de reservar. Esta oferta está sujeta a disponibilidad, ¡por lo que te
          sugerimos reservar lo antes posible!
        </p>
        <h3>Cómo reservar</h3>
        <ol>
          <li>
            Visita{" "}
            <a href="https://www.flamboyan.com.mx/" target="_blank" rel="noopener noreferrer">
              flamboyan.com.mx
            </a>
          </li>
          <li>Elige tus fechas de llegada y salida</li>
          <li>Ingresa el número de huéspedes</li>
          <li>
            En el campo &ldquo;Código de Promoción&rdquo;, ingresa: <strong>FICC2026</strong>
          </li>
          <li>Haz clic en Buscar para ver todas las habitaciones disponibles con tu descuento exclusivo</li>
          <li>Selecciona el tipo de habitación de tu preferencia y haz clic en Seleccionar para continuar con la reserva</li>
        </ol>
        <p>
          Para confirmar tu reservación, se requerirá el pago de la primera noche; el saldo restante se liquidará
          a tu llegada al hotel.
        </p>
        <h3>Detalles importantes</h3>
        <ul>
          <li>Las tarifas están sujetas al 16% de impuesto, 4% de impuesto sobre hospedaje y un cargo por servicio del 6%.</li>
          <li>
            El Impuesto de Derecho de Saneamiento Ambiental es de $82.12 MXN por habitación por noche y debe
            pagarse directamente a la llegada al hotel.
          </li>
          <li>Wi-Fi en cortesía.</li>
          <li>Estacionamiento en cortesía.</li>
        </ul>
      </>
    ),
  },
];

export default function BeneficiosFICC() {
  return (
    <>
      <Navbar />
      <PageHero lines={["Beneficios", "FICC"]} short />

      <section className="section-text">
        <div className="section-text-inner">
          <h2 className="section-heading">Reserva con nuestra red de aliados</h2>
          <p className="mt-6 text-[1.05rem] leading-[1.6] text-[var(--color-navy)]">
            FICCLosCabos nace en Los Cabos, entre el mar y el desierto, y se vive también fuera de la sala. Del 9
            al 13 de diciembre, nuestros aliados en hospitalidad, residencias artísticas y espacios culturales
            tienen beneficios para quienes nos acompañan, para que recorrer el destino sea parte del Festival.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-5 pb-16 md:px-8">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-2">
          {aliados.map((a) => (
            <article
              key={a.name}
              className="beneficio-card rounded-2xl bg-[#0A1E23] p-7 text-[#F6EDDB] md:p-10 [&_a]:underline [&_a]:underline-offset-2 [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[.8rem] [&_h3]:font-bold [&_h3]:uppercase [&_h3]:tracking-[.08em] [&_h3]:text-[var(--color-orange)] [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 text-[.95rem] leading-[1.6]"
            >
              <h2 className="m-0 text-[clamp(1.5rem,2.6vw,2rem)] font-black leading-tight text-white">{a.name}</h2>
              {a.tagline && <p className="mt-1 !mb-0 text-white/60">{a.tagline}</p>}
              <div className="mt-5">{a.body}</div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[720px] text-center text-[.8rem] italic leading-[1.5] text-[var(--color-navy)]/70">
          Los beneficios, condiciones, precios y disponibilidad son responsabilidad de cada aliado. FICCLosCabos
          solo los da a conocer y no interviene en reservas, pagos, cambios ni cancelaciones. Consulta los términos
          directamente con cada aliado.
        </p>
      </section>

      <Footer />
    </>
  );
}
