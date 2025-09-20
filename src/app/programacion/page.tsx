import React from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { cn } from '@/lib/utils';

const schedule = {
  day: "Miércoles 10",
  venues: [
    "CRANIA STAGE PRINCIPAL 1",
    "CRANIA STAGE 2",
    "CRANIA CORTOS",
    "VELEROS",
    "CINEMEX SJ",
    "CINEMEX Pp",
    "SUELO SUR",
    "SAGE"
  ],
  events: [
    {
      title: "OPENING OFICIAL DEL PROGRAMA GRATUITO DEL FESTIVAL",
      subtitle: "PARA MEDIOS E INFLUENCERS INVITADOS",
      venue: "CINEMEX SJ",
      start: "10:00",
      end: "12:00",
      color: "bg-background"
    },
    { title: "PROGRAMACIÓN FICC", venue: "CINEMEX SJ", start: "13:00", end: "23:00", color: "bg-accent/20" },
    { title: "PROGRAMACIÓN FICC", venue: "CINEMEX Pp", start: "13:00", end: "23:00", color: "bg-accent/20" },
    { title: "Sinfonía Oceánica", venue: "CRANIA STAGE PRINCIPAL 1", start: "18:00", end: "19:00", color: "bg-secondary/30" },
    { title: "PROYECCIÓN INAUGURAL", venue: "CRANIA STAGE PRINCIPAL 1", start: "19:00", end: "22:00", color: "bg-secondary/60" },
    { title: "FIESTA INAUGURAL", venue: "CRANIA STAGE PRINCIPAL 1", start: "22:00", end: "24:00", color: "bg-accent" }
  ]
};

const hours = Array.from({ length: 16 }, (_, i) => `${9 + i}:00`);

export default function ProgramacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                Programación <span className="text-accent">2025</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Una mirada detallada a los eventos, proyecciones y actividades del festival.
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[1200px]">
                {/* Header */}
                <div className="grid grid-cols-[100px_repeat(8,_1fr)] sticky top-20 z-20 bg-card">
                  <div className="font-bold p-3 border-b border-r text-foreground bg-card">Hora y día</div>
                  {schedule.venues.map((venue) => (
                    <div key={venue} className="font-bold p-3 border-b text-center text-foreground bg-card">{venue}</div>
                  ))}
                </div>

                {/* Body */}
                <div className="grid grid-cols-[100px_repeat(8,_1fr)]">
                  {/* Time column */}
                  <div className="grid grid-rows-16">
                    {hours.map(hour => (
                       <div key={hour} className="font-semibold text-muted-foreground text-sm sticky left-0 bg-card z-10 p-2 border-t flex items-center justify-center h-20">{hour}</div>
                    ))}
                  </div>

                  {/* Events grid */}
                  <div className="col-span-8 grid grid-cols-8 grid-rows-16">
                    {schedule.events.map((event, index) => {
                      const startHour = parseInt(event.start.split(':')[0]);
                      const endHour = parseInt(event.end.split(':')[0]);
                      const duration = endHour - startHour;
                      const venueIndex = schedule.venues.indexOf(event.venue);

                      if (venueIndex === -1) return null;

                      const rowStart = startHour - 9;
                      const rowSpan = duration;

                      return (
                        <div
                          key={`${event.title}-${index}`}
                          className={cn(
                            "relative p-2 border-l border-t text-xs text-foreground flex flex-col justify-center items-center text-center",
                            event.color
                          )}
                          style={{
                            gridColumn: `${venueIndex + 1}`,
                            gridRow: `${rowStart + 1} / span ${rowSpan}`,
                          }}
                        >
                            <p className="font-bold">{event.title}</p>
                            {event.subtitle && <p className="text-xs">{event.subtitle}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
