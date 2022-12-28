import React, { useEffect, useState } from "react";
import { randomMovies } from "./Movieserver";
import OneMovie from "./Onemovie";

const MovieRamdon = () => {
  const[random, setRandom] = useState([]);

  const callMovieRamdon = async () => {
    try {
      const res = await randomMovies();
      const data = await res.json();
      if (res.status !== 400 ){
        setRandom(data)
      };
   
    } catch (error) {
   
    }
  };
  useEffect(() => {
    callMovieRamdon();
  }, []);

  return (
    <div className=" col d-flex justify-content-center">
      <OneMovie movie={random} />
    </div>
  );
};

export default MovieRamdon;
