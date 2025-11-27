
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { savePrConfirmation, type State } from '@/lib/actions/savePrConfirmation';
import { useToast } from "@/hooks/use-toast";

import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Instagram, Link as LinkIcon, Info } from 'lucide-react';
import { programData } from '@/lib/program-data';

const programEvents = programData.flatMap(day => day.events);

const festivalDays = [
    { id: 'day2', label: '11 de diciembre' },
    { id: 'day3', label: '12 de diciembre' },
    { id: 'day4', label: '13 de diciembre' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? 'Enviando...' : 'Confirmar Asistencia'}
    </Button>
  );
}

const EventDialogContent = ({ event }: { event: (typeof programEvents)[0] }) => {
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

export default function ConfirmacionPRPage() {
  const initialState: State = { message: null, errors: {} };
  const [state, dispatch] = useActionState(savePrConfirmation, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors && Object.keys(state.errors).length > 0) {
        toast({
          variant: "destructive",
          title: "Error de validación",
          description: "Por favor revisa los campos del formulario.",
        });
      } else if (state.message.includes('Error')) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      } else {
        toast({
          title: "¡Gracias!",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
         <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/13a/FICC_Banner14.jpg"
                alt="Banner de la sección Sobre el FICLosCabos"
                data-ai-hint="festival crowd lights"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-background">
                Confirmación de asistencia RSVP
              </h1>
              <p className="mt-4 text-lg text-background/90">
                Por favor, confirma tu asistencia al FICLosCabos 2025.
              </p>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 sm:p-10 bg-card shadow-xl">
              <form ref={formRef} action={dispatch} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" name="firstName" placeholder="Tu nombre" defaultValue={state.fields?.firstName}/>
                    {state.errors?.firstName && <p className="text-sm font-medium text-destructive">{state.errors.firstName.join(', ')}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" name="lastName" placeholder="Tu apellido" defaultValue={state.fields?.lastName}/>
                    {state.errors?.lastName && <p className="text-sm font-medium text-destructive">{state.errors.lastName.join(', ')}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="tu@correo.com" defaultValue={state.fields?.email}/>
                  {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email.join(', ')}</p>}
                </div>

                <div className="space-y-2">
                  <Label>¿Asistirás al evento?</Label>
                  <RadioGroup name="attendance" defaultValue={state.fields?.attendance} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-3 space-y-0">
                      <RadioGroupItem value="si" id="si" />
                       <div className="flex items-center gap-4">
                         <Label htmlFor="si" className="font-normal">Sí, asistiré</Label>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="plusOne" name="plusOne" defaultChecked={state.fields?.plusOne} />
                            <Label htmlFor="plusOne" className="font-normal text-sm">
                              +1
                            </Label>
                          </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-normal">No, no podré asistir</Label>
                    </div>
                  </RadioGroup>
                  {state.errors?.attendance && <p className="text-sm font-medium text-destructive">{state.errors.attendance.join(', ')}</p>}
                </div>
                
                <div className="space-y-4">
                  <Label>¿Qué día(s) te interesa más asistir?</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {festivalDays.map(day => (
                          <div key={day.id} className="flex items-center space-x-2">
                              <Checkbox 
                                id={day.id} 
                                name="interestedDays" 
                                value={day.label} 
                                defaultChecked={state.fields?.interestedDays?.includes(day.label)}
                              />
                              <Label htmlFor={day.id} className="font-normal">{day.label}</Label>
                          </div>
                      ))}
                  </div>
                    {state.errors?.interestedDays && <p className="text-sm font-medium text-destructive">{state.errors.interestedDays.join(', ')}</p>}
                </div>
                
                <SubmitButton />
              </form>
            </Card>

             <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
                  Un Vistazo al Programa 2025
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {programEvents.map((event, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                          <Card className="overflow-hidden group cursor-pointer h-full flex flex-col bg-card/80">
                              <div className="relative aspect-video w-full">
                                  <Image
                                      src={event.image}
                                      alt={event.title}
                                      data-ai-hint={event.imageHint}
                                      fill
                                      className="object-cover"
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

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    