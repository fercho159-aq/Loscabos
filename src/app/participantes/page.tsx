
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const participants = [
  {
    name: "Gerardo Coello Escalante",
    bio: "Director mexicano que debutó en Sundance 2024 con Viaje de Negocios, una mirada íntima y poderosa sobre la identidad y la soledad contemporánea.",
    imgSrc: "https://picsum.photos/seed/gerardo/400/400",
    imgHint: "portrait Gerardo Coello"
  },
  {
    name: "Adolfo Margulis",
    bio: "Director y fotógrafo cuya sensibilidad visual ha brillado en Spiritum (Cannes, Morelia), combinando arte, técnica y narrativa con sello propio.",
    imgSrc: "https://picsum.photos/seed/adolfo/400/400",
    imgHint: "portrait Adolfo Margulis"
  },
  {
    name: "Isabel Vaca",
    bio: "Directora y productora de Temporada de Campo, reconocida con el Premio del Público en Morelia; hoy impulsa nuevas historias desde su productora Caribou Visual.",
    imgSrc: "https://picsum.photos/seed/isabel/400/400",
    imgHint: "portrait Isabel Vaca"
  },
  {
    name: "Arturo Mendicuti",
    bio: "Guionista y director que ha conquistado festivales como Tribeca y Visions du Réel con su visión íntima y humor sutil; actualmente presenta Camino a Casa y Matagatos.",
    imgSrc: "https://picsum.photos/seed/arturo/400/400",
    imgHint: "portrait Arturo Mendicuti"
  },
  {
    name: "Lau Charles",
    bio: "Artista visual y directora formada en el CCC y La Esmeralda, ganadora del Outstanding Artistic Achievement en Alemania y Mejor Cortometraje Mexicano en el GIFF con Casa Chica.",
    imgSrc: "https://picsum.photos/seed/lau/400/400",
    imgHint: "portrait Lau Charles"
  },
  {
    name: "María Fernanda Prieto",
    bio: "Narradora visual y directora mexicana, reconocida por su sensibilidad y su capacidad de capturar momentos auténticos. Sus cortos han recorrido GLAFF, LA Shorts y deadCenter.",
    imgSrc: "https://picsum.photos/seed/maria/400/400",
    imgHint: "portrait María Fernanda Prieto"
  }
];

const moderator = {
    name: "David Zonana",
    bio: "Cineasta y guionista mexicano reconocido por su trabajo en Heroico, película aclamada internacionalmente por su fuerza visual y su mirada crítica sobre la juventud y el poder. David fungirá como moderador del panel de talento emergente, tejiendo un diálogo profundo sobre la nueva ola de creación cinematográfica en México.",
    imgSrc: "https://picsum.photos/seed/david/400/400",
    imgHint: "portrait David Zonana"
};

export default function ParticipantesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
             <div className="mb-8">
                <Button variant="ghost" asChild>
                    <Link href="/programacion">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver a Programación
                    </Link>
                </Button>
            </div>
            <div className="text-center mb-12">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
                Participantes: <span className="text-accent">Nuevas Voces en el Cine</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Conoce a la generación que está moldeando el futuro del cine nacional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {participants.map((participant) => (
                <Card key={participant.name} className="bg-card flex flex-col">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                         <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src={participant.imgSrc}
                                alt={`Retrato de ${participant.name}`}
                                data-ai-hint={participant.imgHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold font-headline text-foreground">{participant.name}</h3>
                        <p className="text-muted-foreground mt-2 text-sm flex-grow">{participant.bio}</p>
                    </CardContent>
                </Card>
              ))}
            </div>

             <div className="mt-16 pt-12 border-t">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Moderador</h2>
                </div>
                 <div className="max-w-xl mx-auto">
                     <Card className="bg-card flex flex-col sm:flex-row items-center p-6 gap-6">
                        <div className="relative w-32 h-32 flex-shrink-0 rounded-full overflow-hidden shadow-lg">
                            <Image
                                src={moderator.imgSrc}
                                alt={`Retrato de ${moderator.name}`}
                                data-ai-hint={moderator.imgHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-2xl font-bold font-headline text-foreground">{moderator.name}</h3>
                            <p className="text-muted-foreground mt-2 text-sm">{moderator.bio}</p>
                        </div>
                    </Card>
                </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
