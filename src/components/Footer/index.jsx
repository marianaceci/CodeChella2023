import styles from './Footer.module.scss';
import logo from './icons/logo-footer.svg';
import icone1 from './icons/icone1.svg';
import icone2 from './icons/icone2.svg';
import icone3 from './icons/icone3.svg';
import icone4 from './icons/icone4.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footer__imgs}>
        <img src={logo} alt='logo do CodeChella' />
        <div className={styles.footer__imgs__redes}>
          <span>Acesse nossas redes: </span>
          <ul>
            <img src={icone1} alt='whatsapp' />
            <img src={icone2} alt='twitch' />
            <img src={icone3} alt='instagram' />
            <img src={icone4} alt='twitter' />
          </ul>    
        </div>
      </div>

      <div className={styles.footer__autor}>
        <p>Desenvolvido por Alura.</p>
        <p>Projeto fictício sem fins comerciais.</p> 
      </div>
    </footer>
  )
}