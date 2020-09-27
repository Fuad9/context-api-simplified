import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      <ul>
        <li>Movies: {movies.length} </li>
      </ul>
    </>
  );
};

export default Nav;
