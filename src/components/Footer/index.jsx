import logo from './logo-footer.svg';
import { BsWhatsapp, BsTwitch, BsInstagram, BsTwitter } from "react-icons/bs";
import { FooterSection } from './style';

export default function Footer() {
  return (
    <FooterSection>      
      <div className="redes">
        <img src={logo} alt='logo do CodeChella' />
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
  )
}