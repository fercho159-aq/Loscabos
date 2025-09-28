
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const gfffRepresents = [
    {
      description: "Impulso a la creación cinematográfica mexicana en su etapa de postproducción.",
    },
    {
      description: "Puente de vinculación con productores, distribuidores, inversionistas y agentes internacionales.",
    },
    {
      description: "Semillero de talento emergente, consolidando nuevas voces y narrativas diversas.",
    },
     {
      description: "Plataforma de colaboración con financiamiento, servicios y networking estratégico.",
    },
];

export default function IndustrySection() {
  return (
    <section id="industria" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
              Fondo Fílmico <span className="text-accent">Gabriel Figueroa</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              En alianza con ESCINE, el GFFF se proyecta como un motor estratégico que impulsa nuevas voces y conecta al talento mexicano con oportunidades globales, consolidando a Los Cabos como un hub de creatividad y negocio.
            </p>
            <div className="mt-8 space-y-4">
               <h3 className="text-xl font-semibold text-foreground">¿Qué representa el GFFF?</h3>
              {gfffRepresents.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 text-accent pt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-10 group" asChild>
              <Link href="/industria">
                Acceder al Portal de Industria
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-2xl shadow-black/20">
              <Image 
                src="https://picsum.photos/800/600"
                alt="Networking en el Festival de Cine de Los Cabos"
                data-ai-hint="business networking"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
