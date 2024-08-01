import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-2 px-4 py-2 rounded bg-primary disabled:bg-destructive"
      >
        &lt; Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`mx-2 px-4 py-2 rounded ${
            currentPage === index + 1 ? "bg-primary text-white" : "bg-gray-300"
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {currentPage}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-2 px-4 py-2 rounded bg-primary disabled:destructive"
      >
        Next &gt;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
