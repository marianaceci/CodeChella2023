import BuyTicketButton from '../../components/BuyTicketButton';
import LineUp from './LineUp';
import styles from './Home.module.scss';
import Banner from '../../components/Banner';
import bannerDesktop from '/home-banner-desktop.png';
import bannerMobile from '/home-banner-mobile.png';
import bannerTablet from '/home-banner-tablet.png';

export default function Home() {
  return (
    <>
      <Banner
        src={bannerDesktop}
        alt="foto do brinquedo chapéu mexicano"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
      />

      <div className={styles.container}>
        <section className={styles.sobre}>
          <picture>
            <source srcSet='/Home/sobre_s.png' media="(max-width: 768px)" />
            <img src='/Home/sobre_m_g.png' alt='pessoas sorrindo assistindo ao festival' />
          </picture>
          <div className={styles.sobre__descricao}>
            <h3 className={styles.sobre__descricao__titulo}>&lt; 11 e 12 de Março &gt;<br/>Aluródromo de São Paulo</h3>
            <p className={styles.sobre__descricao__texto}>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
            <BuyTicketButton />
          </div>          
        </section>

        <section className={styles.lineup}>
          <h2>\Line-Up\</h2>
        </section>
        
        <LineUp />
        <img className={styles.imagem_home} src='../../../image-home.png' alt='pessoas dançando em festival' />
      </div>
        
      
    </>
  )
}