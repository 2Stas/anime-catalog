import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("anime_favorites");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("anime_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (anime) => {
    setFavorites((prevFavorites) => {
      const animeId = anime.mal_id || anime.id;

      if (
        prevFavorites.some(
          (favorite) => (favorite.mal_id || favorite.id) === animeId
        )
      ) {
        return prevFavorites;
      }

      return [...prevFavorites, anime];
    });
  };

  const removeFavorite = (animeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter(
        (favorite) => (favorite.mal_id || favorite.id) !== animeId
      )
    );
  };

  const isFavorite = (animeId) => {
    return favorites.some(
      (favorite) => (favorite.mal_id || favorite.id) === animeId
    );
  };

  const toggleFavorite = (anime) => {
    const animeId = anime.mal_id || anime.id;

    if (isFavorite(animeId)) {
      removeFavorite(animeId);
    } else {
      addFavorite(anime);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}