function SearchBar({ onSearchChange }) {
    return (
        <div className="search-wrapper">
            <label htmlFor="search">Search Movies</label>
            <input type="search"
                placeholder="Search movies..."
                onChange={(e) => onSearchChange(e.target.value)} />
        </div>
    )
}

export default SearchBar;