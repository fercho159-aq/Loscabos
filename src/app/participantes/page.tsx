
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const participants = [
  {
    name: 'Gerardo Coello Escalante',
    bio: 'Director mexicano que debutó en Sundance 2024 con Viaje de Negocios, una mirada íntima y poderosa sobre la identidad y la soledad contemporánea.',
    imgSrc: '/Images/voces/GERARDO HEADSHOT.jpg',
    imgHint: 'portrait Gerardo Coello Escalante',
  },
  {
    name: 'Adolfo Margulis',
    bio: 'Director y fotógrafo cuya sensibilidad visual ha brillado en Spiritum (Cannes, Morelia), combinando arte, técnica y narrativa con sello propio.',
    imgSrc: '/Images/voces/ADOLFO HEADSHOT.jpg',
    imgHint: 'portrait Adolfo Margulis',
  },
  {
    name: 'Isabel Vaca',
    bio: 'Directora y productora de Temporada de Campo, reconocida con el Premio del Público en Morelia; hoy impulsa nuevas historias desde su productora Caribou Visual.',
    imgSrc: '/Images/voces/Foto Isabel Vaca vertical2.jpeg',
    imgHint: 'portrait Isabel Vaca',
  },
  {
    name: 'Arturo Mendicuti',
    bio: 'Guionista y director que ha conquistado festivales como Tribeca y Visions du Réel con su visión íntima y humor sutil; actualmente presenta Camino a Casa y Matagatos.',
    imgSrc: '/Images/voces/Foto_Arturo_Mendicuti.jpg',
    imgHint: 'portrait Arturo Mendicuti',
  },
  {
    name: 'Lau Charles',
    bio: 'Artista visual y directora formada en el CCC y La Esmeralda, ganadora del Outstanding Artistic Achievement en Alemania y Mejor Cortometraje Mexicano en el GIFF con Casa Chica.',
    imgSrc: '/Images/voces/LAU HEADSHOT.png',
    imgHint: 'portrait Lau Charles',
  },
  {
    name: 'María Fernanda Prieto',
    bio: 'Narradora visual y directora mexicana, reconocida por su sensibilidad y su capacidad de capturar momentos auténticos. Sus cortos han recorrido GLAFF, LA Shorts y deadCenter.',
    imgSrc: '/Images/voces/MFP Headshot.jpg',
    imgHint: 'portrait María Fernanda Prieto',
  },
  {
    name: 'Julián Lamadrid',
    bio: 'Cantante, compositor y cineasta mexicano. Su trabajo fusiona música y cine en proyectos como Mala Noche y Rebels of the Neon God.',
    imgSrc: '/Images/voces/PHOTO-2025-10-23-15-13-31.jpg',
    imgHint: 'portrait Julián Lamadrid'
  },
  {
    name: 'Ximena Lamadrid',
    bio: 'Actriz y cineasta mexicana, reconocida por Bardo, ¿Quién Mató a Sara? y Marea, proyecto que escribió, dirigió y produjo.',
    imgSrc: '/Images/voces/PHOTO-2025-10-23-15-14-48.jpg',
    imgHint: 'portrait Ximena Lamadrid'
  },
  {
    name: 'David Zonana',
    bio: 'Cineasta y guionista mexicano reconocido por su trabajo en Heroico, película aclamada internacionalmente por su fuerza visual y su mirada crítica sobre la juventud y el poder. David fungirá como moderador del panel de talento emergente, tejiendo un diálogo profundo sobre la nueva ola de creación cinematográfica en México.',
    imgSrc: '/Images/voces/DAVID HEADSHOT.jpeg',
    imgHint: 'portrait David Zonana',
    role: 'Moderador',
  },
];

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
              <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
                Participantes: <span className="text-accent">Nuevas Voces en el Cine</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Conoce a la nueva generación de cineastas que están redefiniendo el futuro del cine mexicano.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {participants.map((participant) => (
                <Card key={participant.name} className="bg-card text-center p-6 shadow-lg flex flex-col items-center">
                    <div className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
                        <Image 
                            src={participant.imgSrc} 
                            alt={`Retrato de ${participant.name}`} 
                            data-ai-hint={participant.imgHint} 
                            fill
                            className="object-cover"
                        />
                    </div>
                   <h3 className="text-2xl font-bold font-headline text-foreground">{participant.name}</h3>
                   {participant.role && <p className="text-accent font-semibold text-sm mb-2">{participant.role}</p>}
                   <p className="text-muted-foreground mt-2 text-sm flex-grow">{participant.bio}</p>
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
