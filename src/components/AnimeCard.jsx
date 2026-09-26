import { Link } from "react-router-dom";

function AnimeCard({ anime }) {
  return (
    <div>
      <img
        src={anime.images?.jpg?.image_url}
        alt={anime.title}
        width="200"
      />

      <h3>{anime.title}</h3>

      <p>
        {anime.type || "Unknown"} • {anime.episodes || "?"} episodes
      </p>

      <Link to={`/anime/${anime.mal_id}`}>
        View details
      </Link>
    </div>
  );
}

export default AnimeCard;