
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Handshake, Users, Film } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const industrySupportPoints = [
    "Plataforma de networking para creadores, productores y distribuidores.",
    "Paneles y mesas de diálogo con líderes de la industria.",
    "Talleres de desarrollo profesional y capacitación.",
    "Mercado de coproducción para proyectos norteamericanos.",
    "Oportunidades de vinculación con agentes de ventas y festivales internacionales."
];

const stats = [
  {
    icon: Film,
    stat: "+500",
    description: "proyectos impulsados a través de nuestras plataformas.",
  },
  {
    icon: Handshake,
    stat: "+200",
    description: "alianzas estratégicas con empresas de la industria.",
  },
  {
    icon: Users,
    stat: "+1,500",
    description: "profesionales de la industria reunidos cada edición.",
  },
];

export default function ImpulsoIndustriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Impulso a la <span className="text-accent">Industria</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-muted-foreground max-w-3xl mx-auto">
              Conectando el talento de México, Estados Unidos y Canadá para fortalecer el futuro del cine.
            </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline">
                    <Link href="/acerca-de">
                        Conoce el Festival
                    </Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className='md:col-span-3'>
                        <div className="text-lg text-muted-foreground space-y-4">
                            <p>El Festival Internacional de Cine de Los Cabos es más que una celebración del cine; es un motor fundamental para el desarrollo y la colaboración dentro de la industria cinematográfica de Norteamérica. Nuestra misión es crear un ecosistema vibrante donde cineastas, productores, distribuidores e inversionistas puedan conectar, crear y crecer.</p>
                            <p>Desde nuestra fundación, hemos facilitado la realización de cientos de películas, fomentando un diálogo creativo y comercial que trasciende fronteras. A través de nuestros programas de industria, buscamos fortalecer la producción independiente y abrir nuevas vías para que las historias de nuestra región lleguen a una audiencia global.</p>
                            <p>Cada año, reunimos a los profesionales más influyentes para discutir las tendencias que están moldeando el futuro del cine, desde nuevas tecnologías de producción hasta modelos de distribución innovadores.</p>
                        </div>
                    </div>
                     <div className='md:col-span-2'>
                        <Image
                            src="/Images/FF/FICC_Banner6.jpg"
                            alt="Networking en evento de cine"
                            data-ai-hint="cinema networking event"
                            width={800}
                            height={1000}
                            className="rounded-lg shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        {/* Represents & Results Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 space-y-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image 
                            src="https://picsum.photos/seed/industry-panel/800/600"
                            alt="Panel de discusión en el festival"
                            data-ai-hint="discussion panel festival"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                     <div>
                        <h2 className="font-headline text-4xl font-bold text-foreground mb-6">¿Qué Ofrecemos a la Industria?</h2>
                         <div className="space-y-4">
                            {industrySupportPoints.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                    <p className="text-lg text-muted-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center mb-12">
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Nuestro Impacto</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {stats.map((result) => (
                            <Card key={result.stat} className="bg-card text-center p-6 shadow-lg">
                                <result.icon className="w-12 h-12 mb-4 text-accent mx-auto" />
                                <p className="text-5xl font-bold text-foreground font-headline">{result.stat}</p>
                                <p className="text-muted-foreground mt-2">{result.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Initiatives Banner */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/FF/FICC_Banner8.jpg"
                    alt="Banner Convocatoria"
                    data-ai-hint="film slate camera"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                 <h2 className="font-headline text-5xl sm:text-7xl font-bold">Nuestras Iniciativas Clave</h2>
            </div>
        </section>

        {/* Initiatives Details Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                   <Card className="hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Fondo Fílmico Gabriel Figueroa</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">Apoyamos a cineastas mexicanos en la etapa de postproducción, conectándolos con la industria global y brindando apoyos clave para la finalización de sus proyectos.</p>
                            <Button asChild>
                                <Link href="/industria">
                                    Conocer el Fondo
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">La Baja Inspira</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">Celebramos las historias que nacen de la península, dando visibilidad al talento local y fortaleciendo la identidad cultural de Baja California a través del cine.</p>
                             <Button asChild>
                                <Link href="/la-baja-inspira">
                                    Explorar la Sección
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
