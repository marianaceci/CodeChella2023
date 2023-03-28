import Banner from "@/components/Banner";
import faqs from "./faq.json";
import bannerDesktop from "/Informacoes/info-banner_g.png";
import bannerTablet from "/Informacoes/info-banner_m.png";
import bannerMobile from "/Informacoes/info-banner_s.png";
import { BiDownArrow } from "react-icons/bi";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { InfoSection } from "./style";

export default function Informacoes() {
  return (
    <>
      <Banner
        srcMobile={bannerMobile}
        alt="público assistindo a um show"
        srcTablet={bannerTablet}
        srcDesktop={bannerDesktop}
        titulo="Informações Gerais"
      />
      <InfoSection>
        <h3 className="titulo">Perguntas Frequentes:</h3>
        <Accordion className="cards">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              header={
                <>
                  <h6>{faq.pergunta}</h6>
                  <BiDownArrow />
                </>
              }
            >
              <p>{faq.resposta}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </InfoSection>
    </>
  );
}
