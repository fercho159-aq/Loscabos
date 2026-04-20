"use client";

export function Newsletter() {
  return (
    <form
      action="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe/post?u=24bf46409995ffe6e8ad030da&amp;id=12e1ce1334&amp;f_id=003393e0f0"
      method="post"
      target="_blank"
      className="newsletter"
    >
      <label htmlFor="email-input">Suscr&iacute;bete a nuestro Newsletter:</label>
      <input
        id="email-input"
        type="email"
        name="EMAIL"
        placeholder="tucorreo@ejemplo.com"
        required
      />
      <input type="hidden" name="tags" value="2323599" />
      <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
        <input type="text" name="b_24bf46409995ffe6e8ad030da_12e1ce1334" tabIndex={-1} defaultValue="" />
      </div>
      <button type="submit">Suscribirse</button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* Logo */}
      <div className="footer-logo-section">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/FICCLosCabos_2026_Brandbook.svg"
          alt="Festival Internacional de Cine y Creatividad de Los Cabos - 14a Edición"
          width={280}
          height={132}
          loading="lazy"
          decoding="async"
          style={{ width: "min(280px, 80vw)", height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Menu links */}
      <div className="footer-columns">
        <div className="footer-col">
          <ul>
            <li><a href="/el-festival">El Festival</a></li>
            <li><a href="/la-baja-inspira">La Baja Inspira</a></li>
            <li><a href="/ffgf">Fondo F&iacute;lmico Gabriel Figueroa</a></li>
            <li><a href="/programacion">Programaci&oacute;n</a></li>
            <li><a href="/prensa">Prensa</a></li>
            <li><a href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334" target="_blank" rel="noopener noreferrer">&Uacute;nete a la comunidad</a></li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="footer-social-bar">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988787 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p className="footer-copy">2026 &copy; CaboCine. Todos los Derechos Reservados.</p>
      </div>

    </footer>
  );
}
