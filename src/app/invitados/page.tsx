
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Link as LinkIcon, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const guests = [
  {
    name: "Eugenio Caballero",
    bio: "Eugenio Caballero es un diseñador de producción mexicano, ganador del Óscar por El laberinto del fauno. Reconocido por su visión artística, ha colaborado con cineastas de renombre y es una de las figuras más influyentes del cine internacional. En 2025, el Festival Internacional de Cine de Los Cabos le rendirá homenaje con un premio, una masterclass y una retrospectiva completa de su obra.",
    handle: null,
    handleLink: null,
    imgSrc: "https://picsum.photos/seed/guest1/500/500",
    imgHint: "man portrait"
  },
  {
    name: "Ximena Lamadrid",
    bio: "Ximena Lamadrid es una actriz reconocida y una de las creativas emergentes más influyentes de México. Productora, directora, actriz, modelo, escritora y artista multidisciplinaria, se mueve con naturalidad entre disciplinas, aportando visión y autenticidad a cada proyecto. Su carrera ha estado marcada por colaboraciones con algunas de las figuras más destacadas del cine, la moda y la cultura. Ya sea en la pantalla, detrás de la cámara o frente a un lente fotográfico, la obra de Lamadrid resuena con una combinación única de arte y relevancia cultural.",
    handle: "@ximenalamadrid",
    handleLink: "https://www.instagram.com/ximenalamadrid",
    imgSrc: "https://picsum.photos/seed/guest2/500/500",
    imgHint: "woman portrait"
  },
  {
    name: "Gerardo Coello",
    bio: "Gerardo Coello Escalante, joven director mexicano, estrenó Viaje de Negocios en Sundance 2024. Su cine combina mirada íntima y narrativa poderosa, consolidándolo como una de las voces emergentes más prometedoras del cine contemporáneo. Presentará su cortometraje Viaje de Negocios en el festival, y participará en el panel de cineastas jóvenes emergentes.",
    handle: "@gcoello94",
    handleLink: "https://www.instagram.com/gcoello94",
    imgSrc: "https://picsum.photos/seed/guest3/500/500",
    imgHint: "man portrait monochrome"
  },
  {
    name: "Adolfo Margulis",
    bio: "Adolfo Margulis es director y fotógrafo cuya obra une sensibilidad y técnica. Con Spiritum (2024) destacó en Cannes y Morelia. Ha trabajado con marcas globales y figuras como Canelo Álvarez y Shawn Mendes, consolidándose como un creador versátil. Participará en el panel de cineastas jóvenes emergentes y presentará su cortometraje Spiritum.",
    handle: "@adolfo.margulis",
    handleLink: "https://www.instagram.com/adolfo.margulis",
    imgSrc: "https://picsum.photos/seed/guest4/500/500",
    imgHint: "man portrait glasses"
  },
  {
    name: "Isabel Vaca",
    bio: "Isabel Vaca, es una directora y productora mexicana. Su ópera prima, Temporada de Campo, se estrenó en Visions du Réel y Hot Docs, y fue reconocida con el Premio del Público en el Festival Internacional de Cine de Morelia. Actualmente dirige su casa productora, Caribou Visual. Sus cortos de ficción Spinning (2023), LOVE (2024) y Matagatos (2025) se presentaron en festivales internacionales como Tribeca, Durban y Morelia.",
    handle: "@isavaca",
    handleLink: "https://www.instagram.com/isavaca",
    imgSrc: "https://picsum.photos/seed/guest5/500/500",
    imgHint: "woman portrait smiling"
  },
  {
    name: "Arturo Mendicuti Barroeta",
    bio: "Arturo Mendicuti es un director y guionista de la Ciudad de México, interesado en contar historias profundas, íntimas, sociales y con buen humor. Su trabajo se ha presentado en festivales como Tribeca, FICM, Visions du Réel y Hot Docs. Su primer largometraje como productor, Temporada de Campo, recibió el Premio del Público en el Festival de Morelia. Matagatos, su más reciente cortometraje, se presentará este año en el FICM.",
    handle: "@AMB",
    handleLink: "https://www.instagram.com/AMB",
    imgSrc: "https://picsum.photos/seed/guest6/500/500",
    imgHint: "man portrait serious"
  },
  {
    name: "Lau Charles",
    bio: "Lau Charles es directora y artista visual egresada del CCC y de “La Esmeralda”. Su cortometraje Casa Chica estrenó en Berlinale Shorts 2025, fue nominado al Oso de Oro y ganó Mejor Cortometraje Mexicano en el GIFF. Su obra, centrada en la infancia, incluye Olote, que fue semifinalista en los BAFTA Student Film Awards. Actualmente desarrolla su ópera prima.",
    handle: "@laucharlesart",
    handleLink: "https://www.instagram.com/laucharlesart",
    imgSrc: "https://picsum.photos/seed/guest7/500/500",
    imgHint: "woman portrait art"
  },
  {
      name: "María Fernanda Prieto",
      bio: "María Fernanda Prieto, descubrió su pasión por contar historias desde niña. Sus cortometrajes, entre ellos Recognition y ¿Qué Somos?, se han proyectado en festivales como GLAFF, deadCenter, y LA Shorts Fest. En 2023 dirigió la segunda unidad en la adaptación de Netflix de Pedro Páramo y actualmente desarrolla su primer largometraje con Woo Films. Con cada proyecto, Maria continúa tejiendo historias que capturan la esencia de los momentos honestos de la vida.",
      handle: "marprieto.com",
      handleLink: "http://marprieto.com",
      imgSrc: "https://picsum.photos/seed/guest8/500/500",
      imgHint: "woman portrait professional"
  },
  {
      name: "Julián Lamadrid",
      bio: "Julian Lamadrid es músico y cineasta al frente de una de las bandas de rock electrónico más prometedoras del momento. También escritor, actor y director, actualmente escribe y está listo para dirigir la próxima serie ULTRASOUND. Participara en el panel de cineastas jóvenes emergentes, y su banda The Cave tocaran en vivo, en una fiesta inolvidable.",
      handle: "@thecave.love",
      handleLink: "https://www.instagram.com/thecave.love",
      imgSrc: "https://picsum.photos/seed/guest9/500/500",
      imgHint: "man portrait musician"
  },
  {
      name: "Martha Sosa Elizondo",
      bio: "Martha Sosa Elizondo, es una destacada productora mexicana involucrada en la producción cinematográfica desde 1997. Es ampliamente reconocida por su trabajo en filmes emblemáticos como Amores Perros y Presunto culpable. Sosa cree profundamente en el poder emocional del cine como instrumento para visibilizar problemáticas sociales y generar cambio. Ha impulsado películas que han alcanzado éxito internacional y popularidad masiva.",
      handle: "@marthasosa",
      handleLink: "https://www.instagram.com/marthasosa",
      imgSrc: "https://picsum.photos/seed/guest10/500/500",
      imgHint: "woman portrait elegant"
  }
];

export default function InvitadosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="bg-card py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Invitados <span className="text-accent">Especiales</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Conoce a los cineastas, actores y visionarios que nos acompañan en esta edición para compartir su talento y experiencia.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {guests.map((guest) => (
                <Card key={guest.name} className="flex flex-col overflow-hidden bg-card border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={guest.imgSrc}
                      alt={`Retrato de ${guest.name}`}
                      data-ai-hint={guest.imgHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className='font-headline text-2xl'>{guest.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{guest.bio}</p>
                  </CardContent>
                  {guest.handle && guest.handleLink && (
                  <CardFooter>
                      <Link href={guest.handleLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent hover:underline flex items-center gap-2">
                        {guest.handle.includes('.com') ? <LinkIcon className="h-4 w-4" /> : <Instagram className="h-4 w-4" />}
                        {guest.handle}
                      </Link>
                  </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
