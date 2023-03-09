import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import logo from './logo.svg';

export default function Header() {  
  return (
    <nav className={styles.menu}>
      <Link to="/" className={styles.menu__logo}>
        <img src={logo} alt='logo do CodeChella' />
      </Link>
      <Burger />
    </nav>
  )
}