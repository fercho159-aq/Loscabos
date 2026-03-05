import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ElFestival() {
  return (
    <>
      <Navbar />

      {/* Banner with image */}
      <section className="festival-banner">
        <div className="festival-banner-img">
          <Image
            src="/images/webpdf/img-120.png"
            alt="Festival de Cine Los Cabos"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </section>

      {/* El Festival text */}
      <section className="festival-text">
        <div className="festival-text-container">
          <h1 className="festival-text-title">El Festival</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>
      </section>

      {/* Four colored cells */}
      <section className="quad-grid">
        <div className="quad-cell cell-blue">
          <h3>Plataforma Cultural<br />Anclada en<br />Puerto Los Cabos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="quad-cell cell-lime">
          <h3>Plataformas de Impulso<br />a la Industria<br />del Cine</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="quad-cell cell-peach">
          <h3>Programaci&oacute;n<br />Con Pulso<br />Global</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="quad-cell cell-blush">
          <h3>Comunidad Creativa y<br />Ecosistema de<br />Influencia</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
      </section>

      {/* Location hero with navy band */}
      <section className="location-section">
        <Image
          src="/images/hero.png"
          alt="Puerto Los Cabos"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="location-content">
          <h2 className="location-title">Puerto Los Cabos,<br />B.C.S</h2>
          <div className="location-band">
            <div className="location-band-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                accumsan lacus vel facilisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Desert landscape */}
      <section className="desert-section">
        <Image
          src="/images/webpdf/img-089.png"
          alt="Paisaje desertico de Baja California Sur"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>

      <Footer />
    </>
  );
}
