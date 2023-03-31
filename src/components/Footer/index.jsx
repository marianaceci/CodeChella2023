import { BsWhatsapp, BsTwitch, BsInstagram, BsTwitter } from "react-icons/bs";
import { FooterContainer, FooterSection } from "./style";
import { useTheme } from "styled-components";

export default function Footer() {
  const theme = useTheme();
  const logo = theme.logo;

  return (
    <FooterContainer>
      <FooterSection>
        <div className="redes">
          <img src={logo} alt="logo do CodeChella" />
          <div className="icons">
            <span>Acesse nossas redes: </span>
            <ul>
              <BsWhatsapp />
              <BsTwitch />
              <BsInstagram />
              <BsTwitter />
            </ul>
          </div>
        </div>

        <div className="autor">
          <p>Desenvolvido por Alura.</p>
          <p>Projeto fictício sem fins comerciais.</p>
        </div>
      </FooterSection>
    </FooterContainer>
  );
}
