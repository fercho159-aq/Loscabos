import { Fragment, type ReactNode } from "react";

// Los títulos de la programación marcan en itálicas el nombre de una charla o
// película con `*…*`, igual que en el documento del cliente.

/** Pinta los tramos entre asteriscos como <em>. */
export function withItalics(text: string): ReactNode {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : <Fragment key={i}>{part}</Fragment>,
  );
}

/** Quita los asteriscos para usos de texto plano (metadata, alt). */
export function plainText(text: string): string {
  return text.replaceAll("*", "");
}
