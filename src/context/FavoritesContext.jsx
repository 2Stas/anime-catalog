import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('anime_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('anime_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (animeId) => {
    return favorites.some((item) => item.mal_id === animeId || item.id === animeId);
  };

  const toggleFavorite = (anime) => {
    const id = anime.mal_id || anime.id;
    if (isFavorite(id)) {
      setFavorites((prev) => prev.filter((item) => (item.mal_id || item.id) !== id));
    } else {
      setFavorites((prev) => [...prev, anime]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);