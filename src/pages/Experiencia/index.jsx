import Banner from "../../components/Banner";
import styles from "./Experiencia.module.scss";
import experiencias from "./experiencias.json";
import banner from "/experiencia-banner.png";

export default function Experiencia() {
  return (
    <section className={styles.exp}>
      <Banner src={banner} alt="Pessoas dançando" />

      {experiencias.map((experiencia) => (
        <div className={styles.exp__card}>
          <img src={experiencia.foto} alt={experiencia.alt} />
          <div className={styles.exp__card__texto}>
            <h6>{experiencia.titulo}</h6>
            <p>{experiencia.paragrafo}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
