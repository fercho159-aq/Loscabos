
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { saveContact } from '@/lib/actions/saveContact';

import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </Button>
  );
}

export default function ContactoPage() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(saveContact, initialState);
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
          title: "¡Éxito!",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow flex items-center justify-center pt-20">
        <section className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Contacto General
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                ¿Tienes alguna pregunta? Envíanos un mensaje y te responderemos a la brevedad.
              </p>
            </div>

            <Card className="p-8 bg-card shadow-lg">
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
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" name="subject" placeholder="Asunto del mensaje" required />
                  {state.errors?.subject && <p className="text-sm font-medium text-destructive">{state.errors.subject.join(', ')}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    className="min-h-[150px]"
                    required
                  />
                   {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message.join(', ')}</p>}
                </div>
                
                <SubmitButton />
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
