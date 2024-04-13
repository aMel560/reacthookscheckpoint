import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filterMovies = (filter) => {
    setMovies(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
          movie.rating >= filter.rating
      )
    );
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <AddMovie onAddMovie={addMovie} />
      <Filter onFilterChange={filterMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
