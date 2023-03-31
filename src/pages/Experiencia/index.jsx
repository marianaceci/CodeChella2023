import Banner from "@/components/Banner";
import { Experience } from "./style";
import experiencias from "./experiencias.json";
import bannerImage from '/banners/experiencia-banner.png';

export default function Experiencia() {
  return (
    <>
      <Banner
        blendmode='multiply'
        titulo='A Experiência'
        bannerImage={bannerImage}
      />
      <Experience>
        {experiencias.map((experiencia, index) => (
          <div className="card" key={index}>
            <img src={experiencia.source} alt={experiencia.alt} />
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
