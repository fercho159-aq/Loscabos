
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Handshake, Users, Film } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Handshake,
    title: "Matchmaking Inteligente",
    description: "Sugerencias de reuniones entre productores, directores y distribuidores basadas en tus intereses.",
  },
  {
    icon: Users,
    title: "Networking Digital",
    description: "Conecta con profesionales de la industria a través de perfiles detallados y agenda integrada.",
  },
  {
    icon: Film,
    title: "Fondo Fílmico Gabriel Figueroa",
    description: "Accede a pitchings, descubre nuevos proyectos y oportunidades de inversión.",
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
              El GFFF es un espacio de convergencia entre cultura, tecnología y creatividad que conecta la potencia del cine con los nuevos lenguajes digitales y con la necesidad de narrativas diversas y sostenibles.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-accent/10 text-accent p-3 rounded-full">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
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
