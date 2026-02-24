import type { Metadata } from "next";
import Header from "@/components/cabo-cine/header";
import Footer from "@/components/cabo-cine/footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | CaboCine FICLosCabos",
  description:
    "Política de privacidad del Festival Internacional de Cine de Los Cabos. Conoce cómo recopilamos, usamos y protegemos tu información personal.",
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4">
            Política de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Última actualización: 24 de febrero de 2026
          </p>

          <div className="space-y-10 text-foreground/90 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                1. Introducción
              </h2>
              <p>
                El Festival Internacional de Cine de Los Cabos (en adelante
                &quot;FICLosCabos&quot;, &quot;nosotros&quot; o
                &quot;nuestro&quot;), operado por Cabocine, se compromete a
                proteger la privacidad de los visitantes de nuestro sitio web{" "}
                <strong>cabocine.com</strong> y de los usuarios que interactúan
                con nuestras campañas publicitarias en plataformas de terceros,
                incluyendo Meta (Facebook e Instagram). Esta Política de
                Privacidad describe cómo recopilamos, usamos, compartimos y
                protegemos tu información personal.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                2. Responsable del tratamiento de datos
              </h2>
              <p>
                <strong>Cabocine / Festival Internacional de Cine de Los Cabos</strong>
                <br />
                Correo electrónico de contacto:{" "}
                <a
                  href="mailto:info@cabocine.com"
                  className="text-secondary underline hover:text-secondary/80 transition-colors"
                >
                  info@cabocine.com
                </a>
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                3. Información que recopilamos
              </h2>
              <p className="mb-3">
                Podemos recopilar los siguientes tipos de información:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Información proporcionada voluntariamente:</strong>{" "}
                  nombre, correo electrónico, teléfono y cualquier dato que nos
                  proporciones a través de formularios de contacto, registro,
                  pre-registro o suscripción a nuestro boletín informativo
                  (newsletter).
                </li>
                <li>
                  <strong>Información recopilada automáticamente:</strong>{" "}
                  dirección IP, tipo de navegador, sistema operativo, páginas
                  visitadas, tiempo de permanencia, fuente de referencia y otros
                  datos de navegación.
                </li>
                <li>
                  <strong>Información recopilada mediante cookies y tecnologías de seguimiento:</strong>{" "}
                  utilizamos cookies, píxeles de seguimiento y tecnologías
                  similares, incluyendo el Píxel de Meta (Facebook) y Google
                  Analytics, para medir la efectividad de nuestras campañas
                  publicitarias y mejorar tu experiencia en el sitio.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                4. Uso de la información
              </h2>
              <p className="mb-3">
                Utilizamos la información recopilada para los siguientes fines:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Proporcionarte información sobre el festival, programación,
                  eventos y actividades relacionadas.
                </li>
                <li>
                  Procesar tu registro, pre-registro o compra de boletos.
                </li>
                <li>
                  Enviarte comunicaciones de marketing y boletines informativos
                  (solo si has dado tu consentimiento).
                </li>
                <li>
                  Medir y analizar el rendimiento de nuestras campañas
                  publicitarias en Meta (Facebook e Instagram), Google Ads y
                  otras plataformas.
                </li>
                <li>
                  Crear audiencias personalizadas y similares (lookalike) en Meta
                  para mostrar publicidad relevante.
                </li>
                <li>
                  Mejorar nuestro sitio web, contenido y servicios.
                </li>
                <li>
                  Cumplir con obligaciones legales aplicables.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                5. Uso del Píxel de Meta (Facebook)
              </h2>
              <p className="mb-3">
                Nuestro sitio web utiliza el <strong>Píxel de Meta</strong>{" "}
                (anteriormente conocido como Píxel de Facebook), una herramienta
                de análisis que nos permite medir la efectividad de nuestra
                publicidad al comprender las acciones que realizas en nuestro
                sitio. El Píxel de Meta recopila datos como:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Páginas visitadas y acciones realizadas en el sitio (como
                  registros, compras de boletos o suscripciones).
                </li>
                <li>
                  Información del dispositivo (tipo de navegador, sistema
                  operativo, dirección IP).
                </li>
                <li>
                  Datos de referencia sobre cómo llegaste a nuestro sitio.
                </li>
              </ul>
              <p className="mt-3">
                Esta información es compartida con Meta Platforms, Inc. para
                permitirnos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                <li>
                  Medir el retorno de inversión de nuestra publicidad en
                  Facebook e Instagram.
                </li>
                <li>
                  Optimizar la entrega de anuncios a personas que tienen más
                  probabilidad de realizar una acción.
                </li>
                <li>
                  Crear audiencias personalizadas para futuras campañas
                  publicitarias.
                </li>
              </ul>
              <p className="mt-3">
                Para más información sobre cómo Meta utiliza tus datos, visita
                la{" "}
                <a
                  href="https://www.facebook.com/privacy/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary underline hover:text-secondary/80 transition-colors"
                >
                  Política de Privacidad de Meta
                </a>
                .
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                6. Google Analytics y Google Ads
              </h2>
              <p>
                Utilizamos Google Analytics para analizar el uso de nuestro sitio
                web y Google Ads para gestionar campañas publicitarias. Estas
                herramientas pueden recopilar información sobre tu actividad de
                navegación mediante cookies. Puedes obtener más información en
                la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary underline hover:text-secondary/80 transition-colors"
                >
                  Política de Privacidad de Google
                </a>
                . Puedes optar por no participar en el seguimiento de Google
                Analytics instalando el{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary underline hover:text-secondary/80 transition-colors"
                >
                  complemento de inhabilitación
                </a>
                .
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                7. Cookies y tecnologías similares
              </h2>
              <p className="mb-3">
                Las cookies son pequeños archivos de texto almacenados en tu
                dispositivo. Utilizamos los siguientes tipos de cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Cookies esenciales:</strong> necesarias para el
                  funcionamiento básico del sitio web.
                </li>
                <li>
                  <strong>Cookies de análisis:</strong> nos ayudan a entender
                  cómo interactúas con el sitio (Google Analytics).
                </li>
                <li>
                  <strong>Cookies de publicidad:</strong> utilizadas para mostrar
                  anuncios relevantes y medir la efectividad de las campañas
                  (Meta Píxel, Google Ads).
                </li>
              </ul>
              <p className="mt-3">
                Puedes configurar tu navegador para rechazar cookies o alertarte
                cuando se envíen. Sin embargo, algunas funciones del sitio
                pueden no estar disponibles si desactivas las cookies.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                8. Compartición de datos con terceros
              </h2>
              <p className="mb-3">
                No vendemos tu información personal. Podemos compartir tus datos
                con terceros únicamente en los siguientes casos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Meta Platforms, Inc.:</strong> para la gestión y
                  optimización de campañas publicitarias en Facebook e Instagram.
                </li>
                <li>
                  <strong>Google LLC:</strong> para análisis web y gestión de
                  campañas publicitarias.
                </li>
                <li>
                  <strong>Proveedores de servicios:</strong> empresas que nos
                  ayudan a operar el sitio web, procesar pagos o enviar
                  comunicaciones, siempre bajo acuerdos de confidencialidad.
                </li>
                <li>
                  <strong>Obligación legal:</strong> cuando sea requerido por ley
                  o por una autoridad competente.
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                9. Tus derechos
              </h2>
              <p className="mb-3">
                De acuerdo con la Ley Federal de Protección de Datos Personales
                en Posesión de los Particulares (LFPDPPP) de México, tienes
                derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  <strong>Acceso:</strong> conocer qué datos personales tenemos
                  sobre ti.
                </li>
                <li>
                  <strong>Rectificación:</strong> solicitar la corrección de tus
                  datos si son inexactos.
                </li>
                <li>
                  <strong>Cancelación:</strong> solicitar la eliminación de tus
                  datos.
                </li>
                <li>
                  <strong>Oposición:</strong> oponerte al tratamiento de tus
                  datos para fines específicos.
                </li>
              </ul>
              <p className="mt-3">
                Para ejercer tus derechos ARCO, envía una solicitud a{" "}
                <a
                  href="mailto:info@cabocine.com"
                  className="text-secondary underline hover:text-secondary/80 transition-colors"
                >
                  info@cabocine.com
                </a>{" "}
                con tu nombre completo, una copia de tu identificación oficial y
                una descripción clara de los derechos que deseas ejercer.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                10. Cómo desactivar el seguimiento publicitario
              </h2>
              <p className="mb-3">
                Si deseas limitar el uso de tu información para publicidad
                personalizada, puedes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>
                  Ajustar tus{" "}
                  <a
                    href="https://www.facebook.com/settings?tab=ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline hover:text-secondary/80 transition-colors"
                  >
                    preferencias de anuncios en Facebook
                  </a>
                  .
                </li>
                <li>
                  Utilizar la herramienta{" "}
                  <a
                    href="https://www.facebook.com/off_facebook_activity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline hover:text-secondary/80 transition-colors"
                  >
                    Actividad fuera de Facebook
                  </a>{" "}
                  para gestionar los datos que otras empresas comparten con Meta.
                </li>
                <li>
                  Visitar{" "}
                  <a
                    href="https://optout.aboutads.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary underline hover:text-secondary/80 transition-colors"
                  >
                    optout.aboutads.info
                  </a>{" "}
                  para optar por no recibir publicidad basada en intereses de
                  empresas participantes.
                </li>
                <li>
                  Configurar las opciones de privacidad de tu navegador o
                  dispositivo móvil.
                </li>
              </ul>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                11. Seguridad de la información
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para
                proteger tu información personal contra acceso no autorizado,
                pérdida, alteración o destrucción. Sin embargo, ningún método de
                transmisión por Internet es 100% seguro, por lo que no podemos
                garantizar una seguridad absoluta.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                12. Cambios a esta política
              </h2>
              <p>
                Nos reservamos el derecho de actualizar esta Política de
                Privacidad en cualquier momento. Cualquier cambio será publicado
                en esta página con la fecha de última actualización. Te
                recomendamos revisar esta política periódicamente.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-headline text-2xl text-primary mb-3">
                13. Contacto
              </h2>
              <p>
                Si tienes preguntas o inquietudes sobre esta Política de
                Privacidad o sobre el manejo de tus datos personales, puedes
                contactarnos en:
              </p>
              <p className="mt-3">
                <strong>Cabocine / Festival Internacional de Cine de Los Cabos</strong>
                <br />
                Correo electrónico:{" "}
                <a
                  href="mailto:info@cabocine.com"
                  className="text-secondary underline hover:text-secondary/80 transition-colors"
                >
                  info@cabocine.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
