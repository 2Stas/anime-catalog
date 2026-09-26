import { useEffect, useState } from "react";
import { getTopAnime, getAnimeById } from "../Api/jikanApi";
import animeData from "../data/animeData";

function useAnime(id) {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function loadAnime() {
            try {
                setLoading(true);
                setError(null);

                let data;

                if (id) {
                    data = getAnimeById(id);
                } else {
                    data = getTopAnime();
                }

                setAnime(data);
            } catch (error) {
                console.log("Jikan API error:", error.message);

                if (id) {
                    const localAnime = animeData.find(
                        (item) => item.mal_id === Number(id)
                    );

                    if (localAnime) {
                        setAnime(localAnime);
                    } else {
                        setError("Anime not found");
                    }
                } else {
                    setAnime(animeData);
                }
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