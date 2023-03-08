import Banner from "../../components/Banner";
import styles from "./Experiencia.module.scss";
import experiencias from "./experiencias.json";
import bannerDesktop from '../../../public/Experiencia/experiencia-banner_g.png';
import bannerTablet from '../../../public/Experiencia/experiencia-banner_m.png';
import bannerMobile from '../../../public/Experiencia/experiencia-banner_s.png';

export default function Experiencia() {
  return (
    <section className={styles.exp}>
      <Banner
        src={bannerDesktop}
        alt="Pessoas dançando"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
      />

      {experiencias.map((experiencia) => (
        <div className={styles.exp__card}>
          <picture>
            <source srcSet={experiencia.source} media="(max-width: 768px)" />
            <img src={experiencia.foto} alt={experiencia.alt} />
          </picture>
          <div className={styles.exp__card__texto}>
            <h6>{experiencia.titulo}</h6>
            <p>{experiencia.paragrafo}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
