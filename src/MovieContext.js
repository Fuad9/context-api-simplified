import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Endgame",
      price: 200
    },
    {
      name: "Ragnarok",
      price: 250
    },
    {
      name: "Star Wars",
      price: 150
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
