import { useEffect, useState } from "react";
import {
  getTopAnime,
  searchAnime
} from "../Api/kitsuApi";

import SearchBar from "../components/SearchBar";
import AnimeList from "../components/AnimeList";
import Loading from "../components/Loading";


function SearchPage() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAnime() {
      try {
        setLoading(true);
        setError(null);

        const data = await getTopAnime(1);

        setAnime(data.data.slice(0, 10));
      } catch (error) {
        console.log("Kitsu API error:", error.message);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadAnime();
  }, []);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      try {
        setLoading(true);
        setError(null);

        const data = await getTopAnime(1);

        setAnime(data.data.slice(0, 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await searchAnime(searchTerm);

      setAnime(data.slice(0, 10));
    } catch (error) {
      console.log("Search error:", error.message);

      setError(error.message);
      setAnime([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Search Anime</h1>

      <SearchBar onSearch={handleSearch} />

      <AnimeList anime={anime} />
    </div>
  );
}

export default SearchPage;
