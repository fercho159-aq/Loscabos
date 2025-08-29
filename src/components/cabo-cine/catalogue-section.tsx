import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { MovieCard } from "./movie-card"

const pastFilms = [
  {
    title: "Eco del Pasado",
    genre: "Drama",
    synopsis: "Un viaje a través de la memoria y el olvido en el desierto de Baja.",
    imgSrc: "https://picsum.photos/400/602",
    imgHint: "movie poster desert"
  },
  {
    title: "Marea Alta",
    genre: "Suspenso",
    synopsis: "Secretos emergen con la marea en un pequeño pueblo pesquero.",
    imgSrc: "https://picsum.photos/400/603",
    imgHint: "movie poster ocean"
  },
  {
    title: "Nómadas del Sol",
    genre: "Documental",
    synopsis: "La vida de los surfistas que buscan la ola perfecta en la costa del Pacífico.",
    imgSrc: "https://picsum.photos/400/604",
    imgHint: "movie poster surfing"
  },
  {
    title: "El Color del Coral",
    genre: "Animación",
    synopsis: "Una mágica aventura submarina para salvar el arrecife de coral.",
    imgSrc: "https://picsum.photos/400/605",
    imgHint: "movie poster coral"
  },
  {
    title: "Medianoche en el Arco",
    genre: "Romance",
    synopsis: "Dos extraños se encuentran bajo el icónico Arco de Los Cabos.",
    imgSrc: "https://picsum.photos/400/606",
    imgHint: "movie poster night"
  },
];

export default function CatalogueSection() {
  return (
    <section id="catalogue" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Catálogo Digital</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Revive la magia del festival. Explora una selección de películas de ediciones anteriores.</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {pastFilms.map((film, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <MovieCard {...film} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
