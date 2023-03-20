import ButtonSubmit from '../../../components/ButtonSubmit';
import TipoDeIngresso from './Dropdown';
import styles from './Form.module.scss';
import { useState } from 'react';


const Form = () => {  

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');

  const onChangeNome = event => {
    localStorage.setItem("nome", event.target.value);
    setNome(event.target.value);    
  };

  const onChangeEmail = event => {
    localStorage.setItem('email', event.target.value);
    setEmail(event.target.value);
  };

  const onChangeNascimento = event => {
    localStorage.setItem('nascimento', event.target.value);
    setNascimento(event.target.value);
  };


  return (
    <form className={styles.formulario}>
      <div className={styles.formulario__campo}>
        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" value={nome} onChange={onChangeNome} />
      </div>
      <div className={styles.formulario__campo}>
        <label htmlFor="email">Email:</label>
        <input type="email" value={email} onChange={onChangeEmail} />
      </div>
      <div className={styles.select}>
        <div className={styles.formulario__campo}>
          <TipoDeIngresso />
        </div>
        <div className={styles.formulario__campo}>
          <label htmlFor="nascimento">Data de nascimento:</label>
          <input type="date" value={nascimento} onChange={onChangeNascimento} />
        </div>
      </div>
      <ButtonSubmit/>
    </form>
  )
}

export default Form