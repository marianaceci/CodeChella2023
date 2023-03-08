import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Burger from './Burger';

export default function Header() {  
  return (
    <nav className={styles.menu}>
      <Link to="/">
        <img src='/src/assets/logo.svg' alt='logo do CodeChella' />
      </Link>
      <Burger />
    </nav>
  )
}