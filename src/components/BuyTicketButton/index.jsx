import styles from "./BuyTicket.module.scss";

export default function BuyTicketButton() {
  return (
      <a className={styles.buyTicket}>Comprar ingresso!
        <img src="/src/components/BuyTicketButton/icon-ticket.svg" alt="ícone de ingresso" />
      </a>
  );
}
