import React, { useEffect, useState } from "react";
import * as MoviesServer from "./Movieserver"

const MovieList = () => {


  const [movies, setMovies] = useState([]);

  const callMoviesList= async() => {
    try{
      const res = await MoviesServer.listMovies();
      console.log(res);

    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    callMoviesList()
  },[])

  return (
    <div>
      {movies.map((movies) => (
        <h2>{movies.name}</h2>
      ))}
    </div>
  );
};

export default MovieList;
