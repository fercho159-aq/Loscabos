
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MovieCard } from "./movie-card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Competencia Los Cabos",
    films: [
      { title: "Tormenta de Arena", genre: "Drama", synopsis: "Una familia lucha por sobrevivir en medio de la nada.", imgSrc: "https://picsum.photos/400/600", imgHint: "movie poster desert" },
      { title: "El Último Faro", genre: "Misterio", synopsis: "Un farero solitario descubre un oscuro secreto.", imgSrc: "https://picsum.photos/400/601", imgHint: "movie poster lighthouse" },
      { title: "Canto de Ballenas", genre: "Documental", synopsis: "La migración anual de las ballenas jorobadas.", imgSrc: "https://picsum.photos/400/599", imgHint: "movie poster whale" },
      { title: "Corazón de Cactus", genre: "Comedia", synopsis: "Un botánico citadino encuentra el amor en el desierto.", imgSrc: "https://picsum.photos/400/602", imgHint: "movie poster cactus" },
      { title: "Olas de Fuego", genre: "Acción", synopsis: "Surfistas y narcotraficantes chocan en la costa.", imgSrc: "https://picsum.photos/400/603", imgHint: "movie poster fire" },
    ]
  },
  {
    name: "La Baja Inspira",
    films: [
        { title: "Leyendas del Mar", genre: "Aventura", synopsis: "Un clásico restaurado sobre piratas en el Mar de Cortés.", imgSrc: "https://picsum.photos/400/604", imgHint: "movie poster ship" },
        { title: "Sol de Medianoche", genre: "Film Noir", synopsis: "Un detective investiga un crimen en un resort de lujo.", imgSrc: "https://picsum.photos/400/605", imgHint: "movie poster mystery" },
    ]
  },
  {
    name: "Homenajes",
    films: [
      { title: "El Director", genre: "Biografía", synopsis: "La vida y obra de un maestro del cine mexicano.", imgSrc: "https://picsum.photos/400/606", imgHint: "movie poster director" },
    ]
  }
];

export default function ProgramSection() {
  return (
    <section id="programacion" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Programación 2025</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre las joyas cinematográficas de esta edición, desde las competencias oficiales hasta las galas y funciones especiales.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="font-headline text-3xl font-bold text-foreground mb-6">{category.name}</h3>
              <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {category.films.map((film, index) => (
                    <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                      <MovieCard {...film} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button size="lg" asChild>
                <Link href="/programacion">
                    Ver programación completa <ArrowRight className="ml-2 h-5 w-5"/>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
