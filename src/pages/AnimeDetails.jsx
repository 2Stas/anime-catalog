import { useParams, useNavigate } from "react-router-dom";
import useAnime from "../hooks/useAnime";
import Loading from "../components/Loading";
import "../style/AnimeDetailsPage.css";

function AnimeDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { anime, loading, error } = useAnime(id);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <div className="error-container">
                <h2>Error: {error}</h2>
                <button onClick={() => navigate(-1)} className="back-btn">
                    &larr; Back
                </button>
            </div>
        );
    }

    if (!anime) {
        return (
            <div className="error-container">
                <h2>Anime not found</h2>
                <button onClick={() => navigate(-1)} className="back-btn">
                    &larr; Back
                </button>
            </div>
        );
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
        <div className="anime-details-page">
            <button onClick={() => navigate(-1)} className="back-btn">
                &larr; Back to Catalog
            </button>

            <div className="details-card">
                <div className="details-poster-wrapper">
                    <img src={image} alt={title} className="details-poster" />
                </div>

                <div className="details-info">
                    <h1 className="details-title">{title}</h1>

                    <div className="details-section">
                        <h3>Synopsis</h3>
                        <p className="synopsis-text">
                            {attributes.synopsis || "No description available."}
                        </p>
                    </div>

                    <div className="details-grid">
                        <div className="meta-item">
                            <span className="meta-label">English Title</span>
                            <span className="meta-value">
                                {attributes.titles?.en || "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">Japanese Title</span>
                            <span className="meta-value">
                                {attributes.titles?.ja_jp || "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">Score</span>
                            <span className="meta-value highlight">
                                {attributes.averageRating ? `★ ${attributes.averageRating}%` : "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">Episodes</span>
                            <span className="meta-value">
                                {attributes.episodeCount || "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">Status</span>
                            <span className="meta-value badge">
                                {attributes.status || "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">Type</span>
                            <span className="meta-value">
                                {attributes.showType || "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">Start Date</span>
                            <span className="meta-value">
                                {attributes.startDate || "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">End Date</span>
                            <span className="meta-value">
                                {attributes.endDate || "N/A"}
                            </span>
                        </div>

                        <div className="meta-item">
                            <span className="meta-label">Popularity Rank</span>
                            <span className="meta-value">
                                {attributes.popularityRank ? `#${attributes.popularityRank}` : "N/A"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimeDetailsPage;