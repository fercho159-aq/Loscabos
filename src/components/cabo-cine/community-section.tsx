import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Film, HandHeart, Users } from "lucide-react";

const communityLinks = [
  {
    title: "La Baja Inspira",
    icon: Film,
    description: "Proyectos que nacen de la belleza y cultura de nuestra tierra.",
  },
  {
    title: "Fondo Fílmico Gabriel Figueroa",
    icon: Users,
    description: "Apoyando a la nueva generación de cineastas mexicanos.",
  },
  {
    title: "Voluntariado",
    icon: HandHeart,
    description: "Sé parte del corazón del festival y vive una experiencia única.",
  },
];

export default function CommunitySection() {
  return (
    <section id="comunidad" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Impacto y Comunidad</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            El cine como motor de cambio y desarrollo en Los Cabos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityLinks.map((link) => (
            <Card key={link.title} className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-colors duration-300 group">
              <CardContent className="p-8 text-center flex flex-col items-center">
                <link.icon className="w-12 h-12 mb-4 text-accent" />
                <h3 className="text-2xl font-bold font-headline text-card-foreground mb-2">{link.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{link.description}</p>
                <Button variant="ghost" className="group-hover:text-accent">
                  Saber más <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
