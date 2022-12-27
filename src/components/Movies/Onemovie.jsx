import React from "react";

const OneMovie = ({ movie }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-tittle ">{movie.name}</h3>
        <p className="card-text">Gender: {movie.gender}</p>
        <p className="card-text">Type: {movie.type}</p>

      </div>
    </div>
  );
};

export default OneMovie;
