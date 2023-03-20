import { Link } from 'react-router-dom';
import styles from "./ButtonSubmit.module.scss";
import flecha from './flecha.svg';

export default function ButtonSubmit() {
  return (
    <Link to="/ingresso/qrcode" className={styles.buyTicket}>
      Avançar!
      <img src={flecha} alt="ícone de flecha" />
    </Link>      
  );
}
