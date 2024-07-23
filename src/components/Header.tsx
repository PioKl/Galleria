import "../style/Header.scss";
import logo from "../assets/images/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <nav className="nav wrapper">
        <img
          className="nav__image"
          src={logo}
          alt="logo"
          width={113}
          height={32}
        />

        <a className="nav__link linkSlide" href="#">
          Start Slideshow
        </a>
      </nav>
    </header>
  );
}
