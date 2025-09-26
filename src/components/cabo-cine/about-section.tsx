
import { Building, Calendar, Pin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="md:col-span-2">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Más allá de la pantalla: <span className="text-accent">#BeyondTheScreen</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                El Festival Internacional de Cine de Los Cabos (FICC) nació hace más de una década como una plataforma cinematográfica que conecta a México con la industria global. Desde entonces, se ha consolidado como un referente del cine independiente, del diálogo cultural y de la atracción de talento internacional.
              </p>
              <p>
                En 2025, el Festival celebrará su 13ª edición del 10 al 14 de diciembre, reafirmando su espíritu innovador y expandiendo su alcance hacia disciplinas que hoy definen la cultura contemporánea. El cine se mantiene como eje rector, pero convive con la música, el arte digital, el diseño y la gastronomía. Bajo la narrativa #BeyondTheScreen, el FICC proyecta a Puerto Los Cabos como un nodo creativo y regenerativo con voz global.
              </p>
              <p>
                Esta transformación se inspira en el cruce único entre desierto y mar que caracteriza a Puerto Los Cabos. La biodiversidad del Mar de Cortés y la memoria cultural sudcaliforniana dialogan con la arquitectura y la comunidad, convirtiendo al Festival en un espacio donde naturaleza y creatividad se entrelazan en armonía. En este marco, La Marina de Puerto Los Cabos se consolida como punto de encuentro simbólico y físico: un escenario en el que el mar se convierte en telón de fondo para proyecciones, convivencias y presentaciones artísticas que conectan al público con la esencia del destino.
              </p>
               <p className="font-semibold text-foreground">
                Más que un festival, el FICC 2025 es una prueba de concepto viva de Puerto Los Cabos como nodo creativo y regenerativo con proyección global. Conecta cultura, turismo y comunidad, funciona como un laboratorio de innovación y alianzas internacionales, y se convierte en una herramienta estratégica de atracción de inversión y talento.
               </p>
               <p>
                Al incorporar lenguajes digitales, experiencias inmersivas y narrativas transmedia, el Festival responde a los retos de la era tecnológica y se consolida como un vehículo de desarrollo económico, cultural y creativo a nivel internacional.
               </p>
            </div>
          </div>
          <div className="md:col-span-1 bg-background p-6 rounded-lg shadow-lg">
            <div className="space-y-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-6 w-6 text-accent"/>
                        <h3 className="text-xl font-bold font-headline text-foreground">Fecha</h3>
                    </div>
                    <p className="text-muted-foreground font-semibold">10 al 14 de diciembre, 2025</p>
                </div>
                 <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Pin className="h-6 w-6 text-accent"/>
                        <h3 className="text-xl font-bold font-headline text-foreground">Sedes</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2"><Building className="h-4 w-4"/> Campus FICC 2025</li>
                        <li className="flex items-center gap-2"><Building className="h-4 w-4"/> Crania</li>
                        <li className="flex items-center gap-2"><Building className="h-4 w-4"/> Hotel El Ganzo</li>
                        <li className="flex items-center gap-2"><Building className="h-4 w-4"/> Cinepolis / Cinemex (por definir)</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
