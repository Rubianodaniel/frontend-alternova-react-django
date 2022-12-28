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
        <div className="card card-body bg-transparent border border-info rounded">
          <h3 className="card-tittle text-center text-uppercase text-monospace">
            {movies.name}
            <button
              onClick={() => navigate(`/update/${movies.id}`)}
              className=" mx-10 btn btn-sm btn-info"
            >
              Update
            </button>
          </h3>
          <h6 className="card-subtitle text-muted my-4 text-capitalize">
            Gender: {movies.gender}
          </h6>
          <p className="card-text text-capitalize">Type: {movies.type}</p>
          <p className="card-text text-capitalize">
            Score: {movies.mean_score}
          </p>
          <p className="card-text text-capitalize">Views : {movies.views}</p>

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
