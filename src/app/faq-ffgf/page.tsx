
'use client';

import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

declare function gtag_report_conversion_subscribe(url?: string): boolean;

const faqData = [
    {
        question: "¿Qué es el Fondo Fílmico Gabriel Figueroa (FFGF)?",
        answer: "El FFGF es una iniciativa del Festival Internacional de Cine de Los Cabos (FICLosCabos) creada en 2012 para impulsar el cine mexicano en etapas de desarrollo, postproducción y coproducción internacional. Más que un programa de apoyo, el Fondo funciona como un puente entre la creación cinematográfica y la industria, conectando a nuevos talentos con productores, distribuidores, inversionistas y festivales globales."
    },
    {
        question: "¿Qué tipo de proyectos pueden aplicar?",
        answer: "Podrán inscribirse largometrajes de ficción o documental con duración superior a 60 minutos, que sean óperas primas o segundas películas producidas o coproducidas por México.\n Los proyectos deben encontrarse en etapa de edición o inicio de postproducción."
    },
    {
        question: "¿Cuál es el proceso de selección?",
        answer: "El proceso consta de tres etapas:\n1. Elegibilidad: revisión técnica y formal de requisitos.\n2. Evaluación cualitativa: visionado doble realizado por el comité académico de ESCINE.\n3. Selección final: jurado de cineastas de renombre define hasta 5 proyectos ganadores."
    },
    {
        question: "¿Cuáles son los criterios de evaluación?",
        answer: "Los criterios de evaluación incluyen:\n- Coherencia artística y calidad técnica.\n- Narrativa y voz autoral.\n- Impacto y resonancia cultural.\n- Diversidad y vínculo con la identidad del Festival."
    },
    {
        question: "¿Qué beneficios ofrece el Fondo?",
        answer: "Los proyectos seleccionados reciben premios en especie, mentorías profesionales y reuniones privadas con empresas líderes de la industria durante el festival. El Fondo también cubre hospedaje, vuelos nacionales redondos y acreditación de industria para un representante por proyecto."
    },
    {
        question: "¿Qué empresas colaboran y qué aportan?",
        answer: "El Fondo se fortalece gracias a aliados estratégicos que contribuyen con apoyos en especie según su especialización:\n- CTT Exp & Rentals: renta de equipo cinematográfico profesional.\n- Chemistry Cine: servicios de postproducción y corrección de color.\n- Shalala: diseño y mezcla de sonido de alta calidad.\n- Artegios: distribución y promoción de documentales.\n- Art Kingdom: diseño gráfico y comunicación visual.\nCada aliado aporta su experiencia para elevar la calidad técnica, artística y comunicacional de los proyectos ganadores."
    },
    {
        question: "¿Hasta cuándo puedo aplicar?",
        answer: "La convocatoria estará abierta del 13 al 31 de octubre de 2025. Durante ese periodo podrás registrar tu proyecto y enviar el material solicitado en las bases disponibles en el sitio oficial del festival."
    },
    {
        question: "¿Cuándo se anuncian los resultados?",
        answer: "Los resultados se publicarán el 15 de noviembre de 2025. Los proyectos seleccionados serán notificados por correo electrónico y en los canales oficiales del FICLosCabos."
    },
    {
        question: "¿Dónde será la premiación?",
        answer: "La premiación oficial del Fondo se realizará del 10 al 14 de diciembre de 2025 en Puerto Los Cabos, en el marco del Festival Internacional de Cine de Los Cabos 2025."
    },
    {
        question: "¿Qué ofrece el Fondo más allá de los premios?",
        answer: "El GFFF brinda visibilidad internacional y acompañamiento profesional a los proyectos seleccionados, además de integrarlos en una red de colaboración entre cineastas, instituciones y empresas que impulsan la industria audiovisual mexicana."
    },
    {
        question: "¿Quién fue Gabriel Figueroa?",
        answer: "Gabriel Figueroa (1907–1997) fue uno de los grandes directores de fotografía del cine mexicano y mundial. Colaboró con Buñuel, Huston y Ford, y fue nominado al Óscar por La noche de la iguana. Su legado de excelencia visual y compromiso artístico inspira la misión del Fondo que lleva su nombre."
    },
];

const finalQuestion = {
    question: "¿Dónde puedo registrar mi proyecto o pedir más información?",
    answer: `Las inscripciones se realizarán a través del sitio oficial del festival.<br/>Contacto: <a href="mailto:comunidadficloscabos@comunicacionlateral.com" class="text-accent hover:underline">comunidadficloscabos@comunicacionlateral.com</a><br/>Más información: <a href="https://festivaldecineloscabos.mx/industria" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">https://festivaldecineloscabos.mx/industria</a>`
};

export default function FaqFfgfPage() {
    const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (typeof gtag_report_conversion_subscribe === 'function') {
        gtag_report_conversion_subscribe('https://forms.gle/2GMvdQ7SyatX1R8w5');
        }
    };
  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />

      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="relative py-20 sm:py-32 bg-primary text-primary-foreground text-center">
            <div className="absolute inset-0 z-0">
                <Image
                src="/Images/FF/Banner_FICC_FondoFilmico.png"
                alt="Banner de Preguntas Frecuentes"
                data-ai-hint="cinema seats empty"
                fill
                className="object-cover"
                />
                <div className="absolute inset-0"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="font-headline text-5xl sm:text-7xl font-bold">Preguntas Frecuentes</h1>
                 <p className="mt-4 text-lg text-primary-foreground/90 mx-auto max-w-2xl">
                    Fondo Fílmico Gabriel Figueroa (FFGF)
                </p>
            </div>
        </section>

        {/* FAQ Content Section */}
        <section className="py-16 sm:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="p-6 sm:p-10 bg-card shadow-xl">
                 <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left font-semibold text-foreground hover:no-underline">{item.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground whitespace-pre-line pt-4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                     <AccordionItem value="item-final">
                        <AccordionTrigger className="text-lg text-left font-semibold text-foreground hover:no-underline">{finalQuestion.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground pt-4">
                           <div dangerouslySetInnerHTML={{ __html: finalQuestion.answer }} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                 <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-headline">
                        <Link href="https://forms.gle/2GMvdQ7SyatX1R8w5" target="_blank" rel="noopener noreferrer" onClick={handleApplyClick}>
                            Aplicar a la convocatoria
                        </Link>
                    </Button>
                </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
