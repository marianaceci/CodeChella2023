import BuyTicketButton from "@/components/BuyTicketButton";
import LineUp from "./LineUp";
import Banner from "@/components/Banner";
import { ImagemRodape, SobreSection } from "./style";

export default function Home() {
  return (
    <>
      <Banner blendmode='normal' />

      <SobreSection>
        <div className="imagem-sobre"></div>

        <div className="descricao">
          <h3 className="titulo">
            &lt; 11 e 12 de Março &gt;
            <br />
            Aluródromo de São Paulo
          </h3>
          <p className="texto">
            Hora de programar nossa memória com novas lembranças! Uma nova
            experiência sobre música, linguagens e, claro, tecnologia! Somos um
            festival diverso, com vários artistas e referências. Divirta-se!
          </p>
          <BuyTicketButton texto="Comprar Ingresso" />
        </div>
      </SobreSection>
      <LineUp />

      <ImagemRodape></ImagemRodape>
    </>
  );
}
