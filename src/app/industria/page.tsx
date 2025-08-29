import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, Clapperboard, Film, MapPin, Search, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Search,
    title: "Matchmaking Inteligente",
    description: "Nuestro algoritmo te conecta con profesionales clave según tus proyectos, intereses y objetivos. Recibe sugerencias de reuniones de alto valor.",
  },
  {
    icon: Users,
    title: "Networking Digital",
    description: "Explora un directorio de perfiles estilo LinkedIn, simplificado para la industria. Conecta, envía mensajes y gestiona tus contactos.",
  },
  {
    icon: Calendar,
    title: "Agenda B2B Integrada",
    description: "Organiza citas rápidas con actores, productores y distribuidores. Tu agenda del festival, todo en un solo lugar.",
  },
];

const opportunities = [
    {
      icon: Film,
      title: "Fondo Fílmico Gabriel Figueroa",
      description: "Descubre y aplica a fondos para desarrollo y post-producción. Un impulso decisivo para tu proyecto.",
      link: "#",
    },
    {
      icon: Clapperboard,
      title: "Sesiones de Pitching",
      description: "Presenta tu proyecto ante un panel de expertos, distribuidores y financistas de talla mundial.",
      link: "#",
    },
  ];

export default function IndustriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Portal de <span className="text-accent">Industria</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Bienvenido al epicentro de negocios del cine en Latinoamérica. Conecta, financia y crea en el entorno único de Los Cabos.
            </p>
            <Button size="lg" className="mt-8 group">
                Acceder a la Plataforma
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Tu Próximo Gran Proyecto Empieza Aquí</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Herramientas diseñadas para maximizar tus oportunidades de negocio.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.title} className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="bg-primary/10 text-primary p-4 rounded-full">
                                    <feature.icon className="w-8 h-8 text-accent" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold font-headline text-card-foreground mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Credibility & Opportunities Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Un Espacio de Credibilidad y Oportunidades</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Programas consolidados que impulsan el cine de la región y conectan talento con recursos.
                        </p>
                        <div className="mt-8 space-y-6">
                        {opportunities.map((item) => (
                            <Card key={item.title} className="bg-card hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="flex-shrink-0 bg-accent/10 text-accent p-3 rounded-full mt-1">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        </div>
                    </div>
                    <div className="text-center bg-card p-8 rounded-lg shadow-lg">
                        <Briefcase className="w-16 h-16 mx-auto text-accent mb-4"/>
                        <h3 className="text-3xl font-bold font-headline text-foreground">Agenda B2B</h3>
                        <p className="text-muted-foreground mt-2 mb-6">Plataforma de agendado para citas rápidas y eficientes con decision-makers.</p>
                        <Button variant="secondary">Ver Mi Agenda</Button>
                    </div>
                </div>
            </div>
        </section>


        {/* Filma en Los Cabos Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <Card className="overflow-hidden shadow-2xl shadow-black/20">
                            <Image 
                                src="https://picsum.photos/800/601"
                                alt="Paisaje desértico de Los Cabos ideal para filmación"
                                data-ai-hint="desert landscape film"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </Card>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">
                            El Laboratorio <span className="text-accent">Natural de Rodajes</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Descubre por qué Los Cabos es el destino ideal para tu producción. Un ecosistema de locaciones únicas, incentivos fiscales y talento local listo para colaborar.
                        </p>
                         <ul className="mt-6 space-y-4 text-muted-foreground">
                            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent"/><span>Locaciones del desierto al mar.</span></li>
                            <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-accent"/><span>Incentivos y facilidades de filmación.</span></li>
                            <li className="flex items-center gap-3"><Users className="h-5 w-5 text-accent"/><span>Directorio de talento y crew local.</span></li>
                        </ul>
                        <Button size="lg" className="mt-8 group">
                            Explorar Locaciones y Servicios
                        </Button>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
