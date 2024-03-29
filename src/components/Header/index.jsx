import { Link } from "react-router-dom";
import Burger from "./Burger";
import logo from "./logo.svg";
import { HeaderNav, HeaderContainer } from "./style";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderNav>
        <Link to="/" className="logo">
          <img src={logo} alt="logo do CodeChella" />
        </Link>
        <Burger />
      </HeaderNav>
    </HeaderContainer>
  );
}
