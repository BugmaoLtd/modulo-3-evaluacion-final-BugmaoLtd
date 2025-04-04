import logoRm from "../images/logo.png";
import Filters from "./Filters";

function Header() {
  return (
    <header>
      <img className="header__logo" src={logoRm} alt="Logo Rick y Morty" />
      <Filters />
    </header>
  );
}

export default Header;
