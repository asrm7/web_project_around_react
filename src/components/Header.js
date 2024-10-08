import logo from '../images/Logo.png';
export default function Header() {
    return (
      <>
        <header className="header">
        <img src={logo} alt="Logo Around the U.S." className="header__logo" />
        </header>
      </>
  );
}

