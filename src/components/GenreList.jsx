function GenreList({ genres, selectedGenre, onSelectGenre }) {
    return (
        <div className="genre-list">
            {genres.map((genre) => {
                const genreName = genre.attributes.name.toLowerCase();

                return (
                    <button
                        key={genre.id}
                        className={
                            selectedGenre === genreName
                                ? "genre-btn active"
                                : "genre-btn"
                        }
                        onClick={() => onSelectGenre(genreName)}
                    >
                        {genre.attributes.name}
                    </button>
                );
            })}
        </div>
    );
}

export default GenreList;