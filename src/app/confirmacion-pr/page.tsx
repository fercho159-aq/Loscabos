
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { savePrConfirmation } from '@/lib/actions/savePrConfirmation';
import { useEffect, useRef, useState } from 'react';
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

const programEvents = [
    {
      title: "Sinfonía Oceánica",
      subtitle: "Proyección inaugural",
      image: "/Images/sinfonia/DSC05588.jpg",
      imageHint: "underwater whale",
    },
    {
      title: "Masterclass con Eugenio Caballero",
      subtitle: "Homenaje a Eugenio Caballero",
      image: "/Images/Eugenio Caballero/EugenioCaballero.png",
      imageHint: "film set design",
    },
    {
      title: "Cóctel de gala en Casa Ballena",
      subtitle: "en Homenaje a Eugenio Caballero",
      image: "/Images/Casa Ballena/Casa ballena (50 cm alto).JPG",
      imageHint: "elegant cocktail party",
    },
    {
      title: "Nuevas voces en el cine",
      subtitle: "Panel de cineastas emergentes",
      image: "/Images/nuevasvoces/jakob-owens-vIwkdibacK0-unsplash.jpg",
      imageHint: "young filmmakers panel",
    },
    {
      title: "Cena de Gala",
      subtitle: "Premiación del Fondo Fílmico Gabriel Figueroa y La Baja",
      image: "/Images/nuevasvoces/Suelo Sur Foto .jpg",
      imageHint: "gourmet dinner",
    }
];

const festivalDays = [
    { id: 'day1', label: '10 de diciembre' },
    { id: 'day2', label: '11 de diciembre' },
    { id: 'day3', label: '12 de diciembre' },
    { id: 'day4', label: '13 de diciembre' },
    { id: 'day5', label: '14 de diciembre' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? 'Enviando...' : 'Confirmar Asistencia'}
    </Button>
  );
}

export default function ConfirmacionPRPage() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(savePrConfirmation, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [attending, setAttending] = useState<string | null>(null);

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
        setAttending(null);
      }
    }
  }, [state, toast]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Confirmación de Asistencia PR
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Por favor, confirma tu asistencia al FICLosCabos 2025.
              </p>
            </div>

            <Card className="p-6 sm:p-10 bg-card shadow-xl">
              <form ref={formRef} action={dispatch} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input id="firstName" name="firstName" placeholder="Tu nombre" required />
                    {state.errors?.firstName && <p className="text-sm font-medium text-destructive">{state.errors.firstName.join(', ')}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input id="lastName" name="lastName" placeholder="Tu apellido" required />
                    {state.errors?.lastName && <p className="text-sm font-medium text-destructive">{state.errors.lastName.join(', ')}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" name="email" type="email" placeholder="tu@correo.com" required />
                  {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email.join(', ')}</p>}
                </div>

                <div className="space-y-2">
                  <Label>¿Asistirás al evento?</Label>
                  <RadioGroup name="attendance" onValueChange={setAttending} required className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-3 space-y-0">
                      <RadioGroupItem value="si" id="si" />
                      <Label htmlFor="si" className="font-normal">Sí, asistiré</Label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-normal">No, no podré asistir</Label>
                    </div>
                  </RadioGroup>
                  {state.errors?.attendance && <p className="text-sm font-medium text-destructive">{state.errors.attendance.join(', ')}</p>}
                </div>

                {attending === 'si' && (
                  <>
                    <div className="space-y-2">
                      <div className="items-top flex space-x-2">
                        <Checkbox id="plusOne" name="plusOne" />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="plusOne" className="font-normal">
                            Asistiré con un acompañante (+1)
                          </Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label>¿Qué día(s) te interesa más asistir?</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {festivalDays.map(day => (
                              <div key={day.id} className="flex items-center space-x-2">
                                  <Checkbox id={day.id} name="interestedDays" value={day.label} />
                                  <Label htmlFor={day.id} className="font-normal">{day.label}</Label>
                              </div>
                          ))}
                      </div>
                       {state.errors?.interestedDays && <p className="text-sm font-medium text-destructive">{state.errors.interestedDays.join(', ')}</p>}
                    </div>
                  </>
                )}
                
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
                    <Card key={index} className="overflow-hidden group h-full flex flex-col bg-card/80">
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
                    </Card>
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
