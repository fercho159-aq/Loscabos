
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, Ticket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const discoverLinks = [
    { title: "Programación 2025", href: "/programacion", imgSrc: "/Images/Programacion/FICC_Banner3.png", imgHint: "cinema screen" },
    { title: "Campus FICLosCabos", href: "/campus", imgSrc: "/Images/Campus/Ganzo-Beach-Jetty-20.jpg", imgHint: "event location" },
    { title: "Animación", href: "/animacion", imgSrc: "/Images/Animacion/FICC_Banner12.png", imgHint: "animation art" },
];

const initiativesLinks = [
    { title: "Fondo Fílmico Gabriel Figueroa", href: "/industria", imgSrc: "/Images/FF/FICC_Banner8.jpg", imgHint: "film award" },
    { title: "La Baja Inspira", href: "/la-baja-inspira", imgSrc: "/Images/BajaInspira/FICC_Banner9.png", imgHint: "desert landscape" },
];

export default function AcercaDePage() {
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/13a/FICC_Banner14.jpg"
                alt="Banner de la sección Sobre el FICLosCabos"
                data-ai-hint="festival crowd lights"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10 flex justify-center items-center h-32 sm:h-48">
                 <Image 
                    src="/Images/Main/logo main.png" 
                    alt="CaboCine 13ª Edición Logo" 
                    width={600} 
                    height={160}
                    data-ai-hint="logo white"
                    className="object-contain"
                />
            </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 max-w-4xl space-y-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-lg text-muted-foreground space-y-4">
                        <p>El Festival Internacional de Cine de Los Cabos (FICLosCabos) nació hace más de una década como una plataforma cinematográfica que conecta a México con la industria global. Desde entonces, se ha consolidado como un referente del cine independiente, del diálogo cultural y de la atracción de talento internacional.</p>
                    </div>
                    <div>
                         <Image
                            src="/Images/Acerca de/FICC_Banner_3 (1).png"
                            alt="Talento internaxcional en el festival"
                            data-ai-hint="international talent festival"
                            width={800}
                            height={600}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                </div>

                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <Image
                            src="/Images/Acerca de/FICC_Banner_2 (1).png"
                            alt="Convergencia de disciplinas creativas"
                            data-ai-hint="creative disciplines convergence"
                            width={800}
                            height={600}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                    <div className="order-1 md:order-2 text-lg text-muted-foreground space-y-4">
                       <p>En 2025, el Festival celebrará su 13ª edición del 10 al 14 de diciembre, reafirmando su espíritu innovador y expandiendo su alcance hacia disciplinas que hoy definen la cultura contemporánea. El cine se mantiene como eje rector, convergiendo con la música, el arte digital y la gastronomía bajo la narrativa #BeyondTheScreen.</p>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-lg text-muted-foreground space-y-4">
                       <p>Esta transformación se inspira en el cruce único entre desierto y mar que caracteriza a <Link href="/puerto-los-cabos" className="text-accent hover:underline">Puerto Los Cabos</Link>. La biodiversidad del Mar de Cortés y la memoria cultural sudcaliforniana dialogan con la arquitectura y la comunidad, convirtiendo al Festival en un espacio donde naturaleza y creatividad se entrelazan en armonía.</p>
                    </div>
                    <div>
                         <Image
                            src="/Images/Acerca de/FICC_Banner_1 (1).png"
                            alt="Naturaleza y creatividad en Los Cabos"
                            data-ai-hint="nature creativity cabo"
                            width={800}
                            height={600}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                </div>

                <div className="text-lg text-muted-foreground space-y-6 bg-card p-8 rounded-lg shadow-lg">
                    <p>Al incorporar lenguajes digitales, experiencias inmersivas y narrativas transmedia, el Festival responde a los retos de la era tecnológica y se consolida como un vehículo de desarrollo económico, cultural y creativo a nivel internacional, proyectando a Puerto Los Cabos como un ecosistema creativo y regenerativo con voz global.</p>
                     <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="font-headline rounded-none bg-accent text-accent-foreground hover:bg-accent/90">
                           <Link href="https://festival-internacional-de-cine-de-los-cabos-2025.boletia.com/" target="_blank" rel="noopener noreferrer">
                            <Ticket className="mr-2 h-5 w-5" />
                            Comprar Boletos
                           </Link>
                        </Button>
                         <Button size="lg" variant="outline" className="font-headline rounded-none">
                            Explora las ediciones anteriores
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 bg-card">
            <div className="container mx-auto px-4 max-w-4xl space-y-8">
                <div className="text-center">
                    <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">¿Quién está detrás del FICLosCabos 2025?</h2>
                </div>
                <div className="text-lg text-muted-foreground space-y-6">
                    <p>El Festival Internacional de Cine de Los Cabos es posible gracias a un equipo con experiencia probada en gestión cultural, curaduría cinematográfica y artes interdisciplinarias.</p>
                    <p><span className="font-semibold text-foreground">Paola Desentis Vía, Directora General FICLosCabos,</span> cuenta con más de 15 años liderando proyectos en sustentabilidad, industrias creativas, desarrollo cultural y comunicación integral. Su enfoque siempre ha sido promover la colaboración entre sectores públicos, privados y sociedad civil para fortalecer los ecosistemas creativos, culturales y de alto impacto social y ambiental en el país.</p>
                    <p><span className="font-semibold text-foreground">Salvador Amores, Director de Programación,</span> es curador con trayectoria internacional, especializado en cine contemporáneo y narrativas emergentes. Ha colaborado con festivales y espacios de relevancia global, aportando una mirada innovadora y rigurosa a la selección del FICC.</p>
                    <p><span className="font-semibold text-foreground">Ximena Lamadrid, Coordinadora Artística,</span> es actriz y productora mexicana con presencia internacional en cine y televisión. Su experiencia conecta el lenguaje del cine con la música y las artes escénicas, aportando una dimensión interdisciplinaria que enriquece la identidad del FICC 2025.</p>
                    <p>La <span className="font-semibold text-foreground">Escuela Superior de Cine (ESCINE)</span> es el aliado estratégico del Festival. Institución líder en formación audiovisual en México, acompaña la curaduría de la programación y la evaluación de las secciones competitivas, garantizando legitimidad, rigor académico y credibilidad. ESCINE también respalda procesos clave como La Baja Inspira y el Fondo Fílmico Gabriel Figueroa, consolidando al Festival como una plataforma sólida para el talento emergente y la industria audiovisual en México.</p>
                </div>
            </div>
        </section>

        {/* ESCINE Alliance Section */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/Acerca de/FICC_Banner8 (1).png"
                    alt="Alianza con ESCINE"
                    data-ai-hint="film students collaboration"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="font-headline text-4xl sm:text-5xl font-bold">Alianza con <Link href="https://escine.mx/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ESCINE</Link></h2>
                <div className="mt-8 text-lg max-w-3xl mx-auto space-y-4 text-background/90">
                    <p>En esta edición, el FICLosCabos 2025 fortalece su legitimidad y proyección gracias a la alianza con la Escuela Superior de Cine (<Link href="https://escine.mx/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ESCINE</Link>), institución líder en formación audiovisual en México. <Link href="https://escine.mx/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">ESCINE</Link> acompaña la curaduría de las convocatorias y garantiza rigor y credibilidad en los procesos.</p>
                    <p>A través de su participación en La Baja Inspira, potencia la visibilidad de historias vinculadas a la región; en el Fondo Fílmico Gabriel Figueroa, impulsa proyectos en etapa de postproducción conectándolos con la industria global; y con la incorporación de la animación como disciplina emergente, suma un nuevo eje de innovación que prepara al Festival para expandirse hacia lenguajes y nuevas narrativas.</p>
                </div>
            </div>
        </section>

        {/* Navigation Blocks */}
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 space-y-16">
                <div>
                    <div className="text-center mb-10">
                        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-foreground">Descubre el FICLosCabos 2025</h2>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {discoverLinks.map((link) => (
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
                 <div>
                    <div className="text-center mb-10">
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
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
