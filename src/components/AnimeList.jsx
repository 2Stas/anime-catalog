import AnimeCard from "./AnimeCard";

function AnimeList({ anime }) {
  if (anime.length === 0) {
    return <p>No anime found.</p>;
  }

  return (
    <div>
      {anime.map((item) => (
        <AnimeCard key={item.mal_id} anime={item} />
      ))}
    </div>
  );
}

export default AnimeList;
