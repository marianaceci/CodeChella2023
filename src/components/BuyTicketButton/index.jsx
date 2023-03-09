import styles from "./BuyTicket.module.scss";
import icon from './icon-ticket.svg';

export default function BuyTicketButton({texto}) {
  return (
      <a className={styles.buyTicket}>{texto}
        <img src={icon} alt="ícone de ingresso" />
      </a>
  );
}
