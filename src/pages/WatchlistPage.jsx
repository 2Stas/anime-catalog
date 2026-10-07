import React from "react";
import AnimeCard from "../components/AnimeCard";
import { useWatchlist } from "../context/WatchlistContext";
import "../style/WatchlistPage.css";
import "../style/AnimeListPage.css";

export const WatchlistPage = () => {
  const { watchlist } = useWatchlist();

  return (
    <div className="watchlist-page">
      <div className="container">
        <h1 className="page-title">My Watchlist 📺</h1>

        {watchlist.length === 0 ? (
          <p className="empty-message">
            Your watchlist is currently empty. Add some anime to watch later!
          </p>
        ) : (
          <div className="anime-grid">
            {watchlist.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchlistPage;
