import { useState } from "react";
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
  return (
    <Router>
      <Header startSlider={startSlider} setStartSlider={setStartSlider} />
      <main className="main">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<GalleryHome gallery={gallery} />} />
          <Route
            path="/slide/:slug"
            element={
              <SingleGallerySlide gallery={gallery} startSlider={startSlider} />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
