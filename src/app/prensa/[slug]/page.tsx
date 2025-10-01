
import { notFound } from 'next/navigation';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { pressData } from '@/lib/press-data';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, FolderOpen } from 'lucide-react';
import PressContactForm from '@/components/cabo-cine/press-contact-form';

export default function PressReleasePage({ params }: { params: { slug: string } }) {
  const note = pressData.find(p => p.slug === params.slug);

  if (!note) {
    notFound();
  }

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
                  {note.title}
                </h1>
                <p className="text-muted-foreground mt-4 text-lg">{note.date}</p>
              </div>

              {/* Main Image */}
              <div className="mb-12">
                <Image
                  src={note.imgSrc}
                  alt={note.title}
                  data-ai-hint={note.imgHint}
                  width={1200}
                  height={600}
                  className="rounded-lg shadow-2xl object-cover w-full h-auto"
                />
              </div>

              {/* Post Content */}
              <div 
                className="prose prose-lg lg:prose-xl max-w-none mx-auto text-muted-foreground space-y-6"
                dangerouslySetInnerHTML={{ __html: note.content }}
              />

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
                    <Link href={note.pdfLink} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      PDF
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                     <Link href={note.imagesLink} target="_blank" rel="noopener noreferrer">
                      <FolderOpen className="mr-2 h-5 w-5" />
                      Imágenes
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PressContactForm />

      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return pressData.map((note) => ({
    slug: note.slug,
  }));
}
