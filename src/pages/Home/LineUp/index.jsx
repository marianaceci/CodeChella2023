import styles from "./LineUp.module.scss";

const sabadoPrimeira = ["System of a DOM"]
const sabadoSegunda = ["Python Maiden","Apollo Client 2001","Bon Java","NickCallback"]
const sabadoTerceira = ["Linkin Promises","Fullstack Fighters","Papa React","Angular in Chains"]
const sabadoQuarta = ["Agnostic Front-end", "SlipkNode", "Pink Flutter", "Kiss"]

const domingoPrimeira = ["Lana Del Ploy"]
const domingoSegunda = ["Dua Lib","The Backnd","CSS Styles","DJ Query","ArrayAna Grande"]
const domingoTerceira = ["Miley Cypress","The Bootstrap Boys","Json Derulo","CloudPlay","Dev Lovato"]
const domingoQuarta = ["Kylie MiLOG","Jenkins Brothers","Rubycat Dolls"]

export default function LineUp() {
  return (
    <section className={styles.lineup}>
      <div className={styles.lineup__data}>
        <hr />
        <h3>sábado &lt; 11/03&gt;</h3>
        <hr />
      </div>

      <div className={styles.lineup__bandas}>
        <ul className={styles.lineup__bandas__linha}>
          {sabadoPrimeira.map((lineup) => (
            <li>
              <h2>{lineup}</h2>
            </li>
          ))}          
        </ul>

        <ul className={styles.lineup__bandas__linha}>
          {sabadoSegunda.map((lineup) => (
            <li>
              <h5>{lineup}</h5>
            </li>
          ))}
        </ul>

        <ul className={styles.lineup__bandas__linha}>
          {sabadoTerceira.map((lineup) => (
            <li>
              <h6>{lineup}</h6>
            </li>
          ))}
        </ul>

        <ul className={styles.lineup__bandas__linha}>
          {sabadoQuarta.map((lineup) => (
            <li>
              <h4>{lineup}</h4>
            </li>
          ))}
        </ul>

      </div>

      <div className={styles.lineup__data}> 
        <hr />
        <h3>domingo &lt; 12/03&gt;</h3>
        <hr />
      </div>

      <div className={styles.lineup__bandas}>
        <ul className={styles.lineup__bandas__linha}>
          {domingoPrimeira.map((lineup) => (
            <li>
              <h2>{lineup}</h2>
            </li>
          ))}          
        </ul>

        <ul className={styles.lineup__bandas__linha}>
          {domingoSegunda.map((lineup) => (
            <li>
              <h5>{lineup}</h5>
            </li>
          ))}
        </ul>

        <ul className={styles.lineup__bandas__linha}>
          {domingoTerceira.map((lineup) => (
            <li>
              <h6>{lineup}</h6>
            </li>
          ))}
        </ul>

        <ul className={styles.lineup__bandas__linha}>
          {domingoQuarta.map((lineup) => (
            <li>
              <h4>{lineup}</h4>
            </li>
          ))}
        </ul>

      </div>
    </section>

    


  );
}
