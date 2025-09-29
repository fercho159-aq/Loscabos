
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Globe, TrendingUp, Cpu, Award, Film, Users, Calendar, Sparkles, Handshake, Bot } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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
        {/* Banner Section */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <p className="font-semibold text-accent mb-2">Nueva sección</p>
                <h2 className="font-headline text-4xl sm:text-5xl font-bold">Animación</h2>
                <p className="mt-4 text-lg text-primary-foreground/90 mx-auto">
                    Por primera vez, el Festival Internacional de Cine de Los Cabos integra la animación a su programación oficial, con una selección de cortos y mediometrajes de escuelas nacionales e internacionales, masterclasses con profesionales de la industria y el anuncio de la convocatoria de animación 2026 junto a un taller formativo para creadores de Baja California.
                </p>
                <Button variant="secondary" size="lg" className="mt-8" disabled>
                    Descúbrelo próximamente
                </Button>
            </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="https://picsum.photos/seed/anim-intro/800/1000"
                            alt="Proceso creativo de animación"
                            data-ai-hint="animation process creative"
                            width={800}
                            height={1000}
                            className="rounded-lg shadow-2xl object-cover w-full h-auto"
                        />
                    </div>
                    <div className="text-lg text-muted-foreground space-y-6">
                        <p>El Festival Internacional de Cine de Los Cabos (FICC) ha sido, por más de una década, un espacio de encuentro entre México y la industria cinematográfica global. En 2025, el Festival celebra su 13ª edición del 10 al 14 de diciembre, reafirmando al cine como eje rector y expandiendo su alcance hacia disciplinas que hoy definen la cultura contemporánea, bajo la visión <span className="font-semibold text-accent">#BeyondTheScreen</span>.</p>
                        <p>En esta nueva etapa, la <span className="font-semibold text-foreground">Escuela Superior de Cine (ESCINE)</span> asume un papel central en la curaduría y evaluación, aportando legitimidad y rigor académico. <Handshake className="inline-block h-5 w-5 mr-1" /> Esta alianza permite integrar nuevos lenguajes como la animación, una industria global y símbolo de la transformación digital <Bot className="inline-block h-5 w-5 mx-1" />, que suma diversidad narrativa y potencia creativa al Festival.</p>
                        <p>Así, el FICC 2025 no solo celebra el cine, sino que se consolida como un laboratorio de innovación cultural y un nodo creativo que articula arte, tecnología y comunidad <Sparkles className="inline-block h-5 w-5 ml-1" />, proyectando a Puerto Los Cabos como destino de creatividad y nuevas industrias.</p>
                    </div>
                </div>
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
