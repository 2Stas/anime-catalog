import AnimeCard from "./AnimeCard";
import "../style/AnimeListPage.css";

function AnimeList({ anime }) {
    if (!anime || anime.length === 0) {
        return <p className="no-anime">No anime found.</p>;
    }

    return (
        <div className="anime-list-page">
            {/* <h1 className="page-title">Anime Catalog</h1> */}
            {/* прибрав що б уникнути дублювання заголовку*/}

            <div className="anime-grid">
                {anime.map((item) => (
                    <AnimeCard
                        key={item.id}
                        anime={item}
                    />
                ))}
            </div>
        </div>
    );
}

export default AnimeList;