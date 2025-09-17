
import { notFound } from 'next/navigation';
import Header from '@/components/cabo-cine/header';
import Footer from '@/components/cabo-cine/footer';
import { guestData } from '@/lib/guest-data';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Link as LinkIcon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GuestProfilePage({ params }: { params: { slug: string } }) {
  const guest = guestData.find(g => g.slug === params.slug);

  if (!guest) {
    notFound();
  }

  const SocialIcon = guest.handle && guest.handle.includes('.com') ? LinkIcon : Instagram;

  return (
    <div className="flex flex-col min-h-screen bg-card">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="mb-8">
            <Button variant="ghost" asChild>
                <Link href="/invitados">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a Invitados
                </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-start">
            <div className="md:col-span-2">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl shadow-black/25">
                    <Image
                        src={guest.imgSrc}
                        alt={`Retrato de ${guest.name}`}
                        data-ai-hint={guest.imgHint}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="md:col-span-3">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">{guest.name}</h1>
              <p className="text-muted-foreground mt-8 text-lg leading-relaxed">{guest.bio}</p>
              {guest.handle && guest.handleLink && (
                <div className="mt-8">
                  <Link 
                    href={guest.handleLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 text-accent hover:underline text-lg font-semibold"
                  >
                    <SocialIcon className="h-6 w-6" />
                    <span>{guest.handle}</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return guestData.map((guest) => ({
    slug: guest.slug,
  }));
}
