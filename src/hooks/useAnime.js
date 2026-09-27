import { useEffect, useState } from "react";
import {
    getTopAnime,
    getAnimeById
} from "../Api/kitsuApi";

function useAnime(id, page = 1) {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState(null);

    useEffect(() => {
        async function loadAnime() {
            try {
                setLoading(true);
                setError(null);

                if (id) {
                    const data = await getAnimeById(id);

                    setAnime(data);
                    setPagination(null);
                } else {
                    const data = await getTopAnime(page);

                    setAnime(data.data);

                    setPagination({
                        has_next_page: data.links?.next !== null
                    });
                }
            } catch (error) {
                console.log("Kitsu API error:", error.message);

                setError(error.message);
                setAnime([]);
                setPagination(null);
            } finally {
                setLoading(false);
            }
        }

        loadAnime();
    }, [id, page]);

    return {
        anime,
        loading,
        error,
        pagination
    };
}

export default useAnime;