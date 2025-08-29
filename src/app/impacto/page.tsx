
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Film, HandHeart, Users, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';

const actions = [
  {
    icon: HandHeart,
    title: "Voluntariado",
    description: "Forma parte del equipo que hace posible la magia del festival.",
    linkText: "Conviértete en voluntario",
  },
  {
    icon: Film,
    title: "Fondo Fílmico",
    description: "Apoyamos a los cineastas que cuentan las historias de nuestra región.",
    linkText: "Conoce el fondo",
  },
  {
    icon: Users,
    title: "Nuestros Aliados",
    description: "Marcas y organizaciones que creen en el poder del cine.",
    linkText: "Ver aliados",
  }
];

const localStories = [
    {
      imgSrc: "https://picsum.photos/800/600?random=10",
      imgHint: "local fisherman portrait",
      title: "Mares de Cine",
      description: "Pescadores locales comparten sus historias y cómo el festival ha cambiado su perspectiva."
    },
    {
      imgSrc: "https://picsum.photos/800/600?random=11",
      imgHint: "local artist painting",
      title: "El Arte de Inspirar",
      description: "Artistas plásticos de San José del Cabo que colaboran en la creación de murales del festival."
    },
    {
        imgSrc: "https://picsum.photos/800/600?random=12",
        imgHint: "young volunteers smiling",
        title: "Jóvenes con Futuro",
        description: "Estudiantes que a través del voluntariado descubren su pasión por el cine y la gestión cultural."
    }
]

export default function ImpactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-card py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
             <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Nuestro <span className="text-accent">Impacto</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              El cine es nuestro lenguaje para construir comunidad, celebrar nuestra cultura e inspirar a Los Cabos.
            </p>
          </div>
        </section>

        {/* Actions Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {actions.map((action) => (
                        <Card key={action.title} className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-colors duration-300 group text-center">
                            <CardContent className="p-8 flex flex-col items-center">
                                <action.icon className="w-12 h-12 mb-4 text-accent" />
                                <h3 className="text-2xl font-bold font-headline text-card-foreground mb-2">{action.title}</h3>
                                <p className="text-muted-foreground mb-6 flex-grow">{action.description}</p>
                                <Button>
                                    {action.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Local Stories Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">La Baja Inspira: Historias Locales</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Gente, lugares y momentos que demuestran cómo el cine transforma nuestra comunidad.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {localStories.map((story) => (
                         <Card key={story.title} className="overflow-hidden group relative border-none shadow-xl shadow-black/20">
                            <Image
                                src={story.imgSrc}
                                alt={story.title}
                                data-ai-hint={story.imgHint}
                                width={800}
                                height={600}
                                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="font-bold text-2xl font-headline text-background">{story.title}</h3>
                                <p className="text-background/90 mt-2">{story.description}</p>
                            </div>
                         </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Venues Section */}
        <section className="py-16 sm:py-24 bg-background text-center">
            <div className="container mx-auto px-4">
                 <div className="mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Nuestras Sedes</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Desde cines al aire libre en la playa hasta proyecciones en el corazón de los barrios. El festival es de todos y está en todas partes.
                    </p>
                </div>
                <Card className="w-full h-96 overflow-hidden shadow-lg">
                    <div className="bg-muted w-full h-full flex items-center justify-center flex-col text-muted-foreground">
                        <MapPin className="w-16 h-16 mb-4"/>
                        <p className="font-bold">Mapa Interactivo Próximamente</p>
                        <p className="text-sm">Descubre los puntos de encuentro y las sedes del festival.</p>
                    </div>
                </Card>
            </div>
        </section>


      </main>
      <Footer />
    </div>
  );
}
