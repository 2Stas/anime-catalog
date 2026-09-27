import { useParams } from "react-router-dom";
import useAnime from "../hooks/useAnime";

function AnimeDetailsPage() {
    const { id } = useParams();

    const { anime, loading, error } = useAnime(id);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>{anime.title}</h1>

            <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                width="300"
            />

            <p>
                <strong>English title:</strong>{" "}
                {anime.title_english || "Not available"}
            </p>

            <p>
                <strong>Japanese title:</strong>{" "}
                {anime.title_japanese || "Not available"}
            </p>

            <p>
                <strong>Synopsis:</strong>{" "}
                {anime.synopsis || "No description available"}
            </p>

            <p>
                <strong>Score:</strong>{" "}
                {anime.score || "Not available"}
            </p>

            <p>
                <strong>Genres:</strong>{" "}
                {anime.genres.map((genre) => genre.name).join(", ")}
            </p>

            <p>
                <strong>Studio:</strong>{" "}
                {anime.studios.length > 0
                    ? anime.studios.map((studio) => studio.name).join(", ")
                    : "Not available"}
            </p>

            <p>
                <strong>Episodes:</strong>{" "}
                {anime.episodes || "Not available"}
            </p>

            <p>
                <strong>Status:</strong> {anime.status}
            </p>

            <p>
                <strong>Type:</strong> {anime.type}
            </p>
        </div>
    );
}

export default AnimeDetailsPage;