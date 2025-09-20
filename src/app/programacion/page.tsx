
import React from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const schedule = {
  day: "Miércoles 10",
  venues: ["CRANIA STAGE PRINCIPAL 1", "CRANIA STAGE 2", "CRANIA CORTOS", "VELEROS", "CINEMEX SJ", "CINEMEX Pp", "SUELO SUR", "SAGE"],
  events: [
    { 
      title: "OPENING OFICIAL DEL PROGRAMA GRATUITO DEL FESTIVAL", 
      description: "PARA MEDIOS E INFLUENCERS INVITADOS",
      venue: "CINEMEX SJ", 
      start: "10:00",
      end: "11:00",
      color: "bg-secondary/20",
      textColor: "text-secondary-foreground"
    },
    { 
      title: "PROGRAMACIÓN FICC", 
      venue: "CINEMEX SJ", 
      start: "13:00",
      end: "23:00",
      color: "bg-primary/20",
      textColor: "text-primary-foreground"
    },
    { 
      title: "PROGRAMACIÓN FICC", 
      venue: "CINEMEX Pp", 
      start: "13:00",
      end: "23:00",
      color: "bg-primary/20",
      textColor: "text-primary-foreground"
    },
    { 
      title: "Sinfonía Oceánica", 
      venue: "CRANIA STAGE PRINCIPAL 1", 
      start: "18:00",
      end: "19:00",
      color: "bg-accent/20",
      textColor: "text-accent-foreground"
    },
    { 
      title: "PROYECCIÓN INAUGURAL", 
      venue: "CRANIA STAGE PRINCIPAL 1", 
      start: "20:00",
      end: "22:00",
      color: "bg-accent/80",
      textColor: "text-accent-foreground"
    },
    { 
      title: "FIESTA INAUGURAL", 
      venue: "CRANIA STAGE PRINCIPAL 1", 
      start: "22:00",
      end: "24:00",
      color: "bg-destructive/80",
      textColor: "text-destructive-foreground"
    },
  ]
};

const hours = Array.from({ length: 16 }, (_, i) => `${i + 9}:00`); // 9:00 to 24:00

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
                {schedule.day}
              </p>
            </div>
            
            <div className="overflow-x-auto bg-card p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-[auto_repeat(8,1fr)] min-w-[1200px]">
                {/* Header */}
                <div className="sticky top-0 left-0 z-20 bg-card"></div>
                {schedule.venues.map(venue => (
                  <div key={venue} className="sticky top-0 z-10 bg-card p-2 text-center font-bold text-foreground border-b-2">
                    {venue}
                  </div>
                ))}

                {/* Rows */}
                {hours.map((hour) => (
                  <React.Fragment key={hour}>
                    <div className="font-semibold text-muted-foreground text-sm sticky left-0 bg-card z-10 p-2 border-t flex items-center justify-center">{hour}</div>
                    {schedule.venues.map((venue) => {
                      const event = schedule.events.find(e => e.venue === venue && e.start === hour);
                      if (!event) {
                        return <div key={`${venue}-${hour}`} className="border-l border-t h-20"></div>;
                      }

                      const startHour = parseInt(event.start.split(':')[0]);
                      const endHour = parseInt(event.end.split(':')[0]);
                      const duration = endHour - startHour;

                      return (
                        <div key={`${venue}-${hour}`} className={cn("border-l border-t p-2", event.color)} style={{ gridRow: `span ${duration}` }}>
                          <div className={cn("h-full w-full rounded-md p-2 flex flex-col justify-center", event.color)}>
                            <p className={cn("font-bold text-sm", event.textColor)}>{event.title}</p>
                            {event.description && <p className={cn("text-xs opacity-80", event.textColor)}>{event.description}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
