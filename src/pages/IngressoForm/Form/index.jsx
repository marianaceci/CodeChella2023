import styles from './Form.module.scss';
import { useState } from 'react';
import flecha from './flecha.svg';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default function Form() {

  //LOCALSTORAGE:
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [tipo, setTipo] = useState('');

  const onChangeNome = event => {
    localStorage.setItem("nome", event.target.value);
    setNome(event.target.value);
  };

  const onChangeEmail = event => {
    localStorage.setItem('email', event.target.value);
    setEmail(event.target.value);
  };

  const onChangeTipo = event => {
    localStorage.setItem('tipo', event.target.value);
    setTipo(event.target.value);
  }

  const onChangeNascimento = event => {
    localStorage.setItem('nascimento', event.target.value);
    setNascimento(event.target.value);
  };

  const tiposDeIngresso = [
    { label: 'Ingresso Cortesia', value: 'ingressoCortesia' },
    { label: 'Ingresso Inteiro', value: 'ingressoInteiro' },
    { label: 'Ingresso meia-entrada', value: 'ingressoMeia' },
  ]

  //ONSUBMIT:  
  const [errorNome, setErrorNome] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNascimento, setErrorNascimento] = useState(false);
  const [errorTipo, setErrorTipo] = useState(false);


  const handleBlurNome = () => {
    if (nome.length <= 1) {
      setErrorNome(true)
    } else {
      setErrorNome(false)
    }
  }

  const handleBlurEmail = (e) => {
    if (!emailRegex.test(e.target.value.trim().toLowerCase()) || email == '') {
      setErrorEmail(true)
    } else {
      setErrorEmail(false)
    }
  }

  const handleBlurTipo = () => {
    if (tipo == '') {
      setErrorTipo("Escolha um tipo de ingresso")
    } else {
      setErrorTipo("")
    }
  }
  
  const handleBlurNascimento = () => {
    const data = new Date(nascimento);
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    if (dataAtual <= dataMais18) {
      setErrorNascimento(true)
    } else {
      setErrorNascimento(false)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
  }


    return (
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <div className={styles.formulario__campo}>
          <label htmlFor="nome">Nome Completo:</label>
          <input
            required
            type="text"
            name="nome"
            value={nome}
            onBlur={handleBlurNome}
            onChange={onChangeNome}
            onInvalid={e => e.preventDefault()}
          />
          {errorNome && (
            <span className={styles.mensagem_erro}>
              Nome deve ter mais do que um caracter
            </span>)}
        </div>

        <div className={styles.formulario__campo}>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            inputMode="email"
            onBlur={handleBlurEmail}
            onChange={onChangeEmail}
            onInvalid={e => e.preventDefault()}
          />
          {errorEmail && (
            <span className={styles.mensagem_erro}>
              Digite um e-mail vádilo
            </span>)}
        </div>

        <div className={styles.select}>
          <div className={styles.formulario__campo}>
            <div className={styles.dropdown}>
              <label>Tipo de ingresso</label>
              <select
                required
                className={styles.dropdown__select}
                value={tipo}
                onChange={onChangeTipo}
                onBlur={handleBlurTipo}
              >
                <option />
                {tiposDeIngresso.map(tipo => <option key={tipo.value}>{tipo.label}</option>)}
              </select>
              <span className={styles.mensagem_erro}>{errorTipo}</span>
            </div>
          </div>
        </div>

        <div className={styles.formulario__campo}>
          <label htmlFor="nascimento">Data de nascimento:</label>
          <input
            required
            type="date"
            name="nascimento"
            value={nascimento}
            onBlur={handleBlurNascimento}
            onChange={onChangeNascimento}
            onInvalid={e => e.preventDefault()}
          />
          {errorNascimento && (
            <span className={styles.mensagem_erro}>
              O usuário deve ser maior de idade
            </span>)}
        </div>
        
        <a href='/qringresso'>
          <button type='submit' className={styles.buyTicket}>Avançar!
            <img src={flecha} alt="ícone de flecha" />
          </button>         
        </a>
      </form>
    )
  }

