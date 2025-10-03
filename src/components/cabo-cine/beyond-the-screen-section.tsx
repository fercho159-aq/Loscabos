
import Image from 'next/image';

export default function BeyondTheScreenSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-background">
       <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Main/bg1.png"
          alt="Experiencia inmersiva en el festival"
          data-ai-hint="immersive festival experience"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-card max-w-6xl mx-auto p-8 sm:p-12 rounded-lg shadow-xl h-[50vh] flex items-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="text-center md:text-left">
                    <h2 className="font-headline text-5xl md:text-6xl text-accent tracking-wider">
                    BEYOND THE SCREEN
                    </h2>
                </div>
                <div className="space-y-4 text-lg">
                    <p className='text-foreground font-medium'>
                    #BeyondtheScreen expresa la evolución del Festival de un evento de cine hacia una plataforma creativa expandida, donde las historias no se quedan en la pantalla: se viven en proyecciones site-specific, conciertos, instalaciones y encuentros con la comunidad.
                    </p>
                    <p className='text-muted-foreground'>
                    El mar, el desierto, y la memoria cultural de Baja California Sur se integran al lenguaje del cine para generar narrativas únicas.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
