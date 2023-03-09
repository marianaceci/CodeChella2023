import styles from "./ButtonSubmit.module.scss";
import flecha from './flecha.svg';

export default function ButtonSubmit() {
  return (
    <button className={styles.buyTicket} type="submit">
      Avançar!
      <img src={flecha} alt="ícone de flecha" />
    </button>      
  );
}
