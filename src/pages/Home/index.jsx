import BuyTicketButton from '../../components/BuyTicketButton';
import LineUp from './LineUp';
import styles from './Home.module.scss';
import Banner from '../../components/Banner';
import bannerDesktop from '/Home/home-banner_g.png';
import bannerTablet from '/Home/home-banner_m.png';
import bannerMobile from '/Home/home-banner_s.png';
import sobreMobile from '/Home/sobre_s.png';
import sobreTD from '/Home/sobre_m_g.png';
import rodapeMobile from '/Home/bottom_s.png';
import rodapeTablet from '/Home/bottom_m.png';
import rodapeDesktop from '/Home/bottom_g.png';

export default function Home() {
  return (
    <>
      <Banner
        srcMobile={bannerMobile}
        alt="foto do brinquedo chapéu mexicano"
        srcsetTablet={bannerTablet}
        srcsetDesktop={bannerDesktop}
        titulo="Boas-vindas ao #CodeChella2023!"
      />

      <div className={styles.container}>
        <section className={styles.sobre}>
          <picture className={styles.sobre__picture}>
            <source srcSet={sobreTD} media="(min-width: 768px)" />
            <img src={sobreMobile} alt='pessoas sorrindo assistindo ao festival' />
          </picture>
          <div className={styles.sobre__descricao}>
            <h3 className={styles.sobre__descricao__titulo}>&lt; 11 e 12 de Março &gt;<br/>Aluródromo de São Paulo</h3>
            <p className={styles.sobre__descricao__texto}>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
            <BuyTicketButton texto="Comprar Ingresso" />
          </div>          
        </section>
               
        <LineUp />

        <picture className={styles.rodape__picture}>
          <source srcSet={rodapeDesktop} media="(min-width: 1440px)" />
          <source srcSet={rodapeTablet} media="(min-width: 768px)" />
          <img src={rodapeMobile} alt='pessoas dançando em festival' />        
        </picture>
      </div>
    </>
  )
}