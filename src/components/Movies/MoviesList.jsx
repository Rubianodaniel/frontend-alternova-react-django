import React, { useEffect, useState } from "react";
import * as MoviesServer from "./Movieserver";

/// import components
import MoviesItem from "./MoviesItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const callMoviesList = async () => {
    try {
      const res = await MoviesServer.listMovies();
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callMoviesList();
  }, []);

  return (
    <div className="row">
      {movies.map((movies) => (
        <MoviesItem key={movies.id} movies={movies} callMoviesList={callMoviesList} />
      ))}
    </div>
  );
};

export default MovieList;
