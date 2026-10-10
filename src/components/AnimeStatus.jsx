import {
    ANIME_STATUSES,
    useAnimeStatus
} from "../context/AnimeStatusContext";

import "../style/AnimeStatus.css";

function AnimeStatus({ anime }) {
    const {
        getAnimeStatus,
        setAnimeStatus
    } = useAnimeStatus();

    const animeId = anime.id || anime.mal_id;
    const currentStatus = getAnimeStatus(animeId);

    function handleChange(event) {
        setAnimeStatus(animeId, event.target.value);
    }

    return (
        <div className="anime-status">
            <label htmlFor={`status-${animeId}`}>
                Watching status
            </label>

            <select
                id={`status-${animeId}`}
                value={currentStatus}
                onChange={handleChange}
            >
                <option value="">Not set</option>

                {ANIME_STATUSES.map((status) => (
                    <option key={status} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default AnimeStatus;