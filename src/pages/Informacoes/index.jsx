import Banner from '../../components/Banner';
import styles from './Informacoes.module.scss';
import faqs from './faq.json';
import bannerDesktop from '/Informacoes/info-banner_g.png';
import bannerTablet from '/Informacoes/info-banner_m.png';
import bannerMobile from '/Informacoes/info-banner_s.png';
import { BiDownArrow } from "react-icons/bi";

import { Accordion, AccordionItem } from '@szhsin/react-accordion';


export default function Informacoes(){
  return (
    <section className={styles.informacoes}>
      <Banner
        src={bannerDesktop}
        alt="público assistindo a um show"
        srcsetTablet={bannerTablet}
        srcsetMobile={bannerMobile}
        titulo="Informações Gerais"
      />
      <h3 className={styles.titulo__pagina}>Perguntas Frequentes:</h3>

      <Accordion className={styles.faq__cards}>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            header={
              <>
                <h6 className={styles.faq__card}>{faq.pergunta}</h6>
                <BiDownArrow />
              </>
            }
          >
            <p>{faq.resposta}</p>
          </AccordionItem>
        ))}
      </Accordion> 
    
    </section>
  )
}