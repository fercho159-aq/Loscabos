
import Image from 'next/image';

export default function BeyondTheScreenSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-background flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/cabos/1920/1080"
          alt="Paisaje de Puerto Los Cabos"
          data-ai-hint="puerto los cabos landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="font-headline text-4xl sm:text-5xl font-bold text-accent">
          Beyond the Screen
        </h2>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-background/90 leading-relaxed">
          #BeyondtheScreen expresa la evolución del Festival de un evento de cine hacia una plataforma creativa expandida, donde las historias no se quedan en la pantalla: se viven en proyecciones site-specific, conciertos, instalaciones y encuentros con la comunidad. El mar, el desierto, la arquitectura y la memoria cultural de Baja California Sur se integran al lenguaje del cine para generar narrativas únicas.
        </p>
      </div>
    </section>
  );
}
