
'use client';

import React, { useState } from 'react';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cinemaScheduleData, type CinemaScheduleEvent } from '@/lib/cinema-schedule-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// Helper to get unique values
const getUniqueValues = (data: CinemaScheduleEvent[], key: keyof CinemaScheduleEvent) => {
  return [...new Set(data.map(item => item[key]))] as string[];
};

const days = getUniqueValues(cinemaScheduleData, 'DIA');
const venues = getUniqueValues(cinemaScheduleData, 'SEDE');
const sortedDays = ["10 de diciembre", "11 de diciembre", "12 de diciembre", "13 de diciembre", "14 de diciembre"].filter(d => days.includes(d));

const timeSlots = Array.from({ length: (22 - 15) * 4 + 1 }, (_, i) => {
  const hour = 15 + Math.floor(i / 4);
  const minute = (i % 4) * 15;
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
});

function getEvent(day: string, time: string, venue: string, room: string): CinemaScheduleEvent | undefined {
  return cinemaScheduleData.find(e => e.DIA === day && e['HORA DE INICIO'] === time && e.SEDE === venue && e.SALA === room);
}

function getEventDurationInMinutes(event: CinemaScheduleEvent): number {
    const [startHour, startMinute] = event['HORA DE INICIO'].split(':').map(Number);
    let [endHour, endMinute] = event['HORA DE FIN'].split(':').map(Number);
    
    if (endHour < startHour) endHour += 24;

    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;
    
    return endTimeInMinutes - startTimeInMinutes;
}

const DayTab = ({ day, onPlayTrailer }: { day: string, onPlayTrailer: (videoUrl: string) => void }) => {
  const occupiedCells = new Set<string>();
  const venuesWithRooms = venues.reduce((acc, venue) => {
    const rooms = getUniqueValues(cinemaScheduleData.filter(e => e.SEDE === venue), 'SALA').sort();
    acc[venue] = rooms;
    return acc;
  }, {} as Record<string, string[]>);

  cinemaScheduleData.forEach(event => {
    if (event.DIA === day) {
      const durationInMinutes = getEventDurationInMinutes(event);
      if (durationInMinutes > 15) {
        const rowSpan = Math.ceil(durationInMinutes / 15);
        const [startHour, startMinute] = event['HORA DE INICIO'].split(':').map(Number);

        for (let i = 1; i < rowSpan; i++) {
          const nextSlotTime = new Date();
          nextSlotTime.setHours(startHour, startMinute + i * 15, 0, 0);
          const occupiedTime = `${nextSlotTime.getHours().toString().padStart(2, '0')}:${nextSlotTime.getMinutes().toString().padStart(2, '0')}`;
          occupiedCells.add(`${occupiedTime}-${event.SEDE}-${event.SALA}`);
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
            {Object.entries(venuesWithRooms).map(([venue, rooms]) => (
               <th key={venue} colSpan={rooms.length} className="p-3 text-center font-semibold whitespace-nowrap min-w-[200px] border-l">{venue}</th>
            ))}
          </tr>
          <tr>
            <th className="sticky left-0 z-20 bg-muted p-3 text-center font-semibold whitespace-nowrap border-r border-border"></th>
            {Object.entries(venuesWithRooms).flatMap(([venue, rooms]) => 
                rooms.map(room => <th key={`${venue}-${room}`} className='p-2 text-center font-medium bg-muted/50 whitespace-nowrap border-l'>{room}</th>)
            )}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map(time => (
            <tr key={time} className='border-t border-border'>
              {time.endsWith(':00') ? (
                <td rowSpan={4} className="sticky left-0 z-10 bg-card p-3 text-center font-semibold whitespace-nowrap border-r border-border align-top h-16">{time}</td>
              ) : null}

              {Object.entries(venuesWithRooms).flatMap(([venue, rooms]) => rooms.map(room => {
                 if (occupiedCells.has(`${time}-${venue}-${room}`)) {
                    return null;
                 }
                 const event = getEvent(day, time, venue, room);
                 
                 if(event) {
                    const durationInMinutes = getEventDurationInMinutes(event);
                    const rowSpan = Math.ceil(durationInMinutes / 15);
                    const canPlayTrailer = event.video && event.video !== 'N/A' && !event.video.includes('Estos son');

                    return (
                      <td
                        key={`${event.PELÍCULA}-${time}-${venue}-${room}`}
                        rowSpan={rowSpan}
                        className="p-3 text-white align-top overflow-hidden rounded"
                        style={{ backgroundColor: event.COLOR || '#18323A', minHeight: `${rowSpan * 1}rem` }}
                      >
                         <div className="flex flex-col justify-between h-full">
                           <div>
                            <p className="font-semibold text-sm whitespace-pre-line mb-2">{event.PELÍCULA}</p>
                            <p className="text-xs text-white/80">{event['HORA DE INICIO']} - {event['HORA DE FIN']}</p>
                           </div>
                           <div className="flex justify-between items-end mt-2">
                             <Badge 
                              variant="secondary"
                              className="mt-auto text-xs bg-white/20 text-white border-none w-fit"
                              >
                              {event['CATEGORÍA']}
                            </Badge>
                            {canPlayTrailer && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/20"
                                    onClick={() => onPlayTrailer(event.video)}
                                >
                                    <PlayCircle className="h-5 w-5" />
                                </Button>
                            )}
                           </div>
                         </div>
                      </td>
                    );
                 }
                 
                 return <td key={`${time}-${venue}-${room}`} className="bg-card min-h-[1rem] border-l border-border h-4"></td>
              }))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default function AgendaCinePage() {
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const handlePlayTrailer = (videoUrl: string) => {
    let embedUrl = '';
    if (videoUrl.includes('youtu.be') || videoUrl.includes('youtube.com')) {
      const videoId = videoUrl.split('v=')[1]?.split('&')[0] || videoUrl.split('/').pop()?.split('?')[0];
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('vimeo.com')) {
      const videoId = videoUrl.split('/').pop();
      embedUrl = `https://player.vimeo.com/video/${videoId}`;
    } else if (videoUrl.startsWith('video/')) {
        embedUrl = `/${videoUrl}`;
    }
    
    if (embedUrl) {
      setTrailerUrl(embedUrl);
      setIsTrailerOpen(true);
    }
  };

  const isLocalVideo = trailerUrl?.startsWith('/');
  
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
                Agenda de Cine
              </h1>
              <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                Explora el programa completo de proyecciones del FICLosCabos 2025.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline px-9 h-14 py-3 text-lg">
                  <Link href="https://drive.google.com/file/d/1YTz1uu0VwCs0gZA3nAZaSiVsHpPYoCYN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
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
                        className="whitespace-nowrap rounded-full px-8 py-3 text-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:bg-card data-[state=inactive]:hover:bg-accent/20 data-[state=inactive]:hover:text-accent transition-colors duration-200 capitalize"
                        >
                        {day}
                        </TabsTrigger>
                    ))}
                    </TabsList>
                </div>
              </div>
              {sortedDays.map(day => (
                <TabsContent key={day} value={day} className="mt-8">
                  <DayTab day={day} onPlayTrailer={handlePlayTrailer} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

      </main>

       <Dialog open={isTrailerOpen} onOpenChange={setIsTrailerOpen}>
        <DialogContent className="sm:max-w-3xl bg-black border-0 p-0">
          <DialogHeader>
            <DialogTitle className="sr-only">Trailer</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            {trailerUrl && (
                isLocalVideo ? (
                    <video controls autoPlay className="w-full h-full">
                        <source src={trailerUrl} type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                    </video>
                ) : (
                    <iframe
                        src={trailerUrl}
                        title="Trailer"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

    
