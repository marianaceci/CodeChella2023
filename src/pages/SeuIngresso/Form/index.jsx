import ButtonSubmit from '../../../components/ButtonSubmit';
import TipoDeIngresso from './dropdown';
import styles from './Form.module.scss';

const Form = () => {

  return (
    <form className={styles.formulario}>
      <div className={styles.formulario__campo}>
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" />
      </div>
      <div className={styles.formulario__campo}>
        <label htmlFor="email">Email:</label>
        <input type="email" />
      </div>
      <div className={styles.select}>
        <div className={styles.formulario__campo}>
          <label htmlFor="tipo">Tipo de ingresso</label>
          <TipoDeIngresso />
        </div>
        <div className={styles.formulario__campo}>
          <label htmlFor="nascimento">Data de nascimento:</label>
          <input type="date" />
        </div>
      </div>
      <ButtonSubmit />
    </form>
  )
}

export default Form