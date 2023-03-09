import { useState } from 'react';
import ButtonSubmit from '../../../components/ButtonSubmit';
import styles from './Form.module.scss';

const Form = ({ onSubmit }) => {
  const safeSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const nome = event.target[0].value
    const email = event.target[1].value
    const tipo = event.target[2].value
    const nascimento = event.target[3].value
    onSubmit({nome, email, tipo, nascimento})
  }

  const tiposDeIngresso = [
    {label: 'Ingresso Cortesia', value:'ingressoCortesia'},
    {label: 'Ingresso Inteiro', value:'ingressoInteiro'},
    {label: 'Ingresso meia-entrada', value:'ingressoMeia'},
  ]

  const [ingresso, setIngresso] = useState('Tipo de ingresso')
  const handleChange = event => {
    setIngresso(event.target.value)
  }

  return (
    <form onSubmit={safeSubmit} className={styles.formulario}>
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
          <input type="text" />
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