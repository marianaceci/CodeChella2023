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


//ONBLUR:  
  const [mensagemErroNome, setMensagemErroNome] = useState('');
  const handleBlurNome = () => {
    if (nome.length < 3) {
      setMensagemErroNome('muito curto')
    } else {
      setMensagemErroNome('')
    }
  };
  
  const [mensagemErroEmail, setMensagemErroEmail] = useState('');
  const handleBlurEmail = (event) => {
    const value = event.target.value.trim().toLowerCase();
    const isValidEmail = emailRegex.test(value);
    if (!isValidEmail) {
      setMensagemErroEmail('Digite um e-mail válido')
    } else {
      setMensagemErroEmail('')
    }
  };
  
  const [mensagemErroIdade, setMensagemErroIdade] = useState('');
  const handleBlurNascimento = () => {
    const data = new Date(nascimento);
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    if (dataAtual <= dataMais18) {
      setMensagemErroIdade('O usuário não é maior de idade')
    } else {
      setMensagemErroIdade('')
    }
  };

  const handleClick = (e) => {
    if (mensagemErroNome == '' && mensagemErroEmail == '' && mensagemErroIdade == '') {
      e.preventDefault()
    }
  }

  return (
    <form className={styles.formulario}>
      <div className={styles.formulario__campo}>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          minLength="3"
          required
          type="text"
          value={nome}
          onChange={onChangeNome}
          onBlur={handleBlurNome}
        />
        <span className={styles.mensagem_erro}>{mensagemErroNome}</span>
      </div>
      <div className={styles.formulario__campo}>
        <label htmlFor="email">Email:</label>
        <input type="email" value={email} onChange={onChangeEmail} onBlur={handleBlurEmail}/>
        <span className={styles.mensagem_erro}>{mensagemErroEmail}</span>
      </div>
      <div className={styles.select}>
        <div className={styles.formulario__campo}>
          <TipoDeIngresso />
        </div>
        <div className={styles.formulario__campo}>
          <label htmlFor="nascimento">Data de nascimento:</label>
          <input type="date" value={nascimento} onChange={onChangeNascimento} onBlur={handleBlurNascimento} />
          <span className={styles.mensagem_erro}>{mensagemErroIdade}</span>
        </div>
      </div>
      <ButtonSubmit handleClick={handleClick}/>
    </form>
  )
}

export default Form