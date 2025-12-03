
      'use client';

import React from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { agendaData, venues, detailedTimeSlots, type Event } from '@/lib/agenda-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

function getEvent(day: string, time: string, venue: string): Event | undefined {
  const [slotHour, slotMinute] = time.split(':').map(Number);
  const slotStartTime = slotHour * 60 + slotMinute;
  
  return agendaData.find(e => {
    if (e.Dia.toLowerCase() !== day.toLowerCase() || e.SEDE !== venue) {
      return false;
    }
    const [eventHour, eventMinute] = e['HORA DE INICIO'].split(':').map(Number);
    const eventTime = eventHour * 60 + eventMinute;
    
    // Check if the event starts within the 15-minute slot
    const slotEndTime = slotStartTime + 15;
    return eventTime >= slotStartTime && eventTime < slotEndTime;
  });
}


function getEventDurationInMinutes(event: Event): number {
    if (!event['HORA DE INICIO'] || !event['HORA DE FIN']) return 15;
    const [startHour, startMinute] = event['HORA DE INICIO'].split(':').map(Number);
    let [endHour, endMinute] = event['HORA DE FIN'].split(':').map(Number);
    
    if (endHour === 0 && endMinute === 0) {
      endHour = 24; 
    }

    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;
    
    let duration = endTimeInMinutes - startTimeInMinutes;
    if (duration < 0) duration += 24 * 60;
    return duration;
}

const DayTab = ({ day }: { day: string }) => {
  const occupiedCells = new Set<string>();

  agendaData.forEach(event => {
    if (event.Dia.toLowerCase() === day.toLowerCase()) {
      const durationInMinutes = getEventDurationInMinutes(event);
      if (durationInMinutes > 15) {
        const rowSpan = Math.ceil(durationInMinutes / 15);
        const [startHour, startMinute] = event['HORA DE INICIO'].split(':').map(Number);
        
        const startSlotMinute = Math.floor(startMinute / 15) * 15;
        const baseTime = new Date();
        baseTime.setHours(startHour, startSlotMinute, 0, 0);
        
        for (let i = 1; i < rowSpan; i++) {
          const nextSlotTime = new Date(baseTime.getTime() + (i * 15 * 60000));
          const occupiedTime = `${nextSlotTime.getHours().toString().padStart(2, '0')}:${nextSlotTime.getMinutes().toString().padStart(2, '0')}`;
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
          {detailedTimeSlots.map(time => (
            <tr key={time} className='border-t border-border'>
              {time.endsWith(':00') ? (
                <td rowSpan={4} className="sticky left-0 z-10 bg-card p-3 text-center font-semibold whitespace-nowrap border-r border-border align-top h-16">{time}</td>
              ) : null}

              {venues.map(venue => {
                 if (occupiedCells.has(`${time}-${venue}`)) {
                    return null;
                 }
                 const event = getEvent(day, time, venue);
                 
                 if(event) {
                    const durationInMinutes = getEventDurationInMinutes(event);
                    const rowSpan = Math.ceil(durationInMinutes / 15);

                    return (
                      <td
                        key={`${event.EVENTO}-${time}-${venue}`}
                        rowSpan={rowSpan}
                        className="p-3 text-white align-top overflow-hidden rounded"
                        style={{ backgroundColor: event.COLOR, minHeight: `${rowSpan * 1}rem` }}
                      >
                         <div className="flex flex-col justify-between h-full">
                           <p className="font-semibold text-sm whitespace-pre-line mb-2">{event.EVENTO}</p>
                           <p className="text-xs text-white/80">{event['HORA DE INICIO']} - {event['HORA DE FIN'] === '00:00' ? '24:00' : event['HORA DE FIN']}</p>
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
                 
                 return <td key={`${time}-${venue}`} className="bg-card min-h-[1rem] border-l border-border h-4"></td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default function AgendaPage() {
  const agendaDays = [...new Set(agendaData.map(e => e.Dia.toLowerCase()))];
  const sortedDays = ["miércoles 10 dic", "jueves 11 dic", "viernes 12 de dic", "sábado 13 de dic", "domingo 14 de dic"].filter(d => agendaDays.includes(d));

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
                Agenda #BeyondTheScreen 2025
              </h1>
              <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                Explora el programa completo de proyecciones, paneles, eventos especiales y más.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="https://drive.google.com/file/d/1ZONyZbKXzQtqWbdCx1oTWrAwIeLXeyEf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Agenda
                  </Link>
                </Button>
              </div>
            </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={sortedDays[0]} className="w-full">
              <div className="flex justify-center pb-4">
                <div className="overflow-x-auto">
                    <TabsList className="flex-nowrap w-max bg-transparent p-0 gap-2">
                    {sortedDays.map(day => (
                        <TabsTrigger 
                        key={day} 
                        value={day} 
                        className="whitespace-nowrap rounded-full px-6 py-2 text-base data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:bg-card data-[state=inactive]:hover:bg-accent/20 data-[state=inactive]:hover:text-accent transition-colors duration-200 capitalize"
                        >
                        {day}
                        </TabsTrigger>
                    ))}
                    </TabsList>
                </div>
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
    
