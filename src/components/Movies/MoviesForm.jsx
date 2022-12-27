import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateMovie, getMovie, UpdateMovie } from "./Movieserver";

const MoviesForm = () => {
  const stateType = [
    {
      value: "serie",
    },
    {
      value: "movie",
    },
  ];

  const initialState = {
    id: 0,
    name: "",
    gender: "",
    type: "",
  };

  const navigate = useNavigate();
  const params = useParams();

  const [createmovie, setCreatemovie] = useState(initialState);

  const handleInputChange = (e) => {
    setCreatemovie({
      ...createmovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(!params.id){
        let res = await CreateMovie(createmovie); 
        if (res.status === 201) {
          setCreatemovie(initialState);
        }
      }else{
        await UpdateMovie(params.id, createmovie);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getMovieData = async (moviesId) => {
    try {
      const res = await getMovie(moviesId);
      const data = await res.json();
      const { name, gender, type } = data;
      setCreatemovie({ name, gender, type });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getMovieData(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <legend>Create New Movie</legend>
      <div className="mb-3">
        <label className="form-label">Enter Data into the form</label>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={createmovie.name}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Name"
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="gender"
            value={createmovie.gender}
            onChange={handleInputChange}
            className="form-control my-4"
            placeholder="Gender"
            required
          />
        </div>
        <div>
          <select
            className="form-select"
            id="inputGroupSelect01"
            name="type"
            value={createmovie.type}
            onChange={handleInputChange}
          >
            {stateType.map((st) => (
              <option key={st.value} value={st.value}>
                {st.value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-grid gap-2">
        {params.id ? (
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        )}
      </div>
    </form>
  );
};

export default MoviesForm;
