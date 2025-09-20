
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
                La temporada de arte y creatividad de Puerto los Cabos comprende un programa de eventos multidisciplinarios entre los cuales se presenta la 13ª edición del Festival Internacional de Cine de los Cabos del 10 al 14 de diciembre de 2025.
              </p>
              <p>
                El FICC nació hace más de una década como una plataforma cinematográfica que conecta a México con la industria global. A lo largo de sus ediciones ha logrado consolidarse como un referente de cine independiente, de diálogo cultural y de atracción de talento internacional.
              </p>
              <p>
                En 2025, el festival se transforma y se fortalece: mantiene al cine como eje rector, pero abre sus puertas a nuevos lenguajes audiovisuales y creativos que reflejan la cultura contemporánea —música, arte digital, gastronomía y experiencias inmersivas—.
              </p>
               <p className="font-semibold text-foreground">
                Ha contado con la presencia de figuras como Robert De Niro, Nicole Kidman, Oliver Stone, Monica Bellucci, Diego Luna y Karla Souza, entre otros.
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
