// src/api.js

const API_KEY = "http://www.omdbapi.com/?s=movies&apikey=ceb74058";

export const searchMovies = async (query) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=movies&apikey=ceb74058`
  );
  const data = await response.json();
  return data.Search;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=movies&apikey=ceb74058`
  );
  const data = await response.json();
  return data;
};
