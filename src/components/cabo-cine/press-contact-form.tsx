
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const FormSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  medio: z.string().min(2, {
    message: "El medio debe tener al menos 2 caracteres.",
  }),
  asunto: z.string().min(5, {
    message: "El asunto debe tener al menos 5 caracteres.",
  }),
  mensaje: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function PressContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: "",
      medio: "",
      asunto: "",
      mensaje: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Placeholder for form submission logic
    console.log("Datos del formulario de prensa:", data);
    
    // The actual email sending logic to digital@comunicacionlateral.com will be implemented later.
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarnos. Nuestro equipo de prensa te responderá a la brevedad.",
    });
    form.reset();
  }

  return (
    <section className="py-16 sm:py-24 bg-card">
        <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
            Contacto para Prensa
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
            Para entrevistas, acreditaciones o solicitudes de material, por favor completa el formulario.
            </p>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="medio"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Medio de Comunicación</FormLabel>
                        <FormControl>
                        <Input placeholder="Nombre del medio" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                <FormField
                control={form.control}
                name="asunto"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Asunto</FormLabel>
                    <FormControl>
                        <Input placeholder="¿Sobre qué quieres hablar?" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[150px]"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <div className="text-center">
                <Button type="submit" size="lg">
                    Enviar Mensaje <Send className="ml-2 h-4 w-4" />
                </Button>
                </div>
            </form>
            </Form>
        </div>
        </div>
    </section>
  );
}
