import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./data/data.json";
import { Gallery } from "./types/types";
import "./style/App.scss";
import Header from "./components/Header";
import GalleryHome from "./components/GalleryHome";
import SingleGallerySlide from "./components/SingleGallerySlide";
import ErrorPage from "./components/ErrorPage";

function App() {
  const gallery: Gallery[] = data;
  return (
    <Router basename={process.env.VITE_BASE_URL}>
      <Header />
      <main className="main">
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<GalleryHome gallery={gallery} />} />
          <Route
            path="/slide/:slug"
            element={<SingleGallerySlide gallery={gallery} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
