import { useEffect, useState } from "react";
import { getTopAnime, getAnimeById } from "../Api/jikanApi";

function useAnime(id) {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadAnime() {
            try {
                setLoading(true);
                setError(null);

                let data;

                if (id) {
                    data = await getAnimeById(id);
                } else {
                    data = await getTopAnime();
                }

                setAnime(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadAnime();
    }, [id]);

    return {
        anime,
        loading,
        error
    };
}

export default useAnime;