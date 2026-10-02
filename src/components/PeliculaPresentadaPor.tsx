import Image from "next/image";
import styles from "./PeliculaPresentadaPor.module.css";

export default function PeliculaPresentadaPor({ name }: { name: "Filma Jalisco" }) {
  return (
    <div className={styles.credit}>
      <Image src="/images/aliados/2026/07-filma-jalisco.png" alt={`Presentada por ${name}`} width={667} height={334} sizes="180px" className={styles.logo} />
    </div>
  );
}
