import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <div
          key={movie.price}
          style={{ border: "2px solid red", margin: "5px" }}
        >
          <p>{movie.name}</p>
          <p>{movie.price}</p>
          <p>{movie.release}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
