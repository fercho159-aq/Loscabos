
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MovieCard } from "./movie-card";

const categories = [
  {
    name: "Galas y Eventos Especiales",
    films: [
      { title: "Proyección Inaugural", genre: "Gala", synopsis: "La película que da inicio a nuestra celebración del cine.", imgSrc: "https://picsum.photos/seed/gala1/400/600", imgHint: "movie premiere" },
      { title: "Función Especial: Amores Perros", genre: "Gala", synopsis: "Proyección icónica para celebrar un hito del cine, presentada por PRADA.", imgSrc: "https://picsum.photos/seed/amores/400/600", imgHint: "classic film" },
      { title: "Masterclass con Eugenio Caballero", genre: "Masterclass", synopsis: "Una oportunidad única para aprender del galardonado diseñador de producción.", imgSrc: "https://picsum.photos/seed/masterclass/400/600", imgHint: "film workshop" },
      { title: "Premiación y Clausura", genre: "Gala", synopsis: "Reconocimiento a lo mejor del festival y la gran fiesta final.", imgSrc: "https://picsum.photos/seed/gala2/400/600", imgHint: "awards ceremony" },
    ]
  },
  {
    name: "La Baja Inspira",
    films: [
      { title: "Cortometrajes Regionales 1", genre: "Competencia", synopsis: "Descubre las nuevas voces y narrativas de la península de Baja California.", imgSrc: "https://picsum.photos/seed/baja1/400/600", imgHint: "local filmmakers" },
      { title: "Largometraje Documental", genre: "Competencia", synopsis: "Una mirada profunda a las historias y paisajes que definen a la región.", imgSrc: "https://picsum.photos/seed/baja2/400/600", imgHint: "documentary landscape" },
      { title: "Ficción Regional", genre: "Competencia", synopsis: "Explora las historias de ficción que surgen del desierto y el mar.", imgSrc: "https://picsum.photos/seed/baja3/400/600", imgHint: "narrative film" },
    ]
  },
  {
    name: "Música y Experiencias",
    films: [
      { title: "Sinfonía Oceánica", genre: "Experiencia", synopsis: "Una experiencia audiovisual inmersiva que te sumergirá en el océano.", imgSrc: "https://picsum.photos/seed/music1/400/600", imgHint: "ocean visual" },
      { title: "Concierto: Ed Maverick", genre: "Música", synopsis: "Presentación especial y concierto en vivo para cerrar la noche del jueves.", imgSrc: "https://picsum.photos/seed/music2/400/600", imgHint: "music concert" },
      { title: "Fiesta Inaugural", genre: "Fiesta", synopsis: "Celebremos juntos el comienzo del festival en Crania.", imgSrc: "https://picsum.photos/seed/music3/400/600", imgHint: "opening party" },
      { title: "Fiesta Amores Perros x PRADA", genre: "Fiesta", synopsis: "Una celebración exclusiva en honor a la película icónica en Veleros.", imgSrc: "https://picsum.photos/seed/music4/400/600", imgHint: "exclusive party" },
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
            Descubre las joyas cinematográficas, galas, conciertos y experiencias únicas que hemos preparado para esta edición.
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
