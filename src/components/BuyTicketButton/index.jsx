import { BsFillTicketDetailedFill } from "react-icons/bs";
import { BotaoIngresso } from "./style";

export default function BuyTicketButton({texto}) {
  return (
      <BotaoIngresso>{texto}
        <BsFillTicketDetailedFill />
      </BotaoIngresso>
  );
}
