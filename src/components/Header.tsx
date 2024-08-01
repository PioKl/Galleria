import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Header.scss";
import logo from "../assets/images/logo.svg";

interface HeaderProps {
  startSlider: boolean;
  setStartSlider: React.Dispatch<React.SetStateAction<boolean>>;
  sliderButtonRef: React.RefObject<HTMLButtonElement>;
}

const Header: React.FC<HeaderProps> = ({
  startSlider,
  setStartSlider,
  sliderButtonRef,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  //Sprawdzenie czy jest na stronie głównej, żeby wyłączyć disabled (łączy się to z errorem, bo gdy jest na złej podstronie to sliderButton dostanie disabled=true)
  useEffect(() => {
    if (location.pathname === "/") {
      sliderButtonRef.current && (sliderButtonRef.current.disabled = false);
    }
  }, [location.pathname, sliderButtonRef]);

  const handleStartSlideShow = () => {
    if (location.pathname === "/") {
      navigate(`/slide/0`);
    }
    setStartSlider(!startSlider);
  };

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

        <button
          onClick={handleStartSlideShow}
          className="nav__link link"
          ref={sliderButtonRef}
        >
          {!startSlider ? "Start slideshow" : "Stop slideshow"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
