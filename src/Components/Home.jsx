import React from "react";
import MovieCarousel from "./MovieCarousel";

const Home = ({ loading, selectedGenre, handleSelectChange }) => {
  return (
    <>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="d-flex align-items-center flex-wrap mb-3">
            <h2 className="fw-bold text-white p-1 mt-1 fs-4">TV Shows</h2>
            <select
              className="form-select form-select-sm w-auto bg-black text-white ms-2"
              aria-label="Select Genre"
              value={selectedGenre}
              onChange={handleSelectChange}
            >
              <option value="">Genres</option>
              <option value="1">Azione</option>
              <option value="2">Anime</option>
              <option value="3">Commedia</option>
              <option value="4">Cult</option>
              <option value="5">Documentari</option>
              <option value="6">Drammatici</option>
              <option value="7">Fantasy</option>
              <option value="8">Thriller</option>
            </select>
          </div>

          <MovieCarousel listaFilm="Star Wars" title="Star Wars Movies" />
          <MovieCarousel listaFilm="Harry Potter" title="Harry Potter Movies" />
          <MovieCarousel listaFilm="Marvel" title="Marvel Movies" />
        </>
      )}
    </>
  );
};

export default Home;
