import BuyTicketButton from '../../components/BuyTicketButton';
import LineUp from './LineUp';
import styles from './Home.module.scss';
import Banner from '../../components/Banner';
import bannerDesktop from '/Home/home-banner_g.png';
import bannerTablet from '/Home/home-banner_m.png';
import bannerMobile from '/Home/home-banner_s.png';

export default function Home() {
  return (
    <>
      <Banner
        src={bannerDesktop}
        alt="foto do brinquedo chapéu mexicano"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
        titulo="Boas-vindas ao #CodeChella2023!"
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
            <BuyTicketButton texto="Comprar Ingresso" />
          </div>          
        </section>

        <section className={styles.lineup}>
          <h2>\Line-Up\</h2>
        </section>
        
        <LineUp />
        <picture>
          <source srcSet='/Home/bottom_s.png' media="(max-width: 768px)" />
          <source srcSet='/Home/bottom_m.png' media="(min-width: 768px) and (max-width: 1024px)" />
          <img className={styles.imagem_home} src='/Home/bottom_g.png' alt='pessoas dançando em festival' />
        </picture>
      </div>
        
      
    </>
  )
}