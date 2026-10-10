import { createContext, useContext, useState } from "react";

const AnimeStatusContext = createContext();

const STORAGE_KEY = "anime_statuses";

export const ANIME_STATUSES = [
    "Watching",
    "Completed",
    "Plan to Watch",
    "Dropped"
];

function getSavedStatuses() {
    try {
        const savedStatuses = localStorage.getItem(STORAGE_KEY);
        return savedStatuses ? JSON.parse(savedStatuses) : {};
    } catch (error) {
        console.error("Could not load anime statuses:", error);
        return {};
    }
}

export function AnimeStatusProvider({ children }) {
    const [animeStatuses, setAnimeStatuses] = useState(getSavedStatuses);

    function setAnimeStatus(animeId, status) {
        setAnimeStatuses((previousStatuses) => {
            const updatedStatuses = { ...previousStatuses };

            if (status) {
                updatedStatuses[animeId] = status;
            } else {
                delete updatedStatuses[animeId];
            }

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedStatuses)
            );

            return updatedStatuses;
        });
    }

    function getAnimeStatus(animeId) {
        return animeStatuses[animeId] || "";
    }

    function removeAnimeStatus(animeId) {
        setAnimeStatus(animeId, "");
    }

    return (
        <AnimeStatusContext.Provider
            value={{
                animeStatuses,
                setAnimeStatus,
                getAnimeStatus,
                removeAnimeStatus
            }}
        >
            {children}
        </AnimeStatusContext.Provider>
    );
}

export function useAnimeStatus() {
    return useContext(AnimeStatusContext);
}