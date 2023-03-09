import Banner from '../../components/Banner';
import styles from './Informacoes.module.scss';
import faq from './faq.json';
import bannerDesktop from '/Informacoes/info-banner_g.png';
import bannerTablet from '/Informacoes/info-banner_m.png';
import bannerMobile from '/Informacoes/info-banner_s.png';

export default function Informacoes(){
  return (
    <section className={styles.informacoes}>
      <Banner
        src={bannerDesktop}
        alt="público assistindo a um show"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
        titulo="Informações Gerais"
      />
      <h3>Perguntas Frequentes:</h3>
      <div className={styles.faq__cards}>
        {faq.map(faq => (
          <div className={styles.faq__card}>
            <h6>{faq.pergunta}</h6>
            <p>{faq.resposta}</p>
          </div>
        ))}
      </div> 
    
    </section>
  )
}