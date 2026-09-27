import useAnime from "../hooks/useAnime";

function AnimeListPage() {
    const { anime, loading, error } = useAnime();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>Anime Catalog</h1>

            {anime.map((item) => (
                <div key={item.mal_id}>
                    <h2>{item.title}</h2>

                    <img
                        src={item.images.jpg.image_url}
                        alt={item.title}
                        width="200"
                    />

                    <p>Score: {item.score}</p>
                </div>
            ))}
        </div>
    );
}

export default AnimeListPage;