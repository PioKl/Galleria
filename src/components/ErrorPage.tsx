import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style/ErrorPage.scss";

interface ErrorPageProps {
  sliderButtonRef: React.RefObject<HTMLButtonElement>;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ sliderButtonRef }) => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);
  useEffect(() => {
    sliderButtonRef.current && (sliderButtonRef.current.disabled = true);

    const timer = setInterval(() => {
      setCounter(counter - 1);
    }, 1000);

    counter === 0 && navigate("/");

    return () => clearInterval(timer);
  }, [counter, navigate, sliderButtonRef]);
  return (
    <div className="error-container">
      <h2>Wrong Page</h2>
      <span>
        Return to{" "}
        <Link to="/" className="errorLink">
          main page{" "}
        </Link>
        in {counter}
      </span>
    </div>
  );
};

export default ErrorPage;
