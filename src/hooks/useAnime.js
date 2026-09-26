import { useState } from "react";
import { searchAnime } from "../Api/jikanApi";

const useAnime = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async (query) => {
    if (!query.trim()) {
      setAnime([]);
      setError("");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await searchAnime(query);

      setAnime(results);
    } catch (err) {
      setAnime([]);
      setError("Failed to load anime. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    anime,
    loading,
    error,
    search,
  };
};

export default useAnime;