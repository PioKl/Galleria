import { useState } from "react";
import { useParams } from "react-router-dom";
import { Gallery } from "../types/types";
import "../style/SingleGallerySlide.scss";
import iconBackButton from "../assets/images/icon-back-button.svg";
import iconNextButton from "../assets/images/icon-next-button.svg";

interface SingleGallerySlideProps {
  gallery: Gallery[];
}

const SingleGallerySlide: React.FC<SingleGallerySlideProps> = ({ gallery }) => {
  console.log(gallery);

  const { slug } = useParams<{ slug: string }>(); // Określenie typu parametru

  const [id, setId] = useState(parseInt(slug!, 10)); //! oznacza, że slug nie jest undefined (dla TypScript)
  const [item, setItem] = useState(gallery[id]);

  const handlePreviousSlideClick = () => {
    setId((prevId) => {
      const newId = (prevId - 1 + gallery.length) % gallery.length; //działa podobnie jak w handleNextSlideClick
      setItem(gallery[newId]);
      return newId;
    });
  };

  const handleNextSlideClick = () => {
    setId((prevId) => {
      const newId = (prevId + 1) % gallery.length; //(prevId + 1) % gallery.length oznacza, że newId jest w zakresie od 0 do gallery.length - 1, jak prevId osiągnie gallery.length - 1 to zacznie od 0, na taką wartość zostanie ustawiony newId
      setItem(gallery[newId]);
      return newId; // zwracana wartość nowego id (zaktualizowana, setId(newId))
    });
  };

  if (!item) {
    return <div>Wrong Page</div>; // Gdy nie ma żadnego elementu (powiedzmy w adresie wyszukiwania będzie numer większy niż ilość elementów w galerii)
  }

  return (
    <div className="gallery-slide-container">
      <div className="gallery-slide-artwork-container wrapper">
        <div className="gallery-slide-artwork-image-container">
          <div className="gallery-slide-image-container">
            <picture className="gallery-slide-image-container__picture">
              <source
                media="(min-width: 768px)"
                srcSet={process.env.VITE_BASE_URL + item.images.hero.large}
              />
              <img
                className="gallery-slide-image-container__artwork"
                src={process.env.VITE_BASE_URL + item.images.hero.small}
                alt={item.name}
              />
            </picture>
            <div className="gallery-slide-artwork-name-container">
              <h3 className="gallery-slide-artwork-name-container__name">
                {item.name}
              </h3>
              <span className="gallery-slide-artwork-name-container__artist">
                {item.artist.name}
              </span>
              <img
                className="gallery-slide-artwork-name-container__artist-image"
                src={process.env.VITE_BASE_URL + item.artist.image}
                alt={item.name}
                width={128}
                height={128}
              />
            </div>
          </div>
          <img
            className="gallery-slide-image-container__artist"
            src={process.env.VITE_BASE_URL + item.artist.image}
            alt={item.name}
            width={64}
            height={64}
          />
        </div>
        <div className="gallery-slide-artwork-description-container">
          <span className="gallery-slide-artwork-description-container__year">
            {item.year}
          </span>
          <p className="gallery-slide-artwork-description-container__description">
            {item.description}
          </p>
          <div className="gallery-slide-artwork-description-container__link-container">
            <a
              href={item.source}
              target="_blank"
              className="gallery-slide-artwork-description-container__link linkSource"
            >
              Go to source
            </a>
          </div>
        </div>
      </div>

      <div className="gallery-slide-slider-container">
        <div
          style={{
            width: `${(100 / gallery.length) * (id + 1)}%`,
          }}
          className="gallery-slide-slider-container__progress-bar"
        ></div>

        <div className="gallery-slide-slider-artwork-and-buttons-container wrapper">
          <div className="gallery-slide-slider-artwork-name-container">
            <span className="gallery-slide-slider-artwork-name-container__name">
              {item.name}
            </span>
            <span className="gallery-slide-slider-artwork-name-container__artist">
              {item.artist.name}
            </span>
          </div>
          <div className="gallery-slide-slider-buttons-container">
            <button
              className="gallery-slide-slider-buttons-container__button"
              onClick={handlePreviousSlideClick}
            >
              <img src={iconBackButton} alt="previous" />
            </button>
            <button
              className="gallery-slide-slider-buttons-container__button"
              onClick={handleNextSlideClick}
            >
              <img src={iconNextButton} alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGallerySlide;
