import React from "react";
import { DeleteMovie } from "./Movieserver";
import { useNavigate } from "react-router-dom";

const MoviesItem = ({ movies, callMoviesList }) => {
  const navigate = useNavigate();

  const handleDelete = async (movieId) => {
    await DeleteMovie(movieId);
    callMoviesList();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-tittle ">
          {movies.name}{" "}
          <button
            onClick={() => navigate(`/update/${movies.id}`)}
            className=" ms-10 btn btn-sm btn-info"
          >
            Update
          </button>
        </h3>
        <p className="card-text">Gender: {movies.gender}</p>
        <p className="card-text">Type: {movies.type}</p>
        <p className="card-text">Score: {movies.mean_score}</p>
        <p className="card-text">Views : {movies.views}</p>

        <button
          onClick={() => movies.id && handleDelete(movies.id)}
          className="btn btn-danger my-2"
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default MoviesItem;
