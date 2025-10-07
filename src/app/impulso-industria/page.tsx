
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

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
                        src="https://picsum.photos/seed/fondo-filmico/800/600"
                        alt="Fondo Fílmico Gabriel Figueroa"
                        data-ai-hint="film award ceremony"
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
                    <Button asChild size="lg">
                        <Link href="/industria">
                            Aplica a la convocatoria
                        </Link>
                    </Button>
                </div>
            </div>

             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <Image
                        src="https://picsum.photos/seed/baja-inspira-page/800/600"
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
                     <Button asChild size="lg">
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
                            src="https://picsum.photos/seed/escine-alliance/800/600"
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
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                   <Card className="hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Fondo Fílmico Gabriel Figueroa</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <Button asChild>
                                <Link href="/industria">
                                    Saber más
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                     <Card className="hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">La Baja Inspira</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Button asChild>
                                <Link href="/la-baja-inspira">
                                    Saber más
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
