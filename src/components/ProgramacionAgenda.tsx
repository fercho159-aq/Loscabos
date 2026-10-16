"use client";

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import {
  agenda2026,
  agendaSectionCards2026,
  type AgendaCardDecoration,
  type AgendaEvent,
  type AgendaLine,
  type AgendaSectionCard,
} from "@/lib/agenda-2026-data";
import styles from "./ProgramacionAgenda.module.css";

function RichLines({
  lines,
  softBreakClassName,
}: {
  lines: AgendaLine[];
  /** Clase del <br> de los saltos que solo aplican en escritorio. */
  softBreakClassName: string;
}) {
  return lines.map((segments, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {segments.map((segment, segmentIndex) =>
        segment.softBreak ? (
          <br className={softBreakClassName} key={segmentIndex} />
        ) : segment.italic ? (
          <em key={segmentIndex}>{segment.text}</em>
        ) : (
          <Fragment key={segmentIndex}>{segment.text}</Fragment>
        ),
      )}
    </Fragment>
  ));
}

// Descripción con los saltos del PDF ("\n"): en escritorio cada renglón
// corta exactamente ahí; en móvil el <br> se oculta y el espacio los une.
function Description({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <p
      className={`${styles.description} ${lines.length > 1 ? styles.descriptionLines : ""}`}
    >
      {lines.map((descriptionLine, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <>
              {" "}
              <br className={styles.eventBreak} />
            </>
          )}
          {descriptionLine}
        </Fragment>
      ))}
    </p>
  );
}

function AgendaItem({ event }: { event: AgendaEvent }) {
  const title: ReactNode = (
    <RichLines lines={event.title} softBreakClassName={styles.eventBreak} />
  );
  const multilineTitle =
    event.title.length > 1 || event.title.some((segments) => segments.some((s) => s.softBreak));

  return (
    <article
      className={`${styles.event} ${multilineTitle ? styles.eventMultiline : ""}`}
      id={`agenda-${event.id}`}
    >
      <p className={styles.time}>{event.time}</p>
      <h3
        className={`${styles.eventTitle} ${multilineTitle ? styles.eventTitleMultiline : ""}`}
        style={event.titleLetterSpacing ? { letterSpacing: event.titleLetterSpacing } : undefined}
      >
        {event.href ? (
          <Link className={styles.eventLink} href={event.href}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      {event.subtitle && <p className={styles.subtitle}>{event.subtitle}</p>}
      {event.description && <Description text={event.description} />}
      {event.location && <p className={styles.location}>{event.location}</p>}
      {!event.location && event.locationRemoved && (
        <p className={`${styles.location} ${styles.locationGap}`} aria-hidden="true">
          {"\u00A0"}
        </p>
      )}
    </article>
  );
}

// Figuras decorativas de las tarjetas de sección, en el sistema de
// coordenadas del artboard del PDF (960 × 438 pt).
const decorations: Record<AgendaCardDecoration, ReactNode> = {
  diamonds: (
    <g fill="none" stroke="#EDE6DC" strokeOpacity="0.07" strokeWidth="12">
      <path d="M0 0 480 438M0 438 480 0M480 0 960 438M480 438 960 0" />
    </g>
  ),
  hexagons: (
    <g fill="none" stroke="#D67D5C" strokeOpacity="0.16" strokeWidth="14">
      {[0, 237, 474, 711].map((x) => (
        <path
          key={x}
          d={`M${x} 214 L${x + 118} -20 L${x + 362} -20 L${x + 480} 214 L${x + 362} 458 L${x + 118} 458 Z`}
        />
      ))}
    </g>
  ),
  ellipses: (
    <g fill="none" stroke="#EDE6DC" strokeOpacity="0.05" strokeWidth="14">
      {[194, 384, 574, 766].map((cx) => (
        <ellipse key={cx} cx={cx} cy="452" rx="187" ry="445" />
      ))}
    </g>
  ),
  arc: (
    <circle
      cx="480"
      cy="480"
      r="471"
      fill="none"
      stroke="#A0C4D0"
      strokeOpacity="0.16"
      strokeWidth="14"
    />
  ),
  chevrons: (
    <g fill="none" stroke="#0A1E23" strokeOpacity="0.1" strokeWidth="12">
      <path d="M0 0 960 224M0 225 960 -8M0 227 960 438M0 431 960 232" />
    </g>
  ),
  star: (
    <g fill="#8FA79D" fillOpacity="0.1">
      <rect x="0" y="211.06" width="960" height="17.36" />
      <rect x="471.4" y="0" width="15.71" height="438" />
      <polygon points="142.93,0.22 172.96,0.22 818.01,437.6 787.98,437.6" />
      <polygon points="787.98,0.22 818.02,0.22 172.96,437.6 142.93,437.6" />
    </g>
  ),
};

// En el PDF estas dos figuras se dibujan encima del texto.
const decorationsOverText: AgendaCardDecoration[] = ["hexagons", "arc"];

function SectionCard({ card }: { card: AgendaSectionCard }) {
  const overText = decorationsOverText.includes(card.decoration);

  return (
    <article
      className={styles.card}
      id={`agenda-seccion-${card.id}`}
      style={{ "--card-bg": card.bg, "--card-text": card.text } as CSSProperties}
    >
      <svg
        className={`${styles.cardDecoration} ${overText ? styles.cardDecorationOver : ""}`}
        viewBox="0 0 960 438"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
        focusable="false"
      >
        {decorations[card.decoration]}
      </svg>
      <div className={styles.cardBody}>
        <h3
          className={`${styles.cardTitle} ${card.title.length === 1 ? styles.cardTitleSingle : ""}`}
        >
          <RichLines lines={card.title} softBreakClassName={styles.cardBreak} />
        </h3>
        <p className={styles.cardLine}>{card.time}</p>
        <p className={`${styles.cardLine} ${styles.cardLocation}`}>{card.location}</p>
        <p className={styles.cardLine}>
          <RichLines lines={card.description} softBreakClassName={styles.cardBreak} />
        </p>
        <p className={`${styles.cardLine} ${styles.cardAccess}`}>{card.access}</p>
      </div>
    </article>
  );
}

export default function ProgramacionAgenda() {
  const [openDayId, setOpenDayId] = useState<string | null>(agenda2026[0]?.id ?? null);
  // Al abrir un día se cierra el anterior; si ese era largo, el encabezado
  // recién abierto puede quedar arriba, fuera de pantalla. Lo regresamos.
  const toggleRefs = useRef(new Map<string, HTMLElement>());
  const pendingScrollId = useRef<string | null>(null);

  useEffect(() => {
    const id = pendingScrollId.current;
    pendingScrollId.current = null;
    if (!id || openDayId !== id) return;
    const toggle = toggleRefs.current.get(id);
    if (!toggle) return;
    const top = toggle.getBoundingClientRect().top;
    if (top >= 0) return;
    // Salto inmediato (el scroll suave global se cancela con el cambio de
    // altura); scroll-margin-top deja libre el navbar fijo.
    const margin = parseFloat(getComputedStyle(toggle).scrollMarginTop) || 0;
    window.scrollTo({ top: window.scrollY + top - margin, behavior: "instant" });
  }, [openDayId]);

  return (
    <section
      className={styles.agenda}
      id="agenda-por-dia"
      aria-label="Programación por día"
    >
      {agenda2026.map((day) => (
        <details className={styles.day} key={day.id} open={openDayId === day.id}>
          <summary
            className={styles.dayToggle}
            ref={(node) => {
              if (node) toggleRefs.current.set(day.id, node);
              else toggleRefs.current.delete(day.id);
            }}
            onClick={(event) => {
              event.preventDefault();
              pendingScrollId.current = day.id;
              setOpenDayId((current) => (current === day.id ? null : day.id));
            }}
          >
            <h2 className={styles.dayHeading}>
              <span className={styles.dayLabel}>{day.label}</span>
              <svg
                className={styles.chevron}
                width="22"
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="m3 3 8 7 8-7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h2>
          </summary>
          <div className={styles.dayContent}>
            {day.blocks.map((block, index) => (
              <div
                className={styles.block}
                key={`${day.id}-${index}`}
                style={
                  {
                    "--block-bg": block.bg,
                    "--block-text": block.text,
                    "--block-rule": block.rule,
                    // Columna de 1694 px del artboard; algunas bandas del PDF
                    // la corren unos píxeles a la izquierda.
                    "--block-pad-left": `${(block.x ?? 113) / 19.2}cqw`,
                    "--block-pad-right": `${(1920 - 1694 - (block.x ?? 113)) / 19.2}cqw`,
                  } as CSSProperties
                }
              >
                <div className={styles.blockInner}>
                  {block.events.map((event) => (
                    <AgendaItem event={event} key={event.id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      ))}

      <div className={styles.cards} aria-label="Programas del festival" role="group">
        {agendaSectionCards2026.map((card) => (
          <SectionCard card={card} key={card.id} />
        ))}
      </div>
    </section>
  );
}
