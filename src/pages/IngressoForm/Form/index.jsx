import ButtonSubmit from '../../../components/ButtonSubmit';
import TipoDeIngresso from './Dropdown';
import styles from './Form.module.scss';
import { useState } from 'react';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const Form = () => {  

//LOCALSTORAGE:
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


//ONSUBMIT:  
  const [error, setError] = useState(false);

  
  const validaEmail = (event) => {
    const value = event.target.value.trim().toLowerCase();
    const isValidEmail = emailRegex.test(value);
    return isValidEmail //true
  };
  
  const validaIdade = () => {
    const data = new Date(nascimento);
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return dataAtual >= dataMais18    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.length <= 1 || email.length == 0 || nascimento.length == 0) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      <div className={styles.formulario__campo}>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          required
          type="text"
          value={nome}
          onChange={onChangeNome}
          onInvalid={e => e.preventDefault()}
        />
        {
          error && nome.length <= 1 ?
            <span className={styles.mensagem_erro}>
              Nome deve ter mais do que um caracter
            </span> : ""
        }
      </div>
      <div className={styles.formulario__campo}>
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          value={email}
          inputMode="email"
          onChange={onChangeEmail}
          onInvalid={e => e.preventDefault()}
        />
        {
          error && !validaEmail ?
            <span className={styles.mensagem_erro}>
              Digite um e-mail vádilo
            </span> : ""
        }
      </div>
      <div className={styles.select}>
        <div className={styles.formulario__campo}>
          <TipoDeIngresso required />
        </div>
        <div className={styles.formulario__campo}>
          <label htmlFor="nascimento">Data de nascimento:</label>
          <input
            required
            type="date"
            value={nascimento}
            onChange={onChangeNascimento}
            onInvalid={e => e.preventDefault()}
          />
          {
            error && nascimento.length == 0 ?
              <span className={styles.mensagem_erro}>
                O usuário deve ser maior de idade
              </span> : ""
          }
        </div>
      </div>
      <button>Avançar!</button>
    </form>
  )
}

export default Form