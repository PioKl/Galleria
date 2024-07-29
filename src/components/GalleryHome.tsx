import "../style/GalleryHome.scss";
import { Gallery } from "../types/types";
import { Link } from "react-router-dom";

interface GalleryHomeProps {
  gallery: Gallery[];
}

const GalleryHome: React.FC<GalleryHomeProps> = ({ gallery }) => {
  return (
    <div className="galleryHome wrapper">
      {gallery.map((item, id) => (
        <Link
          to={{ pathname: `/slide/${id}` }}
          state={item}
          className="galleryHome__item"
          key={id}
        >
          <div className="galleryHome__quick-info">
            <div className="galleryHome__name-and-artist-container">
              <h3 className="galleryHome__name">{item.name}</h3>
              <h4 className="galleryHome__artist">{item.artist.name}</h4>
            </div>
          </div>

          <picture className="galleryHome__picture">
            <source media="(min-width: 1160px)" srcSet={item.images.gallery} />
            <source media="(min-width: 768px)" srcSet={item.images.gallery} />
            <img
              className="galleryHome__image"
              src={item.images.thumbnail}
              alt={item.name}
            />
          </picture>
        </Link>
      ))}
    </div>
  );
};

export default GalleryHome;
