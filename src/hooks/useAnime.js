
import { useEffect, useState } from "react";
import { getTopAnime, getAnimeById } from "../Api/jikanApi";

function useAnime(id) {
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const search = async (query) => {
    if (!query.trim()) {
      setAnime([]);
      setError("");
      return;
    }
  
    useEffect(() => {
        function loadAnime() {
            try {
                setLoading(true);
                setError(null);
              
                const results = searchAnime(query);
                setAnime(results);
              
                let data;

                if (id) {
                    data = getAnimeById(id);
                } else {
                    data = getTopAnime();
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
        error,
        search
    };
}

export default useAnime;