import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import '../style/FavoriteButton.css';

const FavoriteButton = ({ anime }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  
  if (!anime) return null;
  const animeId = anime.mal_id || anime.id;
  const active = isFavorite(animeId);

  const handleClick = (e) => {
    e.stopPropagation(); 
    toggleFavorite(anime);
  };

  return (
    <button 
      className={`favorite-btn ${active ? 'active' : ''}`} 
      onClick={handleClick}
      title={active ? 'Remove from favorites' : 'Add to favorites'}
    >
      {active ? '♥' : '♡'}
    </button>
  );
};

export default FavoriteButton;