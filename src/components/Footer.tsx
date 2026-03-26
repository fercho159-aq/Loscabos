"use client";

import Image from "next/image";

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
      {/* Footer menu */}
      <nav className="footer-menu">
        <a href="/el-festival">El Festival</a>
        <a href="/la-baja-inspira">La Baja Inspira</a>
        <a href="/ffgf">Fondo F&iacute;lmico Gabriel Figueroa</a>
        <a href="/fon">Frequencies of Now</a>
        <a href="/programacion">Programaci&oacute;n</a>
        <a href="/prensa">Prensa</a>
        <a href="/comunidad">&Uacute;nete a la comunidad</a>
      </nav>

      {/* Logo */}
      <div className="footer-logo-section">
        <Image
          src="/images/logo-light.png"
          alt="Festival Internacional de Cine y Creatividad de Los Cabos - 14a Edición"
          width={280}
          height={100}
          style={{ objectFit: "contain" }}
        />
      </div>
    </footer>
  );
}
