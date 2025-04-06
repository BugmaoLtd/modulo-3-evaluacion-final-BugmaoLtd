import logoRm from "../images/logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoRm} alt="Logo Rick y Morty" />
    </header>
  );
}

export default Header;
