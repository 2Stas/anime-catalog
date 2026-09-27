import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import "../style/AnimeCard.css";

const AnimeCard = ({ anime }) => {
    const {
        id,
        attributes
    } = anime;

    const title =
        attributes.titles?.en ||
        attributes.titles?.en_jp ||
        attributes.titles?.ja_jp ||
        "Unknown";

    const image =
        attributes.posterImage?.small ||
        attributes.posterImage?.original;

    const score = attributes.averageRating;
    const type = attributes.showType;
    const episodes = attributes.episodeCount;

    return (
        <div className="anime-card">
            <div className="anime-poster-container">
                <img
                    src={image}
                    alt={title}
                    className="anime-poster"
                />

                <FavoriteButton anime={anime} />
            </div>

            <div className="anime-info">
                <h3 className="anime-title">
                    {title}
                </h3>

                <div className="anime-meta">
                    <span className="anime-score">
                        ⭐ {score || "N/A"}
                    </span>

                    <span className="anime-type">
                        {type || "Unknown"}
                    </span>

                    <span className="anime-episodes">
                        Ep: {episodes || "?"}
                    </span>
                </div>

                <Link
                    to={`/anime/${id}`}
                    className="anime-details-btn"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default AnimeCard;