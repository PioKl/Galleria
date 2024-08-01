import { useState, useRef } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import { Gallery } from "./types/types";
import "./style/App.scss";
import Header from "./components/Header";
import GalleryHome from "./components/GalleryHome";
import SingleGallerySlide from "./components/SingleGallerySlide";
import ErrorPage from "./components/ErrorPage";

function App() {
  const gallery: Gallery[] = data;
  const [startSlider, setStartSlider] = useState(false);
  const sliderButtonRef = useRef(null);
  return (
    <Router>
      <Header
        startSlider={startSlider}
        setStartSlider={setStartSlider}
        sliderButtonRef={sliderButtonRef}
      />
      <main className="main">
        <Routes>
          <Route
            path="*"
            element={<ErrorPage sliderButtonRef={sliderButtonRef} />}
          />
          <Route path="/" element={<GalleryHome gallery={gallery} />} />
          <Route
            path="/slide/:slug"
            element={
              <SingleGallerySlide
                gallery={gallery}
                startSlider={startSlider}
                sliderButtonRef={sliderButtonRef}
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
