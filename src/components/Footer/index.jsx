import styles from './Footer.module.scss';
import logo from './logo-footer.svg';
import { BsWhatsapp, BsTwitch, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.footer__redes}>
        <img src={logo} alt='logo do CodeChella' />
        <div className={styles.footer__redes__icons}>
          <span>Acesse nossas redes: </span>
          <ul>
            <BsWhatsapp />
            <BsTwitch />
            <BsInstagram />
            <BsTwitter />
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