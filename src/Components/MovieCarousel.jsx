import React, { Component } from "react";
import { Carousel } from "bootstrap";

class MovieCarousel extends Component {
  state = {
    movies: [],
    currentIndex: 0, // Indice corrente del carosello
  };

  componentDidMount() {
    const { listaFilm } = this.props;
    fetch(`http://www.omdbapi.com/?apikey=b3987125&s=${listaFilm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True" && Array.isArray(data.Search)) {
          this.setState({ movies: data.Search });
        } else {
          console.error("Error fetching data:", data.Error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // Funzione per spostare a destra
  nextSlide = () => {
    this.setState((prevState) => {
      let nextIndex =
        prevState.currentIndex + 5 < prevState.movies.length - 1
          ? prevState.currentIndex + 6
          : 0;

      if (nextIndex > prevState.movies.length - 6) {
        nextIndex = prevState.movies.length - 6;
      }

      return { currentIndex: nextIndex };
    });
  };

  // Funzione per spostare a sinistra
  prevSlide = () => {
    this.setState((prevState) => {
      let prevIndex =
        prevState.currentIndex - 1 >= 0
          ? prevState.currentIndex - 6
          : prevState.movies.length - 6;

      if (prevIndex < 0) {
        prevIndex = 0;
      }

      return { currentIndex: prevIndex };
    });
  };

  render() {
    const { movies, currentIndex } = this.state;
    const { title } = this.props;

    return (
      <div className="carousel-container">
        <style>{`
          .mobile-scroll {
            overflow-x: auto;
            overflow-y: hidden;
          }
          @media (min-width: 768px) {
            .mobile-scroll {
              overflow-x: hidden;
            }
          }
        `}</style>
        <h2 className="fw-bold text-white p-1 mt-1 fs-4 fs-sm-3 fs-md-2 fs-lg-1">
          {title}
        </h2>
        <div className="carousel slide my-3">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* Aggiungi overflow-auto solo su dispositivi mobili */}
              <div className="d-flex mobile-scroll" style={{ width: "100%" }}>
                <div
                  className="d-flex"
                  style={{
                    transform: `translateX(-${(currentIndex * 100) / 5}%)`,
                    transition: "transform 0.5s ease",
                  }}
                >
                  {movies.length > 0 ? (
                    movies.map((movie, index) => (
                      <img
                        key={movie.imdbID}
                        src={movie.Poster}
                        className="d-block col-6 col-sm-3 col-md-2"
                        alt={movie.Title}
                      />
                    ))
                  ) : (
                    <p>Loading movies...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev d-none d-md-block"
            type="button"
            onClick={this.prevSlide}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none d-md-block"
            type="button"
            onClick={this.nextSlide}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default MovieCarousel;
