import styles from "./BuyTicket.module.scss";
import { BsFillTicketDetailedFill } from "react-icons/bs";

export default function BuyTicketButton({texto}) {
  return (
      <a className={styles.buyTicket}>{texto}
        <BsFillTicketDetailedFill />
      </a>
  );
}
