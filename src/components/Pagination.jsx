function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {
    return (
        <div className="pagination">
            {Array.from(
                { length: totalPages },
                (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            className={
                                currentPage === page
                                    ? "active"
                                    : ""
                            }
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    );
                }
            )}
        </div>
    );
}

export default Pagination;