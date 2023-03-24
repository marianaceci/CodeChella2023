import styles from "./LineUp.module.scss";

export default function LineUp({programacao, dia, data}) {
  const lines = [...new Set(programacao.map((programa => programa.line)))]

  const getBandas = (lineNumber) => {
    const line = programacao.filter(programa => programa.line === lineNumber);
    return line;
  }

  const showBandas = (formacao => {
    const programacao = getBandas(formacao);
    return (
      <ul>
        {programacao.map(programa => (
          <li key={programa.banda}>{programa.banda}</li>
        ))}
      </ul>
    )
  })

  return (
    <section className={styles.lineup}>
      <div className={styles.lineup__data}>
        <hr />
        <h3>{dia} &lt;{data}&gt;</h3>
        <hr />
      </div>

      <div className={styles.lineup__data}> 
        {lines.map(line => (
          showBandas(line)
        ))}
      </div>
    </section>
  );
}
