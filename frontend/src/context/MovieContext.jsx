import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext;

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavs = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavs = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavs = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
