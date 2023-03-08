import Banner from '../../components/Banner';
import styles from './Informacoes.module.scss';
import banner from '/infos-banner.png';
import faq from './faq.json';

export default function Informacoes(){
  return (
    <section className={styles.informacoes}>      
      <Banner src={banner} alt="pessoas assistindo a um show de musica" />
      <h3>Perguntas Frequentes:</h3>
      <div className={styles.faq__cards}>
        {faq.map(faq => (
          <div className={styles.faq__card}>
            <h6>{faq.pergunta}</h6>
            <p>{faq.resposta}</p>
          </div>
        ))}
      </div> 
    
    </section>
  )
}