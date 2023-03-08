import Banner from '../../components/Banner';
import styles from './Setores.module.scss';
import detalhes from './detalhes.json';
import bannerDesktop from '/Setores/setores-banner_g.png';
import bannerTablet from '/Setores/setores-banner_m.png';
import bannerMobile from '/Setores/setores-banner_s.png';


export default function Setores(){
  return (
    <section>      
      <Banner
        src={bannerDesktop}
        alt="céu azul"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
      />

      <div className={styles.mapa}>
        <img src="/mapa-setores.png" alt="mapa de setores" />
        <div className={styles.mapa__legenda}>
          <h6>Legenda</h6>
          <ul>
            <li>Pista Premium</li>
            <li>Pista Comum</li>
            <li>Cadeiras térreo</li>
            <li>Cadeiras superiores</li>
            <li>Rampas</li>
          </ul>
        </div>
      </div>

      <div className={styles.detalhes}>
        <h5>Mais detalhes sobre os setores</h5>
        <div className={styles.detalhes__cards}>
          {detalhes.map(detalhe => (
            <div className={styles.detalhes__card}>
              <img src={detalhe.foto} alt={detalhe.alt} />
              <h6>{detalhe.titulo}</h6>
              <p>{detalhe.paragrafo}</p>
            </div>
          ))}
        </div>
         
      </div>
    </section>
  )
}