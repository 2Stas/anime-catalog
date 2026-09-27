import { useState } from "react";
import useAnime from "../hooks/useAnime";
import AnimeList from "../components/AnimeList";
import Loading from "../components/Loading";

function AnimeListPage() {
    const [currentPage, setCurrentPage] = useState(1);

    const {
        anime,
        loading,
        error,
        pagination
    } = useAnime(null, currentPage);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>Anime Catalog</h1>

            <AnimeList anime={anime} />

            <div>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span>
                    Page {currentPage}
                </span>

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={!pagination || !pagination.has_next_page}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default AnimeListPage;