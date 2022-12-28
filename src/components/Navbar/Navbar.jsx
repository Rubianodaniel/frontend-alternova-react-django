import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex items-center justify-between h-24 max-w-auto mx-auto px-4 text-white">
      <span className=" w-full font-bold text-2xl  text-white" to="/">
        ALTERNOVA REACT
      </span>

      {/* menu  */}

      <ul className="hidden md:flex text-xl">
        <li>
          <NavLink
            className=" px-4  text-white hover:text-purple-400 no-underline"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" px-4  text-white hover:text-purple-400 no-underline"
            to="/movies"
          >
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink
            className=" px-4  text-white hover:text-purple-400 no-underline"
            to="/create/movie"
          >
            Create
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" px-4  text-white hover:text-purple-400 no-underline"
            to="/random"
          >
            Random
          </NavLink>
        </li>
      </ul>

      <div className="block md:hidden">
        {!nav ? (
          <AiOutlineClose onClick={handleNav} size={20} />
        ) : (
          <AiOutlineMenu onClick={handleNav} size={20} />
        )}
      </div>

      <ul
        className={
          !nav
            ? "fixed left-0 top-0 w-[80%] h-full bg-[#000300] ease-in-out duration-500 uppecase"
            : "fixed left-[100%]"
        }
      >
        <h3 className=" w-full font-bold mt-10 text-white " to="/">
          ALTERNOVA REACT
        </h3>

        <li className="p-4 mt-4 border-b border-gray-600">
          <NavLink
            onClick={handleNav}
            className={
              !nav
                ? " text-white hover:text-purple-400 no-underline"
                : "fixed left-[100%]"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li className="p-4 border-b border-gray-600">
          <NavLink
            onClick={handleNav}
            className={
              !nav
                ? " text-white hover:text-purple-400 no-underline"
                : "fixed left-[100%]"
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </li>

        <li className="p-4 border-b border-gray-600">
          <NavLink
            onClick={handleNav}
            className={
              !nav
                ? " text-white hover:text-purple-400 no-underline"
                : "fixed left-[100%]"
            }
            to="/create/movie"
          >
            Create
          </NavLink>
        </li>
        <li className="p-4 border-b border-gray-600">
          <NavLink
            onClick={handleNav}
            className={
              !nav
                ? " text-white hover:text-purple-400 no-underline"
                : "fixed left-[100%]"
            }
            to="/random"
          >
            Random
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
