import { useParams } from "react-router-dom";
import useAnime from "../hooks/useAnime";

function AnimeDetailsPage() {
    const { id } = useParams();

    const {
        anime,
        loading,
        error
    } = useAnime(id);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    if (!anime) {
        return <h2>Anime not found</h2>;
    }

    const attributes = anime.attributes;

    const title =
        attributes.titles?.en ||
        attributes.titles?.en_jp ||
        attributes.titles?.ja_jp ||
        "Unknown";

    const image =
        attributes.posterImage?.large ||
        attributes.posterImage?.original;

    return (
        <div>
            <h1>{title}</h1>

            <img
                src={image}
                alt={title}
                width="300"
            />

            <p>
                <strong>English title:</strong>{" "}
                {attributes.titles?.en || "Not available"}
            </p>

            <p>
                <strong>Japanese title:</strong>{" "}
                {attributes.titles?.ja_jp || "Not available"}
            </p>

            <p>
                <strong>Synopsis:</strong>{" "}
                {attributes.synopsis || "No description available"}
            </p>

            <p>
                <strong>Score:</strong>{" "}
                {attributes.averageRating || "Not available"}
            </p>

            <p>
                <strong>Episodes:</strong>{" "}
                {attributes.episodeCount || "Not available"}
            </p>

            <p>
                <strong>Status:</strong>{" "}
                {attributes.status || "Not available"}
            </p>

            <p>
                <strong>Type:</strong>{" "}
                {attributes.showType || "Not available"}
            </p>

            <p>
                <strong>Start date:</strong>{" "}
                {attributes.startDate || "Not available"}
            </p>

            <p>
                <strong>End date:</strong>{" "}
                {attributes.endDate || "Not available"}
            </p>

            <p>
                <strong>Popularity:</strong>{" "}
                {attributes.popularityRank || "Not available"}
            </p>
        </div>
    );
}

export default AnimeDetailsPage;