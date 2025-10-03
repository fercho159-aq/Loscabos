'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent } from '@/components/ui/card';

// El esquema de Zod se mantiene igual
const preRegFormSchema = z.object({
  firstName: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  lastName: z.string().min(2, { message: 'El apellido debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor ingresa un correo válido.' }),
  age: z.coerce.number().min(16, { message: 'Debes tener al menos 16 años.' }).optional(),
  instagram: z.string().optional(),
  state: z.string().min(2, { message: 'El estado es requerido.' }),
  city: z.string().min(2, { message: 'La ciudad es requerida.' }),
  industry: z.string({ required_error: 'Por favor selecciona una industria.' }),
  otherIndustry: z.string().optional(),
  professionalStatus: z.enum(['estudiante', 'profesional'], { required_error: 'Debes seleccionar un estatus.' }),
}).refine(data => {
    if (data.industry === 'otra' && (!data.otherIndustry || data.otherIndustry.length < 2)) {
        return false;
    }
    return true;
}, {
    message: 'Por favor especifica la industria.',
    path: ['otherIndustry'],
});

type PreRegFormValues = z.infer<typeof preRegFormSchema>;

export default function PreRegistroPage() {
  const { toast } = useToast();
  const form = useForm<PreRegFormValues>({
    resolver: zodResolver(preRegFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      instagram: '',
      state: '',
      city: '',
    },
  });

  const industry = form.watch('industry');

  // <-- CAMBIO 1: Lógica de envío actualizada para Netlify
  function onSubmit(values: PreRegFormValues) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'pre-registro',
        ...values,
        age: values.age ? values.age.toString() : '',
      }).toString(),
    })
    .then(() => {
        toast({
          title: '¡Pre-registro completado!',
          description: 'Gracias por tu interés. Te mantendremos informado sobre el festival.',
        });
        form.reset();
    })
    .catch((error) => {
        toast({
            title: 'Error al enviar',
            description: 'Hubo un problema con tu registro. Inténtalo de nuevo.',
            variant: 'destructive',
        });
        console.error(error);
    });
  }

  return (
    <>
      {/* <-- CAMBIO 2: Formulario oculto para que Netlify lo detecte */}
      <form name="pre-registro" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="email" name="email" />
          <input type="number" name="age" />
          <input type="text" name="instagram" />
          <input type="text" name="state" />
          <input type="text" name="city" />
          <select name="industry">
              <option value="cine" />
              <option value="arte" />
              <option value="diseño" />
              <option value="otra" />
          </select>
          <input type="text" name="otherIndustry" />
          <input type="radio" name="professionalStatus" value="estudiante" />
          <input type="radio" name="professionalStatus" value="profesional" />
      </form>
      
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
                  ¡Sé el primero en enterarte de todo! Completa el formulario para recibir noticias exclusivas, acceso a preventas y más.
                </p>
              </div>

              <Card className="p-6 sm:p-10 bg-card shadow-xl">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* El resto de tu formulario JSX se mantiene exactamente igual */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl><Input placeholder="Tu nombre" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido</FormLabel>
                          <FormControl><Input placeholder="Tu apellido" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl><Input type="email" placeholder="tu@correo.com" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <FormField control={form.control} name="age" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Edad</FormLabel>
                            <FormControl><Input type="number" placeholder="25" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="instagram" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Instagram (Opcional)</FormLabel>
                            <FormControl><Input placeholder="@tu-usuario" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                       <FormField control={form.control} name="state" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estado</FormLabel>
                            <FormControl><Input placeholder="Ej. Baja California Sur" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                       <FormField control={form.control} name="city" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ciudad</FormLabel>
                            <FormControl><Input placeholder="Ej. La Paz" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                    </div>

                    <FormField control={form.control} name="industry" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industria</FormLabel>
                         <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona tu industria" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="cine">Cine</SelectItem>
                              <SelectItem value="arte">Arte</SelectItem>
                              <SelectItem value="diseño">Diseño</SelectItem>
                              <SelectItem value="otra">Otra</SelectItem>
                            </SelectContent>
                          </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    {industry === 'otra' && (
                       <FormField control={form.control} name="otherIndustry" render={({ field }) => (
                          <FormItem>
                            <FormLabel>¿Cuál?</FormLabel>
                            <FormControl><Input placeholder="Especifica tu industria" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                    )}

                    <FormField control={form.control} name="professionalStatus" render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>¿Eres estudiante o profesional?</FormLabel>
                        <FormControl>
                          <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="estudiante" /></FormControl>
                              <FormLabel className="font-normal">Estudiante</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl><RadioGroupItem value="profesional" /></FormControl>
                              <FormLabel className="font-normal">Profesional</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Pre-registro
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}