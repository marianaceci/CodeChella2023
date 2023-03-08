import BuyTicketButton from '../../components/BuyTicketButton';
import LineUp from './LineUp';
import styles from './Home.module.scss';
import Banner from '../../components/Banner';
import bannerD from '/home-banner-desktop.png';
import bannerM from '/home-banner-mobile.png';
import bannerT from '/home-banner-tablet.png';

export default function Home() {
  return (
    <>
      <Banner
        src={bannerD}
        alt="foto do brinquedo chapéu mexicano"
        srcsetTablet={bannerT}
        srcsetMobile={bannerM}
      />

      <div className={styles.container}>
        <section className={styles.sobre}>
          <img src='/src/assets/home/sobre.svg' alt='pessoas sorrindo assistindo ao festival' />
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