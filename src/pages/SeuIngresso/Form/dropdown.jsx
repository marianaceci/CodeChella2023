import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './Form.module.scss';


export default function TipoDeIngresso() {
  const [tipo, setTipo] = React.useState('');

  const handleChange = (event) => {
    setTipo(event.target.value);
  };

  const tiposDeIngresso = [
    {label: 'Tipo de ingresso', value:''},
    {label: 'Ingresso Cortesia', value:'ingressoCortesia'},
    {label: 'Ingresso Inteiro', value:'ingressoInteiro'},
    {label: 'Ingresso meia-entrada', value:'ingressoMeia'},
  ]

  return (
      <FormControl className={styles.dropdown}>
      <Select
          className={styles.dropdown__select}
          value={tipo}
          onChange={handleChange}
          displayEmpty
          inputProps={{'aria-label': 'tipo de ingresso'}}
        >
          {tiposDeIngresso.map(ingresso => (
            <MenuItem value={ingresso.value}>{ingresso.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}