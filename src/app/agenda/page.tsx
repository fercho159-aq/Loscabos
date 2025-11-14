
'use client';

import React from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { agendaData, venues, timeSlots, type Event } from '@/lib/agenda-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

function getEvent(day: string, time: string, venue: string): Event | undefined {
  return agendaData.find(e => e.Dia === day && e['HORA DE INICIO'] === time && e['SEDE'] === venue);
}

function getEventDurationInHours(event: Event): number {
    if (!event['HORA DE INICIO'] || !event['HORA DE FIN']) return 1;
    const [startHour, startMinute] = event['HORA DE INICIO'].split(':').map(Number);
    let [endHour, endMinute] = event['HORA DE FIN'].split(':').map(Number);
    
    if (endHour === 0 && endMinute === 0) {
      endHour = 24; 
    }

    const startTime = startHour + startMinute / 60;
    const endTime = endHour + endMinute / 60;
    
    let duration = endTime - startTime;
    if (duration < 0) duration += 24;
    return duration;
}

const DayTab = ({ day }: { day: string }) => {
  const occupiedCells = new Set<string>();

  agendaData.forEach(event => {
    if (event.Dia === day) {
      const durationInHours = getEventDurationInHours(event);
      if (durationInHours > 1) {
        const rowSpan = Math.round(durationInHours);
        const [startHour] = event['HORA DE INICIO'].split(':').map(Number);

        for (let i = 1; i < rowSpan; i++) {
          const occupiedHour = startHour + i;
          const occupiedTime = `${occupiedHour.toString().padStart(2, '0')}:00`;
          occupiedCells.add(`${occupiedTime}-${event.SEDE}`);
        }
      }
    }
  });
    
  return (
    <div className="overflow-x-auto border-t border-b border-border">
      <table className="w-full border-collapse">
        <thead className='bg-muted'>
          <tr>
            <th className="sticky left-0 z-20 bg-muted p-3 text-center font-semibold whitespace-nowrap border-r border-border">Hora</th>
            {venues.map(venue => (
               <th key={venue} className="p-3 text-center font-semibold whitespace-nowrap min-w-[200px]">{venue}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map(time => (
            <tr key={time} className='border-t border-border'>
              <td className="sticky left-0 z-10 bg-card p-3 text-center font-semibold whitespace-nowrap border-r border-border">{time}</td>
              {venues.map(venue => {
                 if (occupiedCells.has(`${time}-${venue}`)) {
                    return null;
                 }
                 const event = getEvent(day, time, venue);
                 
                 if(event) {
                    const durationInHours = getEventDurationInHours(event);
                    const rowSpan = Math.round(durationInHours);

                    return (
                      <td
                        key={`${event.EVENTO}-${time}-${venue}`}
                        rowSpan={rowSpan}
                        className="p-3 text-white align-top"
                        style={{ backgroundColor: event.COLOR }}
                      >
                         <div className="flex flex-col justify-between h-full min-h-[4rem]">
                           <p className="font-semibold text-sm whitespace-pre-line mb-2">{event.EVENTO}</p>
                           <Badge 
                            variant="secondary"
                            className="mt-auto text-xs bg-white/20 text-white border-none w-fit"
                            >
                            {event['CATEGORÍA']}
                          </Badge>
                         </div>
                      </td>
                    );
                 }
                 
                 return <td key={`${time}-${venue}`} className="bg-card min-h-[4rem] border-l border-border"></td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default function AgendaPage() {
  const agendaDays = [...new Set(agendaData.map(e => e.Dia))];
  const sortedDays = ["Jueves 11 Dic", "Viernes 12 Dic", "Sábado 13 Dic", "Domingo 14 Dic"].filter(d => agendaDays.includes(d));

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
            <Tabs defaultValue={sortedDays[0]} className="w-full">
              <div className="overflow-x-auto pb-4">
                <TabsList className="flex-nowrap w-max mx-auto">
                  {sortedDays.map(day => (
                    <TabsTrigger key={day} value={day} className="whitespace-nowrap">{day}</TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {sortedDays.map(day => (
                <TabsContent key={day} value={day} className="mt-8">
                  <DayTab day={day} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
