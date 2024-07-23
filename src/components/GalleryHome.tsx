import "../style/GalleryHome.scss";
import data from "../data/data.json";
import { Gallery } from "../types/types";

export default function GalleryHome() {
  const gallery: Gallery[] = data;
  console.log(gallery);
  return (
    <div className="galleryHome wrapper">
      {gallery.map((item, id) => (
        <a href="#" className="galleryHome__item" key={id}>
          <picture className="galleryHome__picture">
            <source media="(min-width: 1160px)" srcSet={item.images.gallery} />
            <source media="(min-width: 768px)" srcSet={item.images.gallery} />
            <img
              className="galleryHome__image"
              src={item.images.thumbnail}
              alt={item.name}
            />
          </picture>
        </a>
      ))}
    </div>
  );
}
