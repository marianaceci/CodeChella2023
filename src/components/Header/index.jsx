import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import menu from './menu.png';

export default function Header() {
  const rotas = [{
    label: 'A experiência',
    to: '/experiencia'
  }, {
    label: 'Mapa de Setores',
    to: '/setores'
  }, {
    label: 'Informações',
    to: '/informacoes'
  }, {
    label: 'Ingresso',
    to: '/ingresso'
  }];
  
  return (
    <nav className={styles.menu}>
      <Link to="/">
        <img src='/src/assets/logo.svg' alt='logo do CodeChella' />
      </Link>
      {/* <img className={styles.menu_hamburguer} src={menu} alt="menu hamburguer" /> */}
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}