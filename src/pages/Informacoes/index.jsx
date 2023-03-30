import Banner from "@/components/Banner";
import faqs from "./faq.json";
import { BiDownArrow } from "react-icons/bi";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { InfoSection } from "./style";

export default function Informacoes() {
  return (
    <>
      <Banner blendmode='multiply' />
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
