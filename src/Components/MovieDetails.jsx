import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=b3987125&i=${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Errore fetch movie data:", error));
  }, [movieId]);
  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <div className="movie-details text-center text-white">
      <h1>{movie.Title} </h1>
    </div>
  );
};
export default MovieDetails;
