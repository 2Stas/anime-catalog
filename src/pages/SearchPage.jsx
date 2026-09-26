import SearchBar from "../components/SearchBar";
import AnimeList from "../components/AnimeList";
import useAnime from "../hooks/useAnime";

function SearchPage() {
  const { anime, loading, error, search } = useAnime();

  return (
    <main>
      <h1>Search Anime</h1>

      <SearchBar onSearch={search} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && anime.length === 0 && (
        <p>Search for an anime to see results.</p>
      )}

      {!loading && !error && anime.length > 0 && (
        <AnimeList anime={anime} />
      )}
    </main>
  );
}

export default SearchPage;