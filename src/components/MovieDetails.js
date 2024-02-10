import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=ceb74058`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(new Error(data.Error));
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Movie Details</h2>
      {error ? (
        <p className="text-red-600">Error: {error.message}</p>
      ) : movie ? (
        <div>
          <h3 className="text-3xl font-bold mb-2">{movie.Title}</h3>
          <div  className="grid grid-cols-2 gap-4 justify-center text-center">
            <p className="mb-2">
              <span className="font-semibold">Year:</span>  {movie.Year}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Director:</span> {movie.Director}
            </p>
          </div>
          <p className="mb-2">
            <span className="font-semibold">Plot:</span> {movie.Plot}
          </p>
          {/* Display other movie details as needed */}
        </div>
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;
