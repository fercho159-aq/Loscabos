'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card } from '@/components/ui/card';

const formSchema = z.object({
  firstName: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres.'),
  email: z.string().email('Por favor ingresa un correo electrónico válido.'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres.'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
});

export default function ContactoPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

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
              <Form {...form}>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-8"
                >
                  {/* Campo oculto para Netlify */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input name="firstName" placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apellido</FormLabel>
                          <FormControl>
                            <Input name="lastName" placeholder="Tu apellido" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input name="email" type="email" placeholder="tu@correo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asunto</FormLabel>
                        <FormControl>
                          <Input name="subject" placeholder="Asunto del mensaje" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            name="message"
                            placeholder="Escribe tu mensaje aquí..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}