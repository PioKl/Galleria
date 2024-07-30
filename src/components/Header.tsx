import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Header.scss";
import logo from "../assets/images/logo.svg";

interface HeaderProps {
  startSlider: boolean;
  setStartSlider: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ startSlider, setStartSlider }) => {
  const navigate = useNavigate();
  const location = useLocation();

  function handleStartSlideShow() {
    if (location.pathname === "/") {
      navigate(`/slide/0`);
    }
    setStartSlider(!startSlider);
  }
  return (
    <header className="header">
      <nav className="nav">
        <Link
          to="/"
          onClick={() => {
            setStartSlider(false);
          }}
        >
          <img
            className="nav__image"
            src={logo}
            alt="logo"
            width={113}
            height={32}
          />
        </Link>

        <button onClick={handleStartSlideShow} className="nav__link link">
          {!startSlider ? "Start slideshow" : "Stop slideshow"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
