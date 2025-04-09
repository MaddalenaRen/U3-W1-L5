import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MovieCarousel from "./Components/MovieCarousel";
import Profilo from "./Components/Profilo";
import { Routes, Route } from "react-router-dom";
import TvShows from "./Components/TvShows";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleSelectChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="py-5" />
      <main className="flex-grow-1 bg-black px-3">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                loading={loading}
                selectedGenre={selectedGenre}
                handleSelectChange={handleSelectChange}
              />
            }
          />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/Profilo" element={<Profilo />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
