import { useEffect, useState } from "react";
import { getTopAnime } from "../Api/jikanApi";

function useAnime() {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function loadAnime() {
            try {
                setLoading(true);
                setError(null);

                const data = getTopAnime();

                setAnime(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadAnime();
    }, []);

    return {
        anime,
        loading,
        error
    };
}

export default useAnime;