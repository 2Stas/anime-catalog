import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (anime) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((favorite) => favorite.id === anime.id)) {
        return prevFavorites;
      }

      return [...prevFavorites, anime];
    });
  };

  const removeFavorite = (animeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== animeId)
    );
  };

  const isFavorite = (animeId) => {
    return favorites.some((favorite) => favorite.id === animeId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
