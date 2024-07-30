import { createPortal } from "react-dom";
import "../style/ModalImage.scss";

interface ModalImageProps {
  image: string;
  closeModal: () => void;
}

const ModalImage: React.FC<ModalImageProps> = ({ image, closeModal }) => {
  const modalHook = document.getElementById("modal-hook");

  if (!modalHook) {
    return null;
  }

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-image">
        <button className="modal-image__button" onClick={closeModal}>
          Close
        </button>
        <img
          className="modal-image__image"
          src={process.env.VITE_BASE_URL + image}
          alt="art image"
        />
      </div>
    </div>,
    modalHook
  );
};

export default ModalImage;
