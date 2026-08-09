function FilterSorter({ onGenreChange, onSortChange }) {
    const genres = [
        "All",
        "Action",
        "Animation",
        "Drama",
        "Sci-Fi",
        "Romance",
        "Crime",
        "Fantasy",
        "Biography",
        "Thriller",
    ];

    const sortOptions = [
        "A → Z",
        "Z → A",
        "Rating High → Low",
        "Rating Low → High",
        "Year New → Old",
        "Year Old → New",
    ];

    const handleGenreClick = (genre) => {
        onGenreChange(genre);
    };

    const handleSortClick = (option) => {
        onSortChange(option);
    };

    return (
        <div className="filter-sorter-wrapper">

            {/* GENRE */}
            <div className="filter">
                Genre

                <div className="dropdown-content">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => handleGenreClick(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>


            {/* SORT */}
            <div className="sorter">
                Sort

                <div className="dropdown-content">
                    {sortOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSortClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default FilterSorter;