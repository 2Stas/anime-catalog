import { useEffect, useState } from "react";

import {
    getGenres,
    getAnimeByGenre
} from "../Api/kitsuApi";

import GenreList from "../components/GenreList";
import AnimeList from "../components/AnimeList";
import Loading from "../components/Loading";

import "../style/GenresPage.css";

function GenresPage() {
    const [genres, setGenres] = useState([]);
    const [anime, setAnime] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadGenres() {
            try {
                setLoading(true);
                setError(null);

                const data = await getGenres();
                setGenres(data);
            } catch (error) {
                console.log("Genres error:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadGenres();
    }, []);

    async function loadAnime(genre, page) {
        try {
            setLoading(true);
            setError(null);

            const response = await getAnimeByGenre(genre, page);

            setAnime(response.data);
            setHasNextPage(Boolean(response.links?.next));
            setCurrentPage(page);
        } catch (error) {
            console.log("Genre anime error:", error.message);
            setError(error.message);
            setAnime([]);
            setHasNextPage(false);
        } finally {
            setLoading(false);
        }
    }

    function handleSelectGenre(genre) {
        setSelectedGenre(genre);
        setCurrentPage(1);
        setAnime([]);
        loadAnime(genre, 1);
    }

    function handlePreviousPage() {
        if (currentPage > 1 && !loading) {
            loadAnime(selectedGenre, currentPage - 1);
        }
    }

    function handleNextPage() {
        if (hasNextPage && !loading) {
            loadAnime(selectedGenre, currentPage + 1);
        }
    }

    if (loading && genres.length === 0) {
        return <Loading />;
    }

    if (error && genres.length === 0) {
        return (
            <div className="genres-page">
                <h2>Не вдалося завантажити жанри</h2>
                <p>{error}</p>
            </div>
        );
    }

    const selectedGenreName = genres.find(
        (genre) =>
            genre.attributes.name.toLowerCase() === selectedGenre
    )?.attributes.name;

    return (
        <div className="genres-page">
            <h1>Anime Genres</h1>

            <p className="genres-description">
                Choose a genre to discover anime you might like.
            </p>

            <GenreList
                genres={genres}
                selectedGenre={selectedGenre}
                onSelectGenre={handleSelectGenre}
            />

            {selectedGenre && (
                <div className="genre-results">
                    <h2>Genre: {selectedGenreName || selectedGenre}</h2>

                    {!loading && !error && (
                        <p className="anime-count">
                            Anime on this page: {anime.length}
                        </p>
                    )}
                </div>
            )}

            {loading && selectedGenre ? (
                <Loading />
            ) : error ? (
                <p className="genres-error">
                    Не вдалося завантажити аніме. Спробуй ще раз.
                </p>
            ) : selectedGenre && anime.length > 0 ? (
                <>
                    <AnimeList anime={anime} />

                    <div className="pagination">
                        <button
                            className="pagination-btn"
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1 || loading}
                        >
                            ← Попередня
                        </button>

                        <span className="pagination-page">
                            Сторінка {currentPage}
                        </span>

                        <button
                            className="pagination-btn"
                            onClick={handleNextPage}
                            disabled={!hasNextPage || loading}
                        >
                            Наступна →
                        </button>
                    </div>
                </>
            ) : selectedGenre ? (
                <p className="no-anime-message">
                    Аніме цього жанру не знайдено.
                    Спробуй вибрати інший жанр.
                </p>
            ) : (
                <p className="genre-placeholder">
                    Select a genre to see anime.
                </p>
            )}
        </div>
    );
}

export default GenresPage;