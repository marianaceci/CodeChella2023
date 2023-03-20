import { Link } from 'react-router-dom';
import styles from "./ButtonSubmit.module.scss";
import flecha from './flecha.svg';

export default function ButtonSubmit({handleClick}) {
  return (
    <Link
      to="/ingresso/qrcode"
      className={styles.buyTicket}
      onClick={handleClick}
    >
      Avançar!
      <img src={flecha} alt="ícone de flecha" />
    </Link>      
  );
}
