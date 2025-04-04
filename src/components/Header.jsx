import logoRm from "../images/logo.png";

function Header() {
  return (
    <header>
      <img className="header__logo" src="{logoRm}" alt="Logo Rick y Morty" />
      <form action="">
        <label htmlFor="name">Busca por nombre</label>
        <input id="name" type="text" />
      </form>
    </header>
  );
}

export default Header;
