import * as React from 'react';
import styles from './Dropdown.module.scss';
  
const TipoDeIngresso = () => {
  
  const tiposDeIngresso = [
    {label: 'Ingresso Cortesia', value:'ingressoCortesia'},
    {label: 'Ingresso Inteiro', value:'ingressoInteiro'},
    {label: 'Ingresso meia-entrada', value:'ingressoMeia'},
  ]

  const [tipo, setTipo] = React.useState('');

  return (
    <div className={styles.dropdown}>
      <label>Tipo de ingresso</label>
      <select className={styles.dropdown__select} value={tipo} onChange={evento => setTipo(evento.target.value)}>
        <option />        
        {tiposDeIngresso.map(tipo => <option key={tipo.value}>{tipo.label}</option>)}
      </select>
    </div>
  );
}

export default TipoDeIngresso;