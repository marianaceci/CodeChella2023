import Banner from '../../components/Banner';
import Form from './Form';
import styles from './SeuIngresso.module.scss';
import bannerDesktop from '/Ingresso/ingresso-banner_g.png';
import bannerTablet from '/Ingresso/ingresso-banner_m.png';
import bannerMobile from '/Ingresso/ingresso-banner_s.png';

export default function IngressoForm(){
  return (
    <section className={styles.ingresso}>        
      <Banner
        src={bannerDesktop}
        alt="pessoas dançando e comemorando"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
        titulo="Garanta seu Ingresso"
      />
      <h3>Preencha o formulário a seguir:</h3>
      <Form />
    </section>
  )
}