
'use client';

import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Instagram, Link as LinkIcon } from 'lucide-react';
import { programData, type Event } from '@/lib/program-data';


const EventDialogContent = ({ event }: { event: Event }) => {
    const getTalentButtonText = () => {
        if (event.talent && event.talent.length === 1) {
            if (event.talent[0].name === "Casa Ballena") {
                return `Más sobre ${event.talent[0].name}`;
            }
             if (event.talent[0].name === "Guillermo J. Gómez") {
                return "Conoce más sobre el chef Guillermo Gómez y Suelo Sur";
            }
             if (event.talent[0].name === "Martha Sosa Elizondo") {
                return "Conoce a Martha Sosa";
             }
            return `Conoce a ${event.talent[0].name}`;
        }
        return "Descubre al talento que nos acompaña en el Festival";
    };

    return (
        <DialogContent className="sm:max-w-2xl bg-card max-h-[90svh] flex flex-col">
            <DialogHeader className="flex-shrink-0">
                <DialogTitle className="font-headline text-3xl text-foreground">{event.title}</DialogTitle>
                <DialogDescription className="text-accent font-semibold pt-1">{event.subtitle}</DialogDescription>
            </DialogHeader>
            <div className="flex-grow overflow-y-auto pr-6 -mr-6">
              <div className="grid gap-6 py-4">
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                      <Image
                          src={event.image}
                          alt={event.title}
                          data-ai-hint={event.imageHint}
                          fill
                          className="object-cover"
                      />
                  </div>
                  <p className="text-muted-foreground">{event.text}</p>
                  {event.sinopsis && (
                      <blockquote className="mt-2 border-l-2 pl-4 italic text-muted-foreground">"{event.sinopsis}"</blockquote>
                  )}
                  {event.techInfo && (
                      <div>
                          <h4 className="font-semibold text-foreground mb-2">Ficha Técnica</h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                              {Object.entries(event.techInfo).map(([key, value]) => (
                                  <p key={key}>
                                      <span className="font-semibold text-foreground/80">{key}:</span> {value}
                                  </p>
                              ))}
                          </div>
                      </div>
                  )}
                  
                  {event.talent && event.talent.length > 0 && (
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                {getTalentButtonText()}
                            </AccordionTrigger>
                            <AccordionContent>
                               <div className="space-y-8 pt-4">
                                    {event.talent.map(person => (
                                        <div key={person.name} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                                            <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                                                <Image 
                                                    src={person.image}
                                                    alt={person.name}
                                                    data-ai-hint={person.imageHint}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <h5 className="font-bold text-foreground">{person.name}</h5>
                                                <p className="text-sm text-muted-foreground mt-1">{person.bio}</p>
                                                <div className="flex gap-4 mt-2">
                                                    {person.website && (
                                                        <Link href={person.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-semibold">
                                                            <LinkIcon className="h-4 w-4" />
                                                            <span>Sitio web</span>
                                                        </Link>
                                                    )}
                                                    {person.instagram && (
                                                         <Link href={`https://instagram.com/${person.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-semibold">
                                                            <Instagram className="h-4 w-4" />
                                                            <span>{person.instagram}</span>
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                               </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                  )}
              </div>
            </div>
            <div className="flex-shrink-0 pt-4 flex flex-wrap gap-4 mt-auto border-t">
              {event.participantsButton && (
                  <Button asChild>
                      <Link href="/participantes">Ver Participantes</Link>
                  </Button>
              )}
            </div>
        </DialogContent>
    );
}


export default function ProgramacionPage() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/Programacion/FICC_Banner3.png"
                alt="Banner de la sección Sobre el FICLosCabos"
                data-ai-hint="graphic composition"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-background">
                Programa FICLosCabos 2025
              </h1>
              <p className="mt-4 text-lg text-background/90 max-w-3xl mx-auto">
                Descubre el universo #BeyondTheScreen del Festival de Cine de los Cabos
              </p>
            </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programData.flatMap(day => day.events).map((event, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                      <Card className="overflow-hidden group cursor-pointer h-full flex flex-col bg-card/80">
                          <div className="relative aspect-video w-full">
                              <Image
                                  src={event.image}
                                  alt={event.title}
                                  data-ai-hint={event.imageHint}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                                  <h3 className="text-xl font-bold font-headline text-background">{event.title}</h3>
                                  <p className="text-sm text-accent font-semibold mt-1">{event.subtitle}</p>
                              </div>
                          </div>
                          <CardContent className="p-4 mt-auto">
                             <div className="flex items-center justify-end">
                                  <div className="flex items-center gap-2 text-xs text-accent">
                                      <Info className="h-4 w-4"/>
                                      <span>Ver detalles</span>
                                  </div>
                              </div>
                          </CardContent>
                      </Card>
                  </DialogTrigger>
                   <EventDialogContent event={event} />
                </Dialog>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
