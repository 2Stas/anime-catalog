import AnimeCard from "./AnimeCard";

function AnimeList({ anime }) {
    return (
        <div>
            {anime.map((item) => (
                <AnimeCard
                    key={item.mal_id}
                    anime={item}
                />
            ))}
        </div>
    );
}

export default AnimeList;