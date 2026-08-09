function MovieCard({ movie }) {
    return (
        <div className="card">
            <div className="header">
                <img src={movie.poster} alt={movie.title} />
            </div>

            <div className="body">
                <p>{movie.title}</p>
                <p>{movie.genre}</p>
                <p>{movie.year}</p>
                <p>{movie.rating}</p>
            </div>
        </div>
    )
}

export default MovieCard;