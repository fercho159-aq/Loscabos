
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Cpu, Award, Film, Users, Calendar } from 'lucide-react';
import Image from 'next/image';

const justificationPoints = [
    {
        icon: Globe,
        title: "Lenguaje universal",
        description: "La animación trasciende fronteras idiomáticas y culturales, conectando tanto con públicos jóvenes como adultos."
    },
    {
        icon: TrendingUp,
        title: "Industria en expansión",
        description: "Es uno de los segmentos más dinámicos del audiovisual global, con legitimidad consolidada a través de festivales como Annecy, Ottawa o Animafest Zagreb."
    },
    {
        icon: Cpu,
        title: "Innovación tecnológica",
        description: "Integra técnicas como stop-motion, 3D, CGI y VR, pilares de la transformación digital del audiovisual contemporáneo."
    },
    {
        icon: Award,
        title: "México en la escena internacional",
        description: "Cineastas y estudios mexicanos han logrado reconocimientos y premios globales; integrar animación en Los Cabos fortalece este prestigio y posiciona al Festival como ventana del talento emergente."
    }
];

const integrationProposal = [
    {
        icon: Film,
        title: "Sección Oficial de Animación",
        description: "Curaduría de cortos y mediometrajes de escuelas mexicanas e internacionales."
    },
    {
        icon: Users,
        title: "Masterclasses y diálogos",
        description: "Encuentros con profesionales de la animación, presenciales o en línea, que exploren a fondo sus procesos creativos y tecnológicos."
    },
    {
        icon: Calendar,
        title: "Proyección hacia 2026",
        description: "Anunciar en el FICC 2025 la apertura de la convocatoria oficial de animación para 2026, junto con un taller formativo para creadores bajacalifornianos."
    }
];

export default function AnimacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Foco en <span className="text-accent">Animación</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Un nuevo espacio para celebrar la innovación, la creatividad y el talento que definen a la animación como un pilar de la cultura audiovisual contemporánea.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 max-w-4xl text-lg text-muted-foreground space-y-6 text-left sm:text-center">
                <p>El Festival Internacional de Cine de Los Cabos (FICC) ha sido, por más de una década, un espacio de encuentro entre México y la industria cinematográfica global. En 2025, el Festival celebra su 13ª edición del 10 al 14 de diciembre, reafirmando al cine como eje rector y expandiendo su alcance hacia disciplinas que hoy definen la cultura contemporánea, bajo la visión #BeyondTheScreen.</p>
                <p>En esta nueva etapa, la Escuela Superior de Cine (ESCINE) asume un papel central en la curaduría de la programación y en la evaluación de las secciones competitivas, aportando legitimidad, rigor académico y credibilidad al proceso. La alianza permite también integrar nuevos lenguajes como la animación, consolidada ya como industria global y símbolo de la transformación digital, que suma diversidad narrativa y potencia creativa al Festival.</p>
                <p>De esta manera, el FICC 2025 no solo celebra el cine, sino que se consolida como un laboratorio de innovación cultural y un nodo creativo que articula arte, tecnología y comunidad, proyectando a Puerto Los Cabos en el mapa internacional como destino de creatividad, regeneración y nuevas industrias.</p>
            </div>
        </section>
        
        {/* Justification Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">La Animación en el Mundo Audiovisual</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        La animación no es solo un lenguaje artístico, sino un campo de innovación tecnológica y cultural que ocupa un lugar central en el ecosistema audiovisual global.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {justificationPoints.map((point) => (
                        <Card key={point.title} className="bg-card/80 backdrop-blur-sm border-border/50 text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="bg-primary/10 text-accent p-4 rounded-full">
                                    <point.icon className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold font-headline text-card-foreground mb-2">{point.title}</h3>
                            <p className="text-muted-foreground">{point.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Integration Proposal Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Propuesta de Integración en el FICC</h2>
                     <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Pasos concretos para consolidar la animación como un pilar del festival.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {integrationProposal.map((item, index) => (
                        <Card key={item.title} className="bg-background text-left p-6 flex flex-col items-start hover:shadow-lg transition-shadow">
                            <div className="bg-primary/10 text-accent p-4 rounded-full mb-4">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-headline text-foreground mb-3">{item.title}</h3>
                            <p className="text-muted-foreground flex-grow">{item.description}</p>
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
