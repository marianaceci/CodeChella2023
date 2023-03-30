import { Banda, LineupSection } from "./style";
import { getSabado, getDomingo } from "@/assets/data/lineupList.js";

export default function LineUp() {
  const sabado = getSabado();
  const domingo = getDomingo();

  return (
    <LineupSection>
      <h2 className="header">\Line-Up\</h2>

      <div className="programa">
        <div className="data">
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

      <div className="programa">
        <div className="data">
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
    </LineupSection>
  );
}
