import { useMemo } from "react";

import { useFavorites } from "../context/FavoritesContext";
import { useWatchlist } from "../context/WatchlistContext";
import { useAnimeStatus } from "../context/AnimeStatusContext";

import StatisticsCard from "../components/StatisticsCard";

import "../style/StatisticsPage.css";

function StatisticsPage() {
    const { favorites } = useFavorites();
    const { watchlist } = useWatchlist();
    const { animeStatuses } = useAnimeStatus();

    const statistics = useMemo(() => {
        const statusEntries = Object.entries(animeStatuses);

        const countStatus = (status) => {
            return statusEntries.filter(
                ([, animeStatus]) => animeStatus === status
            ).length;
        };

        const trackedIds = new Set();

        favorites.forEach((anime) => {
            trackedIds.add(String(anime.id || anime.mal_id));
        });

        watchlist.forEach((anime) => {
            trackedIds.add(String(anime.id || anime.mal_id));
        });

        statusEntries.forEach(([animeId]) => {
            trackedIds.add(String(animeId));
        });

        return {
            favoriteCount: favorites.length,
            watchlistCount: watchlist.length,
            watchingCount: countStatus("Watching"),
            completedCount: countStatus("Completed"),
            planToWatchCount: countStatus("Plan to Watch"),
            droppedCount: countStatus("Dropped"),
            totalTracked: trackedIds.size
        };
    }, [favorites, watchlist, animeStatuses]);

    return (
        <div className="statistics-page">
            <h1>My Anime Statistics</h1>

            <p className="statistics-description">
                Overview of your anime activity.
            </p>

            <div className="statistics-grid">
                <StatisticsCard
                    title="Favorite Anime"
                    value={statistics.favoriteCount}
                />

                <StatisticsCard
                    title="Watchlist"
                    value={statistics.watchlistCount}
                />

                <StatisticsCard
                    title="Watching"
                    value={statistics.watchingCount}
                />

                <StatisticsCard
                    title="Completed"
                    value={statistics.completedCount}
                />

                <StatisticsCard
                    title="Plan to Watch"
                    value={statistics.planToWatchCount}
                />

                <StatisticsCard
                    title="Dropped"
                    value={statistics.droppedCount}
                />
            </div>

            <div className="statistics-total">
                <p>Total Tracked Anime</p>
                <h2>{statistics.totalTracked}</h2>
            </div>
        </div>
    );
}

export default StatisticsPage;