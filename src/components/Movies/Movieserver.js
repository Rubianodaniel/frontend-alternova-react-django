const API_URL = "http://127.0.0.1:8000";

export const listMovies = async () => {
  return await fetch(`${API_URL}/api/movies`);
};

export const getMovie = async (movieId)=>{
  return await fetch(`${API_URL}/api/movies/${movieId}/`);
}

export const randomMovies = async () => {
  return await fetch(`${API_URL}/api/random`);
};


export const CreateMovie = async (newMovie) => {
  return await fetch(`${API_URL}/api/movies/`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        "name": String(newMovie.name).trim(),
        "gender": String(newMovie.gender).trim(),
        "type": String(newMovie.type).trim()
      }
    ),
  });
};


export const UpdateMovie = async (movieId,updatedMovie) => {
  return await fetch(`${API_URL}/api/movies/${movieId}/`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(
      {
        "name": String(updatedMovie.name).trim(),
        "gender": String(updatedMovie.gender).trim(),
        "type": String(updatedMovie.type).trim()
      }
    ),
  });
};


export const DeleteMovie = async (movieId) => {
  return await fetch(`${API_URL}/api/movies/${movieId}/`, {
    method: "DELETE",
  });
};
