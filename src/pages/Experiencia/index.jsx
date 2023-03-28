import Banner from "../../components/Banner";
import { Experience } from "./style";
import experiencias from "./experiencias.json";
import bannerDesktop from "/Experiencia/bannerG.png";
import bannerTablet from "/Experiencia/bannerM.png";
import bannerMobile from "/Experiencia/bannerS.png";
import {variaveis} from "@/styles/variaveis";

export default function Experiencia() {
  return (
    <>
      <Banner
        srcMobile={bannerMobile}
        alt="Pessoas dançando"
        srcTablet={bannerTablet}
        srcDesktop={bannerDesktop}
        titulo="A Experiência"
      />

      <Experience>
        {experiencias.map((experiencia, index) => (
          <div className="card " key={index}>
            <picture>
              <source srcSet={experiencia.source} media={`(min-width: ${variaveis.breakpoints.tablet})`} />
              <img src={experiencia.foto} alt={experiencia.alt} />
            </picture>
            <div className="texto">
              <h6>{experiencia.titulo}</h6>
              <p>{experiencia.paragrafo}</p>
            </div>
          </div>
        ))}
      </Experience>
    </>
  );
}
