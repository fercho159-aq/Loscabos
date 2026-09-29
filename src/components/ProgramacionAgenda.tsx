import type { CSSProperties } from "react";
import Link from "next/link";
import { agenda2026, type AgendaEvent } from "@/lib/agenda-2026-data";
import styles from "./ProgramacionAgenda.module.css";

function AgendaCard({ event }: { event: AgendaEvent }) {
  const schedule = event.startTime
    ? [event.startTime, event.endTime].filter(Boolean).join(" – ")
    : "Horario por confirmar";

  return (
    <article className={styles.card} id={`agenda-${event.id}`}>
      <div className={`${styles.timeRow} ${styles[event.accent]}`}>
        <span className={styles.time}>{schedule}</span>
      </div>
      <h3 className={styles.eventTitle}>
        {event.href ? (
          <Link className={styles.eventLink} href={event.href}>
            {event.title}
          </Link>
        ) : (
          event.title
        )}
      </h3>
      {event.description && (
        <p className={styles.description}>{event.description}</p>
      )}
      <p className={styles.venue}>{event.venue}</p>
      {(event.capacity || event.access) && (
        <p className={styles.metadata}>
          {event.capacity && <span>{event.capacity}</span>}
          {event.access && <span>{event.access}</span>}
        </p>
      )}
      {event.ticketUrl && (
        <a
          className={styles.ticketLink}
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Boletos<span className={styles.srOnly}> para {event.title}</span>
          <span aria-hidden="true">↗</span>
        </a>
      )}
    </article>
  );
}

export default function ProgramacionAgenda() {
  return (
    <section
      className={styles.agenda}
      id="agenda-por-dia"
      aria-label="Programación por día"
    >
      {agenda2026.map((day) => (
        <details className={styles.day} key={day.id} open>
          <summary
            className={styles.dayToggle}
            style={{ "--agenda-day-color": day.color } as CSSProperties}
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
            {day.rows.map((row, index) => (
              <div className={styles.row} key={`${day.id}-${index}`}>
                {row.map((event) => (
                  <AgendaCard event={event} key={event.id} />
                ))}
              </div>
            ))}
          </div>
        </details>
      ))}
    </section>
  );
}
