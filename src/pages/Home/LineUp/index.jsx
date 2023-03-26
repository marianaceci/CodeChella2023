import styles from "./LineUp.module.scss";
import { Banda } from "./style";
import { getSabado, getDomingo } from "../../../assets/data/lineupList.js";

// const sabadoPrimeira = ["System of a DOM"]
// const sabadoSegunda = ["Python Maiden","Apollo Client 2001","Bon Java","NickCallback"]
// const sabadoTerceira = ["Linkin Promises","Fullstack Fighters","Papa React","Angular in Chains"]
// const sabadoQuarta = ["Agnostic Front-end", "SlipkNode", "Pink Flutter", "Kiss"]

// const domingoPrimeira = ["Lana Del Ploy"]
// const domingoSegunda = ["Dua Lib","The Backnd","CSS Styles","DJ Query","ArrayAna Grande"]
// const domingoTerceira = ["Miley Cypress","The Bootstrap Boys","Json Derulo","CloudPlay","Dev Lovato"]
// const domingoQuarta = ["Kylie MiLOG","Jenkins Brothers","Rubycat Dolls"]

export default function LineUp() {
  const sabado = getSabado();
  const domingo = getDomingo();

  return (
    <section className={styles.lineup}>
      <h2 className={styles.lineup__header}>\Line-Up\</h2>

      <div className={styles.lineup__programa}>
        <div className={styles.lineup__programa__data}>
          <hr />
          <h3>sábado &lt; 11/03&gt;</h3>
          <hr />
        </div>

        <Banda>
          {sabado.map((programa) => {
            return (
              <ul
                key={programa.nivel}
                className={`estilo__banda${programa.nivel}`}
              >
                {programa.bandas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            );
          })}
        </Banda>
      </div>

      <div className={styles.lineup__programa}>
        <div className={styles.lineup__programa__data}>
          <hr />
          <h3>domingo &lt; 12/03&gt;</h3>
          <hr />
        </div>

        <Banda>
          {domingo.map((programa) => {
            return (
              <ul
                key={programa.nivel}
                className={`estilo__banda${programa.nivel}`}
              >
                {programa.bandas.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            );
          })}
        </Banda>
      </div>
    </section>
  );
}
