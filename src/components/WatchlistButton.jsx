import React from "react";
import { useWatchlist } from "../context/WatchlistContext";

import '../style/WatchlistButton.css';


export const WatchlistButton = ({ anime }) => {
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
    
    const isSaved = isInWatchlist(anime.id);

    const handleToggle = () => {
        if (isSaved) {
            removeFromWatchlist(anime.id);
        } else {
            addToWatchlist(anime);
        }
    };

    return (
        <button onClick={handleToggle} className={`watchlist-btn ${isSaved ? "saved" : ""}`}>
            {isSaved ? "📌 In Watchlist" : "➕ Add to Watchlist"}
        </button>
    );
};
