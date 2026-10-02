import AnimeCard from "./AnimeCard";
import "../style/AnimeListPage.css";

function AnimeList({ animeList, anime }) {
    const items = animeList || anime || [];

    if (!items || items.length === 0) {
        return <p className="no-anime">No anime found.</p>;
    }

    return (
        <div className="anime-list-page">
            <div className="anime-grid">
                {items.map((item) => (
                    <AnimeCard
                        key={item.id}
                        anime={item}
                    />
                ))}
            </div>
        </div>
    );
}

export { AnimeList };
export default AnimeList;