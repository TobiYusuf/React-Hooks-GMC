import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { moviesData } from "./moviesData";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [movies, setMovies] = useState(moviesData);

  const handleFilter = ({ title, rating }) => {
    let filteredMovies = moviesData.filter((movie) => {
      const matchTitle = movie.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const matchRating = movie.rating >= parseFloat(rating);
      return matchTitle && matchRating;
    });
    setMovies(filteredMovies);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
