
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

const venues = [
    {
        name: "La Marina de Puerto Los Cabos",
        description: "Se establece como el eje que conecta a los distintos sitios del Campus.",
        imgSrc: "/Images/Campus/Dalu_finales-323.jpg",
        imgHint: "yacht marina boats"
    },
    {
        name: "Hotel El Ganzo",
        description: "Pionero cultural del destino, aporta su programa de residencias artísticas y su visión disruptiva como laboratorio creativo frente al Mar de Cortés.",
        imgSrc: "/Images/Campus/DSC_9298.jpg",
        imgHint: "modern hotel art",
        instagram: "@hotelelganzo",
        instagramLink: "https://www.instagram.com/hotelelganzo"
    },
    {
        name: "Veleros Beach Club",
        description: "Centro de registro, hospitalidad y networking internacional. Un espacio para la convivencia con música local y experiencias de la comunidad.",
        imgSrc: "/Images/Campus/Drone-edit2 (1).png",
        imgHint: "beach club ocean"
    },
    {
        name: "Crania",
        description: "Sede principal del miércoles 10 al viernes 12 de diciembre, epicentro creativo y escénico donde cine, música y arte digital se encuentran bajo las estrellas.",
        imgSrc: "/Images/Campus/Copia de DSC01799.jpg",
        imgHint: "outdoor venue night"
    },
    {
        name: "Jardín IKAL",
        description: "Enclave natural y escénico que albergará un acto especial el sábado 13 de diciembre y la fiesta de clausura cerrando con una celebración en sintonía con la naturaleza.",
        imgSrc: "/Images/Campus/Dalu_finales-400.jpg",
        imgHint: "lush garden nature"
    }
];

export default function CampusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Section 1: Hero */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">El Campus <span className="text-accent">FICLosCabos 2025</span></h1>
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                            El Festival Internacional de Cine de Los Cabos se articula en un campus cultural único que reúne los espacios más emblemáticos de Puerto Los Cabos, convirtiendo al destino en un escenario donde el cine y las industrias creativas dialogan con la naturaleza y la comunidad.
                        </p>
                    </div>
                    <div>
                        <Card className="overflow-hidden shadow-2xl">
                           <Image 
                                src="https://picsum.photos/seed/mapa-plc/1000/800"
                                alt="Mapa de Puerto Los Cabos"
                                data-ai-hint="illustrated map"
                                width={1000}
                                height={800}
                                className="w-full h-auto object-cover"
                           />
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 2: Explore the Campus */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Explora el Campus</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {venues.map((venue) => (
                        <Card key={venue.name} className="overflow-hidden group flex flex-col bg-background">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={venue.imgSrc}
                                    alt={venue.name}
                                    data-ai-hint={venue.imgHint}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold font-headline text-card-foreground">{venue.name}</h3>
                                <p className="text-muted-foreground mt-2 flex-grow">{venue.description}</p>
                                {venue.instagram && venue.instagramLink && (
                                    <div className="mt-4">
                                        <Link href={venue.instagramLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-semibold">
                                            <Instagram className="h-4 w-4" />
                                            <span>{venue.instagram}</span>
                                        </Link>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Section 3: Vision */}
        <section className="py-16 sm:py-24 bg-background space-y-16">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                             El Campus FICLosCabos se concibe, más allá de un conjunto de sedes, como la manifestación física de la visión #BeyondTheScreen, donde cada espacio aporta su identidad para consolidar al Festival como experiencia inmersiva y multidisciplinaria.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <Card className="overflow-hidden shadow-xl">
                            <Image 
                                src="https://picsum.photos/seed/sjc-venue/800/600"
                                alt="Sede del festival en San José del Cabo"
                                data-ai-hint="festival venue evening"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <Card className="overflow-hidden shadow-xl">
                            <Image 
                                src="https://picsum.photos/seed/plc-vision/800/600"
                                alt="Vista de Puerto Los Cabos"
                                data-ai-hint="puerto los cabos view"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </Card>
                    </div>
                    <div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            El FICLosCabos no es solo un evento anual: es un medio estratégico de comunicación y posicionamiento para Puerto Los Cabos como un destino donde lujo regenerativo, biodiversidad, cultura y comunidad conviven. Cada persona invitada —artista, creador, aliado o influencer— se convierte en embajadora de esta visión.
                        </p>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
