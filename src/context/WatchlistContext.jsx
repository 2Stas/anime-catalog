import React, { createContext, useContext, useState, useEffect } from "react";
const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem("anime_watchlist");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("anime_watchlist", JSON.stringify(watchlist));
    }, [watchlist]);


    
    const addToWatchlist = (anime) => {
        setWatchlist((prev) => {
            if (prev.some((item) => item.id === anime.id)) return prev;
            return [...prev, anime];
        });
    };


    const removeFromWatchlist = (id) => {
        setWatchlist((prev) => prev.filter((item) => item.id !== id));
    };


    const isInWatchlist = (id) => {
        return watchlist.some((item) => item.id === id);
    };


    return (
        <WatchlistContext.Provider
            value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
        >
            {children}
        </WatchlistContext.Provider>
    );
};

export const useWatchlist = () => useContext(WatchlistContext);


