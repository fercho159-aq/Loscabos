
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { agendaData, agendaDays, venues, timeSlots, Event } from '@/lib/agenda-data';

function getEvent(day: string, time: string, venue: string): Event | undefined {
  return agendaData.find(e => e.Dia === day && e['HORA DE INICIO'] === time && e['SEDE'] === venue);
}

function getEventDuration(event: Event): number {
    if (!event['HORA DE INICIO'] || !event['HORA DE FIN']) return 1;
    const start = parseInt(event['HORA DE INICIO'].split(':')[0], 10);
    let end = parseInt(event['HORA DE FIN'].split(':')[0], 10);
    if (end === 0) end = 24; // Midnight case
    return end - start;
}

export default function AgendaPage() {
  const processedEvents = new Set<string>();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/Programacion/FICC_Banner_Programacion.png"
                alt="Banner de la sección Sobre el FICLosCabos"
                data-ai-hint="graphic composition"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-background">
                Agenda FICLosCabos 2025
              </h1>
              <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                Explora el programa completo de proyecciones, paneles, eventos especiales y más.
              </p>
            </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-x-auto">
              <div className="grid gap-px bg-border" style={{ gridTemplateColumns: `auto repeat(${venues.length}, 1fr)` }}>
                {/* Header */}
                <div className="bg-muted p-3 text-center font-semibold">Hora</div>
                {venues.map(venue => (
                   <div key={venue} className="bg-muted p-3 text-center font-semibold">{venue}</div>
                ))}
                
                {/* Body */}
                {timeSlots.map(time => (
                  <>
                    <div className="bg-card p-3 text-center font-semibold">{time}</div>
                    {venues.map(venue => {
                       const event = getEvent(agendaDays[0], time, venue); // Simplified for one day view for now
                       
                       if(event) {
                          const eventKey = `${event.EVENTO}-${time}-${venue}`;
                          if (processedEvents.has(eventKey)) {
                            return null;
                          }
                          const duration = getEventDuration(event);
                          processedEvents.add(eventKey);

                          return (
                            <div
                              key={eventKey}
                              className="p-3 text-white flex flex-col justify-center"
                              style={{ 
                                gridRow: `span ${duration}`, 
                                backgroundColor: event.COLOR,
                                minHeight: `${duration * 4}rem`
                              }}
                            >
                               <p className="font-semibold text-sm whitespace-pre-line mb-2">{event.EVENTO}</p>
                               <Badge 
                                variant="secondary"
                                className="mt-auto text-xs bg-white/20 text-white border-none w-fit"
                                >
                                {event['CATEGORÍA']}
                              </Badge>
                            </div>
                          );
                       }
                       
                       return <div key={`${time}-${venue}`} className="bg-card min-h-[4rem]"></div>
                    })}
                  </>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12 text-sm text-muted-foreground">
                <p>La agenda corresponde al día <strong>Jueves 11 de Diciembre</strong>. La funcionalidad para otros días se agregará próximamente.</p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
