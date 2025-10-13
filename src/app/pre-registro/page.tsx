
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { savePreRegistration } from '@/lib/actions/savePreRegistration';
import { useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

declare function gtag_report_conversion(url?: string): boolean;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? 'Enviando...' : 'Enviar Pre-registro'}
    </Button>
  );
}

export default function PreRegistroPage() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(savePreRegistration, initialState);
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
        if (typeof gtag_report_conversion === 'function') {
          gtag_report_conversion();
        }
        formRef.current?.reset();
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
                Pre-registro FICLosCabos 2025
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Pre-regístrate para recibir la notificación oficial de la apertura de taquilla y asegurar tu lugar en las proyecciones, conciertos, paneles y experiencias inmersivas que transformarán Puerto Los Cabos en un campus creativo global.
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <Label htmlFor="age">Edad</Label>
                        <Input id="age" name="age" type="number" placeholder="25" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="instagram">Instagram (Opcional)</Label>
                        <Input id="instagram" name="instagram" placeholder="@tu-usuario" />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" name="state" placeholder="Ej. Baja California Sur" required />
                         {state.errors?.state && <p className="text-sm font-medium text-destructive">{state.errors.state.join(', ')}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="city">Ciudad</Label>
                        <Input id="city" name="city" placeholder="Ej. La Paz" required />
                         {state.errors?.city && <p className="text-sm font-medium text-destructive">{state.errors.city.join(', ')}</p>}
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="industry">Industria</Label>
                    <Select name="industry" required>
                        <SelectTrigger id="industry">
                            <SelectValue placeholder="Selecciona tu industria" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cine">Cine</SelectItem>
                            <SelectItem value="arte">Arte</SelectItem>
                            <SelectItem value="diseño">Diseño</SelectItem>
                            <SelectItem value="otra">Otra</SelectItem>
                        </SelectContent>
                    </Select>
                     {state.errors?.industry && <p className="text-sm font-medium text-destructive">{state.errors.industry.join(', ')}</p>}
                </div>

                <div className="space-y-2">
                    <Label>¿Eres estudiante o profesional?</Label>
                    <RadioGroup name="professionalStatus" defaultValue="profesional" required className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="estudiante" id="estudiante" />
                            <Label htmlFor="estudiante" className="font-normal">Estudiante</Label>
                        </div>
                        <div className="flex items-center space-x-3 space-y-0">
                            <RadioGroupItem value="profesional" id="profesional" />
                            <Label htmlFor="profesional" className="font-normal">Profesional</Label>
                        </div>
                    </RadioGroup>
                     {state.errors?.professionalStatus && <p className="text-sm font-medium text-destructive">{state.errors.professionalStatus.join(', ')}</p>}
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
