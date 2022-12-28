import React from "react";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = async (e) => {
    e.preventDefault();
    navigate("/movies");
  };

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl  sm:text-6xl text-4xl text-[#00CED1] font-bold md:py-6">
          MOVIES
        </h1>
        <div className="flex justify-center items-center">
          <IconContext.Provider value={{ size: "2x" }}>
            <div className="p-4">
              <FaReact />
            </div>
            <div className="p-4">
              <DiDjango />
            </div>
          </IconContext.Provider>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Frontend developed with React js
        </p>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Backend developed with Djando Rest Framework
        </p>
        <button
          onClick={handleOnClick}
          className="bg-[#00CED1] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
