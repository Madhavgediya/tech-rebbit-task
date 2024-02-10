import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies, handleMovieSelect }) => {
  const handleClick = (id) => {
    handleMovieSelect(id);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {movies.map((movie) => (
        <Link
          key={movie.imdbID}
          to={`/movie/${movie.imdbID}`}
          className="border-2 border-red-500 rounded-2xl"
        >
          <div onClick={() => handleClick(movie.imdbID)} className="m-2">
            {movie.Title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
