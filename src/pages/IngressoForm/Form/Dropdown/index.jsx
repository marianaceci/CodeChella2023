import * as React from 'react';
import { useState } from 'react';
import styles from './Dropdown.module.scss';
  
const TipoDeIngresso = () => {

  const onChangeTipo = event => {
    localStorage.setItem('tipo', event.target.value);
    setTipo(event.target.value);
  }
  
  const [mensagemErroTipo, setMensagemErroTipo] = useState('');
  const handleBlurTipo = () => {
    if (tipo == '') {
      setMensagemErroTipo("Escolha um tipo de ingresso")
    } else {
      setMensagemErroTipo("")
    }
  }

  
  const tiposDeIngresso = [
    {label: 'Ingresso Cortesia', value:'ingressoCortesia'},
    {label: 'Ingresso Inteiro', value:'ingressoInteiro'},
    {label: 'Ingresso meia-entrada', value:'ingressoMeia'},
  ]

  const [tipo, setTipo] = React.useState('');

  return (
    <div className={styles.dropdown}>
      <label>Tipo de ingresso</label>
      <select className={styles.dropdown__select} value={tipo} onChange={onChangeTipo} onBlur={handleBlurTipo}>
        <option />        
        {tiposDeIngresso.map(tipo => <option key={tipo.value}>{tipo.label}</option>)}
      </select>
      <span className={styles.mensagem_erro}>{mensagemErroTipo}</span>
    </div>
  );
}

export default TipoDeIngresso;