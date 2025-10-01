
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Button } from '@/components/ui/button';
import { Download, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PrensaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Post Header */}
              <div className="text-center mb-12">
                <p className="text-accent font-semibold mb-2">Comunicado de Prensa</p>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                  El Festival Internacional de Cine de Los Cabos Anuncia su 13ª Edición
                </h1>
                <p className="text-muted-foreground mt-4 text-lg">15 de Agosto, 2024</p>
              </div>

              {/* Main Image */}
              <div className="mb-12">
                <Image
                  src="https://picsum.photos/seed/press-release/1200/600"
                  alt="Imagen principal del comunicado"
                  data-ai-hint="festival announcement stage"
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-2xl object-cover w-full h-auto"
                />
              </div>

              {/* Post Content */}
              <div className="prose prose-lg lg:prose-xl max-w-none mx-auto text-muted-foreground space-y-6">
                <p>
                  El Festival Internacional de Cine de Los Cabos (FICLosCabos) se complace en anunciar las fechas de su 13ª edición, que se llevará a cabo del <strong>10 al 14 de diciembre de 2025</strong> en el espectacular destino de Puerto Los Cabos. Este año, el festival se transforma bajo el lema <strong>#BeyondTheScreen</strong>, expandiendo su visión para convertirse en una plataforma creativa multidisciplinaria.
                </p>
                <p>
                  "Estamos emocionados de llevar el festival más allá de la pantalla", comentó el director del festival. "Esta edición no solo celebrará lo mejor del cine independiente, sino que también integrará música, arte digital, diseño y gastronomía, creando una experiencia cultural inmersiva única en el cruce del desierto y el mar".
                </p>
                <blockquote className="border-l-4 border-accent pl-6 italic text-foreground">
                  "El cine es el corazón del festival, pero #BeyondTheScreen es nuestra invitación a vivir las historias en cada rincón de este paraíso".
                </blockquote>
                <p>
                  La programación completa, así como los invitados especiales y las galas, serán anunciados en los próximos meses. El festival continuará con sus exitosas iniciativas de industria como el Fondo Fílmico Gabriel Figueroa y La Baja Inspira, además de inaugurar una nueva sección competitiva dedicada a la Animación.
                </p>
              </div>

              {/* Download Section */}
              <div className="mt-16 p-8 bg-card rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold font-headline text-foreground">Recursos para Prensa</h3>
                  <p className="text-muted-foreground mt-1">
                    Descarga el comunicado oficial en PDF y accede a nuestra carpeta de imágenes en alta resolución.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      PDF
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                     <Link href="#" target="_blank" rel="noopener noreferrer">
                      <FolderOpen className="mr-2 h-5 w-5" />
                      Imágenes
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
