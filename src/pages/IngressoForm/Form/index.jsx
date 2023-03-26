import styles from "./Form.module.scss";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {dataEvento, setorLista, tiposDeIngresso} from '../../../assets/data/dataForm.js'

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Form() {
  const navigate = useNavigate();

  //LOCALSTORAGE:
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [tipo, setTipo] = useState("");
  const [setor, setSetor] = useState("");
  const [data, setData] = useState("");

  const onChangeNome = (event) => {
    localStorage.setItem("nome", event.target.value);
    setNome(event.target.value);
  };

  const onChangeEmail = (event) => {
    localStorage.setItem("email", event.target.value);
    setEmail(event.target.value);
  };

  const onChangeTipo = (event) => {
    localStorage.setItem("tipo", event.target.value);
    setTipo(event.target.value);
  };

  const onChangeNascimento = (event) => {
    localStorage.setItem("nascimento", event.target.value);
    setNascimento(event.target.value);
  };

  const onChangeSetor = (event) => {
    localStorage.setItem("setor", event.target.value);
    setSetor(event.target.value);
  };

  const onChangeData = (event) => {
    localStorage.setItem("data", event.target.value);
    setData(event.target.value);
  };

  //ONSUBMIT:
  const [errorNome, setErrorNome] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorNascimento, setErrorNascimento] = useState(false);
  const [errorTipo, setErrorTipo] = useState(false);
  const [errorData, setErrorData] = useState(false);
  const [errorSetor, setErrorSetor] = useState(false);

  const handleBlurNome = () => {
    if (nome.length <= 1) {
      setErrorNome(true);
    } else {
      setErrorNome(false);
    }
  };

  const handleBlurEmail = () => {
    if (!emailRegex.test(email.trim().toLowerCase()) || email == "") {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
  };

  const handleBlurTipo = () => {
    if (tipo == "") {
      setErrorTipo(true);
    } else {
      setErrorTipo(false);
    }
  };

  const handleBlurNascimento = () => {
    const data = new Date(nascimento);
    const dataAtual = new Date();
    const dataMais18 = new Date(
      data.getUTCFullYear() + 18,
      data.getUTCMonth(),
      data.getUTCDate()
    );
    if (dataAtual <= dataMais18 || nascimento == "") {
      setErrorNascimento(true);
    } else {
      setErrorNascimento(false);
    }
  };

  const handleBlurData = () => {
    if (data == "") {
      setErrorData(true);
    } else {
      setErrorData(false);
    }
  }
  
  const handleBlurSetor = () => {
    if (setor == "") {
      setErrorSetor(true);
    } else {
      setErrorSetor(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorNome && !errorEmail && !errorNascimento && !errorTipo && !errorSetor && !errorData) {
      navigate("/qringresso", {replace: true});
    } else {
      handleBlurNome();
      handleBlurEmail();
      handleBlurTipo();
      handleBlurNascimento();
      handleBlurData();
      handleBlurSetor();
    }
  };

  const handleClick = () => {
    handleBlurNome();
    handleBlurEmail();
    handleBlurTipo();
    handleBlurNascimento();
    handleBlurData();
    handleBlurSetor();
  };

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
          onInvalid={(e) => e.preventDefault()}
        />
        {errorNome && (
          <span className={styles.mensagem_erro}>
            Nome deve ter mais do que um caracter
          </span>
        )}
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
          onInvalid={(e) => e.preventDefault()}
        />
        {errorEmail && (
          <span className={styles.mensagem_erro}>Digite um e-mail vádilo</span>
        )}
      </div>

      <div className={styles.divisaoCampos}>

        <div className={styles.formulario__campo}>
          <label>Tipo de ingresso</label>
          <select
            required
            className={styles.dropdown__select}
            value={tipo}
            onChange={onChangeTipo}
            onBlur={handleBlurTipo}
            onInvalid={(e) => e.preventDefault()}
          >
            <option />
            {tiposDeIngresso.map((tipo) => (
              <option key={tipo.value}>{tipo.label}</option>
            ))}
          </select>
          {errorTipo && (
            <span className={styles.mensagem_erro}>
              Escolha um tipo de ingresso
            </span>
          )}
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
            onInvalid={(e) => e.preventDefault()}
          />
          {errorNascimento && (
            <span className={styles.mensagem_erro}>
              O usuário deve ser maior de idade
            </span>
          )}
        </div>

      </div>

      <div className={styles.divisaoCampos}>

        <div className={styles.formulario__campo}>
          <label>Setor</label>
          <select
            required
            className={styles.dropdown__select}
            value={setor}
            onChange={onChangeSetor}
            onBlur={handleBlurSetor}
            onInvalid={(e) => e.preventDefault()}
          >
            <option />
            {setorLista.map((item) => (
              <option key={item.value}>{item.label}</option>
            ))}
          </select>
          {errorSetor && (
            <span className={styles.mensagem_erro}>
              Escolha um setor
            </span>
          )}
        </div>

        <div className={styles.formulario__campo}>
        <label>Data do evento</label>
          <select
            required
            className={styles.dropdown__select}
            value={data}
            onChange={onChangeData}
            onBlur={handleBlurData}
            onInvalid={(e) => e.preventDefault()}
          >
            <option />
            {dataEvento.map((item) => (
              <option key={item.value}>{item.label}</option>
            ))}
          </select>
          {errorData && (
            <span className={styles.mensagem_erro}>
              Escolha a data do evento
            </span>
          )}
        </div>

      </div>

      <button onClick={handleClick} type="submit" className={styles.buyTicket}>
        Avançar! <IoArrowForward />
      </button>
    </form>
  );
}
