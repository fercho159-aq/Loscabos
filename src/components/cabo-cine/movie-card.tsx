import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Bookmark, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';

type MovieCardProps = {
  title: string;
  genre: string;
  synopsis: string;
  imgSrc: string;
  imgHint: string;
};

export function MovieCard({ title, genre, synopsis, imgSrc, imgHint }: MovieCardProps) {
  return (
    <Card className="w-full overflow-hidden group relative border-none shadow-xl shadow-black/20">
      <CardContent className="p-0">
        <div className="aspect-[2/3] relative">
          <Image
            src={imgSrc}
            alt={`Póster de la película ${title}`}
            data-ai-hint={imgHint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-primary/80 mb-4 line-clamp-6">{synopsis}</p>
            <Button variant="secondary" size="sm" className="w-full group/button">
              <Bookmark className="mr-2 h-4 w-4 text-secondary-foreground transition-colors group-hover/button:text-accent" />
              Guardar en "Mi Festival"
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="font-bold text-lg text-primary truncate">{title}</h3>
            <Badge variant="secondary" className="mt-1">{genre}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
