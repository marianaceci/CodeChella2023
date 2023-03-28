import Banner from "../../components/Banner";
import detalhes from "./detalhes.json";
import bannerAll from "/Setores/setores-banner_s_m_g.png";
import { SetoresSection } from "./style";

export default function Setores() {
  return (
    <>
      <Banner
        srcMobile={bannerAll}
        alt="céu azul"
        srcTablet={bannerAll}
        srcDesktop={bannerAll}
        titulo="Mapa de Setores"
      />

      <SetoresSection>
        <div className="mapa">
          <img src="/Setores/mapa-setores.png" alt="mapa de setores" />
          <div className="legenda">
            <h6>Legenda</h6>
            <ul>
              <li>Pista Premium</li>
              <li>Pista Comum</li>
              <li>Cadeiras térreo</li>
              <li>Cadeiras superiores</li>
              <li>Rampas</li>
            </ul>
          </div>
        </div>

        <div className="detalhes">
          <h5>Mais detalhes sobre os setores</h5>
          <div className="cards">
            {detalhes.map((detalhe, index) => (
              <div className="card" key={index}>
                <img src={detalhe.foto} alt={detalhe.alt} />
                <h6>{detalhe.titulo}</h6>
                <p>{detalhe.paragrafo}</p>
              </div>
            ))}
          </div>
        </div>
      </SetoresSection>
    </>
  );
}
