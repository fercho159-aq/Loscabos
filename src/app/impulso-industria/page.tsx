
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const initiativesLinks = [
    { title: "Fondo Fílmico Gabriel Figueroa", href: "/industria", imgSrc: "/Images/FF/FICC_Banner8.jpg", imgHint: "film award" },
    { title: "La Baja Inspira", href: "/la-baja-inspira", imgSrc: "/Images/BajaInspira/FICC_Banner9.png", imgHint: "desert landscape" },
];

export default function ImpulsoIndustriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-background py-20 sm:py-28 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground">
              Impulso a la <span className="text-accent">Industria</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              En esta edición, el Festival fortalece sus brazos de apoyo a la industria cinematográfica mediante alianzas institucionales que aportan fuerza, credibilidad y legitimidad a sus programas principales.
            </p>
          </div>
        </section>

        {/* Initiatives Section */}
        <section className="py-16 sm:py-24 bg-card">
          <div className="container mx-auto px-4 space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                    <Image
                        src="/Images/FF/FICC_Banner8.jpg"
                        alt="Fondo Fílmico Gabriel Figueroa"
                        data-ai-hint="film award"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-2xl"
                    />
                </div>
                <div className="md:order-1">
                    <h2 className="font-headline text-4xl font-bold text-foreground mb-4">Fondo Fílmico Gabriel Figueroa</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Un programa especializado en la etapa de postproducción, que brinda a cineastas mexicanos la posibilidad de concluir sus proyectos con calidad técnica y artística. El fondo ofrece acompañamiento profesional, mentorías y acceso a aliados estratégicos que permiten que las películas puedan alcanzar circuitos nacionales e internacionales de exhibición.
                    </p>
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/industria">
                            Aplica a la convocatoria
                        </Link>
                    </Button>
                </div>
            </div>

             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <Image
                        src="/Images/BajaInspira/FICC_Banner9.png"
                        alt="La Baja Inspira"
                        data-ai-hint="baja california landscape"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-2xl"
                    />
                </div>
                <div>
                    <h2 className="font-headline text-4xl font-bold text-foreground mb-4">La Baja Inspira</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Sección competitiva dedicada a las historias vinculadas con la región. Surgida como parte del esfuerzo del FICLosCabos por estrechar lazos con la comunidad local, esta iniciativa abre un espacio en el que el público de Baja California Sur puede reconocerse en sus propias narrativas: en los paisajes, los personajes y las historias que retratan la península. El programa acepta películas en distintos formatos y géneros, con requisito principal de que exista un vínculo directo con la región de Baja California o Baja California Sur.
                    </p>
                     <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/la-baja-inspira">
                            Descubre más
                        </Link>
                    </Button>
                </div>
            </div>
          </div>
        </section>

        {/* ESCINE Alliance Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4">
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                         <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                           Este ecosistema se refuerza a través de la alianza estratégica con la Escuela Superior de Cine (ESCINE), institución de referencia en la formación audiovisual en México. Gracias a esta colaboración, los procesos de selección, evaluación y acompañamiento de proyectos cuentan con el respaldo académico y profesional que promueve la proyección internacional de los proyectos ganadores.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                           De esta manera, el FICLosCabos 2025 no solo celebra el cine: se consolida como un vehículo de desarrollo cultural y económico, capaz de articular talento, instituciones y comunidad en un mismo territorio. Estableciéndose como un medio estratégico de comunicación y desarrollo para Puerto Los Cabos, alineado con la visión global de las industrias creativas.
                        </p>
                    </div>
                     <div>
                        <Image
                            src="/Images/Acerca de/FICC_Banner8 (1).png"
                            alt="Alianza con ESCINE"
                            data-ai-hint="film students collaboration"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        {/* Navigation Blocks Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Conoce nuestras iniciativas</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {initiativesLinks.map((link) => (
                       <Card key={link.title} className="bg-card hover:shadow-lg transition-shadow group overflow-hidden">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={link.imgSrc}
                                    alt={link.title}
                                    data-ai-hint={link.imgHint}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-2xl">{link.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button variant="ghost" asChild className="text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground">
                                    <Link href={link.href}>
                                        Saber más <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
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
