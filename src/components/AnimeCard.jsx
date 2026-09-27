import React from 'react';
import { Link } from 'react-router-dom';
// import './AnimeCard.css'; 

const AnimeCard = ({ anime }) => {
  const { mal_id, images, title, score, type, episodes } = anime;

  return (
    <div className="anime-card">
      <img  src={images?.jpg?.image_url}  alt={title}  className="anime-poster" />
      
      <div className="anime-info">
        <h3 className="anime-title">{title}</h3>
        
        <div className="anime-meta">
          <span className="anime-score">⭐ {score || 'N/A'}</span>
          <span className="anime-type">{type || 'Unknown'}</span>
          <span className="anime-episodes">Ep: {episodes || '?'}</span>
        </div>

        <Link to={`/anime/${mal_id}`} className="anime-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AnimeCard;


