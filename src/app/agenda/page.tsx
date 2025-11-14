
'use client';

import React, { useState } from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { agendaData, venues, timeSlots, Event } from '@/lib/agenda-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function getEvent(day: string, time: string, venue: string): Event | undefined {
  return agendaData.find(e => e.Dia === day && e['HORA DE INICIO'] === time && e['SEDE'] === venue);
}

function getEventDuration(event: Event): number {
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
    return Math.max(1, Math.round(duration));
}

const DayTab = ({ day }: { day: string }) => {
  const processedEvents = new Set<string>();
  const dayEvents = agendaData.filter(e => e.Dia === day);

  return (
    <div className="overflow-x-auto">
      <div className="grid gap-px bg-border" style={{ gridTemplateColumns: `auto repeat(${venues.length}, 1fr)` }}>
        {/* Header */}
        <div className="bg-muted p-3 text-center font-semibold sticky left-0 z-10">Hora</div>
        {venues.map(venue => (
           <div key={venue} className="bg-muted p-3 text-center font-semibold whitespace-nowrap">{venue}</div>
        ))}
        
        {/* Body */}
        {timeSlots.map(time => (
          <React.Fragment key={time}>
            <div className="bg-card p-3 text-center font-semibold sticky left-0 z-10">{time}</div>
            {venues.map(venue => {
               const event = getEvent(day, time, venue);
               
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
                      className="p-3 text-white flex flex-col justify-between"
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
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default function AgendaPage() {
  const agendaDays = [...new Set(agendaData.map(e => e.Dia))];

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
            <Tabs defaultValue={agendaDays[0]} className="w-full">
              <div className="overflow-x-auto pb-4">
                <TabsList className="flex-nowrap w-max mx-auto">
                  {agendaDays.map(day => (
                    <TabsTrigger key={day} value={day} className="whitespace-nowrap">{day}</TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {agendaDays.map(day => (
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
