import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import FilterSorter from "./components/FilterSorter";
import Pagination from "./components/Pagination";
import MovieCard from "./components/MovieCard";

function App() {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedGenre, setSelectedGenre] =
        useState("All");

    const [sortOption, setSortOption] =
        useState("A → Z");

    const [currentPage, setCurrentPage] =
        useState(1);

    const moviesPerPage = 25;

    useEffect(() => {
        async function loadMovies() {      
            try{
                const res = await fetch(
                        `${import.meta.env.BASE_URL}movies.json`
                    );
                const data = await res.json();

                setMovies(data);
            } catch(error){
                console.error("Error fetching movies:", error);
            }
        }

        loadMovies();
    }, []);

    let filteredMovies = [...movies];

    // =========================
    // SEARCH BAR
    // =========================

    if (searchTerm.trim() !== "") {
        filteredMovies = filteredMovies.filter((movie) =>
            movie.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }

    // =========================
    // FILTER + SORT
    // =========================

    if (selectedGenre !== "All") {
        filteredMovies = filteredMovies.filter((movie) =>
            movie.genre.includes(selectedGenre)
        );
    }

    switch (sortOption) {
        case "A → Z":
            filteredMovies.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            break;

        case "Z → A":
            filteredMovies.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
            break;

        case "Rating High → Low":
            filteredMovies.sort((a, b) =>
                b.rating - a.rating
            );
            break;

        case "Rating Low → High":
            filteredMovies.sort((a, b) =>
                a.rating - b.rating
            );
            break;

        case "Year New → Old":
            filteredMovies.sort((a, b) =>
                b.year - a.year
            );
            break;

        case "Year Old → New":
            filteredMovies.sort((a, b) =>
                a.year - b.year
            );
            break;
    }

    // =========================
    // PAGINATION
    // =========================

    const totalPages = Math.ceil(
        filteredMovies.length / moviesPerPage
    );

    const startIndex =
        (currentPage - 1) * moviesPerPage;

    const currentMovies = filteredMovies.slice(
        startIndex,
        startIndex + moviesPerPage
    );

    return (
        <>
            <SearchBar onSearchChange = {setSearchTerm}/>

            <FilterSorter
                onGenreChange={(genre) => {
                    setSelectedGenre(genre);
                    setCurrentPage(1);
                }}
                onSortChange={(option) => {
                    setSortOption(option);
                    setCurrentPage(1);
                }}
            />

            <div className="user-cards">
                {currentMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    );
}

export default App;