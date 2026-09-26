import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import AnimeList from '../components/AnimeList';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">My Favorite Anime</h1>
      
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>Your favorites list is empty ♡</h2>
          <p>Explore anime and add them to your favorites to see them here!</p>
        </div>
      ) : (
        <AnimeList animeList={favorites} />
      )}
    </div>
  );
};

export default FavoritesPage;