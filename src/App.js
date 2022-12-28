import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import componenets
import MovieList from "./components/Movies/MoviesList";
import Navbar from "./components/Navbar/Navbar";
import MoviesForm from "./components/Movies/MoviesForm";
import MovieRamdon from "./components/Movies/MoviesRandom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/movies" element={<MovieList />} />
          <Route exact path="/random" element={<MovieRamdon />} />
          <Route exact path="/create/movie" element={<MoviesForm />} />
          <Route exact path="/update/:id" element={<MoviesForm />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
