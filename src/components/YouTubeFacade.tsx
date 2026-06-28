"use client";

import { useState } from "react";

interface Props {
  id: string;
  title: string;
}

/**
 * Fachada ligera de YouTube: muestra la miniatura + botón de play y solo
 * carga el iframe (pesado) al hacer click. Evita cargar el reproductor de
 * YouTube en cada visita a la página.
 */
export default function YouTubeFacade({ id, title }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="edicion-video-iframe"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className="edicion-video-facade"
      onClick={() => setPlaying(true)}
      aria-label={`Reproducir: ${title}`}
      style={{
        backgroundImage: `url('https://i.ytimg.com/vi/${id}/maxresdefault.jpg')`,
      }}
    >
      <span className="edicion-video-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="34" height="34">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="edicion-video-label">Reproducir recap</span>
    </button>
  );
}
