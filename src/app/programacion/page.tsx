
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import Image from 'next/image';

export default function ProgramacionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center pt-20">
        <section className="py-20 sm:py-28 text-center">
            <div className="container mx-auto px-4 flex flex-col items-center gap-8">
                <div>
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-accent">
                        La programación oficial del FICLosCabos 2025 será anunciada próximamente.
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Muy pronto revelaremos las películas, encuentros y experiencias que marcarán esta edición.
                    </p>
                </div>
                <div className="w-full max-w-4xl">
                     <Image 
                        src="https://picsum.photos/seed/program-soon/1200/600"
                        alt="Próximamente"
                        data-ai-hint="cinema curtain stage"
                        width={1200}
                        height={600}
                        className="rounded-lg shadow-2xl object-cover w-full h-auto"
                    />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
